import { DoctorCardType } from "@/types/teamData.type";
import Image from "next/image";
import s from "../../styles/components/Team/DoctorCard.module.scss";
import Link from "next/link";

type DoctorCardProps = {
  doctor: DoctorCardType;
};
export const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const { name, imgUrl, position } = doctor;
  return (
    <div className={s.cardBody}>
      <p>{name}</p>
      <Image
        src={imgUrl}
        alt={name}
        width={302}
        height={536.447}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <p>{position}</p>
      <Link href={"/"}>View Profile</Link>
    </div>
  );
};
