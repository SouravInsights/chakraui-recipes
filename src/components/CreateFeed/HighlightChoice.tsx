import React from "react";
import {
  Link,
  Heading,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  useDisclosure
} from "@chakra-ui/core";
import { Globe } from "../Icons/Icons";
import { HighlightFormModal } from "./HighlightForm";

export interface HighlightItemProps {
  itemIcon?: string;
  itemName: string;
}

export const HighlightItem = ({ itemIcon, itemName }: HighlightItemProps) => {
  return (
    <Flex
      flexDirection="row"
      align="center"
      p="10px"
      _hover={{ bg: "#F1F4F9", borderRadius: "4px" }}
    >
      <Globe boxSize={2} />
      <Heading
        fontSize="16px"
        fontWeight="bold"
        lineHeight="20px"
        color="#072252"
        textAlign="center"
        mx="8px"
      >
        {itemName}
      </Heading>
    </Flex>
  );
};

export interface HighlightChoiceModalProps {
  highlightChoiceIsOpen: ReturnType<typeof useDisclosure>["isOpen"];
  highlightChoiceOnClose: ReturnType<typeof useDisclosure>["onClose"];
}

export const HighlightChoiceModal = ({
  highlightChoiceIsOpen,
  highlightChoiceOnClose
}: HighlightChoiceModalProps) => {
  const {
    isOpen: highlightFormIsOpen,
    onOpen: highlightFormOnOpen,
    onClose: highlightFormOnClose
  } = useDisclosure();

  return (
    <>
      <Modal
        size="2xl"
        isCentered={true}
        isOpen={highlightChoiceIsOpen}
        onClose={highlightChoiceOnClose}
      >
        <ModalOverlay>
          <ModalContent>
            <ModalHeader
              fontSize="20px"
              fontWeight="bold"
              color="#072252"
              lineHeight="23px"
            >
              Create highlight
            </ModalHeader>
            <ModalBody>
              {highlightFormIsOpen ? (
                <HighlightFormModal
                  highlightFormIsOpen={highlightFormIsOpen}
                  highlightFormOnClose={highlightFormOnClose}
                />
              ) : (
                <>
                  <Link onClick={highlightFormOnOpen}>
                    <HighlightItem itemName="New Job" />
                  </Link>
                  <HighlightItem itemName="Get Promoted" />
                  <HighlightItem itemName="Entrepreneurship" />
                </>
              )}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>

      <HighlightFormModal
        highlightFormIsOpen={highlightFormIsOpen}
        highlightFormOnClose={highlightFormOnClose}
      />
    </>
  );
};
