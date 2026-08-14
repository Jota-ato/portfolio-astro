// /src/scripts/typewriter.ts

/**
 * Configuration options for the typewriter effect.
 */
interface TypewriterOptions {
  /** The ID of the target HTML element. */
  elementId: string;
  /** The text to type out. */
  word: string;
  /** Delay in milliseconds before the animation starts. Defaults to 0. */
  delay?: number;
  /** Typing speed in milliseconds per character. Defaults to 80. */
  speed?: number;
  /** Whether to clear existing text before typing. Defaults to true. */
  clearBeforeType?: boolean;
  /** Whether to trigger the animation only when the element is visible in the viewport. Defaults to false. */
  observe?: boolean;
  /** Visibility ratio (0–1) required to trigger the animation when observing. Defaults to 0. */
  threshold?: number;
  /** Margin around the root for the IntersectionObserver. Defaults to "0px". */
  rootMargin?: string;
}

/**
 * Controls returned by the typewriter initialization.
 */
interface TypewriterControls {
  /** Manually starts the typewriter animation. */
  start: () => void;
  /** Cancels any pending timeouts, disconnects the observer, and stops the animation. */
  cleanup: () => void;
}

/**
 * Initializes a typewriter effect on a DOM element.
 *
 * When `observe` is enabled, the animation starts automatically as soon as the
 * element enters the viewport. The observer disconnects after the first trigger
 * so the animation runs only once.
 *
 * @param options - Configuration object for the typewriter.
 * @returns An object with `start` and `cleanup` methods. If the element is not found,
 *          both methods are no-ops.
 *
 * @example
 * ```ts
 * // Manual trigger
 * const tw = initTypewriter({
 *   elementId: 'hero-title',
 *   word: 'Julio Zavala — Full Stack Developer',
 *   delay: 500,
 *   speed: 60,
 * });
 * tw.start();
 *
 * // Auto-trigger on visibility
 * const tw2 = initTypewriter({
 *   elementId: 'about-title',
 *   word: 'About me',
 *   observe: true,
 *   threshold: 0.3,
 *   rootMargin: '0px 0px -100px 0px',
 * });
 * // No need to call start(); cleanup on unmount:
 * // tw2.cleanup();
 * ```
 */
export function initTypewriter(options: TypewriterOptions): TypewriterControls {
  const {
    elementId,
    word,
    delay = 0,
    speed = 80,
    clearBeforeType = true,
    observe = false,
    threshold = 0,
    rootMargin = "0px",
  } = options;

  const element = document.getElementById(elementId);

  if (!element) {
    console.warn(`Typewriter: No element found with id "${elementId}"`);
    return {
      start: () => {},
      cleanup: () => {},
    };
  }

  let currentIndex = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let isComplete = false;
  let hasStarted = false;
  let observer: IntersectionObserver | null = null;

  const type: () => void = () => {
    if (isComplete) return;

    element.textContent = word.substring(0, currentIndex + 1) + "|";
    currentIndex++;

    if (currentIndex === word.length) {
      isComplete = true;
      element.textContent = word; // Remove the cursor after completion
      return;
    }

    timeoutId = setTimeout(type, speed);
  }

  const start: () => void = () => {
    if (hasStarted || isComplete) return;
    hasStarted = true;

    if (clearBeforeType) {
      element.textContent = "";
    }

    if (delay > 0) {
      timeoutId = setTimeout(() => {
        type();
      }, delay);
    } else {
      type();
    }
  };

  const cleanup = (): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  };

  if (observe) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            observer?.disconnect();
          }
        });
      },
      { threshold, rootMargin },
    );
    observer.observe(element);
  }

  return { start, cleanup };
}
