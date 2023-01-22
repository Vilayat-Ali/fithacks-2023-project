import {
  chakra,
  Box,
  Stack,
  Link,
  HStack,
  Text,
  Container,
  Icon,
  Avatar,
  Tooltip,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";

const UserCard = () => {
  const { data: session } = useSession();
  return (
    <Container maxW="5xl" p={{ base: 5, md: 6 }}>
      <Stack
        w="17rem"
        spacing={2}
        p={4}
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.600")}
        rounded="md"
        margin="0 auto"
        _hover={{
          boxShadow: useColorModeValue(
            "0 4px 6px rgba(160, 174, 192, 0.6)",
            "0 4px 6px rgba(9, 17, 28, 0.4)"
          ),
        }}
      >
        <HStack justifyContent="space-between" alignItems="baseline">
          <Tooltip
            label="Lahore, Pakistan"
            aria-label="Lahore, Pakistan"
            placement="right-end"
            size="sm"
          >
            <Box pos="relative">
              <Avatar
                src={session?.user?.image!}
                name={session?.user?.name!}
                size="xl"
                borderRadius="md"
              />
              <Avatar
                src="https://flagcdn.com/us.svg"
                name="Pakistan Flag"
                size="xs"
                borderRadius="full"
                pos="absolute"
                bottom={0}
                right="-12px"
              />
            </Box>
          </Tooltip>
        </HStack>
        <chakra.h1 fontSize="xl" fontWeight="bold">
          {session?.user?.name!}
        </chakra.h1>
      </Stack>
    </Container>
  );
};

export default UserCard;
