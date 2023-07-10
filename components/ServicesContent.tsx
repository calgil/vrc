"use client";
import s from "../styles/components/ServicesContent.module.scss";
import { Anesthesiology } from "./ServicesPages/Anesthesiology/Anesthesiology";

type ServicesContentProps = {
  activePage: string;
};

export const ServicesContent = ({ activePage }: ServicesContentProps) => {
  const renderPageContent = () => {
    switch (activePage) {
      case "anesthesiology":
        return <Anesthesiology />;
      case "cardiology":
        return <div>Cardiology Page Content</div>;
      case "diagnostics":
        return <div>Diagnostics Page Content</div>;
      case "exotics":
        return <div>Exotics Page Content</div>;
      case "internal-medicine":
        return <div>Internal Medicine Page Content</div>;
      case "rehab":
        return <div>Rehab Page Content</div>;
      case "surgery":
        return <div>Surgery Page Content</div>;
      default:
        return <div>No Page Found</div>;
    }
  };
  return <section className={s.content}>{renderPageContent()}</section>;
};
