// const nodemailer = require("nodemailer");
import nodemailer, { Transporter } from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

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
  const transporter: Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL_MEMBER_EMAIL,
      pass: process.env.SMTP_PASS_MEMBER_HOSPITAL,
    },
  });

  const { fullName, email, phone, zip, hospitalName, message }: NewEmail =
    req.body;

  console.log({ fullName, email, phone, zip, hospitalName, message });

  if (!message || !fullName || !message) {
    return res
      .status(400)
      .json({ message: "Please fill out the necessary fields" });
  }

  const mailOptions = {
    from: email,
    to: process.env.SMTP_EMAIL_MEMBER_EMAIL,
    subject: `Message from ${fullName}`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>Hospital Name: ${hospitalName}</div><div>${message}</div><div>Phone: ${phone} <br /> Email: ${email} <br /> Zip: ${zip}</div>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err: Error | null, info) => {
      if (err) {
        reject(err);
        return res
          .status(500)
          .json({ error: err.message || "Something went wrong" });
      } else {
        resolve(info.accepted);
        res.status(200).json({ message: "Message sent!" });
      }
    });
  });

  return;
}
