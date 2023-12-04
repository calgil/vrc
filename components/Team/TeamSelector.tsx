import s from "../../styles/components/Team/TeamSelector.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(s);

type TeamSelectorProps = {
  activeTeam: string;
  changeTeam: (team: string) => void;
};

export const TeamSelector = ({ activeTeam, changeTeam }: TeamSelectorProps) => {
  type TeamLink = {
    text: string;
    team: string;
  };
  const teamLinks: TeamLink[] = [
    { text: "Emergency", team: "emergency" },
    { text: "Internal Medicine", team: "internal-medicine" },
    { text: "Surgery & Rehabilitation", team: "rehabilitation" },
    { text: "Management", team: "management" },
  ];

  return (
    <>
      <div className={s.selectContainer}>
        <div className={s.sidebar}>
          <ul className={s.links}>
            {teamLinks.map((link) => (
              <li
                key={link.text}
                className={cx({ link, active: link.team === activeTeam })}
                onClick={() => {
                  changeTeam(link.team);
                }}
              >
                {link.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.mobileSidebar}>
        <select
          className={s.mobileSelect}
          onChange={(e) => changeTeam(e.target.value)}
        >
          {teamLinks.map((link) => (
            <option key={link.team} value={link.team}>
              {link.text}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
