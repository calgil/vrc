import { doctors } from "@/data/team/doctors";

export const getDoctorById = (id: number) => {
  return doctors.find((doctor) => doctor.id === id) || null;
};
