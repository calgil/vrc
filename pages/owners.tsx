import { Hero } from "@/components/Hero";
import s from "../styles/pages/Owners.module.scss";
import { EmergencyContact } from "@/components/EmergencyContact";
import { PhotoCardSection, PhotoCardType } from "@/components/PhotoCardSection";
import { LinkCardSection, LinkCardType } from "@/components/LinkCardSection";
import { ownerLinkCards } from "@/data/owners/linkCards";
import { ownerPhotoCards } from "@/data/owners/photoCards";
import { PaymentAssistance } from "@/components/PaymentAssistance";
import { LinkCards } from "@/components/LinkCards";
import { RequestConsult } from "@/components/ServicesPages/RequestConsult";
import { FormTable } from "@/components/FormTable";
import { CustomMetadata, Meta } from "@/components/Meta";

export default function Owners() {
  const customMetadata: CustomMetadata = {
    title: "Pet Owners",
  };
  return (
    <>
      <Meta data={customMetadata} />
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/owners/ownersBanner.webp"
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
        <PhotoCardSection cards={ownerPhotoCards} />
        <EmergencyContact />
        <PaymentAssistance />
        <LinkCards cards={ownerLinkCards} />
        <FormTable />
      </main>
    </>
  );
}
