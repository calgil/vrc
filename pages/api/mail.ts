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
  const { fullName, email, phone, zip, hospitalName, message }: NewEmail =
    req.body;

  if (!message || !fullName || !message) {
    return res
      .status(400)
      .json({ message: "Please fill out the necessary fields" });
  }

  if (!process.env.POSTMARK_API_KEY) {
    return;
  }

  const data = {
    From: "memberhospital@northspringsvrc.com",
    To: "memberhospital@northspringsvrc.com",
    Subject: `${hospitalName} would like to join your member hospital network`,
    TextBody: "Hello",
    HtmlBody: `<html><body><div>New message from ${fullName}</div>
      <div>${message}</div>
      <div>Hospital Name: ${hospitalName}</div>
      <div>Email: ${email}</div>
      <div>Phone: ${phone}</div>
      <div>Zip: ${zip}</div>
      </body></html>`,
    MessageStream: "outbound",
  };

  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Postmark-Server-Token": process.env.POSTMARK_API_KEY,
  };

  fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
