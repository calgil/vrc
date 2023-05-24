import s from "../styles/pages/Careers.module.scss";
import { Hero } from "@/components/Hero";
import Head from "next/head";
import Link from "next/link";
import { Input, SubmitBtn, TextArea } from "@/types/input.type";
import { ChangeEvent, useState } from "react";

export default function Careers() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const handleResumeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setResume(file);
    } else {
      setResume(null);
    }
  };

  const handleSendApplication = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nameInput || !emailInput || !phoneInput || !position || !message) {
      // return console.log("please fill out all fields");
    }

    // if (!resume) {
    //   return console.log("no resume");
    // }

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: nameInput,
          email: emailInput,
          phone: phoneInput,
          position: position,
          message: message,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // console.log("sent successfully");
    } catch (error) {
      console.error(error);
    }

    console.log({
      nameInput,
      emailInput,
      phoneInput,
      position,
      message,
      resume,
    });
  };
  return (
    <>
      <Head>
        <title>Careers | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          homepage={false}
          heading="Careers"
          imageURL="/member-network-banner.jpeg"
        />
        <div className={s.container}>
          <div className={s.careers}>
            <div className={s.careersText}>
              <h3 className={s.title}>People Make the Difference</h3>
              <p className={s.details}>
                Join a company that is passionate about veterinary medicine,
                promotes a healthy work/life balance, and provides opportunities
                for growth.
              </p>
              <p className={s.details}>
                We are looking for Emergency Veterinarians, Client Service
                Representatives, Technicians, Assistants, and Specialists!
              </p>
              <p className={s.details}>
                To learn more and apply to our open positions, email your resume
                to
                <Link
                  className={s.link}
                  href="mailto:careers@northspringsvrc.com"
                >
                  careers@northspringsvrc.com.
                </Link>
              </p>
            </div>
            <div className={s.careersForm}></div>
          </div>
        </div>
      </main>
    </>
  );
}
