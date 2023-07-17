import Link from "next/link";
import s from "../../styles/components/ServicesPages/RequestConsult.module.scss";

type RequestConsultProps = {
  details: string;
};

export const RequestConsult = ({ details }: RequestConsultProps) => {
  return (
    <div className={s.request}>
      <h5 className={s.consultTitle}>Request your one on one consultation.</h5>
      <div className={s.content}>
        <p className={s.details}>{details}</p>
        <div className={s.btnContainer}>
          <Link className={s.cta} href="">
            Request <span className={s.addedText}>Consultation</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
