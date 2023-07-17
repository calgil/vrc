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
import Image from "next/image";

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

  const renderPageContent = () => {
    if (!isHydrationComplete) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Image src="/loading.gif" alt="loading" width={200} height={200} />
        </div>
      );
    }
    if (isHydrationComplete && !pageContentMap[activePage]) {
      return <NoPage />;
    }
    return pageContentMap[activePage];
  };

  return (
    <section style={{ flex: 1 }}>
      <div>{renderPageContent()}</div>
      {/* <ServicesFooter /> */}
    </section>
  );
};
