// components
import { Dispatch, SetStateAction, useState } from "react";
import { useSession } from "next-auth/react";
import { appWriteController } from "@/appWrite/interface";
import {
  VStack,
  Input,
  Textarea,
  Button,
  Card,
  Text,
  HStack,
  useToast,
} from "@chakra-ui/react";

const AddPlanFormModal = () => {
  // states
  const { data: session } = useSession();

  const [name, setName]: [string, Dispatch<SetStateAction<string>>] =
    useState<string>("");

  const [description, setDescription]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState<string>("");

  const [currentStepExerciseName, setCurrentStepExerciseName]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState<string>("");

  const [currentStepRepCount, setCurrentStepRepCount]: [
    Number,
    Dispatch<SetStateAction<Number>>
  ] = useState<Number>(0);

  const [steps, setSteps] = useState<Set<any>>(new Set());

  const toast = useToast();

  const addStep = () => {
    if (currentStepExerciseName !== "") {
      setSteps(
        steps.add({
          exercise: currentStepExerciseName,
          count: currentStepRepCount,
        })
      );
      setCurrentStepExerciseName("");
      setCurrentStepRepCount(0);
    }
  };

  const savePlan = async () => {
    try {
      const res = await appWriteController.addTrainingPlan({
        user: session?.user?.email!,
        name,
        description,
        steps: [...Array.from(steps)],
      });
      toast({
        title: "Plan Added Successfully",
        description: "We have stored this in our AppWrite DB!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err: any) {
      toast({
        title: "Plan Already Exists",
        description: "Plan change some details",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <VStack>
        <Input
          placeholder="Enter name for this plan"
          size="md"
          onChange={(e: any) => setName(e.target.value)}
        />

        <Textarea
          placeholder="Enter description for this plan"
          size="md"
          onChange={(e: any) => setDescription(e.target.value)}
        />

        <Text fontWeight={500} fontSize={{ base: "4vw", md: "1.5vw" }}>
          {steps.size === 0 ? "Add a step" : `Total Steps: ${steps.size}`}
        </Text>

        <Card width={"95%"} mx="auto" p={2}>
          <VStack spacing={1}>
            <Input
              placeholder="Exercise Name"
              size="md"
              onChange={(e: any) => setCurrentStepExerciseName(e.target.value)}
            />

            <Input
              type="number"
              placeholder="Rep Count"
              size="md"
              onChange={(e: any) => setCurrentStepRepCount(e.target.value)}
            />

            <Button variant="solid" onClick={() => addStep()}>
              Add Step
            </Button>
          </VStack>
        </Card>

        <HStack spacing={2} mt={4}>
          <Button
            variant="solid"
            bg="#010100"
            color="#d8bda9"
            _hover={{}}
            onClick={() => savePlan()}
          >
            Save
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default AddPlanFormModal;
