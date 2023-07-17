import s from "../styles/components/CoreValues.module.scss";
import { ValueCard } from "./ValueCard";

export const CoreValues = () => {
  return (
    <div className={s.cardContainer}>
      <ValueCard
        customClass="transparency"
        title="Transparency"
        details="We will have an open door policy for our employees, an open book policy for our business, and an open clinic policy for our clients."
      />
      <ValueCard
        customClass="integrity"
        title="Integrity"
        details="We will stand for what is right, even when it is hard, authentically care about people, and will acknowledge when we make mistakes."
        lightGrey={true}
      />
      <ValueCard
        customClass="unity"
        title="Unity"
        details="Each and every team member's contribution is part of the whole. Every idea, suggestion, and how they are treated is equal, creating unity throughout the hospital."
      />
      <ValueCard
        customClass="titleCard"
        title="Our Core Values"
        details="These seven core values shape our company goals and the way we connect with our clients, patients, partners, and employees."
      />
      <ValueCard
        customClass="community"
        title="Community"
        details="We believe in giving back to our community through local missions & non-profit initiatives."
        lightGrey={true}
      />
      <ValueCard
        customClass="empathy"
        title="Empathy"
        details="We will be the voice that our patients do not have, translating their needs as well as the needs of our clients into the best care and medical recommendations."
      />
      <ValueCard
        customClass="innovation"
        title="Innovation"
        details="We will research the most recent medical protocols, equipment, and practices to remain on the cutting edge."
        lightGrey={true}
      />
      <ValueCard
        customClass="positivity"
        title="Positivity"
        details="We will nurture a positive company culture where employees want to stay. This will create continuity in our hospital passing positivity to our clients and patients."
      />
    </div>
  );
};
