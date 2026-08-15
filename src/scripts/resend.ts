import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendEmail() {
  const { data, error } = await resend.emails.send({
    from: "contactform <juliozavala@julio-zavala.me>",
    to: ["juliozavala@julio-zavala.me"],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}
