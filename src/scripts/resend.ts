import { Resend } from "resend";
import { generateEmailTemplate } from "./generate-email-template";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const { data, error } = await resend.emails.send({
    from: "contactform <juliozavala@mail.julio-zavala.me>",
    to: ["juliozavala@julio-zavala.me"],
    subject: "New contact submission from your website!",
    html: generateEmailTemplate({ name, email, message }),
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}
