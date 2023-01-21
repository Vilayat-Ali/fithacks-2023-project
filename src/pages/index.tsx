// lib
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

// components
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <PageWrapper
        title="Home"
        description="FitBoltz is a unique gym planner application created for FitHacks 2023 Hackathon hosted by MLH."
        keywords={["GYM Planner application", "hackathon project"]}
      >
        <Stack
          minH={{ base: "100vh", md: "90vh" }}
          direction={{ base: "column", md: "row" }}
        >
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text
                  as={"span"}
                  position={"relative"}
                  color="#010100"
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "#d8bda9",
                    zIndex: -1,
                  }}
                >
                  Fitniz
                </Text>
                <br />{" "}
                <Text color={"#d8bda9"} as={"span"}>
                  Plan Your Next Move
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                Fitniz is a next gen gym planner application that let&apos;s you
                plan your next move when you need it the most.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                {session ? (
                  <>
                    <Link href="/dashboard">
                      <Button
                        rounded={"full"}
                        bg="#010100"
                        color="#d8bda9"
                        _hover={{
                          background: "#2B2929",
                          color: "#D8BDA9E7",
                        }}
                      >
                        Go Dashboard
                      </Button>
                    </Link>

                    <Link href="/stats">
                      <Button rounded={"full"}>Analyze Stats</Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Button
                      rounded={"full"}
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
                    <Button rounded={"full"}>Know More</Button>
                  </>
                )}
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={"Login Image"}
              objectFit={"cover"}
              src="/images/index-bg.jpg"
            />
          </Flex>
        </Stack>
      </PageWrapper>
    </>
  );
}
