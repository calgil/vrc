import s from "../styles/components/ServicesContent.module.scss";
import { Anesthesiology } from "./ServicesPages/Anesthesiology/Anesthesiology";
import { ServicesFooter } from "./ServicesPages/ServicesFooter";

type ServicesContentProps = {
  activePage: string;
};

const pageContentMap: { [key: string]: JSX.Element } = {
  anesthesiology: <Anesthesiology />,
  cardiology: <div>Cardiology Page Content</div>,
  diagnostics: <div>Diagnostics Page Content</div>,
  exotics: <div>Exotics Page Content</div>,
  "internal-medicine": <div>Internal Medicine Page Content</div>,
  rehab: <div>Rehab Page Content</div>,
  surgery: <div>Surgery Page Content</div>,
};

export const ServicesContent = ({ activePage }: ServicesContentProps) => {
  const pageContent = pageContentMap[activePage] || <div>No Page Found</div>;

  return (
    <section>
      <div className={s.content}>{pageContent}</div>
      <ServicesFooter />
    </section>
  );
};
