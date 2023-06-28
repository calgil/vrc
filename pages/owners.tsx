import { Hero } from "@/components/Hero";
import Head from "next/head";
import s from "../styles/pages/Owners.module.scss";
import Link from "next/link";
import { EmergencyContact } from "@/components/EmergencyContact";

export default function Owners() {
  type linkCard = {
    title: string;
    textBlocks: string[];
    linkUrl: string;
    bgUrl: string;
    bgColor: string;
  };
  const linkCards: linkCard[] = [
    {
      title: "Education Center",
      textBlocks: [
        "We plan to compile a library of resources, both video and print, to share our knowledge and help educate others.",
        "Check back soon as we expand this knowledge library!",
      ],
      linkUrl: "/",
      bgUrl: "/owners/educationCenter.webp",
      bgColor: "rgba(154, 48, 64, 0.85)",
    },
    {
      title: "Clinic Camera",
      textBlocks: [
        "If your pet is being treated with us, click here to view their clinic camera and check in with them",
      ],
      linkUrl: "/",
      bgUrl: "/owners/clinicCamera.webp",
      bgColor: "rgba(1, 109, 118, 0.85)",
    },
  ];
  return (
    <>
      <Head>
        <title>Pet Owners | North Springs Veterinary Referral Center</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          homepage={false}
          bgUrl=""
          heading="Information for Pet Owners"
          subHeading="We value communication and being transparent, because we understand that our patients are your family."
        />
        <section className={s.owners}>
          <h2 className={s.title}>Treating Your Pet With Love and Care</h2>
          <p className={s.text}>
            Our goal is to provide top-quality, innovative emergency and
            specialty veterinary care to pet owners with empathy and
            transparency.
          </p>
          <p className={s.text}>
            Below you will find more information about the services we offer and
            how we work to uphold our values.
          </p>
        </section>
        <section className={s.serviceCardBg}>
          <div className={s.cardContainer}>
            <div className={s.card}>
              <h3 className={s.cardTitle}>Our Services</h3>
              <p className={s.cardText}>
                Our specialty teams are available for appointments to diagnose
                and treat a variety of conditions.
              </p>
              <p className={s.cardText}>
                View our services page to learn more about how we can help you
                and your pet.
              </p>
              <Link className={s.cardLink} href="/services/#emergency">
                view services
              </Link>
            </div>
            <div className={s.card}>
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
            </div>
          </div>
        </section>
        <EmergencyContact />
        <section className={s.linkCards}>
          {linkCards.map((card) => (
            <Link
              href={card.linkUrl}
              key={card.title}
              className={s.linkCard}
              style={{
                backgroundImage: `linear-gradient(${card.bgColor} 0%, ${card.bgColor} 100%), url(${card.bgUrl})`,
              }}
            >
              <h5 className={s.linkTitle}>Education Center</h5>
              {card.textBlocks.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </Link>
          ))}
          {/* <Link href="wwww.google.com" className={s.linkCard}>
            <h5 className={s.linkTitle}>Education Center</h5>
            <p className={s.linkText}>
              We plan to compile a library of resources, both video and print,
              to share our knowledge and help educate others.
            </p>
            <p className={s.linkText}>
              Check back soon as we expand this knowledge library!
            </p>
          </Link>
          <div className={s.linkCard}>
            <h5 className={s.linkTitle}>Clinic Camera</h5>
            <p className={s.linkText}>
              If your pet is being treated with us, click here to view their
              clinic camera and check in with them
            </p>
          </div> */}
        </section>
      </main>
    </>
  );
}
