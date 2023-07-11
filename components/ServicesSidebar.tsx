"use client";
import { useEffect, useState } from "react";
import s from "../styles/components/ServicesSidebar.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/router";
import { SidebarLink } from "./SidebarLink";
let cx = classNames.bind(s);

type SidebarLink = {
  page: string;
  href: string;
};

type ServicesSidebarProps = {
  activeLink: string;
};

export const ServicesSidebar = ({ activeLink }: ServicesSidebarProps) => {
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
      page: "Rehab",
      href: "rehab",
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

  return (
    <div className={s.container}>
      <div className={cx({ sidebar: true, fixed: isFixed })}>
        <ul className={s.links}>
          {sidebarLinks.map((link) => (
            <li key={link.page} className={s.linkWrapper}>
              {/* <Link href={`/services#${link.href}`} className={s.link}>
                {link.page}
              </Link> */}
              <SidebarLink
                activeClassName={s.active}
                className={s.link}
                href={`/services#${link.href}`}
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
