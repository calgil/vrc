import { useEffect, useState } from "react";
import { DoctorCard } from "./DoctorCard";
import s from "../../styles/components/Team/SelectedTeam.module.scss";
import {
  erTeam,
  internalMedTeam,
  management,
  surgeryRehabTeam,
} from "@/data/team/doctors";

type SelectedTeamProps = {
  activeTeam: string;
};

export const SelectedTeam = ({ activeTeam }: SelectedTeamProps) => {
  const [teamData, setTeamData] = useState<number[]>();

  console.log({ activeTeam });

  useEffect(() => {
    // TODO: Either move this logic to a different function or clean it up/build out
    switch (activeTeam) {
      case "emergency":
        setTeamData(erTeam);
        break;
      case "rehabilitation":
        setTeamData(surgeryRehabTeam);
        break;
      case "internal-medicine":
        setTeamData(internalMedTeam);
        break;
      case "management":
        setTeamData(management);
        break;
    }
  }, [activeTeam]);

  return (
    <div className={s.selectedTeam}>
      {teamData?.map((id) => (
        <DoctorCard key={id} doctorId={id} />
      ))}
    </div>
  );
};
