import { Hero } from "@/components/Hero";
import { doctors } from "@/data/team/doctors";
import { DoctorData } from "@/types/doctorData.type";
import { getDoctorById } from "@/utilities/getDoctorByID";
import s from "../../../styles/pages/DoctorPage.module.scss";
import Link from "next/link";
import Image from "next/image";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { renderDoctorBio } from "@/utilities/renderDoctorBio";

type DoctorPageProps = {
  doctor: DoctorData | null;
};

export default function DoctorPage({ doctor }: DoctorPageProps) {
  if (!doctor) {
    return <div>No Doc!</div>;
  }
  const { name, title, profileUrl, bio } = doctor;
  return (
    <main>
      <Hero
        homepage={false}
        bgUrl="/pages/about/team/doctorBanner.webp"
        heading="Meet Our Team"
        subHeading="text?"
      />
      <section className={s.doctorContainer}>
        <Link className={s.backBtn} href="/about/team">
          <FontAwesomeIcon className={s.backArrow} icon={faChevronLeft} />
          Back to Team
        </Link>
        <div className={s.doctorData}>
          {/* TODO: Update data page and remove ternary */}
          {profileUrl ? (
            <Image src={profileUrl} alt={name} width={280} height={500} />
          ) : (
            <p>no profile url</p>
          )}
          <div className={s.docText}>
            <h2 className={s.docName}>{name}</h2>
            <h3 className={s.docTitle}>{title}</h3>
            <p className={s.docBio}>{renderDoctorBio(bio)}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = doctors.map((doctor) => ({
    params: { id: doctor.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const doctorId = parseInt(params.id);
  const doctor = getDoctorById(doctorId);

  return {
    props: {
      doctor,
    },
  };
}
