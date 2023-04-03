import s from "../styles/components/ValueCard.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(s);

type CardProps = {
  title: string;
  details: string;
  lightGrey?: boolean;
  customClass: string;
};

export const ValueCard = ({
  title,
  details,
  lightGrey,
  customClass,
}: CardProps) => {
  let cardClass = cx({
    cardBody: true,
    lightGrey,
  });
  return (
    <div className={cx(cardClass, customClass)}>
      <div className={s.cardText}>
        <h6 className={s.cardTitle}>{title}</h6>
        <p className={s.cardDetails}>{details}</p>
      </div>
    </div>
  );
};
