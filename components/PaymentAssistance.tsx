import s from "../styles/components/PaymentAssistance.module.scss";

export const PaymentAssistance = () => {
  return (
    <section className={s.assistance}>
      <div className={s.text}>
        <h4 className={s.header}>Do you need payment assistance?</h4>
        <p className={s.content}>
          Apply for financing options through one of our recommended providers.
        </p>
        <div className={s.btnContainer}>
          <a
            className={s.cta}
            href="https://www.carecredit.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Apply for care credit
          </a>
          <a
            className={s.cta}
            href="https://scratchpay.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Apply for scratch pay
          </a>
          <a
            className={s.cta}
            href="https://vetbilling.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Apply for VetBilling
          </a>
        </div>
      </div>
    </section>
  );
};
