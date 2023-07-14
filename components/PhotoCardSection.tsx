import Link from "next/link";
import s from "../styles/components/PhotoCardSection.module.scss";

export type PhotoCardType = {
  title: string;
  textBlocks: string[];
  linkUrl: string;
  btnText: string;
};

type PhotoCardSectionProps = {
  cards: PhotoCardType[];
};

export const PhotoCardSection = ({ cards }: PhotoCardSectionProps) => {
  return (
    <section className={s.serviceCardBg}>
      <div className={s.cardContainer}>
        {cards.map((card) => (
          <div key={card.title} className={s.card}>
            <h3 className={s.cardTitle}>{card.title}</h3>
            {card.textBlocks.map((text, i) => (
              <p key={i} className={s.cardText}>
                {text}
              </p>
            ))}
            <Link href={card.linkUrl} className={s.cardLink}>
              {card.btnText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
