"use client";
import { ServiceDetail } from "@/types/serviceDetail.type";
import s from "../styles/components/ServiceDropdown.module.scss";
import { useState } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
let cx = classNames.bind(s);

type ServiceDropdownProps = {
  service: ServiceDetail;
  index: number;
};

export const ServiceDropdown = ({ service, index }: ServiceDropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {};
  return (
    <div
      className={cx({ dropdown: true, grey: index % 2 === 1 })}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={s.collapse}>
        <h4 className={s.title}>
          {service.comingSoon && <span className={s.soon}>Coming Soon!</span>}{" "}
          {service.title}
        </h4>
        <div className={cx({ arrow: true, down: isExpanded })}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      {isExpanded && <p className={s.content}>{service.content}</p>}
    </div>
  );
};
