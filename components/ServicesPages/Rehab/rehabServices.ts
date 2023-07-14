import { ServiceDetail } from "@/types/serviceDetail.type";

export const rehabServices: ServiceDetail[] = [
  {
    title: "Underwater Treadmill",
    content: `Underwater treadmill therapy allows active muscle contraction with minimal weight bearing on bones and joints. Patients with poor standing balance or weakness can stand easily in temperature-controlled water. Skeletal and cardiac muscles may be strengthened with the resistance of the water.`,
  },
  {
    title: "Acupuncture and Dry Needling",
    content: `Veterinary acupuncture involves the insertion of small needles into specific areas of the body to improve blood flow, reduce trigger points (knots of the muscle), and to help the body to release pain relieving substances.`,
  },
  {
    title: "Laser Therapy",
    content: `Laser therapy uses a specific wavelength of light to penetrate through the skin with little heating effects. The light is absorbed by a structure in the cells of the body and converted to additional energy. These changes improve all phases of healing and help relieve pain.`,
  },
  {
    title: "Stance Analyzer",
    content: `During each appointment stance analysis will be used to detect problematic weight shifting patterns (lameness). This technology also allows our team to monitor your pet's rehabilitation progress and guide our treatment recommendations.`,
  },
  {
    title: "Therapeutic Ultrasound",
    content: `Therapeutic ultrasound utilizes sound waves to gently heat the tissues. The heating effects decrease pain, reduce spasm, increase tissue stretch, improve blood flow and tissue healing.`,
  },
  {
    title: "Electrotherapy",
    content: `Electrotherapy uses electricity to target individual muscle groups to improve muscle strength or endurance. TENS unit therapy can also be utilized to provide pain control.`,
  },
  {
    title: "Therapeutic Exercise",
    content: `Therapeutic exercise is a specific program of exercises selected for your individual pet to promote recovery, improve quality of movement, enhance performance, and to improve quality of life.`,
  },
  {
    title:
      "Manual Therapy including Massage, Stretching, and Joint Mobilizations",
    content: `Manual therapy utilizes many hands-on techniques to decrease pain, decrease spasm, improve relaxation, and increase range of motion.`,
  },
  {
    title: "Assistive Device Fittings",
    content: `Assistive devices may be customized or fitted devices designed to improve an individual’s function. They consist of braces, splints, orthotics, prosthetics, harnesses, and wheelchairs.`,
  },
  {
    title: "In Hospital Therapy",
    content: `The Rehabilitation team will take time every day to provide care to hospitalized patients to help them stay comfortable and recover faster to get home to you as soon as possible.`,
  },
].sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
