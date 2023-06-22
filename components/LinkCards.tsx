import Link from "next/link";
import s from "../styles/components/LinkCards.module.scss";

export type LinkCard = {
  url: string;
  bgUrl: string;
  bgColor: string;
  text: string;
};

export const LinkCards = () => {
  const linkCards: LinkCard[] = [
    {
      url: "/services#emergency",
      bgUrl: "/cardBg/emergencyBg.webp",
      bgColor: "rgba(154, 48, 64, 0.85)",
      text: "Emergency Services",
    },
    {
      url: "/services",
      bgUrl: "/cardBg/specialtyBg.webp",
      bgColor: "rgba(111, 113, 168, 0.85)",
      text: "Specialty Service",
    },
    {
      url: "/veterinarians",
      bgUrl: "/cardBg/vets.webp",
      bgColor: "rgba(37, 37, 37, 0.85)",
      text: "For Referring Veterinarians",
    },
    {
      url: "/veterinarians",
      bgUrl: "/cardBg/owners.webp",
      bgColor: "rgba(1, 109, 118, 0.85)",
      text: "For Pet Owners",
    },
  ];
  return (
    <div className={s.linkCards}>
      {linkCards.map((card) => (
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
