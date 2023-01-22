// lib
import Link from "next/link";
import {
  Box,
  Card,
  CardBody,
  VStack,
  Text,
  Button,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { appWriteController } from "@/appWrite/interface";

type Props = {
  id: string;
  name: string;
  description: string;
  stepCount: number;
};

const TrainingPlanCard = ({ id, name, description, stepCount }: Props) => {
  const toast = useToast();

  const deletePlan = async () => {
    try {
      const res = await appWriteController.deleteTrainingPlan(id);
      toast({
        title: `Plan - ${name} deleted successfully...`,
        description: `${name} is removed from store successfully`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err: any) {
      toast({
        title: err,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Card
        position="relative"
        width={{ base: "90vw", md: "60vw" }}
        bg="#E9D9CC"
        color="#010100"
        my={2}
      >
        <CardBody>
          <VStack justifyContent="flex-start" alignItems="baseline">
            <Text
              fontSize={{ base: "4vw", md: "2.5vw" }}
              fontWeight={500}
              mx="auto"
            >
              {name}
            </Text>

            <Box w={"100%"}>
              <Text fontSize={{ base: "4vw", md: "1vw" }} mx="auto">
                Step Count : {stepCount} steps
              </Text>
            </Box>

            <Text
              fontSize={{ base: "4vw", md: "1.2vw" }}
              fontWeight={500}
              textAlign="justify"
            >
              {description.slice(0, 100)}
              {description.length < 100 ? "" : "..."}
            </Text>
          </VStack>

          <HStack mt={4}>
            <Link href={`/training/${id}`}>
              <Button variant="solid">Use</Button>
            </Link>

            <Button
              variant="solid"
              bg="red.500"
              color="#fff"
              mt={3}
              onClick={() => deletePlan()}
            >
              Delete
            </Button>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default TrainingPlanCard;
