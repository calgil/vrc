import { LinkCard } from "@/types/linkCard.type";

export const homeLinkCards: LinkCard[] = [
  {
    url: "/emergency",
    bgUrl: "/pages/home/cardBg/emergencyBg.webp",
    bgColor: "rgba(154, 48, 64, 0.85)",
    text: "Emergency Services",
  },
  {
    url: "/services/#anesthesiology",
    bgUrl: "/pages/home/cardBg/specialtyBg.webp",
    bgColor: "rgba(111, 113, 168, 0.85)",
    text: "Specialty Service",
  },
  {
    url: "/veterinarians",
    bgUrl: "/pages/home/cardBg/vets.webp",
    bgColor: "rgba(37, 37, 37, 0.85)",
    text: "For Referring Veterinarians",
  },
  {
    url: "/owners",
    bgUrl: "/pages/home/cardBg/owners.webp",
    bgColor: "rgba(1, 109, 118, 0.85)",
    text: "For Pet Owners",
  },
];
