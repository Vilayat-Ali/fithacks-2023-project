// lib
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Box, Input, SimpleGrid, Stack, VStack } from "@chakra-ui/react";

// components
import Banner from "@/components/Banner";
import Heading from "@/components/Heading";
import StatCard from "@/components/Cards/StatCard";
import PageWrapper from "@/components/PageWrapper";
import TrainingPlanCard from "@/components/Cards/TrainingPlanCard";
import AddPlanCard from "@/components/Cards/AddPlanCard";

type Props = {};

const PlanDescription = (props: Props) => {
  // router
  const router = useRouter();
  const { planId } = router.query;

  return (
    <PageWrapper
      title="Training"
      description=""
      keywords={[]}
      isProtected={true}
    >
      <Box w={{ base: "95%", md: "90%" }} mx={"auto"}>
        <Banner pageStack={["Training", "Plan", planId as string]} />
      </Box>
    </PageWrapper>
  );
};

export default PlanDescription;
