import s from "../styles/components/NewsletterForm.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(s);

type NewsletterFormProps = {
  heading: string;
  description: string;
  inHero: boolean;
};

export const NewsletterForm = ({
  heading,
  description,
  inHero,
}: NewsletterFormProps) => {
  let newsletterClass = cx({
    newsletter: true,
    inHero,
  });

  let formClass = cx({
    formContainer: true,
    inHero,
  });
  return (
    <div className={newsletterClass}>
      <h4 className={s.newsletterTitle}>{heading}</h4>
      <p className={s.description}>{description}</p>
      <form
        className={formClass}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("subscribe to newsletter");
        }}
      >
        <div className={s.inputContainer}>
          <input className={s.input} placeholder="Your Name" />
          <input className={s.input} placeholder="Email Address" />
        </div>
        <input className={s.submitBtn} type="submit" value="Submit" />
      </form>
    </div>
  );
};
