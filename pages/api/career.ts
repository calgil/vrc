import type { NextApiRequest, NextApiResponse } from "next";
import sendgrid from "@sendgrid/mail";

export type NewEmail = {
  fullName: string;
  email: string;
  phone: number;
  position: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fullName, email, phone, position, message }: NewEmail = req.body;

  // //   console.log({ fullName, email, phone, position, message });
  console.log({ fullName, email, phone, position, message });

  if (!message || !fullName || !email) {
    return res
      .status(400)
      .json({ message: "Please fill out the necessary fields" });
  }

  if (!process.env.SENDGRID_API_KEY) {
    return;
  }
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  // if (!req.body.file) {
  //   return console.log("no file");
  // }
  // const { file } = req.body;

  // const attachment = {
  //   content: file.buffer.toString("base64"),
  //   filename: file.originalname,
  //   type: file.mimetype,
  //   disposition: "attachment",
  // };

  const msg = {
    to: process.env.SMTP_EMAIL,
    from: "memberhospital@northspringsvrc.com",
    subject: `${fullName} would like to join your team`,
    html: `<html><body>
            <div>New message from ${fullName}</div>
            <div>${message}</div>
            <div>Position: ${position}</div>
            <div>Email: ${email}</div>
            <div>Phone: ${phone}</div>
            </body></html>`,
    // attachments: [attachment],
  };

  try {
    await sendgrid.send(msg);
    return res.status(200).json({ error: "" });
  } catch (error) {
    console.error("catch", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
