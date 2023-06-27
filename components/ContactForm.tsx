import s from "../styles/components/ContactForm.module.scss";

export const ContactForm = () => {
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
        <form className={s.contactForm}>
          <div className={s.inputContainer}>
            <div className={s.senderInfo}>
              <input
                className={s.input}
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input
                className={s.input}
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <input
                className={s.input}
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone Number"
              />
            </div>
            <textarea
              className={s.input}
              name="message"
              id="message"
              placeholder="Type your question here..."
            ></textarea>
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
