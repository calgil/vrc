import s from "../styles/components/EmergencyContact.module.scss";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EmergencyContact = () => {
  return (
    <section className={s.emergencyInfo}>
      <div className={s.container}>
        <h2 className={s.header}>
          If you are experiencing an emergency, please call or come directly to
          our hospital.
        </h2>
        <div className={s.emergencyContact}>
          <a className={s.contactInfo} href="tel:+1(719)920-4430">
            <FontAwesomeIcon className={s.icon} icon={faPhone} />
            <span className={s.info}>(719)920-4430</span>
          </a>
          <a
            className={s.contactInfo}
            href="https://www.google.com/maps/place/North+Springs+Veterinary+Referral+Center/@38.9838331,-104.7985129,17z/data=!3m1!4b1!4m6!3m5!1s0x87134d111065c23d:0xaab025eb0119a0ea!8m2!3d38.983829!4d-104.795938!16s%2Fg%2F11kq2mdkk8?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={s.icon} icon={faLocationDot} />
            <span className={s.info}>
              10520 White Diamond Point, <br /> Colorado Springs, CO 80908
            </span>
          </a>
        </div>
        <p className={s.prepared}>
          Our experienced team is prepared for any pet emergency and will
          provide the highest quality of care for your beloved family member.
        </p>
        <a
          className={s.formBtn}
          href="https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAML5xD_4DOPydgZh5b5swA8yFXPl4YiSMUAfIfR2fw_vH1BhZ9iCzzEA7xAxzs5Ok*"
          target="_blank"
          rel="noopener noreferrer"
        >
          emergency intake form
        </a>
        <p className={s.poison}>
          If your pet ingested something, please call ASPCA Animal Poison
          Control at
          <a className={s.call} href="tel:+1(888) 426-4435">
            (888) 426-4435.
          </a>
        </p>
      </div>
    </section>
  );
};
