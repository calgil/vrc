import Image from "next/image";
import s from "../../styles/components/layout/Footer.module.scss";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SocialLinks } from "../SocialLinks";
import { footerLinks } from "@/data/footerLinks";
import { NewsletterForm } from "../NewsletterForm";

export const Footer = () => {
  return (
    <>
      <NewsletterForm />
      <div className={s.footer}>
        <div className={s.container}>
          <div className={s.footerContent}>
            <div className={s.linkColumn}>
              <Link className={s.columnTitle} href="/about/contact">
                contact us
              </Link>
              <ul className={s.contactInfo}>
                <li>
                  <a
                    className={s.item}
                    href="https://www.google.com/maps/place/10520+White+Diamond+Pt,+Colorado+Springs,+CO+80908/@38.9838331,-104.7985129,17z/data=!3m1!4b1!4m6!3m5!1s0x87134c52f7f498d5:0xadc8e3a53ba07389!8m2!3d38.983829!4d-104.795938!16s%2Fg%2F11ssq6ysqz?entry=ttu"
                    target="_blank"
                    rel="noopener"
                  >
                    <FontAwesomeIcon className={s.icon} icon={faLocationDot} />
                    <div className={s.text}>
                      <p className={s.address}>10520 White Diamond Pt</p>
                      <p className={s.address}>Colorado Springs, CO 80908</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a className={s.item} href="tel:+1(719)920-4430">
                    <FontAwesomeIcon className={s.icon} icon={faPhone} />
                    <div className={s.text}>(719)920-4430</div>
                  </a>
                </li>
                <li>
                  <a className={s.item} href="mailto:info@northspringsvrc.com">
                    <FontAwesomeIcon className={s.icon} icon={faEnvelope} />
                    <div className={s.text}>info@northspringsvrc.com</div>
                  </a>
                </li>
                <li>
                  <a className={s.item}>
                    <FontAwesomeIcon className={s.icon} icon={faFax} />
                    <div className={s.text}>(719)920-4431</div>
                  </a>
                </li>
              </ul>
            </div>
            {footerLinks.map((column) => (
              <div key={column.columnName} className={s.linkColumn}>
                <Link className={s.columnTitle} href={column.mainLink}>
                  {column.columnName}
                </Link>
                {column.links.map((link) => (
                  <Link key={link.label} className={s.link} href={link.url}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className={s.branding}>
            <Link className={s.logo} href="/">
              <Image
                src="/logo-white.webp"
                alt="logo"
                width={120}
                height={49}
              />
            </Link>
            <p className={s.copyright}>
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
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};
