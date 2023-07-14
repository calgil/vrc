import { ServiceDetail } from "@/types/serviceDetail.type";

export const emergencyServices: ServiceDetail[] = [
  {
    title: "Prompt Triage",
    content:
      "Upon arrival at the hospital, your pet will be evaluated by the Emergency team. During that initial evaluation, vital signs and a physical exam will be performed to help the veterinarian understand how quickly your pet needs help.",
  },
  {
    title: "Critical Care",
    content:
      "If your pet is experiencing a life threatening emergency, our Emergency team will act quickly to provide immediate stabilizing care, perform diagnostics to understand the nature of the illness, then nurse them back to health.",
  },
  {
    title: "Urgent Care",
    content:
      "Many illnesses are urgent but, thankfully, not life threatening. When you need urgent help, our team is here to help.",
  },
  {
    title: "In-house Diagnostics",
    content:
      "Standard blood work, urinalysis, fluid analysis, x-rays, and ultrasound evaluations can all be performed within the hospital for same-day results.",
  },
  {
    title: "Send-out Diagnostics",
    content:
      "Our hospital works closely with reference laboratories to utilize board-certified pathologists and highly trained staff to evaluate more specialized diagnostic tests.",
  },
  {
    title: "Hospitalization and Nursing Care",
    content:
      "Leaving your pets in the hospital is stressful. You can feel at ease knowing that our hospital is staffed with skilled veterinary nurses and doctors 24-7. They will receive gold standard, compassionate care throughout their entire stay.",
  },
  {
    title: "Oxygen Therapy",
    content:
      "Our hospital is equipped with cutting edge oxygen kennels for treatment of respiratory emergencies. They are designed to increase the percentage of oxygen surrounding your pet while also controlling temperature and humidity so your pet can rest comfortably as they recover.",
  },
].sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
