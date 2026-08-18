import Palette from "@/components/icons/collor-palette.astro";
import Money from "@/components/icons/money.astro";
import Zap from "@/components/icons/zap.astro";
import Globe from "@/components/icons/globe.astro";

interface NavElement {
  name: string;
  href: string;
}

export const NAV_ELEMENTS: NavElement[] = [
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "About",
    href: "#me",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const perks = [
  {
    icon: Palette,
    title: "Design That Converts",
    description:
      "Clean interfaces built to turn visitors into customers. Every pixel is intentional, not decorative.",
  },
  {
    icon: Globe,
    title: "Real-Time Collaboration",
    description:
      "I work in your time zone. Daily standups, instant feedback, and iteration cycles without waiting for the next business day.",
  },
  {
    icon: Zap,
    title: "Ship in Weeks, Not Quarters",
    description:
      "Lean process, zero bureaucracy. Your MVP goes live fast so you can validate with real users before your competition moves.",
  },
  {
    icon: Money,
    title: "Premium Quality, Smarter Investment",
    description:
      "Senior-level delivery without the San Francisco agency price tag. Same technical standard, optimized for your budget.",
  },
];