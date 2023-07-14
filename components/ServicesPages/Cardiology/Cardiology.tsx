import { ServiceDropdown } from "@/components/ServiceDropdown";
import s from "../../../styles/components/ServicesPages/Cardiology.module.scss";
import { CommonConditions } from "../CommonConditions";
import { RequestConsult } from "../RequestConsult";
import { cardiologyConditions } from "./conditions";
import { cardiologyServices } from "./cardiologyServices";
import { sortServices } from "@/utilities/sortServices";

export const Cardiology = () => {
  return (
    <section className={s.cardiology}>
      <div className={s.text}>
        <h4 className={s.title}>Cardiology</h4>
        <p className={s.content}>
          Cardiology is a subspecialty of Internal medicine that focuses
          exclusively on the structure and function of the heart and
          cardiovascular system. Your primary care veterinarian may encourage a
          referral to our Cardiology department for evaluation of a heart
          murmur, a heart arrhythmia, or symptoms that could be indicative of
          underlying heart disease such as exercise intolerance, coughing,
          labored breathing, fainting episodes, or fluid build up in the lungs,
          chest, or abdomen.
        </p>
        <p className={s.content}>
          The Cardiology team at North Springs Veterinary Referral Center will
          provide gold standard, compassionate care to your pet to keep them
          feeling their best!
        </p>
      </div>
      <div className={s.conditionsContainer}>
        <CommonConditions
          title="Common Conditions Treated by a Cardiologist"
          conditions={cardiologyConditions}
          numColumns={2}
        />
      </div>
      <RequestConsult details="During your appointment with the Cardiologist, you will have the opportunity to watch and be involved in the physical exam and diagnostic tests performed on your pet. The Cardiologist will go over the results and a treatment plan with you directly at the time of the appointment. If there are tests that are sent out or take time to receive the results, you will be called at a later date by the Cardiologist or an experienced Cardiology Nurse." />
      <h5 className={`${s.title} ${s.subheader}`}>Cardiology Services</h5>
      {sortServices(cardiologyServices).map((service, i) => (
        <ServiceDropdown key={service.title} service={service} index={i} />
      ))}
    </section>
  );
};
