import Link from "next/link";
import s from "../../styles/components/ServicesPages/RequestConsult.module.scss";

type RequestConsultProps = {
  title: string;
  details: string;
  btnText: string;
  formUrl: string;
};

export const RequestConsult = ({
  title,
  details,
  btnText,
  formUrl,
}: RequestConsultProps) => {
  return (
    <div className={s.bg}>
      <div className={s.request}>
        <div className={s.content}>
          <div>
            <h5 className={s.consultTitle}>{title}</h5>
            <p className={s.details}>{details}</p>
          </div>
          <div className={s.btnContainer}>
            <Link
              className={s.cta}
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {btnText}
              {/* Request <span className={s.addedText}>Consultation</span> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
