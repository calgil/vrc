"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "../../styles/components/layout/NavLinks.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import classNames from "classnames/bind";
let cx = classNames.bind(s);

export const NavLinks = () => {
  const currentRoute = usePathname();

  const linkStyle = cx("nav-link", s.navLink);
  const activeStyle = cx(linkStyle, s.active);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <div className={s.navLinks}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  href="/emergency"
                  className={
                    currentRoute === "/emergency" ? activeStyle : linkStyle
                  }
                  onClick={scrollToTop}
                >
                  Emergency
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`dropdown-toggle ${
                    currentRoute === "/services" ? activeStyle : linkStyle
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Specialty Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      href="/services#anesthesiology"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      Anesthesiology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#cardiology"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      Cardiology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#diagnostics"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      Diagnostics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#exotics"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      Exotics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#internal-medicine"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      Internal Medicine
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#rehabilitation"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      Rehabilitation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#surgery"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      Surgery
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`dropdown-toggle ${
                    currentRoute === "/veterinarians" ? activeStyle : linkStyle
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For Veterinarians
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      href="/member-hospital"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      Member Hospital
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/veterinarians"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      For Veterinarians
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  href="/owners"
                  className={
                    currentRoute === "/owners" ? activeStyle : linkStyle
                  }
                  onClick={scrollToTop}
                >
                  For Pet Owners
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`dropdown-toggle ${
                    currentRoute === "/about" ? activeStyle : linkStyle
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      href="/about"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/team"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/careers"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/contact"
                      className="dropdown-item"
                      onClick={scrollToTop}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
