import s from "../../../styles/components/ServicesPages/Surgery.module.scss";
import { CommonConditions } from "../CommonConditions";
import { RequestConsult } from "../RequestConsult";
import {
  orthopedicConditions,
  softTissueConditions,
  thoracicConditions,
} from "./surgeryConditions";

export const Surgery = () => {
  return (
    <section className={s.surgery}>
      <div className={s.text}>
        <h4 className={s.title}>Surgery</h4>
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
      <RequestConsult details="Our surgeons serve as a consultation resource on unusual or difficult cases, and work closely with you, your primary care veterinarian, and our specialists and emergency teams, in a collaborative approach to ensure overall pre-op evaluation and post-op continuity of care for your pet." />
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
      <div className={s.text}>
        <h5 className={s.title}>Postoperative Care</h5>
        <p className={s.content}>
          Your pet’s postoperative care will be managed around the clock by our
          surgical team of skilled veterinary nurses, as well as our emergency
          doctors and nurses overnight until your pet is ready to go home.
        </p>
        <p className={s.content}>
          If you or your primary care veterinarian have any questions regarding
          any of these procedures or a procedure is not listed, please contact
          us and we will be happy to answer any questions!
        </p>
      </div>
    </section>
  );
};
