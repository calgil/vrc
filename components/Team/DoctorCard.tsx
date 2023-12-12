import { DoctorData } from "@/types/doctorData.type";
import Image from "next/image";
import s from "../../styles/components/Team/DoctorCard.module.scss";
import Link from "next/link";
import { doctors } from "@/data/team/doctors";

type DoctorCardProps = {
  doctorId: number;
};
export const DoctorCard = ({ doctorId }: DoctorCardProps) => {
  console.log({ doctorId });

  const doctor = doctors.find((doctor) => doctor.id === doctorId);

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const { id, name, imgUrl, title } = doctor as DoctorData;
  return (
    <div className={s.cardBody}>
      <Image src={imgUrl} alt={name} width={280} height={280} />
      <p className={s.name}>{name}</p>
      <p className={s.position}>{title}</p>
      <Link className={s.profileLink} href={`/about/team/${id}`}>
        View Profile
      </Link>
    </div>
  );
};
