// lib
import { useRouter, NextRouter } from "next/router";
import Link from "next/link";
import { Box, Stack, Link as ChakraLink, Button, Icon } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

// nav items
import { NavItemType } from "../NAV_ITEMS";

type Props = {
  nav: NavItemType[];
};

const DesktopNav = ({ nav }: Props) => {
  // router
  const router: NextRouter = useRouter();

  // session
  const { data: session } = useSession();

  return (
    <>
      <Stack direction={"row"} spacing={4}>
        {nav.map((navItem: NavItemType) => (
          <Box key={navItem.label} display="flex" alignItems="center">
            {navItem.label === "Account" ? (
              !session ? (
                <Button
                  variant="solid"
                  bg="#010100"
                  color="#d8bda9"
                  _hover={{
                    background: "#2B2929",
                    color: "#D8BDA9E7",
                  }}
                  onClick={() => signIn()}
                >
                  Get Started
                </Button>
              ) : (
                <>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Box bg="#010100" color="#d8bda9" p={2} borderRadius={5}>
                      Hi 👋,{" "}
                      {[
                        session?.user?.name?.split(" ")[0],
                        session?.user?.name?.split(" ")[1],
                      ].join(" ")}
                    </Box>

                    <Button
                      variant="solid"
                      bg="#010100"
                      color="#d8bda9"
                      marginLeft="2vw"
                      _hover={{
                        background: "#2B2929",
                        color: "#D8BDA9E7",
                      }}
                      onClick={() => signOut()}
                    >
                      Logout
                    </Button>
                  </Box>
                </>
              )
            ) : (
              <>
                <Link href={navItem.href}>
                  <ChakraLink
                    p={2}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={
                      router.pathname === navItem.href ? "#010100" : "#01010092"
                    }
                    _hover={{
                      textDecoration: "none",
                      color: "#010100",
                    }}
                  >
                    {navItem.label}
                  </ChakraLink>
                </Link>
              </>
            )}
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default DesktopNav;
