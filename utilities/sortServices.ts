import { ServiceDetail } from "@/types/serviceDetail.type";

export const sortServices = (services: ServiceDetail[]): ServiceDetail[] => {
  return services.sort((a, b) => {
    if (a.comingSoon && !b.comingSoon) {
      return 1;
    }
    if (!a.comingSoon && b.comingSoon) {
      return -1;
    }
    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
  });
};
