export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Assessments",
    href: "/assessments",
  },
  {
    label: "Tools",
    href: "/tools",
  },
  {
    label: "Standards Hub",
    href: "/standards",
  },
];