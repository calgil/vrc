"use client";

import { useEffect, useState } from "react";
import { anesthesiologyTeam } from "@/data/team/anesthesiologyTeam";
import { DoctorCardType } from "@/types/teamData.type";
import { DoctorCard } from "./DoctorCard";
import s from "../../styles/components/Team/SelectedTeam.module.scss";

type SelectedTeamProps = {
  activeTeam: string;
};

export const SelectedTeam = ({ activeTeam }: SelectedTeamProps) => {
  const [teamData, setTeamData] = useState<DoctorCardType[]>();

  useEffect(() => {
    // TODO: Either move this logic to a different function or clean it up/build out
    switch (activeTeam) {
      case "anesthesiology":
        setTeamData(anesthesiologyTeam);
    }
  }, [activeTeam]);

  return (
    <div className={s.selectedTeam}>
      {teamData?.map((doctor, i) => (
        <DoctorCard key={i} doctor={doctor} />
      ))}
    </div>
  );
};
