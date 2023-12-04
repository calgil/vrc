import { TeamSelector } from "./TeamSelector";
import s from "../../styles/components/Team/Team.module.scss";
import { useState } from "react";
import { SelectedTeam } from "./SelectedTeam";

export const Team = () => {
  const [activeTeam, setActiveTeam] = useState("emergency");
  return (
    <div className={s.teamContainer}>
      <TeamSelector activeTeam={activeTeam} changeTeam={setActiveTeam} />
      <SelectedTeam activeTeam={activeTeam} />
    </div>
  );
};
