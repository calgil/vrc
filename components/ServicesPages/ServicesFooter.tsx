import s from "../../styles/components/ServicesPages/ServicesFooter.module.scss";

export const ServicesFooter = () => {
  return (
    <div className={s.serviceFooter}>
      <h4 className={s.title}>Reliable Communication</h4>
      <p className={s.content}>
        You will have access to the Emergency team for follow-up questions or
        concerns via phone, or e- mail.
      </p>
      <p className={s.content}>
        The Emergency team will have direct communication with your primary care
        veterinarian to maintain a collaborative approach to your pets&apos;
        medical care. If you or your primary care veterinarian have any
        questions regarding any diagnostics or procedures, please contact us and
        we will be happy to answer any questions.
      </p>
    </div>
  );
};
