import s from "../styles/NewsletterForm.module.scss";

type NewsletterFormProps = {
  heading: string;
  description: string;
};

export const NewsletterForm = ({
  heading,
  description,
}: NewsletterFormProps) => {
  return (
    <div className={s.newsletter}>
      <h4>{heading}</h4>
      <p>{description}</p>
      <form
        className={s.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("subscribe to newsletter");
        }}
      >
        <div className={s.inputContainer}>
          <input placeholder="Your Name" />
          <input placeholder="Email Address" />
        </div>
        <input className={s.submitBtn} type="submit" value="Submit" />
      </form>
    </div>
  );
};
