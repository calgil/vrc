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
          <Link
            className={s.cta}
            // href="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhA5N1uRu6DSe0hUq6HTZbg_EGj2tSvL_APTXelh85hrr0PsPxgn81u82K0SH5yFWwc*"
            href="/"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            Request <span className={s.addedText}>Consultation</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
