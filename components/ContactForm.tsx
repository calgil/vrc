import { useState } from "react";
import s from "../styles/components/ContactForm.module.scss";
import { Input, SubmitBtn, TextArea } from "@/types/input.type";
import { Form } from "./Form";

export const ContactForm = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [message, setMessage] = useState("");

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
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameInput || !emailInput || !phoneInput || !message) {
      console.log("missing inputs");
      return;
    }
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    formData.append("Message", message);

    fetch(
      "https://script.google.com/macros/s/AKfycbzFG4dp4-awe41wKFVrhBR6Z-oxrSx8yOSAh-NlMQgAK7yF9de55SG0r4o8wSJ39NlIOA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          return setError(true);
        }
        setNameInput("");
        setEmailInput("");
        setPhoneInput("");
        setMessage("");
        setSuccess(true);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  };
  return (
    <section className={s.contactBg}>
      <div className={s.container}>
        <h3 className={s.contactHeader}>
          Have a non-medical general question?
        </h3>
        <p className={s.subheader}>
          If you have any non-medical questions or comments regarding North
          Springs VRC, please use the contact form below.
        </p>
        <form className={s.contactForm} onSubmit={handleSubmit}>
          <div className={s.inputContainer}>
            <div className={s.senderInfo}>
              {inputs.map((input) => (
                <input
                  key={input.name}
                  className={s.input}
                  type={input.type}
                  name={input.name}
                  value={input.value}
                  onChange={input.onChange}
                  placeholder={input.placeholder}
                />
              ))}
            </div>
            <textarea
              className={s.input}
              name="message"
              id="message"
              placeholder="Type your question here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={s.response}>
            {success && <p className={s.success}>Message sent successfully!</p>}
            {error && <p className={s.error}>Message failed to send!</p>}
          </div>
          <div className={s.btnContainer}>
            <button className={s.submitBtn}> submit</button>
          </div>
        </form>
        <p className={s.data}>
          The personal data submitted via this form will be retained only for
          the purpose of responding to your question or concern and will not be
          used for marketing purposes.
        </p>
      </div>
    </section>
  );
};
