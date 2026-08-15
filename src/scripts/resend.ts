import { Resend } from "resend";

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
    html: `<strong>From: ${name}</strong><br><strong>Email: ${email}</strong><br><strong>Message: ${message}</strong>`,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}
