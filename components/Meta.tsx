import Head from "next/head";

export type CustomMetadata = {
  title: string;
  keywords?: string[];
  description?: string;
};

type MetaProps = {
  data: CustomMetadata;
};

export const Meta = ({ data }: MetaProps) => {
  const { title, keywords, description } = data;
  const defaultKeywords: string[] = [
    "emergency vet clinic",
    "24 hour emergency vet clinic",
  ];
  return (
    <Head>
      <title>{title}</title>
      {keywords && keywords.length > 0 && (
        <meta
          name="keywords"
          content={[...defaultKeywords, ...keywords].join(", ")}
        />
      )}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href="https://www.northspringsvrc.com/" />
    </Head>
  );
};
