// lib
import { Flex, Text, Stack, Link } from "@chakra-ui/react";

// nav items
import { NavItemType } from "../NAV_ITEMS";

const MobileNavItem = ({ label, href }: NavItemType) => {
  return (
    <>
      <Stack spacing={4}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
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
