import React from "react";
import {
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/core";
import LikesTab from "./LikesTab"

export interface LikesTabModalProps {
  tabsIsOpen: ReturnType<typeof useDisclosure>["isOpen"];
  tabsOnClose: ReturnType<typeof useDisclosure>["onClose"];
}
const LikesTabModal = ({ tabsIsOpen, tabsOnClose }: LikesTabModalProps) => {
  return (
    <>
      <Modal size="xl" isOpen={tabsIsOpen} onClose={tabsOnClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>  
            </ModalHeader>
            <ModalBody>
              <LikesTab />
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default LikesTabModal