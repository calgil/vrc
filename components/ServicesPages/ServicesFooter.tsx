import s from "../../styles/components/ServicesPages/ServicesFooter.module.scss";

type ServicesFooterProps = {
  textBlocks: string[];
};

export const ServicesFooter = ({ textBlocks }: ServicesFooterProps) => {
  return (
    <div className={s.serviceFooter}>
      <div className={s.container}>
        <h4 className={s.title}>Reliable Communication</h4>
        {textBlocks.map((text, i) => (
          <p className={s.content} key={i}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
