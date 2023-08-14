import { LinkCard } from "@/types/linkCard.type";

export const ownerLinkCards: LinkCard[] = [
  {
    url: "/education",
    bgUrl: "/pages/home/cardBg/emergencyBg.webp",
    bgColor: "rgba(154, 48, 64, 0.85)",
    text: "Education Center",
    external: false,
  },
  {
    url: "/education",
    bgUrl: "/pages/home/cardBg/specialtyBg.webp",
    bgColor: "rgba(111, 113, 168, 0.85)",
    text: "Clinic Cameras",
    external: false,
  },
  {
    url: "https://northspringsvrc.vetsfirstchoice.com/",
    bgUrl: "/pages/home/cardBg/vets.webp",
    bgColor: "rgba(37, 37, 37, 0.85)",
    text: "Online Pharmacy",
    external: true,
  },
];
