// lib
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

type Props = {
  pageStack: string[];
};

const Banner = ({ pageStack }: Props) => {
  return (
    <>
      <Box
        position="relative"
        width={"100%"}
        bg="#010100"
        color="#d8bda9"
        mx="auto"
        borderRadius={10}
        my={4}
        px={4}
        py={6}
        mt={{ base: 4, md: 6 }}
      >
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          {pageStack.map((page: string, key: number) => (
            <BreadcrumbItem key={key}>
              <BreadcrumbLink>{page}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Box>
    </>
  );
};

export default Banner;
