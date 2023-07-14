"use client";
import { useEffect, useState } from "react";
import s from "../styles/components/ServicesSidebar.module.scss";
import classNames from "classnames/bind";
import { SidebarLink } from "./SidebarLink";
let cx = classNames.bind(s);

type SidebarLink = {
  page: string;
  href: string;
};

export const ServicesSidebar = () => {
  const [isFixed, setIsFixed] = useState(false);

  const sidebarLinks: SidebarLink[] = [
    {
      page: "Anesthesiology",
      href: "anesthesiology",
    },
    {
      page: "Cardiology",
      href: "cardiology",
    },
    {
      page: "Diagnostics",
      href: "diagnostics",
    },
    {
      page: "Exotics",
      href: "exotics",
    },
    {
      page: "Internal Medicine",
      href: "internal-medicine",
    },
    {
      page: "Rehabilitation",
      href: "rehabilitation",
    },
    {
      page: "Surgery",
      href: "surgery",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 285;
      const scrollY = window.scrollY;

      setIsFixed(scrollY > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={s.container} id="top">
      <div className={cx({ sidebar: true, fixed: isFixed })}>
        <ul className={s.links}>
          {sidebarLinks.map((link) => (
            <li key={link.page} className={s.linkWrapper}>
              <SidebarLink
                activeClassName={s.active}
                className={s.link}
                href={`/services#${link.href}`}
                onClick={scrollToTop}
              >
                {link.page}
              </SidebarLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
