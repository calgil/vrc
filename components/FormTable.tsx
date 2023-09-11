import s from "../styles/components/FormTable.module.scss";

type formRow = {
  title: string;
  description: string;
  link: string;
  formName?: string;
};

const formTableData: formRow[] = [
  {
    title: "Specialty Initial Consult",
    description:
      "Complete this form prior to your appointment with our specialist.",
    link: "https://na4.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAkXPf0TMV6ciJi982UrS4haahB4-CFD4gdrE1tas81_ebNRkeleGJ8wsOiGQ0RT6E*",
    formName: "Specialty Intake",
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
                {form.formName ? form.formName : form.title} Form
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
