export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
    hasDropdown: true,
  },
  {
    label: "Tools",
    href: "#tools",
  },
  {
    label: "Standards Hub",
    href: "#standards",
    hasDropdown: true,
  },
];