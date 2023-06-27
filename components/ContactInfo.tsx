import s from "../styles/components/ContactInfo.module.scss";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactInfo = () => {
  return (
    <section className={s.contactInfo}>
      <div className={s.map}></div>
      <div className={s.info}>
        <h2 className={s.title}>General Information</h2>
        <div className={s.links}>
          <a
            className={s.contactLink}
            href="https://www.google.com/maps/place/North+Springs+Veterinary+Referral+Center/@38.9838331,-104.7985129,17z/data=!3m1!4b1!4m6!3m5!1s0x87134d111065c23d:0xaab025eb0119a0ea!8m2!3d38.983829!4d-104.795938!16s%2Fg%2F11kq2mdkk8?entry=ttu"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon className={s.icon} icon={faLocationDot} />
            <span className={s.text}>
              10520 White Diamond Point, <br /> Colorado Springs, CO 80908
            </span>
          </a>
          <a className={s.contactLink} href="tel:+1(719)920-4430">
            <FontAwesomeIcon className={s.icon} icon={faPhone} />
            <span className={s.text}>(719)920-4430</span>
          </a>
          <a className={s.contactLink} href="mailto:info@northspringsvrc.com">
            <FontAwesomeIcon className={s.icon} icon={faEnvelope} />
            <div className={s.text}>info@northspringsvrc.com</div>
          </a>
          <a className={s.contactLink}>
            <FontAwesomeIcon className={s.icon} icon={faFax} />
            <div className={s.text}>(719)920-4431</div>
          </a>
        </div>
        <h2 className={s.title}>Join our Member Hospital Network</h2>
        <a
          className={`${s.contactLink} ${s.email}`}
          href="mailto:memberhospital@northspringsvrc.com"
        >
          <FontAwesomeIcon className={s.icon} icon={faEnvelope} />
          <div className={s.text}>memberhospital@northspringsvrc.com</div>
        </a>
      </div>
    </section>
  );
};
