import s from "../styles/components/ValueCard.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(s);

type CardProps = {
  title: string;
  details: string;
  titleCard?: boolean;
  lightGrey?: boolean;
};

export const ValueCard = ({
  title,
  details,
  titleCard,
  lightGrey,
}: CardProps) => {
  let cardClass = cx({
    cardBody: true,
    titleCard,
    lightGrey,
  });
  return (
    <div className={cardClass}>
      <div className={s.cardText}>
        <h6 className={s.cardTitle}>{title}</h6>
        <p className={s.cardDetails}>{details}</p>
      </div>
    </div>
  );
};
