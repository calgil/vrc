import {
  Col,
  Container,
  Grid,
  Link,
  Row,
  Text,
  useTheme,
} from "@nextui-org/react";
import Image from "next/image";
import s from "../styles/Hero.module.css";
import { NewsletterForm } from "./NewsletterForm";

export const Hero = () => {
  const { theme } = useTheme();
  return (
    <Container
      justify="flex-start"
      direction="column"
      wrap="nowrap"
      xl
      className={s.heroBg}
      css={{
        backgroundImage:
          "linear-gradient(108deg, rgba(36, 123, 130, 0.89) 64.91%, transparent 65%), url(/home-header.jpg)",
      }}
    >
      <Image
        className={s.logo}
        src="/stolen-logo.png"
        alt="logo"
        width={300}
        height={117}
      />
      <Col className={s.heroText}>
        <Text
          weight={"bold"}
          h3
          css={{
            color: "$primarySolidContrast",
            fontSize: "$4xl",
            fontWeight: "$semibold",
          }}
        >
          Transforming the veterinary experience
        </Text>
        <Text
          weight={"bold"}
          h3
          css={{
            color: "$primarySolidContrast",
            fontSize: "$4xl",
            fontWeight: "$semibold",
          }}
        >
          through empathy and transparency
        </Text>
        <Text
          weight={"bold"}
          h1
          css={{ color: "$primarySolidContrast", fontWeight: "$semibold" }}
        >
          Opening Summer 2023!
        </Text>
        <NewsletterForm
          heading="Stay in the Know!"
          description="Subscribe to our newsletter to receive the latest information and news
        about our Grand Opening!"
        />
      </Col>
      <Row className={s.social}>
        <Text className={s.connect} css={{ fontSize: "$xl" }}>
          <strong>Connect with us</strong>
        </Text>
        <Image
          className={s.socialIcon}
          height={30}
          width={30}
          src="/fb.png"
          alt="facebook"
        />
        <Image
          className={s.socialIcon}
          height={30}
          width={30}
          src="/ig.png"
          alt="facebook"
        />
        <Image
          className={s.socialIcon}
          height={30}
          width={30}
          src="/li.png"
          alt="facebook"
        />
        <Image
          className={s.socialIcon}
          height={30}
          width={30}
          src="/twitter.png"
          alt="facebook"
        />
      </Row>
      <Grid className={s.down}>
        <Link href="#">
          <Image
            width={130}
            height={120}
            src="/downArrow.png"
            alt="down arrow"
          />
        </Link>
      </Grid>
    </Container>
  );
};
