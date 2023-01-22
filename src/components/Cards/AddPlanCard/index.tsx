// lib
import { Card, Text, Box, Icon, useDisclosure, Input } from "@chakra-ui/react";
import { FcAddRow } from "react-icons/fc";

// components
import AddPlanForm from "@/components/Modals/AddPlanForm";
import ModalWrapper from "@/components/Modals/ModalWrapper";

const AddPlanCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isOpen && (
        <ModalWrapper
          isOpen={isOpen}
          onClose={onClose}
          title="Add Training Plan"
        >
          <AddPlanForm />
        </ModalWrapper>
      )}
      <Card cursor="pointer" onClick={onOpen}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          borderRadius={10}
          bg="#010100"
          color="#d8bda9"
          p={2}
        >
          <Icon
            as={FcAddRow}
            color="#d8bda9"
            fontSize={{ base: "8vw", md: "3vw" }}
          />
          <Text fontWeight={600} fontSize={{ base: "4vw", md: "1.5vw" }} ml={1}>
            Add New Plan
          </Text>
        </Box>
      </Card>
    </>
  );
};

export default AddPlanCard;
