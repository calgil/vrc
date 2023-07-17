export const softTissueConditions: string[] = [
  "Gallbladder (cholecystectomy)",
  "Hepatic (Liver lobectomy)",
  "Gastrointestinal surgeries",
  "Splenectomy",
  "Complicated wound repair & management",
  "Complicated mass removals",
  "Skin grafts",
  "Cryptorchidism and testicular torsion",
  "Cystotomy",
  "Urethral surgery (penile urethrostomy, urethral tear)",
].sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));

export const thoracicConditions: string[] = [
  "Thoracotomy",
  "Lung Lobectomy",
  "Pericardectomy",
].sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));

export const orthopedicConditions: string[] = [
  "Fracture repairs",
  "Arthrodesis",
  "Ligament rupture",
  "Cruciate repair",
  "Amputation",
  "Patellar Luxation surgery",
].sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
