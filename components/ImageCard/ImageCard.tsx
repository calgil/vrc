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
          <div className={s.imgContainer}>
            <Image
              src={image}
              alt="veterinarian healing animal"
              width={733}
              height={520}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <CardText header={header} description={description} button={button} />
        </div>
      ) : (
        <div className={s.imgCard}>
          <CardText header={header} description={description} button={button} />
          <div className={s.imgContainer}>
            <Image
              src={image}
              alt="veterinarian healing animal"
              width={733}
              height={520}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
