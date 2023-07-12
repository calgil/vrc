import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Anesthesiology } from "./ServicesPages/Anesthesiology/Anesthesiology";
import { ServicesFooter } from "./ServicesPages/ServicesFooter";
import { Cardiology } from "./ServicesPages/Cardiology/Cardiology";

type ServicesContentProps = {
  activePage: string;
};

const pageContentMap: { [key: string]: JSX.Element } = {
  anesthesiology: <Anesthesiology />,
  cardiology: <Cardiology />,
  diagnostics: <div>Diagnostics Page Content</div>,
  exotics: <div>Exotics Page Content</div>,
  "internal-medicine": <div>Internal Medicine Page Content</div>,
  rehabilitation: <div>Rehabilitation Page Content</div>,
  surgery: <div>Surgery Page Content</div>,
};

export const ServicesContent = ({ activePage }: ServicesContentProps) => {
  const { isReady } = useRouter();
  const [isHydrationComplete, setIsHydrationComplete] = useState(false);

  useEffect(() => {
    if (isReady) {
      setIsHydrationComplete(true);
    }
  }, [isReady]);

  const pageContent =
    isHydrationComplete && pageContentMap[activePage] ? (
      pageContentMap[activePage]
    ) : (
      <div>No Page Found</div>
    );

  return (
    <section>
      {/* add loading svg */}
      <div>{pageContent}</div>
      <ServicesFooter />
    </section>
  );
};
