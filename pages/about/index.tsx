import { Hero } from "@/components/Hero";
import s from "../../styles/pages/About.module.scss";
import { OurStory } from "@/components/OurStory";
import { CoreValues } from "@/components/CoreValues";
import Link from "next/link";
import { CustomMetadata, Meta } from "@/components/Meta";
import { PhotoCardSection, PhotoCardType } from "@/components/PhotoCardSection";

export default function About() {
  const customMetadata: CustomMetadata = {
    title: "About Our Animal ER Care in Colorado Springs, Colorado",
    description:
      "North Springs Veterinary Referral Service is a 24 hour animal ER care center. We are prepared to provide the highest quality care for any pet emergency!",
  };

  const tourCards: PhotoCardType[] = [
    {
      title: "Emergency",
      textBlocks: [
        "Virtually visit our emergency department to learn more about the excellent care and attention we bring to caring for you and your pet.",
      ],
      linkUrl: "https://hommati.tours/tour/1921067",
      btnText: "Emergency Tour",
    },
    {
      title: "Specialty",
      textBlocks: [
        "Virtually visit our specialty departments to learn more about the excellent care and attention we bring to caring for you and your pet.",
      ],
      linkUrl: "https://hommati.tours/tour/1921072",
      btnText: "Specialty Tour",
    },
  ];

  return (
    <>
      <Meta data={customMetadata} />
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/about/aboutHeader.webp"
          heading="About Our 24 Hour Animal ER Care in Colorado Springs"
        />
        <OurStory />
        <PhotoCardSection cards={tourCards} />
        <CoreValues />
        <div className={s.btnContainer}>
          <Link href="/about/contact" className={s.contactBtn}>
            contact us
          </Link>
        </div>
      </main>
    </>
  );
}
