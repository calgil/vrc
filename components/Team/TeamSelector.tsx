import s from "../../styles/components/Team/TeamSelector.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(s);

type TeamSelectorProps = {
  activeTeam: string;
  changeTeam: (team: string) => void;
};

export const TeamSelector = ({ activeTeam, changeTeam }: TeamSelectorProps) => {
  console.log({ activeTeam });

  type TeamLink = {
    text: string;
  };
  const teamLinks: TeamLink[] = [
    { text: "Anesthesiology" },
    { text: "Cardiology" },
    { text: "Diagnostics" },
    { text: "Emergency" },
    { text: "Exotics" },
    { text: "Internal Medicine" },
    { text: "Rehabilitation" },
    { text: "Surgery" },
  ];
  return (
    <div className={s.selectContainer}>
      <div className={s.sidebar}>
        <ul className={s.links}>
          {teamLinks.map((link) => (
            <li
              key={link.text}
              className={cx({ link, active: link.text === activeTeam })}
              onClick={() => {
                changeTeam(link.text);
              }}
            >
              {link.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
