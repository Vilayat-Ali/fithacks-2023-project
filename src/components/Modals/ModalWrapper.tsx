// lib
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  title: string;
  finalRef?: any;
  isOpen: any;
  onClose: any;
  children: ReactNode;
};

const ModalWrapper = ({
  title,
  finalRef,
  isOpen,
  onClose,
  children,
}: Props) => {
  return (
    <Modal
      closeOnOverlayClick={false}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
