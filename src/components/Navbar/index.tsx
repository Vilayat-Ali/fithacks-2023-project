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
import { useSession } from "next-auth/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// components
import DesktopNav from "@/components/Navbar/desktop";
import MobileNav from "@/components/Navbar/mobile";
import PulsatingAvatar from "@/components/PulsatingAvatar";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const { data: session } = useSession();

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
            <DesktopNav />
          </Box>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              display={{ base: "block", md: "none" }}
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
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
