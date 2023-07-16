import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Anesthesiology } from "./ServicesPages/Anesthesiology/Anesthesiology";
import { ServicesFooter } from "./ServicesPages/ServicesFooter";
import { Cardiology } from "./ServicesPages/Cardiology/Cardiology";
import { Diagnostics } from "./ServicesPages/Diagnostics/Diagnostics";
import { InternalMedicine } from "./ServicesPages/InternalMedicine/InternalMedicine";
import { Rehabilitation } from "./ServicesPages/Rehab/Rehabilitation";
import { Surgery } from "./ServicesPages/Surgery/Surgery";
import { Exotics } from "./ServicesPages/Exotics/Exotics";
import { NoPage } from "./NoPage";

type ServicesContentProps = {
  activePage: string;
};

const pageContentMap: { [key: string]: JSX.Element } = {
  anesthesiology: <Anesthesiology />,
  cardiology: <Cardiology />,
  diagnostics: <Diagnostics />,
  exotics: <Exotics />,
  "internal-medicine": <InternalMedicine />,
  rehabilitation: <Rehabilitation />,
  surgery: <Surgery />,
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
      <NoPage />
    );

  return (
    <section style={{ flex: 1 }}>
      {/* add loading svg */}
      <div>{pageContent}</div>
      {/* <ServicesFooter /> */}
    </section>
  );
};
