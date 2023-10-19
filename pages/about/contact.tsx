import { Hero } from "@/components/Hero";
import { EmergencyContact } from "@/components/EmergencyContact";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactForm } from "@/components/ContactForm";
import { CustomMetadata, Meta } from "@/components/Meta";
import Head from "next/head";

export default function Contact() {
  const customMetadata: CustomMetadata = {
    title: "Contact A Emergency Veterinarian in Colorado Springs, CO",
    description:
      "We are a 24 hour Emergency Veterinarian Clinic serving Colorado Springs and the surrounding area. Our emergency Veterinarian are prepared for any pet emergency!",
  };
  function addJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": [
          "LocalBusiness"
        ],
        "@id": "sd6ngJQoeH",
        "name": "North Springs Veterinary Referral Service",
        "description": "Open Now! 24 hour Emergency Veterinarian Clinic serving Colorado Springs and the surrounding area. Our experienced team is prepared for any pet emergency!",
        "url": "https://www.northspringsvrc.com/",
        "email": "info@northspringsvrc.com",:slightly_smiling_face:  "slogan": "Transforming the veterinary experience through empathy and transparency",
        "priceRange": "$",
        "knowsAbout": [
          "Animal Emergency",
          "Specialty Services",
          "Anesthesiology",
          "Cardiology",
          "Diagnostics",
          "Exotics",
          "Internal Medicine",
          "Rehabilitation",
          "Surgery"
        ],
        "sameAs": [
          "https://www.facebook.com/northspringsvrc",
          "https://www.instagram.com/northsprings.vrc/",
          "https://www.linkedin.com/company/north-springs-veterinary-referral-center/"
        ],
        "brand": {
          "@id": "Veterinary Referal"
        },
        "paymentAccepted": [
          "Credit Card, Cash, Check, Debit Card"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "logo": {
          "@type": "ImageObject",
          "contentUrl": "https://www.northspringsvrc.com/_next/image?url=%2Flogos%2FnavbarLogo.webp&w=128&q=75",
          "url": "https://www.northspringsvrc.com/_next/image?url=%2Flogos%2FnavbarLogo.webp&w=128&q=75"
        },
        "telephone": "(719)920-4430",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "(719)920-4430"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "containsPlace": [
              {
                "@type": "city",
                "name": "COLORADO SPRINGS",
                "url": [
                  "https://www.google.com/maps/place/?q=place_id:ChIJK9LmoS5BE4cRE2vo9ZLrjkE",
                  "https://en.wikipedia.org/wiki/colorado_springs"
                ]
              },
              {
                "@type": "city",
                "name": "CASTLE ROCK",
                "url": [
                  "https://www.google.com/maps/place/?q=place_id:ChIJR7Q6zwWXbIcRmjlcGxR63GE",
                  "https://en.wikipedia.org/wiki/castle_rock"
                ]
              },
              {
                "@type": "city",
                "name": "MONUMENT PARK",
                "url": [
                  "https://www.google.com/maps/place/?q=place_id:ChIJVdVThjnNFocRVyND534BDdk",
                  "https://en.wikipedia.org/wiki/monument_park"
                ]
              },
              {
                "@type": "city",
                "name": "FOUNTAIN",
                "url": [
                  "https://www.google.com/maps/place/?q=place_id:ChIJv3PqDPVqE4cRE31HXmB5HXg",
                  "https://en.wikipedia.org/wiki/fountain"
                ]
              },
              {
                "@type": "city",
                "name": "FALCON",
                "url": [
                  "https://www.google.com/maps/place/?q=place_id:ChIJqZoNCsgzE4cRhLa8EM7-DEk",
                  "https://en.wikipedia.org/wiki/falcon"
                ]
              },
              {
                "@type": "city",
                "name": "PEYTON",
                "url": [
                  "https://www.google.com/maps/place/?q=place_id:ChIJhaEfyIkyE4cRwTXJk82zlgI",
                  "https://en.wikipedia.org/wiki/peyton"
                ]
              },
              {
                "@type": "city",
                "name": "LONE TREE",
                "url": [
                  "https://www.google.com/maps/place/?q=place_id:ChIJvVa_Uh-FbIcR7nCg0Lp2C-A",
                  "https://en.wikipedia.org/wiki/lone_tree"
                ]
              },
              {
                "@type": "city",
                "name": "PARKER",
                "url": [
                  "https://www.google.com/maps/place/?q=place_id:ChIJVT2aI86RbIcRJiQuPdTumtQ",
                  "https://en.wikipedia.org/wiki/parker"
                ]
              },
              {
                "@type": "city",
                "name": "HIGHLANDS RANCH",
                "url": [
                  "https://www.google.com/maps/place/?q=place_id:ChIJC13RgvCCbIcRSduMa81j8RE",
                  "https://en.wikipedia.org/wiki/highlands_ranch"
                ]
              }
            ],
            "geo": {
              "@type": "GeoShape",
              "postalcode": [
                "80901",
                "80902",
                "80903",
                "80904",
                "80905",
                "80906",
                "80907",
                "80908",
                "80909",
                "80910",
                "80911",
                "80912",
                "80913",
                "80914",
                "80915",
                "80916",
                "80917",
                "80918",
                "80919",
                "80920",
                "80921",
                "80922",
                "80923",
                "80924",
                "80925",
                "80926",
                "80927",
                "80928",
                "80929",
                "80930",
                "80931",
                "80932",
                "80933",
                "80934",
                "80935",
                "80936",
                "80937",
                "80938",
                "80939",
                "80941",
                "80942",
                "80946",
                "80947",
                "80949",
                "80950",
                "80951",
                "80960",
                "80962",
                "80970",
                "80977",
                "80995",
                "80997",
                "80104",
                "80108",
                "80109",
                "81091",
                "80817",
                "80831",
                "80831",
                "80124",
                "80134",
                "80112",
                "80134",
                "80138",
                "80126",
                "80129",
                "80130",
                "80163"
              ]
            }
          }
        ],
        "makesOffer": {
          "@type": "Offer"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10520 White Diamond Point",
          "addressLocality": "Colorado Springs",
          "addressRegion": "CO",
          "postalCode": "80908",
          "addressCountry": "United States"
        },
        "hasMap": "https://www.google.com/maps?cid=12299372273614823658",
        "image": [
          {
            "@type": "ImageObject",
            "contentUrl": "https://www.northspringsvrc.com/_next/image?url=%2Fpages%2Fhome%2FdoggoCuddles.webp&w=640&q=75",
            "url": "https://www.northspringsvrc.com/_next/image?url=%2Fpages%2Fhome%2FdoggoCuddles.webp&w=640&q=75"
          }
        ]
      }`,
    };
  }
  return (
    <>
      <Meta data={customMetadata} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="product-jsonld"
        ></script>
      </Head>
      <main>
        <Hero
          homepage={false}
          bgUrl="/pages/about/contact/contactBanner.webp"
          heading="Contact Us"
        />
        <ContactInfo />
        <EmergencyContact />
        <ContactForm />
      </main>
    </>
  );
}
