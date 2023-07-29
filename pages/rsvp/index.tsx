import s from "../../styles/pages/RSVP.module.scss";
import { Form } from "@/components/Form";
import { Hero } from "@/components/Hero";
import { Input, SubmitBtn } from "@/types/input.type";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

export default function RSVP() {
  const router = useRouter();
  const [nameInput, setNameInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

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
      name: "Company",
      placeholder: "Company (Optional)",
      type: "text",
      required: false,
      value: companyInput,
      onChange: (e) => setCompanyInput(e.target.value),
    },
  ];

  const submitBtn: SubmitBtn = {
    value: "Submit",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    if (!nameInput || !emailInput) {
      console.log("more stuff");
    }

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    fetch(
      "https://script.google.com/macros/s/AKfycbzLQARhvkBGTKYExHbd4EIsE9w43-zRdAyqWqnEIAiCy-nAKFsGNN01pGyGCH0d74DR/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        console.log({ res });

        if (!res.ok) {
          setIsLoading(false);
          return setError(true);
        }
        setNameInput("");
        setCompanyInput("");
        setEmailInput("");
        setIsLoading(false);
        setSuccess(true);
        router.push("/rsvp/confirmation");
      })
      .catch((err) => {
        setError(true);
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>RSVP | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <meta
          name="google-site-verification"
          content="JakQhQMci5HCnG0Wlu4LuQErYRxWQlOINZ1YxlCp4eY"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          homepage={true}
          bgUrl="/pages/home/homeBanner.webp"
          subHeading="Transforming the veterinary experience through 
          empathy and transparency"
        />
        <div className={s.formContainer}>
          <Form
            inputs={inputs}
            onSubmit={handleSubmit}
            submitBtn={submitBtn}
            success={success}
            error={error}
            loading={isLoading}
          >
            <h1 className={s.formTitle}>RSVP for our Open House</h1>
            <p className={s.formDetails}>
              Meet our staff, tour our facility, and get to know us! Join us for
              fun, raffles, and prizes!
            </p>
            <p className={s.formDetails}>12pm-6pm September 9th, 2023</p>
          </Form>
        </div>
      </main>
    </>
  );
}
