export const cardiologyConditions: string[] = [
  "Arrhythmias",
  " Arterial Thromboemboli",
  "Cardiac Tumors",
  "Cardiomyopathies",
  "Congenital Heart Defects",
  "Endocarditis",
  "Myxomatous Valve Disease",
  "Pulmonary Hypertension",
].sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
