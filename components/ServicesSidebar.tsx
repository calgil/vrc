import { useEffect, useState } from "react";
import s from "../styles/components/ServicesSidebar.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(s);

type SidebarLink = {
  page: string;
};

type ServicesSidebarProps = {
  activeLink: string;
};

export const ServicesSidebar = ({ activeLink }: ServicesSidebarProps) => {
  const [isFixed, setIsFixed] = useState(false);

  const sidebarLinks: SidebarLink[] = [
    {
      page: "Anesthesiology",
    },
    {
      page: "Cardiology",
    },
    {
      page: "Diagnostics",
    },
    {
      page: "Exotics",
    },
    {
      page: "Internal Medicine",
    },
    {
      page: "Rehab",
    },
    {
      page: "Surgery",
    },
  ];

  const handleLinkClick = () => {
    console.log("link click");
  };

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 300;
      const scrollY = window.scrollY || window.pageYOffset;

      setIsFixed(scrollY > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cx({ sidebar: true, fixed: isFixed })}>
      <ul className={s.links}>
        {sidebarLinks.map((link) => (
          <li
            className={cx({
              link,
              // active: activeLink.includes(link.page.toLowerCase()),
              active: activeLink === link.page.toLowerCase(),
            })}
            key={link.page}
            onClick={() => handleLinkClick}
          >
            {link.page}
          </li>
        ))}
      </ul>
    </div>
  );
};
