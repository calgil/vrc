import Image from "next/image";
import s from "../../styles/components/ImageCard/ImageCard.module.scss";
import { CardText } from "./CardText";

export type CardTextProps = {
  header: string;
  description: string;
  button: { text: string; link: string };
};

type ImageCardProps = {
  imgPosition: "left" | "right";
  image: string;
  cardText: CardTextProps;
};

export const ImageCard = ({ imgPosition, image, cardText }: ImageCardProps) => {
  const { header, description, button } = cardText;
  return (
    <div className={s.container}>
      {imgPosition === "left" ? (
        <div className={s.imgCard}>
          <Image
            width={570}
            height={405}
            src={image}
            alt="veterinarian healing animal"
          />
          <CardText header={header} description={description} button={button} />
        </div>
      ) : (
        <div className={s.imgCard}>
          <CardText header={header} description={description} button={button} />
          <Image
            width={570}
            height={405}
            src={image}
            alt="veterinarian healing animal"
          />
        </div>
      )}
    </div>
  );
};
