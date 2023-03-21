import Image from "next/image";
import s from "../styles/components/Footer.module.scss";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.footerContent}>
          <div className={s.logoContainer}>
            <Image src="/logo-white.webp" alt="logo" width={146} height={59} />
          </div>
          <div className={s.copyright}>
            © 2023 North Springs Veterinary Referral Center. All Rights
            Reserved. | Terms & Conditions | Privacy Policy
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};
