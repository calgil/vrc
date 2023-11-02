import { ServiceDropdown } from "@/components/ServiceDropdown";
import s from "../../../styles/components/ServicesPages/Rehabilitation.module.scss";
import { CommonConditions } from "../CommonConditions";
import { RequestConsult } from "../RequestConsult";
import { rehabConditions } from "./rehabConditions";
import { rehabServices } from "./rehabServices";
import { sortServices } from "@/utilities/sortServices";
import { ServicesFooter } from "../ServicesFooter";
import { rehabCommunications } from "./reliableCommunication";
import { CustomMetadata, Meta } from "@/components/Meta";

export const Rehabilitation = () => {
  const customMetadata: CustomMetadata = {
    title: "Animal Rehab Services in Colorado Springs, Colorado",
    description:
      "We offer a 24 hour pet rehab Clinic, serving Colorado Springs and the surrounding area. Our experienced team is here to provide the highest quality of care!",
  };
  return (
    <>
      <Meta data={customMetadata} />
      <section className={s.rehab}>
        <div className={s.text}>
          <h2 className={s.title}>Rehabilitation</h2>
          <p className={s.content}>
            Physical rehabilitation utilizes human physical therapy techniques
            and adapts them to improve the quality of life for our pets. The
            numerous benefits of physical rehabilitation include increasing
            muscle strength, reducing joint pain, strengthening tendons and
            ligaments, increasing mobility, speeding recovery from orthopedic
            injury and surgery, fighting obesity, promoting wound healing, and
            slowing deterioration in chronic age related degenerative orthopedic
            and neurologic diseases.
          </p>
          <p className={s.content}>
            The Physical Rehabilitation team at North Springs Veterinary
            Referral Center is dedicated to working with you and your pet to
            develop an individualized rehabilitation plan to keep them moving
            with ease.
          </p>
        </div>
        <div className={s.conditionsContainer}>
          <CommonConditions
            title="Common Conditions Treated by a Rehabilitation Specialist"
            conditions={rehabConditions}
            numColumns={2}
          />
        </div>
        <RequestConsult
          title="Request Consult"
          details="During your appointment, the Physical Rehabilitation team will start by obtaining a complete medical history and performing a thorough physical examination on your pet. This will allow for comprehensive and personalized treatment plans to help your pet feel their best."
          btnText="Request Consult"
          formUrl="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhA_3E-kKv_1o6p3iNZbgsrdqggVs2nOI299vjgyzKPw2sBtm7E2Zfhheqoco1LZCcw*"
        />
        <h5 className={`${s.title} ${s.subheader}`}>Rehabilitation Services</h5>
        {sortServices(rehabServices).map((service, i) => (
          <ServiceDropdown key={service.title} service={service} index={i} />
        ))}
        <ServicesFooter textBlocks={rehabCommunications} />
      </section>
    </>
  );
};
