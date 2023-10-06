import { ServiceDropdown } from "@/components/ServiceDropdown";
import s from "../../../styles/components/ServicesPages/InternalMedicine.module.scss";
import { CommonConditions } from "../CommonConditions";
import { RequestConsult } from "../RequestConsult";
import { internalMedicineConditions } from "./conditions";
import { internalServices } from "./internalServices";
import { sortServices } from "@/utilities/sortServices";
import { ServicesFooter } from "../ServicesFooter";
import { internalMedicineCommunication } from "./reliableCommunication";

export const InternalMedicine = () => {
  return (
    <section className={s.medicine}>
      <div className={s.text}>
        <h4 className={s.title}>Internal Medicine</h4>
        <p className={s.content}>
          Internal Medicine is an extensive and comprehensive specialty,
          covering a wide range of disease processes that require long term
          treatment. Your Primary care veterinarian may encourage a referral to
          our Internal Medicine department if conventional diagnostic tests are
          inconclusive or if your pet is not responding as expected to
          appropriate treatment.
        </p>
        <p className={s.content}>
          The Internal Medicine team at North Springs Veterinary Referral Center
          is committed to enhancing your pet’s quality of life by utilizing a
          collaborative approach, cutting-edge techniques, and compassionate
          care.
        </p>
      </div>
      <div className={s.conditionsContainer}>
        <CommonConditions
          title="Common Conditions Treated by a  Internist"
          conditions={internalMedicineConditions}
          numColumns={2}
        />
      </div>
      <RequestConsult
        title="Request Consultation"
        details="During your appointment, the Internal medicine team will start by obtaining a complete medical history and performing a thorough physical examination on your pet. This will allow for comprehensive diagnostic test recommendations and personalized treatment plans to help your pet feel their best. "
        btnText="Request Consult"
        formUrl="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAk9Tzg-HLl9mewn5Z8E9d1-5N0sLPEHO8rZzdRV5uWG2fPeZIpx92lHmGMw_IUQ9k*"
      />
      <h5 className={`${s.title} ${s.subheader}`}>
        Internal Medicine Services
      </h5>
      {sortServices(internalServices).map((service, i) => (
        <ServiceDropdown key={service.title} service={service} index={i} />
      ))}
      <ServicesFooter textBlocks={internalMedicineCommunication} />
    </section>
  );
};
