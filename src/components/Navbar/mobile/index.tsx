// lib
import { Flex, Text, Stack, Link } from "@chakra-ui/react";

// nav items
import { NAV_ITEMS, NavItemType } from "../NAV_ITEMS";

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

const MobileNav = () => {
  return (
    <>
      <Stack bg={"#d8bda9"} p={4} display={{ md: "none" }}>
        {NAV_ITEMS.map((navItem: NavItemType) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </>
  );
};

export default MobileNav;
