import { ServiceDetail } from "@/types/serviceDetail.type";

export const internalServices: ServiceDetail[] = [
  {
    title: "Specialized Blood Work",
    content: `Our Internal Medicine team has extensive training performing and interpreting specialized blood work that may not be available at all primary care veterinary offices. These tests are helpful in evaluating the nuances of each condition and individual pet to elevate the level of care that can be provided.`,
  },
  {
    title: "Blood Pressure Measurement and Monitoring",
    content: `Many disease states affecting the body can lead to high or low blood pressure. Measuring and monitoring blood pressure is important to help minimize potential complications in certain disease states. It also allows us to ensure that the treatment plans in place are working according to plan or may suggest that changes need to be made.`,
  },
  {
    title: "Digital Radiographs (X-rays)",
    content: `X-rays performed on various regions of the body depending on your pet’s symptoms can broadly identify the diseased area and help guide additional tests that need to be performed to diagnose your pet’s disease and target therapy.`,
  },
  {
    title: "Ultrasonography (Ultrasound)",
    content: `Ultrasound waves are used to non-invasively image the abdominal and thoracic cavities for signs of diseased tissue that may be causing your pet’s symptoms. This test provides greater detail compared to  x-rays. This procedure can typically be performed without sedation; occasionally, light sedation is necessary.`,
  },
  {
    title: "Arthrocentesis and Joint Fluid Analysis",
    content: `Joint pain/swelling can happen for a number of reasons in pets. This procedure involves sampling of fluid from one or more joints and analyzing it to better understand why your pet has joint pain/swelling.`,
  },
  {
    title: "Bone Marrow Analysis; Biopsy and Aspirates",
    content: `Blood cell disorders can occur due to a lack of production, over production or destruction by the bone marrow. Bone marrow aspirates and biopsies can better characterize the cause of the blood cell disorder.`,
  },
  {
    title: "Airway Sampling; Bronchoalveolar Lavage and Endotracheal Washes",
    content: `Sampling the airway involves depositing sterile fluid into the airways then collecting it to analyze what cell types and infectious agents may be present.`,
  },
  {
    title: "Free Fluid Collection (abdominocentesis, thoracocentesis)",
    content: `These procedures involve using a needle or catheter to remove free fluid from within the abdomen (abdominocentesis) or chest (thoracocentesis). Accumulation of fluid in the body cavities can occur for a variety of reasons.`,
  },
  {
    title: "Ultrasound-Guided Aspirates",
    content: `This technique involves using ultrasound to guide sampling of diseased tissue to evaluate it under a microscope. `,
  },
  {
    title: "Upper GI (gastroduodenoscopy)",
    content: `Performed when your pet has disease of the esophagus, stomach and small intestines.`,
  },
  {
    title: "Colonoscopy",
    content: `Performed when your pet has disease of the colon.`,
  },
  {
    title: "Rhinoscopy",
    content: `Performed when your pet has disease of the nasal passages.`,
  },
  {
    title: "Bronchoscopy",
    content: `Performed when your pet has disease of the airways.`,
  },
  {
    title: "Urethroscopy and Cystoscopy",
    content: `Performed when your pet has disease of the urinary bladder or urethra.`,
  },
  {
    title: "Esophageal ballooning",
    content: `This procedure may be performed when there is a narrowing of the esophagus inhibiting passage of food and water into the stomach.`,
  },
  {
    title: "Foreign body retrieval (gastric and esophageal)",
    content: `Let’s face it, animals eat dumb stuff sometimes. If the inappropriate item remains within the esophagus or stomach, it may be able to be removed using an endoscopic technique to avoid surgery.`,
  },
  {
    title:
      "Feeding Tube Placement (nasal, esophageal) and Nutritional Management",
    content: `Many pets that are ill either cannot, or will not eat. The placement of feeding tubes with individual nutritional plans will help them recover from their illness as fast as possible and will provide the ability to administer medications easily at home.`,
  },
  {
    title: "Blood Component Therapy",
    content: `This is a separation of whole blood into its individual components that are given to your pet from a donor animal to optimize individual therapeutic success based on their disease process.`,
  },
  {
    title: "Computed tomography (CT) scan",
    content: `A CT scan is used when more advanced imaging is required to diagnose and/or treat your pets illness. It uses x-rays beams in multiple planes to create a detailed image of your pets body. This requires heavy sedation or general anesthesia.`,
    comingSoon: true,
  },
  {
    title: "Radioactive Iodine Therapy (I-131)",
    content: `I-131 Therapy is performed in cats with hyperthyroidism (overproduction of thyroid hormone). It is intended to be a permanent treatment for hyperthyroidism without the use of long term oral medications and is effective in 95% of cases. The treatment involves injection of a radioactive isotope that specifically targets overactive thyroid tissue and eliminates it thus returning your cat’s thyroid hormone level back to normal. `,
    comingSoon: true,
  },
].sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
