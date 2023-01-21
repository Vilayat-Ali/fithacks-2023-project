import {
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

interface StatCardProps {
  title: string;
  stat: string;
}

const StatCard = (props: StatCardProps) => {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid #000"}
      rounded={"lg"}
      cursor="pointer"
      color="#010100"
      _hover={{
        border: "1px solid #fff",
      }}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
};

export default StatCard;
