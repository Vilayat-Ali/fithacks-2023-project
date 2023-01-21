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
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Account",
    href: "/account",
  },
];

export const USER_ITEMS: Array<NavItemType> = [
  {
    label: "Dashboad",
    href: "/dashboard",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "Account",
    href: "/account",
  },
];

export const getNav = (isAuthorized: Boolean) => {
  return isAuthorized ? USER_ITEMS : NAV_ITEMS;
};
