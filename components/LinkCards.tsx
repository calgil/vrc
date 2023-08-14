import Link from "next/link";
import s from "../styles/components/LinkCards.module.scss";
import { LinkCard } from "@/types/linkCard.type";

type LinkCardProps = {
  cards: LinkCard[];
};

export const LinkCards = ({ cards }: LinkCardProps) => {
  return (
    <div className={s.linkCards}>
      {cards.map((card) => (
        <Link className={s.link} key={card.text} href={card.url}>
          <div
            className={s.linkCard}
            style={{
              background: ` linear-gradient(
            ${card.bgColor}, 
            ${card.bgColor}
          ), url(${card.bgUrl}) no-repeat center / cover`,
            }}
          >
            <p className={s.cardText}>{card.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
