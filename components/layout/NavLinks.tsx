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

  const linkStyle = cx("nav-link", s.navLink); // Combine "nav-link" with s.navLink
  const activeStyle = cx(linkStyle, s.active);

  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
              <Link href="/services#emergency" className={linkStyle}>
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
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    href="/services#anesthesiology"
                    className="dropdown-item"
                  >
                    Anesthesiology
                  </Link>
                </li>
                <li>
                  <Link href="/services#cardiology" className="dropdown-item">
                    Cardiology
                  </Link>
                </li>
                <li>
                  <Link href="/services#imaging" className="dropdown-item">
                    Diagnostic Imaging and In-House Laboratory
                  </Link>
                </li>
                <li>
                  <Link href="/services#emergency" className="dropdown-item">
                    Emergency
                  </Link>
                </li>
                <li>
                  <Link href="/services#exotics" className="dropdown-item">
                    Exotics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#internal-medicine"
                    className="dropdown-item"
                  >
                    Internal Medicine
                  </Link>
                </li>
                <li>
                  <Link href="/services#rehab" className="dropdown-item">
                    Rehab
                  </Link>
                </li>
                <li>
                  <Link href="/services#surgery" className="dropdown-item">
                    Surgery
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                href="/veterinarians"
                className={
                  currentRoute === "/veterinarians" ? activeStyle : linkStyle
                }
              >
                For Veterinarians
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/owners"
                className={currentRoute === "/owners" ? activeStyle : linkStyle}
              >
                For Pet Owners
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                href="/about"
                className={currentRoute === "/about" ? activeStyle : linkStyle}
              >
                About Us
              </Link>
            </li> */}
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
                  <Link href="/about" className="dropdown-item">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about/careers" className="dropdown-item">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/about/contact" className="dropdown-item">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
