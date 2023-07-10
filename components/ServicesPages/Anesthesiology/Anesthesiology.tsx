import { ServiceDetail } from "@/types/serviceDetail.type";
import s from "../../../styles/components/ServicesPages/Anesthesiology.module.scss";

export const Anesthesiology = () => {
  const anesthesiologyItems: ServiceDetail[] = [
    {
      title: "Blood Oxygen Levels",
      content: "Learn something about this!",
    },
  ];
  return (
    <div>
      <h3 className={s.title}>Anesthesiology</h3>
      <p className={s.content}>
        Anesthesthetic monitoring and pain management are vital skills necessary
        for successful treatment of many illnesses and injuries. North Springs
        Veterinary Referral Center is proud to offer the highest quality of
        anesthesia and pain management available in veterinary medicine.
      </p>
      <p className={s.content}>
        Additionally, we partner with Peak Anesthesia for high risk patients
        that would benefit from the care of specialty trained veterinary
        technicians. To read more about Peak, visit{" "}
        <a className={s.link} href="https://peakvas.com/">
          their website.
        </a>
      </p>
      <h3 className={s.title}>Anesthesia Services</h3>
      {anesthesiologyItems.map((item, i) => (
        <div key={item.title} className={s.offering}>
          {item.title}
          Down Arrow
        </div>
      ))}
    </div>
  );
};
