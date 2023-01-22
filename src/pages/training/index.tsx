// lib
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Box, Input, SimpleGrid, Stack, VStack, Text } from "@chakra-ui/react";
import { appWriteController } from "@/appWrite/interface";

// components
import Banner from "@/components/Banner";
import Heading from "@/components/Heading";
import StatCard from "@/components/Cards/StatCard";
import PageWrapper from "@/components/PageWrapper";
import TrainingPlanCard from "@/components/Cards/TrainingPlanCard";
import AddPlanCard from "@/components/Cards/AddPlanCard";

const Training = () => {
  // states
  const { data: session } = useSession();
  const [plans, setPlans] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const makeRequest = async () => {
      const documents = await appWriteController.fetchTrainingPlan(
        session?.user?.email!
      );

      setPlans(documents);

      console.log(documents);
    };
    makeRequest();
  }, []);

  return (
    <PageWrapper
      title="Training"
      description=""
      keywords={[]}
      isProtected={true}
    >
      <Box w={{ base: "95%", md: "90%" }} mx={"auto"}>
        <Banner pageStack={["Training"]} />

        <Heading title="Stats" />
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={2} mb={10}>
          <StatCard title="Total Training Plans ✅" stat={plans.length} />
          <StatCard title="Highest Streak 🚀" stat={12} />
          <StatCard title="Current Streak 🤘" stat={0} />
          <StatCard
            title="Most Used Plan 🙌"
            stat={plans.length >= 1 ? plans[0]?.name : ""}
          />
        </SimpleGrid>

        <Heading title="Training Plans" />
        <Stack
          direction={{ base: "column", md: "row" }}
          w={"100%"}
          justifyContent="space-between"
        >
          <Box w={{ base: "60%", md: "20%" }}>
            <AddPlanCard />
          </Box>
          <Input
            placeholder="Search by name"
            w={{ base: "100%", md: "50%" }}
            onChange={(e: any) => setSearchText(e.target.value)}
          />
        </Stack>

        <VStack width="100%" spacing={4} my={4}>
          {plans.length !== 0 ? (
            <>
              {plans
                .filter((plan: any) => {
                  if (searchText !== "") {
                    if (
                      plan.name.toLowerCase().includes(searchText.toLowerCase())
                    ) {
                      return plan;
                    }
                  }
                  if (searchText === "") {
                    return plan;
                  }
                })
                .reverse()
                .map((plan: any, key: number) => {
                  const steps = JSON.parse(plan?.steps);
                  console.log(steps);
                  return (
                    <TrainingPlanCard
                      key={key}
                      id={plan?.$id}
                      name={plan?.name}
                      stepCount={steps?.length}
                      description={plan?.description}
                    />
                  );
                })}
            </>
          ) : (
            <Box my={"20vh"}>
              <Text>No Plans to display</Text>
            </Box>
          )}
        </VStack>
      </Box>
    </PageWrapper>
  );
};

export default Training;
