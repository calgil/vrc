import s from "../styles/pages/MemberHospital.module.scss";
import { Hero } from "@/components/Hero";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Input, SubmitBtn, TextArea } from "@/types/input.type";
import { Form } from "@/components/Form";
import { useState } from "react";

export default function MemberHospital() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [zipInput, setZipInput] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [message, setMessage] = useState("");
  const inputs: Input[] = [
    {
      name: "name",
      placeholder: "Full Name*",
      type: "text",
      required: true,
      onChange: (e) => setNameInput(e.target.value),
    },
    {
      name: "email",
      placeholder: "Email*",
      type: "email",
      required: true,
      onChange: (e) => setEmailInput(e.target.value),
    },
    {
      name: "phone",
      placeholder: "Phone*",
      type: "phone",
      required: true,
      onChange: (e) => setPhoneInput(e.target.value),
    },
    {
      name: "zip",
      placeholder: "Zip",
      type: "number",
      onChange: (e) => setZipInput(e.target.value),
    },
    {
      name: "hospital",
      placeholder: "Hospital Name",
      type: "text",
      required: true,
      onChange: (e) => setHospitalName(e.target.value),
    },
  ];

  const textArea: TextArea = {
    placeholder: "Message",
    onChange: (e) => setMessage(e.target.value),
  };

  const submitBtn: SubmitBtn = {
    value: "Send",
  };

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      nameInput,
      emailInput,
      phoneInput,
      zipInput,
      hospitalName,
      message,
    });
    if (
      !nameInput ||
      !emailInput ||
      !phoneInput ||
      !zipInput ||
      !hospitalName ||
      !message
    ) {
      return console.log("missing data");
    }

    fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: nameInput,
        email: emailInput,
        phone: phoneInput,
        zip: zipInput,
        hospitalName: hospitalName,
        message: message,
      }),
    })
      .then((res) => {
        console.log("email res", res);
        if (!res.ok) {
          return console.log("something went wrong");
        }
        console.log("success");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <Head>
        <title>
          Member Hospital | North Springs Veterinary Referral Center
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Transforming the veterinary experience through empathy and transparency Opening Summer 2023! Stay in the Know! Subscribe to our newsletter to receive the latest information and news about our Grand Opening!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          homepage={false}
          heading="Member Hospital Network"
          imageURL="/member-network-banner.jpeg"
        />
        <div className={s.container}>
          <div className={s.textContainer}>
            <h3 className={s.title}>How it Works</h3>
            <h5 className={s.info}>
              We are excited to partner with local veterinarians to bring top
              quality care to their patients, as well as provide educational
              resources to their teams!
            </h5>
            <h5 className={s.info}>
              When we treat patients who do not have primary care DVMs (pcDVM),
              we will recommend providers in our Member Hospital Network (MHN).
            </h5>
            <h5 className={s.info}>
              In order to join, North Springs Veterinary Referral Center must be
              the primary emergency and specialty hospital you advertise online,
              in-print, over the phone, and in-person.
            </h5>
          </div>
        </div>
        <div className={s.container}>
          <div className={s.join}>
            <div className={s.joinText}>
              <div className={s.benefits}>
                <h3 className={s.joinTitle}>Benefits for Providers</h3>
                <ul className={s.joinList}>
                  <li>
                    Direct contact with Dr. Ganzer, CEO, and extra effort taken
                    to communicate in manner requested.
                  </li>
                  <li>
                    Access to continuing education & specialty consultations.
                  </li>
                  <li>
                    Member Hospitals receive an eNewsletter with hospital
                    updates and CE information.
                  </li>
                  <li>
                    Opportunity to be featured as our Member Hospital of the
                    Month in our eNewsletter and social media channels to help
                    lift up our local veterinarians.
                  </li>
                  <li>
                    Featured Member Hospitals will also receive a gift basket
                    for their team to enjoy.
                  </li>
                </ul>
              </div>
              <h3 className={s.joinTitle}>Benefits for Clients</h3>
              <ul className={s.joinList}>
                <li>
                  Clients receive 30% off the exam fee and 10% discount on all
                  other services.
                </li>
                <li>
                  Complimentary treatment of vaccine reactions for any vaccine
                  given by any Member Hospital.
                </li>
                <li>
                  There will be an option for overnight post surgical
                  care/hospitalization with a flat rate for the Member Hospitals
                  to offer clients if a pet needs extra monitoring after a
                  procedure at the GP’s office.
                </li>
                <li>
                  Post surgical transfer care includes:
                  <ul className={s.joinList}>
                    <li>Complimentary examination</li>
                    <li>Hospitalization for 14 hours (5pm – 8am MT)</li>
                    <li>Fluids</li>
                    <li>PCV/TS/Lytes/BG once overnight</li>
                    <li>Pain management</li>
                    <li>Antibiotic injections</li>
                    <li>GI protectants/other miscellaneous medications</li>
                  </ul>
                </li>
              </ul>
            </div>
            <Form
              inputs={inputs}
              onSubmit={handleSendEmail}
              textarea={textArea}
              submitBtn={submitBtn}
            >
              <h4 className={s.formTitle}>Join the Member Hospital Network</h4>
              <p className={s.formDetails}>
                While North Springs VRC will accept any patient to provide
                emergency and specialty care, we also partner with local
                veterinarians to offer unique benefits to their clients and
                staff.
              </p>
              <p className={s.formDetails}>
                Fill out our contact form to learn more about how to join our
                Network and the benefits that Member Hospitals can receive, or
                email our team at{" "}
                <Link
                  className={s.link}
                  href="mailto:memberhospital@northspringsvrc.com"
                >
                  memberhospital@northspringsvrc.com
                </Link>
              </p>
            </Form>
          </div>
        </div>
        <div className={s.container}>
          <h3 className={`${s.title} ${s.memberTitle}`}>
            Member Hospital Network Pricing Guide
          </h3>

          <div className={s.pricing}>
            <div className={s.imgContainer}>
              <Image
                src="/dog-member-hospital-network.jpg"
                alt="dog"
                width={348}
                height={533}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className={s.pricingText}>
              <p className={s.bold}>
                This Pricing Guide is intended for Member Hospitals to provide
                their clients general pricing ranges of various emergency and
                specialty services.
              </p>
              <p className={s.standard}>
                Pricing can vary and will depend on their pet’s unique
                situation. After an initial examination, clients will receive an
                estimate based on the DVM’s recommendations.
              </p>
              <p className={s.standard}>
                <span className={s.bold}>Examination:</span> $125 | $90 for
                Member Hospitals
              </p>
              <p className={s.standard}>
                <span className={s.bold}>Overnight hospitalization:</span>
                $1500-2000
              </p>
              <p className={s.standard}>
                <span className={s.bold}>
                  Uncomplicated abdominal exploratory (with 24 hours post op):
                </span>
                $5000-7000
              </p>
              <p className={s.standard}>
                <span className={s.bold}>Laceration repair:</span>
                $1000-1800
              </p>
              <p className={s.standard}>
                <span className={s.bold}>
                  Initial stabilization of a critical emergency:
                </span>
                $1000-2000(initial 1 to 2 hours, not long term care)
              </p>
              <p className={s.standard}>
                <span className={s.bold}>Blood/plasma transfusion:</span>
                $1200-1600(not including hospitalization/aftercare)
              </p>
              <p className={s.standard}>
                <span className={s.bold}>
                  Parvo Treatment (initial 24 hours ):
                </span>
                $2500
              </p>
              <p className={s.standard}>
                <span className={s.bold}>
                  Parvo Treatment (following hospitalization):
                </span>
                $1500-2000/day (avg hospitalization is 3-5 days)
              </p>
              <p className={s.standard}>
                <span className={s.bold}>C-section:</span>
                $4000-6000
              </p>
              <p className={s.standard}>
                <span className={s.bold}>Baseline diagnostics:</span>
                $650(radiographs, CBC, chem, lytes, UA)
              </p>
            </div>
          </div>
        </div>
        <NewsletterForm
          inHero={false}
          heading="Stay in the Know!"
          description="Stay up to date and receive the the latest information and news about our
                Grand Opening, added services, specialties, new hires, events and more!"
        />
      </main>
    </>
  );
}
