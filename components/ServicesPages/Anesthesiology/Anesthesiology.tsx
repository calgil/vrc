import { ServiceDropdown } from "@/components/ServiceDropdown";
import s from "../../../styles/components/ServicesPages/Anesthesiology.module.scss";
import { anesthesiologyServices } from "./anesthesiologyServices";
import { sortServices } from "@/utilities/sortServices";
import { ServicesFooter } from "../ServicesFooter";
import { cardiologyCommunicationText } from "../Cardiology/reliableCommunication";
import { CustomMetadata, Meta } from "@/components/Meta";

export const Anesthesiology = () => {
  const customMetadata: CustomMetadata = {
    title: "Pet Anesthesiology Services in Colorado Springs, Colorado",
    description:
      "Find a 24 hour pet anesthesiology Clinic serving Colorado Springs and the surrounding area. Our experienced team is prepared for any pet emergency. Contact us!",
  };
  return (
    <>
      <Meta data={customMetadata} />
      <section>
        <div className={s.text}>
          <h2 className={s.title}>Anesthesiology</h2>
          <p className={s.content}>
            Anesthesthetic monitoring and pain management are vital skills
            necessary for successful treatment of many illnesses and injuries.
            North Springs Veterinary Referral Center is proud to offer the
            highest quality of anesthesia and pain management available in
            veterinary medicine.
          </p>
          <p className={s.content}>
            Additionally, we partner with Peak Anesthesia for high risk patients
            that would benefit from the care of specialty trained veterinary
            technicians. To read more about Peak, visit{" "}
            <a
              className={s.link}
              href="https://peakvas.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              their website.
            </a>
          </p>
          <h3 className={`${s.title} ${s.subheader}`}>Anesthesia Services</h3>
        </div>
        {sortServices(anesthesiologyServices).map((service, i) => (
          <ServiceDropdown key={service.title} service={service} index={i} />
        ))}
        <ServicesFooter textBlocks={cardiologyCommunicationText} />
      </section>
    </>
  );
};
