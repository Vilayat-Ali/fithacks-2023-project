import { useSession } from "next-auth/react";

export interface NavItemType {
  label: string;
  href: string;
}

export const NAV_ITEMS: Array<NavItemType> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Account",
    href: "/account",
  },
];

export const giveNavItems = () => {};
