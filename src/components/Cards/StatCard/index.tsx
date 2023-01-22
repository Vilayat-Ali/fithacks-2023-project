// lib
import { Text, VStack } from "@chakra-ui/react";

type Props = {
  title: string;
  stat: string | number;
};

const StatCard = ({ title, stat }: Props) => {
  return (
    <>
      <VStack
        spacing={1}
        bg="#E9D9CC"
        py={2}
        borderRadius={10}
        border="1px solid #010100"
      >
        <Text fontSize={{ base: "", md: "1.5vw" }} fontWeight={400}>
          {title}
        </Text>
        <Text fontSize={{ base: "", md: "2.5vw" }} fontWeight={500}>
          {stat.toString()}
        </Text>
      </VStack>
    </>
  );
};

export default StatCard;
