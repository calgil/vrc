import s from "../styles/pages/MemberHospital.module.scss";
import { Hero } from "@/components/Hero";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Input, SubmitBtn, TextArea } from "@/types/input.type";
import { Form } from "@/components/Form";
import { useState } from "react";

export default function MemberHospital() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [zipInput, setZipInput] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const inputs: Input[] = [
    {
      name: "Name",
      placeholder: "Full Name*",
      type: "text",
      required: true,
      value: nameInput,
      onChange: (e) => setNameInput(e.target.value),
    },
    {
      name: "Email",
      placeholder: "Email*",
      type: "email",
      required: true,
      value: emailInput,
      onChange: (e) => setEmailInput(e.target.value),
    },
    {
      name: "Phone",
      placeholder: "Phone*",
      type: "phone",
      required: true,
      value: phoneInput,
      onChange: (e) => setPhoneInput(e.target.value),
    },
    {
      name: "Zip",
      placeholder: "Zip",
      type: "number",
      value: zipInput,
      onChange: (e) => setZipInput(e.target.value),
    },
    {
      name: "Hospital",
      placeholder: "Hospital Name*",
      type: "text",
      required: true,
      value: hospitalName,
      onChange: (e) => setHospitalName(e.target.value),
    },
  ];

  const textArea: TextArea = {
    name: "Message",
    placeholder: "Message",
    onChange: (e) => setMessage(e.target.value),
    value: message,
  };

  const submitBtn: SubmitBtn = {
    value: "Send",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!nameInput || !emailInput || !phoneInput || !hospitalName) {
      console.log("no data");
      return;
    }

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    formData.append("Message", message);

    fetch(
      "https://script.google.com/macros/s/AKfycbyre4LRv3WWHIWk8_L_2qyrQ2V6FN0NyVpSPr_IQAPBlUGaAWGm2fb2RWX4flX3CsTm9A/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        if (!res.ok) {
          return setError(true);
        }
        setNameInput("");
        setEmailInput("");
        setPhoneInput("");
        setZipInput("");
        setHospitalName("");
        setMessage("");
        setIsLoading(false);
        setSuccess(true);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
  };
  return (
    <>
      <Head>
        <title>
          Member Hospital | North Springs Veterinary Referral Center
        </title>
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
          bgUrl="/pages/owners/ownersBanner.webp"
          heading="Member Hospital"
        />
        <div className={s.container}>
          <div className={s.textContainer}>
            <h3 className={s.title}>How it Works</h3>
            <h5 className={s.info}>
              We are excited to partner with local veterinarians to bring top
              quality care to their patients, as well as provide educational
              resources to their teams!
            </h5>
            <h5 className={s.info}>
              When we treat patients who do not have primary care DVMs (pcDVM),
              we will recommend providers in our Member Hospital Network (MHN).
            </h5>
            <h5 className={s.info}>
              In order to join, North Springs Veterinary Referral Center must be
              the primary emergency and specialty hospital you advertise online,
              in-print, over the phone, and in-person.
            </h5>
            <a
              className={s.formLink}
              href="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCaF0JkXSB_SsGMC7zcs-PKImhOkWRfGihXzYM6XznT3sHepY_SO9l69N6vjDS1E9Q*"
              target="_blank"
              rel="noopener noreferrer"
            >
              join our Member Hospital Network
            </a>
          </div>
        </div>
        <div className={s.container}>
          <div className={s.join}>
            <div className={s.joinText}>
              <div className={s.benefits}>
                <h3 className={s.joinTitle}>Benefits for Providers</h3>
                <ul className={s.joinList}>
                  <li>
                    We will recommend your hospital for clients that do not have
                    a primary care DVM
                  </li>
                  <li>
                    Direct contact with our hospital administration regarding
                    cases and other needs
                  </li>
                  <li>
                    Continuing education/lunch and learn opportunities from our
                    specialists
                  </li>
                  <li>eNewsletter with hospital updates and information</li>
                  <li>
                    Opportunity to be featured and advertised as our Member
                    Hospital of the Month
                  </li>
                  <li>Gifts and social events for your hospital</li>
                  <li>
                    Pricing guides for appropriate estimates and easy transfers
                  </li>
                  <li>
                    Open communication between the Member Hospital Liaison at
                    North Springs VRC and your primary contact regarding
                    marketing materials, building relationships between our
                    hospitals, and the needs of the owners
                  </li>
                </ul>
              </div>
              <h3 className={s.joinTitle}>Benefits for Clients</h3>
              <ul className={s.joinList}>
                <li>Discount on the initial emergency examination</li>
                <li>Discount and package pricing on certain treatments</li>
              </ul>
            </div>
            <Form
              inputs={inputs}
              onSubmit={handleSubmit}
              textarea={textArea}
              submitBtn={submitBtn}
              success={success}
              error={error}
              loading={isLoading}
            >
              <h4 className={s.formTitle}>
                Request Information about the Member Hospital Network
              </h4>
              <p className={s.formDetails}>
                While North Springs VRC will accept any patient to provide
                emergency and specialty care, we also partner with local
                veterinarians to offer unique benefits to their clients and
                staff.
              </p>
              <p className={s.formDetails}>
                Fill out our contact form to learn more about how to join our
                Network and the benefits that Member Hospitals can receive, or
                email our team
                <br />
                <a
                  className={s.emailLink}
                  href="mailto:memberhospital@northspringsvrc.com"
                >
                  here.
                </a>
              </p>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
}
