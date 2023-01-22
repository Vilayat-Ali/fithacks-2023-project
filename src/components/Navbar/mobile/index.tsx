// lib
import Link from "next/link";
import { Flex, Text, Stack } from "@chakra-ui/react";

// nav items
import { NavItemType } from "../NAV_ITEMS";

const MobileNavItem = ({ label, href }: NavItemType) => {
  return (
    <>
      <Link href={href}>
        <Stack spacing={4}>
          <Flex
            py={2}
            justify={"space-between"}
            align={"center"}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text fontWeight={600} color={"#010100"}>
              {label}
            </Text>
          </Flex>
        </Stack>
      </Link>
    </>
  );
};

const MobileNav = ({ nav }: { nav: NavItemType[] }) => {
  return (
    <>
      <Stack bg={"#d8bda9"} p={4} display={{ md: "none" }}>
        {nav
          .filter((navItem: NavItemType) => navItem.label !== "Account")
          .map((navItem: NavItemType) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
      </Stack>
    </>
  );
};

export default MobileNav;
