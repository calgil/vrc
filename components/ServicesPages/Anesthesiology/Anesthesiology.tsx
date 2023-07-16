import { ServiceDropdown } from "@/components/ServiceDropdown";
import s from "../../../styles/components/ServicesPages/Anesthesiology.module.scss";
import { anesthesiologyServices } from "./anesthesiologyServices";
import { sortServices } from "@/utilities/sortServices";
import { ServicesFooter } from "../ServicesFooter";
import { cardiologyCommunicationText } from "../Cardiology/reliableCommunication";

export const Anesthesiology = () => {
  return (
    <section>
      <div className={s.text}>
        <h3 className={s.title}>Anesthesiology</h3>
        <p className={s.content}>
          Anesthesthetic monitoring and pain management are vital skills
          necessary for successful treatment of many illnesses and injuries.
          North Springs Veterinary Referral Center is proud to offer the highest
          quality of anesthesia and pain management available in veterinary
          medicine.
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
  );
};
