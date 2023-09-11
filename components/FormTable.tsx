import s from "../styles/components/FormTable.module.scss";

type formRow = {
  title: string;
  description: string;
  link: string;
};

const formTableData: formRow[] = [
  {
    title: "Specialty Client Request Appointment",
    description:
      "Complete this form to make an appointment with one of our specialists.",
    link: "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAk9Tzg-HLl9mewn5Z8E9d1-5N0sLPEHO8rZzdRV5uWG2fPeZIpx92lHmGMw_IUQ9k*",
  },
  {
    title: "Specialty Re-Check",
    description: "Complete this form prior to your appointment.",
    link: "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhD0fuR7HN3PlZMDbNSBHwPtTVaBQl7mgmgpiL6IO5Hw6hSKiliz0ZHg5HKGCrJXj3k*",
  },
];

export const FormTable = () => (
  <section className={s.tableContainer}>
    <table className={s.table}>
      <thead>
        <tr className={s.row}>
          <th className={s.heading}>Forms You May Need</th>
          <th className={s.subHeading}>Form Link</th>
        </tr>
      </thead>
      <tbody>
        {formTableData.map((form) => (
          <tr key={form.title} className={s.row}>
            <td className={s.formData}>
              <p className={s.formTitle}>{form.title}</p>
              <p className={s.formDescription}>{form.description}</p>
            </td>
            <td className={s.formLink}>
              <a
                className={s.link}
                href={form.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {form.title} Form
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
