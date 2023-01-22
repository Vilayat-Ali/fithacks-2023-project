// lib
import { Text } from "@chakra-ui/react";

type Props = {
  title: string;
};

const Heading = ({ title }: Props) => {
  return (
    <>
      <Text color="#010100" fontSize={{ base: "6vw", md: "2vw" }} m={2}>
        {title}
      </Text>
    </>
  );
};

export default Heading;
