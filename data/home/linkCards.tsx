import { LinkCard } from "@/types/linkCard.type";

export const homeLinkCards: LinkCard[] = [
  {
    url: "/owners",
    bgUrl: "/pages/home/cardBg/owners.webp",
    bgColor: "rgba(1, 109, 118, 0.85)",
    text: "For Pet Owners",
    external: false,
  },

  {
    url: "/services/#anesthesiology",
    bgUrl: "/pages/home/cardBg/specialtyBg.webp",
    bgColor: "rgba(111, 113, 168, 0.85)",
    text: "Specialty Service",
    external: false,
  },
  {
    url: "/veterinarians",
    bgUrl: "/pages/home/cardBg/vets.webp",
    bgColor: "rgba(37, 37, 37, 0.85)",
    text: "For Referring Veterinarians",
    external: false,
  },
  {
    url: "/emergency",
    bgUrl: "/pages/home/cardBg/emergencyBg.webp",
    bgColor: "rgba(154, 48, 64, 0.85)",
    text: "Emergency Services",
    external: false,
  },
];
