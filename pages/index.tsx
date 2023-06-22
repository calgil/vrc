import Head from "next/head";
import s from "../styles/pages/Home.module.scss";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { CoreValues } from "@/components/CoreValues";
import { ImageCard } from "@/components/ImageCard/ImageCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EmergencyContact } from "@/components/EmergencyContact";
import Link from "next/link";

type LinkCard = {
  url: string;
  bgUrl: string;
  bgColor: string;
  text: string;
};

export default function Home() {
  const LinkCards: LinkCard[] = [
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
    <>
      <Head>
        <title>Home | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.main}>
        <Hero
          homepage={true}
          logoUrl="/logos/home.webp"
          subHeading="Transforming the veterinary experience through 
          empathy and transparency"
          bgUrl="/heroBg/homeBg.webp"
        />
        <EmergencyContact />
        <div className={s.linkCards}>
          {LinkCards.map((card) => (
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
        {/* <OurStory /> */}
        {/* <CoreValues /> */}
        {/* <h2 className={s.sectionHeader}>Join the North Springs VRC Family!</h2>
        <ImageCard
          imgPosition="right"
          image="/join-us-2.jpg"
          cardText={{
            header: "Member Hospital Network",
            description:
              "North Springs VRC is excited to be partnering with local veterinarians to bring top quality care to their patients, as well as provide educational resources to their teams.",
            button: {
              text: "join our network today",
              link: "/member-hospital",
            },
          }}
        />
        <ImageCard
          imgPosition="left"
          image="/join-us-1.jpg"
          cardText={{
            header: "People Make the Difference",
            description:
              "Join a company that prioritizes your work/life balance and supports opportunities for growth. We are looking to hire ER Vets, Client Service Reps, Technicians, Assistants, and Specialists!",
            button: { text: "click for job opportunities", link: "/careers" },
          }}
        /> */}
        <NewsletterForm
          inHero={false}
          heading="Stay in the Know!"
          description="Stay up to date and receive the the latest information and news about our
                Grand Opening, added services, specialties, new hires, events and more!"
        />
      </main>
    </>
  );
}
