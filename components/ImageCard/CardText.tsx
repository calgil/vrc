import Link from "next/link";
import s from "../../styles/components/ImageCard/CardText.module.scss";
import { CardTextProps } from "./ImageCard";

export const CardText = ({ header, description, button }: CardTextProps) => {
  const { link, text } = button;
  return (
    <div className={s.cardText}>
      <h3 className={s.cardTitle}>{header}</h3>
      <p className={s.cardDescription}>{description}</p>
      <Link href={link}>
        <button className={s.cardBtn}>{text}</button>
      </Link>
    </div>
  );
};
