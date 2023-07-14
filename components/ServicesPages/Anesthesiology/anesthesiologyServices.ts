import { ServiceDetail } from "@/types/serviceDetail.type";

export const anesthesiologyServices: ServiceDetail[] = [
  {
    title: "Preoperative Evaluation",
    content: `Prior to anesthesia, your pet will be evaluated using physical examination, baseline blood testing and x-rays. This ensures that they are safe to undergo anesthesia or guides modifications that need to be made to keep them safe.`,
  },
  {
    title: "Dedicated Anesthetic Nurse",
    content: `Our hospital is fully staffed with registered veterinary nurses.  While your pet is under anesthesia, they will have a dedicated nurse to monitor their vital signs and make adjustments to their protocol as needed.`,
  },
  {
    title: "Positive Pressure Ventilation",
    content: `Many anesthetic agents decrease the automatic drive to breathe. Positive pressure ventilation is used to mechanically provide a breath for your pet to ensure that they are receiving enough oxygen.`,
  },
  {
    title: "Continuous Electrocardiogram (ECG) Monitoring",
    content: `An electrocardiogram monitors the electrical function of the heart. With this tool, our veterinary nurses will ensure that your pet has an appropriate heart rate and rhythm throughout their procedure.`,
  },
  {
    title: "End-Tidal Capnography",
    content: `End-tidal capnography is a tool that monitors the amount of carbon dioxide exhaled with each breath. This is used to assess airway and lung integrity, confirm the endotracheal tube is placed correctly, monitor for intraoperative complications, and ensure that proper gas exchange is happening in the body.`,
  },
  {
    title: "Direct and Indirect Blood Pressure Monitoring",
    content: `Maintaining appropriate blood pressure during anesthesia is important to ensure that all of the organs are getting blood flow. Your pet will be monitored throughout their procedure with indirect measurements of blood pressure using a cuff on a limb, or potentially a direct measurement of blood pressure using a catheter in an artery.`,
  },
  {
    title: "Blood Oxygen Levels",
    content: `Blood oxygen levels can be measured using a non-invasive technique called pulse oximetry. This involves placing a device on the tongue that uses light to sense oxygen levels through the tissue. Blood oxygen can also be assessed by taking a blood sample from an artery and assessing the oxygen levels directly.`,
  },
  {
    title: "Multimodal Approach",
    content: `Our veterinary staff is trained to design anesthetic with a multimodal approach. This involves choosing a combination of injectable and inhaled drugs with different effects on the body. When used together, these drugs result in sedation, induction of anesthesia, and/or pain management. A combination of drugs allows for the lowest dose of each drug to be used to keep pets safe.`,
  },
  {
    title: "Pain Management",
    content: `Through attentive monitoring during anesthesia and the postoperative period, our veterinary staff is trained to detect signs of pain and advocate for our patients to ensure they are comfortable.`,
  },
  {
    title: "Local Anesthetic",
    content: `Local anesthesia is a technique used to numb specific areas that are expedited to be painful during a procedure. Common usages are on skin, specific nerve blocks, or epidurals. This ensures that your pet feels as little pain as possible and allows for lower doses of injectable and inhaled anesthetic agents to be used.`,
  },
  {
    title: "Superior Record Keeping",
    content: `During your pet's procedure, our veterinary staff will keep meticulous records of what drugs were used, what doses were used, and how their body responded to those drugs.  Keeping record of how each individual responds to certain drugs will make each anesthetic event more individualized should additional procedures be needed in the future.`,
  },
].sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
