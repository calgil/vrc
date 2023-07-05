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
        {/* <div className={s.card}>
          <h3 className={s.cardTitle}>Our Services</h3>
          <p className={s.cardText}>
            Our specialty teams are available for appointments to diagnose and
            treat a variety of conditions.
          </p>
          <p className={s.cardText}>
            View our services page to learn more about how we can help you and
            your pet.
          </p>
          <Link className={s.cardLink} href="/services/#emergency">
            view services
          </Link>
        </div> */}
        {/* <div className={s.card}>
          <h3 className={s.cardTitle}>About Us</h3>
          <p className={s.cardText}>
            North Springs VRC was founded with a passion to improve the
            veterinary world for both staff and clients.
          </p>
          <p className={s.cardText}>
            Read about our story, our vision, and our values to learn what
            drives us.
          </p>
          <Link className={s.cardLink} href="/about">
            about us
          </Link>
        </div> */}
      </div>
    </section>
  );
};
