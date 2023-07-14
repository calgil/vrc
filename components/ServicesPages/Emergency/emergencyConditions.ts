export const emergencyConditions: string[] = [
  "Gastric Dilatation and Volvulus (GDV)",
  "Splenectomy",
  "Emergency Gastrointestinal Surgery",
  "Mesenteric/Colonic Torsion Surgery",
  "Wound Repair",
  "Pyometra Surgery",
  "Cesarean Section",
].sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
