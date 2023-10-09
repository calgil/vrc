import { ServiceDropdown } from "@/components/ServiceDropdown";
import s from "../../../styles/components/ServicesPages/Surgery.module.scss";
import { CommonConditions } from "../CommonConditions";
import { RequestConsult } from "../RequestConsult";
import {
  orthopedicConditions,
  softTissueConditions,
  thoracicConditions,
} from "./surgeryConditions";
import { surgeryServices } from "./surgeryServices";
import { sortServices } from "@/utilities/sortServices";
import { ServicesFooter } from "../ServicesFooter";
import { cardiologyCommunicationText } from "../Cardiology/reliableCommunication";
import { CustomMetadata, Meta } from "@/components/Meta";

export const Surgery = () => {
  const customMetadata: CustomMetadata = {
    title: "Pet Emergency Hospital | Animal Surgery in Colorado Springs",
    description:
      "Find a 24 hour pet emergency hospital serving Colorado Springs and the surrounding area. Our experienced team is prepared for any pet emergency. Contact us now!",
  };
  return (
    <>
      <Meta data={customMetadata} />
      <section className={s.surgery}>
        <div className={s.text}>
          <h2 className={s.title}>Surgery</h2>
          <p className={s.content}>
            North Springs VRC surgery department enlists several boarded
            veterinary surgeons in the area to come perform all types of
            complicated surgical procedures.
          </p>
          <p className={s.content}>
            Specialized training and experience, in addition to access to a
            variety of diagnostic tools, imaging, equipment, support staff, and
            monitoring, offer care that surpasses basic surgical needs.
          </p>
        </div>
        <RequestConsult
          title="Request Consult"
          details="Our surgeons serve as a consultation resource on unusual or difficult cases, and work closely with you, your primary care veterinarian, and our specialists and emergency teams, in a collaborative approach to ensure overall pre-op evaluation and post-op continuity of care for your pet."
          btnText="Request Consult"
          formUrl="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAk9Tzg-HLl9mewn5Z8E9d1-5N0sLPEHO8rZzdRV5uWG2fPeZIpx92lHmGMw_IUQ9k*"
        />
        <div className={s.surgeryDetails}>
          <div className={s.softTissue}>
            <CommonConditions
              title="Soft Tissue Surgery"
              conditions={softTissueConditions}
              numColumns={2}
            />
          </div>
          <div className={s.conditions}>
            <CommonConditions
              title="Thoracic Surgery"
              conditions={thoracicConditions}
              numColumns={1}
            />
            <CommonConditions
              title="Orthopedic Surgery"
              conditions={orthopedicConditions}
              numColumns={2}
            />
          </div>
        </div>
        <h5 className={`${s.title} ${s.subheader}`}>Surgery Services</h5>
        {sortServices(surgeryServices).map((service, i) => (
          <ServiceDropdown key={service.title} service={service} index={i} />
        ))}
        <h5 className={`${s.title} ${s.subheader}`}>Postoperative Care</h5>
        <div className={s.text}>
          <p className={s.content}>
            Your pet’s postoperative care will be managed around the clock by
            our surgical team of skilled veterinary technicians, as well as our
            emergency doctors and technicians overnight until your pet is ready
            to go home.
          </p>
          <p className={s.content}>
            If you or your primary care veterinarian have any questions
            regarding any of these procedures or a procedure is not listed,
            please contact us and we will be happy to answer any questions!
          </p>
        </div>
        <ServicesFooter textBlocks={cardiologyCommunicationText} />
      </section>
    </>
  );
};
