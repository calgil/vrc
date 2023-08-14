import { Hero } from "@/components/Hero";
import Head from "next/head";
import s from "../styles/pages/Owners.module.scss";
import { EmergencyContact } from "@/components/EmergencyContact";
import { PhotoCardSection, PhotoCardType } from "@/components/PhotoCardSection";
import { LinkCardSection, LinkCardType } from "@/components/LinkCardSection";
import { ownerLinkCards } from "@/data/owners/linkCards";
import { ownerPhotoCards } from "@/data/owners/photoCards";
import { PaymentAssistance } from "@/components/PaymentAssistance";
import { LinkCards } from "@/components/LinkCards";
import { RequestConsult } from "@/components/ServicesPages/RequestConsult";

export default function Owners() {
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
        <RequestConsult
          title="On your way?"
          details="Go ahead and fill out our intake paperwork online."
          btnText="Intake Form"
          formUrl="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCQLDika86ROSJ-K7v4bC2oHXhAmy090nVh6IE_bfx-oqHDjIulLxvAff_ul86HUs0*"
        />
        <PaymentAssistance />
        <LinkCards cards={ownerLinkCards} />
      </main>
    </>
  );
}
