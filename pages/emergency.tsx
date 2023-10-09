import s from "../styles/pages/Emergency.module.scss";
import { EmergencyContact } from "@/components/EmergencyContact";
import { Hero } from "@/components/Hero";
import { CustomMetadata, Meta } from "@/components/Meta";
import { PaymentAssistance } from "@/components/PaymentAssistance";
import { ServiceDropdown } from "@/components/ServiceDropdown";
import { CommonConditions } from "@/components/ServicesPages/CommonConditions";
import { emergencyConditions } from "@/components/ServicesPages/Emergency/emergencyConditions";
import { emergencyReasons } from "@/components/ServicesPages/Emergency/emergencyReasons";
import { emergencyServices } from "@/components/ServicesPages/Emergency/emergencyServices";
import { emergencyCommunicationText } from "@/components/ServicesPages/Emergency/reliableCommunication";
import { ServicesFooter } from "@/components/ServicesPages/ServicesFooter";
import { sortServices } from "@/utilities/sortServices";

export default function Emergency() {
  const customMetadata: CustomMetadata = {
    title: "Animal Emergency and Specialty Center in Colorado Springs",
    keywords: [
      "emergency vet near me",
      "emergency animal hospital near me",
      "emergency vet",
      "animal hospital",
    ],
    description:
      "North Springs is a 24 hour Animal Emergency Clinic serving Colorado Springs and the surrounding area. Our experienced team is prepared for any pet emergency.",
  };
  return (
    <>
      <Meta data={customMetadata} />
      <main>
        <Hero
          homepage={false}
          heading="Emergency Veterinarian Clinic"
          subHeading="Our Emergency team is available 24/7, including holidays, for your urgent needs."
          bgUrl="/pages/emergency/emergencyBanner.webp"
        />
        <EmergencyContact />
        <PaymentAssistance />
        <section className={s.emergency}>
          <div className={s.text}>
            <h2 className={s.title}>Emergency</h2>
            <p className={s.content}>
              Emergency Veterinarians are an integral part of veterinary
              medicine. Many serious conditions occur without warning and cannot
              wait for a scheduled appointment with your primary care
              veterinarian.
            </p>
            <p className={s.content}>
              The Emergency Team at North Springs Veterinary Referral Center are
              here to help you and your pet through these emergency situations.
              They are available 24 hours a day, 7 days a week, including
              weekends and holidays, to ensure that you get the care and
              attention you need, when you need it.
            </p>
          </div>
          <h3 className={s.subheader}>Common Reasons for an Emergency Visit</h3>
          {sortServices(emergencyReasons).map((reason, i) => (
            <ServiceDropdown key={reason.title} service={reason} index={i} />
          ))}
          <div className={s.commonContainer}>
            <CommonConditions
              title="Common Emergency Surgeries"
              conditions={emergencyConditions}
              numColumns={2}
            />
          </div>
          <h3 className={s.subheader}>Emergency Services</h3>
          {sortServices(emergencyServices).map((service, i) => (
            <ServiceDropdown key={service.title} service={service} index={i} />
          ))}
        </section>
        <ServicesFooter textBlocks={emergencyCommunicationText} />
      </main>
    </>
  );
}
