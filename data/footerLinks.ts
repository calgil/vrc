export type FooterLink = {
  label: string;
  url: string;
};

export type FooterLinkColumn = {
  columnName: string;
  links: FooterLink[];
};

export const footerLinks: FooterLinkColumn[] = [
  {
    columnName: "Services",
    links: [
      { label: "Anesthesiology", url: "/services#anesthesiology" },
      { label: "Cardiology", url: "/services#cardiology" },
      {
        label: "Diagnostic Imaging and In-House Laboratory",
        url: "/services#imaging",
      },
      { label: "Emergency", url: "/services#emergency" },
      { label: "Exotics", url: "/services#exotics" },
      {
        label: "Internal Medicine",
        url: "/services#internal-medicine",
      },
      { label: "Rehab", url: "/services#rehab" },
      { label: "Surgery", url: "/services#surgery" },
    ],
  },
  {
    columnName: "For Veterinarians",
    links: [
      { label: "Join Our Network", url: "/veterinarians" },
      { label: "Education Center", url: "/veterinarians" },
      { label: "Referral Intake", url: "/veterinarians" },
    ],
  },
  {
    columnName: "For Pet Owners",
    links: [
      { label: "Frequently Asked Questions", url: "/owners" },
      { label: "Education Center", url: "/owners" },
      { label: "Video Streaming", url: "/owners" },
      { label: "Pharmacy", url: "/owners" },
    ],
  },
  {
    columnName: "About Us",
    links: [
      { label: "Our Story", url: "/about" },
      { label: "Our Team", url: "/about" },
      { label: "Vision & Values", url: "/about" },
      { label: "News & Events", url: "/about" },
      { label: "Careers", url: "/about" },
    ],
  },
];
