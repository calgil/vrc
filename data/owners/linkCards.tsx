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
    url: "",
    bgUrl: "/pages/home/cardBg/specialtyBg.webp",
    bgColor: "rgba(111, 113, 168, 0.85)",
    text: "Clinic Cameras",
    external: false,
  },
  {
    url: "https://covetrusrx.zendesk.com/hc/en-us/articles/360038804991-Website-Shop-Now-Buttons&utm_source=redirect",
    bgUrl: "/pages/home/cardBg/vets.webp",
    bgColor: "rgba(37, 37, 37, 0.85)",
    text: "Online Pharmacy",
    external: true,
  },
];
