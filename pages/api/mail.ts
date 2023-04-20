import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

export type NewEmail = {
  fullName: string;
  email: string;
  phone: number;
  zip: number;
  hospitalName: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fullName, email, phone, zip, hospitalName, message }: NewEmail =
    req.body;

  if (!message || !fullName || !message) {
    return res
      .status(400)
      .json({ message: "Please fill out the necessary fields" });
  }

  if (!process.env.SENDGRID_API_KEY) {
    return;
  }
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.SMTP_EMAIL,
    from: "memberhospital@northspringsvrc.com",
    subject: `${hospitalName} would like to join your member hospital network`,
    html: `<html><body>
            <div>New message from ${fullName}</div>
            <div>${message}</div>
            <div>Hospital Name: ${hospitalName}</div>
            <div>Email: ${email}</div>
            <div>Phone: ${phone}</div>
            <div>Zip: ${zip}</div>
            </body></html>`,
  };

  try {
    await sendgrid.send(msg);
    return res.status(200).json({ error: "" });
  } catch (error) {
    console.error("catch", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
