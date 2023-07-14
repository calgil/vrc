import s from "../styles/components/Opening.module.scss";

export const Opening = () => {
  return (
    <section className={s.opening}>
      <h2 className={s.title}>Join us for our Open House!</h2>
      <div className={s.openHouse}>
        <h3 className={s.openingTitle}>Open House</h3>
        <p className={s.content}>
          Meet our staff, tour our facility, and get to know us! Join us for
          fun, raffles, and prizes!
        </p>
        <p className={s.content}>September 9th, 2023</p>
      </div>
      <div className={s.grandOpening}>
        <h3 className={s.openingTitle}>Grand Opening</h3>
        <p className={s.content}>
          We are open and ready to assist you and your pets.
        </p>
        <p className={s.content}>September 11th, 2023</p>
      </div>
    </section>
  );
};