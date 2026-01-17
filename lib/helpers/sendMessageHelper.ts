import nodemailer from "nodemailer";

export async function sendEmail({
  name,
  email,
  message,
}: {
  name?: string | null;
  email: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
      <h2 style="color: #111; text-align: center;">📨 New Message from Portfolio</h2>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

      <p><strong>Name:</strong> ${name || "Anonymous"}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
      <p><strong>Message:</strong></p>
      <div style="padding: 10px 15px; background-color: #fff; border-left: 4px solid #1a73e8; border-radius: 5px; margin-top: 5px;">
        ${message.replace(/\n/g, "<br>")}
      </div>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      <p style="font-size: 12px; color: #555; text-align: center;">
        This message was sent from your portfolio contact form.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: "New Portfolio Message 🚀",
    html: htmlContent,
  });
}
