import s from "../styles/components/NewsletterForm.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { isEmailValid } from "@/utils/isEmailValid";

let cx = classNames.bind(s);

export type FormData = {
  name: string;
  email: string;
};

export const NewsletterForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  let newsletterClass = cx({
    newsletter: true,
  });

  let formClass = cx({
    formContainer: true,
  });

  let nameInputClass = cx({
    input: true,
    // error: nameError,
  });

  let emailInputClass = cx({
    input: true,
    // error: emailError,
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `${process.env.CONVERTKIT_BASE_URL}/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          api_key: `${process.env.CONVERTKIT_API_KEY}`,
          email: email,
          first_name: name,
        }),
      }
    )
      .then((response) => response.json())
      .catch((error) => console.error(error));
    setName("");
    setEmail("");
  };
  return (
    <div className={newsletterClass}>
      <h4 className={s.newsletterTitle}>
        Sign up for the North Springs VRC Newsletter!
      </h4>
      <p className={s.description}>
        Stay up to date and receive the the latest information and news about
        our Grand Opening, added services, specialties, new hires, events and
        more!
      </p>
      <form className={formClass} onSubmit={handleSubmit}>
        <div className={s.inputContainer}>
          <input
            className={nameInputClass}
            name="name"
            type="text"
            value={name}
            placeholder="Your Name"
            onChange={handleNameChange}
          />
          <input
            className={emailInputClass}
            name="email"
            type="email"
            value={email}
            placeholder="Your Email Address"
            onChange={handleEmailChange}
          />
        </div>
        <input className={s.submitBtn} type="submit" value="Submit" />
        {message && <p className={s.errorMsg}>{message}</p>}
      </form>
    </div>
  );
};
