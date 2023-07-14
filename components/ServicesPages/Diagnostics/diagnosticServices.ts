import { ServiceDetail } from "@/types/serviceDetail.type";

export const diagnosticServices: ServiceDetail[] = [
  {
    title: "Element Point of Care (EPOC) Blood Analysis System",
    content: `This is a handheld, bedside blood analysis machine that accurately evaluates chemistry, hematology, acid-base, blood gas, and electrolytes in less than one minute`,
  },
  {
    title: "Additional Bedside Testing",
    content: `Giardia, parvovirus, tick borne disease, heartworm disease, FeLV/FIV, NT-pro BNP, blood glucose, lactate, and many more rapid SNAP tests`,
  },
  {
    title: "Standard and Specialized Analysis Systems",
    content: `Top of the line analysis systems that perform common blood testing such as complete blood counts and chemistry panels, as well as urinalysis, fecal testing, blood smears, fluid analysis, cytologic/aspiration evaluation, and advanced blood testing.`,
  },
  {
    title: "Reference Laboratories",
    content: `Veterinary specific diagnostic labs and teaching hospitals will be utilized for specialized testing that is not available on standard analysis machines in-house.`,
  },
  {
    title: "Diagnostic Imaging",
    content: `The hospital is equipped with state of the art digital radiography and ultrasonography machines. A board-certified Radiologist is available for outpatient ultrasound appointments and evaluation of hospitalized patients.

    Image interpretation performed by an in-house board-certified Radiologist or after hours tele-radiology. 
    
    Endoscopy/Bronchoscopy are procedures performed with a specialized camera designed to enter your pets body through natural openings. This will allow visualization and sampling of tissue, as well as foreign material retrieval from the upper gastrointestinal tract.
    
    Emergency focused and point of care ultrasounds for rapid disease diagnosis.
    `,
  },
  {
    title: "Computed Tomography (CT)",
    content: `A CT scan is used when more advanced imaging is required to diagnose and/or treat your pets illness. It uses x-rays beams in multiple planes to create a detailed image of your pets body. This requires heavy sedation or general anesthesia.`,
    comingSoon: true,
  },
  {
    title: "Fluoroscopy",
    content: `Fluoroscopy uses x-ray technology to capture moving tissues in the body in real time. This technology can be used for the diagnosis of certain disease states as well as in surgery to aid in treating a variety of orthopedic, soft tissue, and cardiac diseases.`,
    comingSoon: true,
  },
  {
    title: "Urethroscopy",
    content: `This is the use of a specialized camera inserted into the urinary system to identify and treat complex urinary tract diseases.`,
    comingSoon: true,
  },
].sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
