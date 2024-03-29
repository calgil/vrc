export type FooterLink = {
  label: string;
  url: string;
};

export type FooterLinkColumn = {
  columnName: string;
  mainLink: string;
  links: FooterLink[];
};

export const footerLinks: FooterLinkColumn[] = [
  {
    columnName: "Services",
    mainLink: "/services#anesthesiology",
    links: [
      { label: "Anesthesiology", url: "/services#anesthesiology" },
      { label: "Cardiology", url: "/services#cardiology" },
      {
        label: "Diagnostic Imaging and In-House Laboratory",
        url: "/services#diagnostics",
      },
      { label: "Emergency", url: "/emergency" },
      { label: "Exotics", url: "/services#exotics" },
      {
        label: "Internal Medicine",
        url: "/services#internal-medicine",
      },
      { label: "Rehab", url: "/services#rehabilitation" },
      { label: "Surgery", url: "/services#surgery" },
    ],
  },
  {
    columnName: "For Veterinarians",
    mainLink: "/veterinarians",
    links: [
      { label: "Join Our Network", url: "/member-hospital" },
      { label: "Education Center", url: "/veterinarians" },
      { label: "Referral Intake", url: "/veterinarians" },
    ],
  },
  {
    columnName: "For Pet Owners",
    mainLink: "/owners",
    links: [
      { label: "Frequently Asked Questions", url: "/owners" },
      { label: "Education Center", url: "/owners" },
      { label: "Video Streaming", url: "/owners" },
      { label: "Pharmacy", url: "/owners" },
    ],
  },
  {
    columnName: "About Us",
    mainLink: "/about",
    links: [
      { label: "Our Story", url: "/about" },
      { label: "Our Team", url: "/about/staff" },
      { label: "Vision & Values", url: "/about" },
      { label: "News & Events", url: "/news" },
      { label: "Careers", url: "/about/careers" },
    ],
  },
];
