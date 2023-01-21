// lib
import Image from "next/image";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { useSession, signOut, signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// components
import DesktopNav from "@/components/Navbar/desktop";
import MobileNav from "@/components/Navbar/mobile";
import { NAV_ITEMS, USER_ITEMS, NavItemType } from "./NAV_ITEMS";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [navItem, setNavItem] = useState<NavItemType[]>([]);

  const { data: session } = useSession();

  useEffect(() => {
    const nav = session ? USER_ITEMS : NAV_ITEMS;
    setNavItem(nav);
  }, [session]);

  return (
    <>
      <Box>
        <Flex
          bg="#d8bda9"
          color="#010100"
          minH={"60px"}
          align={"center"}
          py={2}
          paddingX={{ base: "3vw", md: "4vw" }}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Box>
              <Image
                src="/fitniz-logo.png"
                width={50}
                height={50}
                alt="nate-james-logo"
              />
            </Box>
          </Flex>

          <Box display={{ base: "none", md: "block" }}>
            <DesktopNav nav={navItem} />
          </Box>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              display={{ base: "block", md: "none" }}
              variant="solid"
              bg="#010100"
              color="#d8bda9"
              marginLeft="2vw"
              _hover={{
                background: "#2B2929",
                color: "#D8BDA9E7",
              }}
              onClick={() => {
                session ? signOut() : signIn();
              }}
            >
              {session ? "Logout" : "Login"}
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
};

export default Navbar;
