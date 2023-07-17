import s from "../../styles/components/ServicesPages/CommonConditions.module.scss";

type CommonConditionsProps = {
  title: string;
  conditions: string[];
  numColumns: number;
};

export const CommonConditions = ({
  title,
  conditions,
  numColumns,
}: CommonConditionsProps) => {
  const columns = conditions.reduce((acc, string, i) => {
    const columnIndex = i % numColumns;
    return [
      ...acc.slice(0, columnIndex),
      [...(acc[columnIndex] || []), string],
      ...acc.slice(columnIndex + 1),
    ];
  }, [] as string[][]);

  return (
    <div className={s.container}>
      <h4 className={s.title}>{title}</h4>
      <div className={s.conditions}>
        {columns.map((list, i) => (
          <ul className={s.column} key={i}>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
