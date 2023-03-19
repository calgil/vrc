import s from "../styles/components/CoreValues.module.scss";
import { ValueCard } from "./ValueCard";

export const CoreValues = () => {
  return (
    <div className={s.cardContainer}>
      <div className={s.leftCol}>
        <ValueCard
          title="Transparency"
          details="We will have an open door policy for our employees, an open book policy for our business, and an open clinic policy for our clients."
        />
        <ValueCard
          title="Integrity"
          details="We will stand for what is right, even when it is hard, authentically care about people, and will acknowledge when we make mistakes."
          lightGrey={true}
        />
        <ValueCard
          title="Unity"
          details="Each and every team member’s contribution is part of the whole. Every idea, suggestion, and how they are treated is equal, creating unity throughout the hospital."
        />
      </div>
      <div className={s.centerCol}>
        <ValueCard
          title="Our Core Values"
          details="These seven core values shape our company goals and the way we connect with our clients, patients, partners, and employees."
          titleCard={true}
        />
        <ValueCard
          title="Community"
          details="We believe that it is our obligation to give back to our community by contributing to local animal missions and partnering with local non-profit initiatives."
          lightGrey={true}
        />
      </div>
      <div className={s.leftCol}>
        <ValueCard
          title="Empathy"
          details="We will be the voice that our patients do not have, translating their needs as well as the needs of our clients into the best care and medical recommendations."
        />
        <ValueCard
          title="Innovation"
          details="We will have an open door policy for our employees, an open book policy for our business, and an open clinic policy for our clients."
          lightGrey={true}
        />
        <ValueCard
          title="Positivity"
          details="We will nurture a positive company culture where employees want to stay. This will create continuity in our hospital passing positivity to our clients and patients."
        />
      </div>
    </div>
  );
};
