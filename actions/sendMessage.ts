"use server";

import { sendEmail } from "../lib/helpers/sendMessageHelper";

export async function sendMessage(formData: FormData) {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!email || !message) {
    throw new Error("Missing fields");
  }

  await sendEmail({ name, email, message });
}
