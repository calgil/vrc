import Image from "next/image";
import s from "../../styles/components/layout/Navbar.module.scss";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLinks } from "./NavLinks";
import Link from "next/link";

export const Navbar = () => (
  <div className={s.navbar}>
    <div className={s.mainNavbar}>
      <Link href="/">
        <Image src="/navbarLogo.webp" alt="logo" width={118} height={41} />
      </Link>

      <div className={s.btnContainer}>
        <a className={`${s.btn} ${s.callLink}`} href="tel:+1(719)920-4430">
          <FontAwesomeIcon className={s.icon} icon={faPhone} />

          <span className={s.callText}>
            call <span className={s.addedText}>for emergency</span>
          </span>
        </a>
        <div className={`${s.btn} ${s.findBtn}`}>
          <FontAwesomeIcon className={s.icon} icon={faLocationDot} />
          <div className={s.text}>
            <span className={s.tabletText}>Find Us</span>
            <span className={s.mobileText}>Map</span>
          </div>
        </div>
      </div>
    </div>
    <NavLinks />
  </div>
);
