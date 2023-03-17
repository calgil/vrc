import { Button, Grid, Input, Spacer, Text } from "@nextui-org/react";

type NewsletterFormProps = {
  heading: string;
  description: string;
};

export const NewsletterForm = ({
  heading,
  description,
}: NewsletterFormProps) => {
  return (
    <>
      <Text
        h4
        css={{
          color: "$primarySolidContrast",
          fontWeight: "$semibold",
          fontSize: "$3xl",
        }}
      >
        {heading}
      </Text>
      <Text
        css={{
          color: "$primarySolidContrast",
          fontWeight: "$semibold",
          fontSize: "$lg",
        }}
      >
        {description}
      </Text>
      <Grid.Container css={{ marginTop: "$14" }}>
        <Grid>
          <Input
            size="lg"
            labelPlaceholder="Your Name"
            css={{ $$inputColor: "#ffffff" }}
          />
        </Grid>
        <Spacer x={1} />
        <Grid>
          <Input
            size="lg"
            type={"email"}
            labelPlaceholder="Email Address"
            css={{ $$inputColor: "#ffffff" }}
          />
        </Grid>
      </Grid.Container>
      <Spacer y={1} />
      <Button
        rounded
        size={"sm"}
        css={{
          color: "$myColor",
          backgroundColor: "$primarySolidContrast",
          textTransform: "uppercase",
          padding: "25px 0",
          fontSize: "1.1rem",
        }}
      >
        Submit
      </Button>
    </>
  );
};
