// import Link from "next/link";
import s from "../styles/components/LinkCardSection.module.scss";

export type LinkCardType = {
  title: string;
  textBlocks: string[];
  linkUrl: string;
  bgUrl: string;
  bgColor: string;
};

type LinkCardSectionProps = {
  cards: LinkCardType[];
};

export const LinkCardSection = ({ cards }: LinkCardSectionProps) => {
  return (
    <section className={s.linkCards}>
      {cards.map((card) => (
        <a
          href={card.linkUrl}
          rel="noopener noreferrer"
          target="_blank"
          key={card.title}
          className={s.linkCard}
          style={{
            backgroundImage: `linear-gradient(${card.bgColor} 0%, ${card.bgColor} 100%), url(${card.bgUrl})`,
          }}
        >
          <h5 className={s.linkTitle}>{card.title}</h5>
          {card.textBlocks.map((text, i) => (
            <p key={i} className={s.text}>
              {text}
            </p>
          ))}
        </a>
      ))}
    </section>
  );
};
