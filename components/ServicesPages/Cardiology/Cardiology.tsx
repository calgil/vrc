import s from "../../../styles/components/ServicesPages/Cardiology.module.scss";
import { CommonConditions } from "../CommonConditions";
import { cardiologyConditions } from "./conditions";

export const Cardiology = () => {
  return (
    <div className={s.cardiology}>
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
      <CommonConditions
        title="Common Conditions Treated by a Cardiologist"
        conditions={cardiologyConditions}
        numColumns={2}
      />
    </div>
  );
};
