import Image from "next/image";
import Link from "next/link";
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
            Reserved. |
            <Link
              className={s.link}
              href="/pdf/terms-and-conditions.pdf"
              target="_blank"
            >
              Terms & Conditions
            </Link>
            |
            <Link
              className={s.link}
              href="/pdf/privacy-policy.pdf"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};
