export const renderDoctorBio = (bio: string) =>
  bio.split("\n").map((paragraph, i) => <p key={i}>{paragraph}</p>);
