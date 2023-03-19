import s from "../styles/components/ValueCard.module.scss";

type CardProps = {
  title: string;
  details: string;
};

export const ValueCard = ({ title, details }: CardProps) => {
  return (
    <div className={s.cardBody}>
      <h6>{title}</h6>
      <p>{details}</p>
    </div>
  );
};
