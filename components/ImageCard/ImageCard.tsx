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
    <>
      {imgPosition === "left" ? (
        <div className={`${s.left} ${s.imgCard}`}>
          <div className={s.container}>
            {/* <div className={`${s.cardBg} ${s.left}`}> */}
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

            <CardText
              header={header}
              description={description}
              button={button}
            />
            {/* </div> */}
          </div>
        </div>
      ) : (
        <div className={`${s.imgCard} ${s.right}`}>
          <div className={s.container}>
            <CardText
              header={header}
              description={description}
              button={button}
            />
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
        </div>
      )}
    </>
  );
};
