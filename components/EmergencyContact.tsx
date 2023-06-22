import s from "../styles/components/EmergencyContact.module.scss";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EmergencyContact = () => {
  return (
    <section className={s.emergencyInfo}>
      <div className={s.container}>
        <h3 className={s.header}>
          If you are experiencing an emergency, please call or come directly to
          our hospital.
        </h3>
        <div className={s.emergencyContact}>
          <a className={s.contactInfo} href="tel:+1(719)920-4430">
            <FontAwesomeIcon className={s.icon} icon={faPhone} />
            <span className={s.info}>(719)920-4430</span>
          </a>
          <a
            className={s.contactInfo}
            href="https://www.google.com/maps/place/10520+White+Diamond+Pt,+Colorado+Springs,+CO+80908/@38.9838331,-104.7985129,17z/data=!3m1!4b1!4m6!3m5!1s0x87134c52f7f498d5:0xadc8e3a53ba07389!8m2!3d38.983829!4d-104.795938!16s%2Fg%2F11ssq6ysqz?entry=ttu"
            target="_blank"
            rel="noopener"
          >
            <FontAwesomeIcon className={s.icon} icon={faLocationDot} />
            <span className={s.info}>
              10520 White Diamond Point, Colorado Springs, CO 80908
            </span>
          </a>
        </div>
        <p className={s.prepared}>
          Our experienced team is prepared for any pet emergency and will
          provide the highest quality of care for your beloved family member.
        </p>
      </div>
    </section>
  );
};
