"use client";
import { TeamSelector } from "./TeamSelector";
import s from "../../styles/components/Team/Team.module.scss";
import { useState } from "react";

export const Team = () => {
  const [activeTeam, setActiveTeam] = useState("Anesthesiology");
  return (
    <div className={s.teamContainer}>
      <TeamSelector activeTeam={activeTeam} changeTeam={setActiveTeam} />
      Team!!
    </div>
  );
};
