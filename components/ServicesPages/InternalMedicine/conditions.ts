export const internalMedicineConditions: string[] = [
  "Respiratory Disease",
  "Endocrine Disease",
  "Gastrointestinal Disease",
  "Hematologic Disorders",
  "Immune-Mediated Disease",
  "Kidney Diseases",
  "Pulmonary Hypertension",
].sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
