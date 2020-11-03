import React from "react";
import {
  Heading,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  InputRightElement
} from "@chakra-ui/core";
import {
  Search,
  Transport,
  Resturant,
  NaturalGeographical,
  Shopping,
  SightsMuseum
} from "../Icons/Icons";
import { LocationItem } from "./LocationItem";

interface TagLocationModalProps {
  taglocationIsOpen: ReturnType<typeof useDisclosure>["isOpen"];
  taglocationOnClose: ReturnType<typeof useDisclosure>["onClose"];
}

export const TagLocationModal = ({
  taglocationIsOpen,
  taglocationOnClose
}: TagLocationModalProps) => {
  return (
    <>
      <Modal
        size="xl"
        isCentered={true}
        isOpen={taglocationIsOpen}
        onClose={taglocationOnClose}
      >
        <ModalOverlay>
          <ModalContent>
            <ModalHeader
              fontSize="20px"
              fontWeight="bold"
              color="#072252"
              lineHeight="23px"
            >
              Tag Location
            </ModalHeader>
            <ModalCloseButton
              borderRadius="50%"
              _focus={{ boxShadow: "none" }}
            />

            <ModalBody>
              <InputGroup size="md">
                <Input pr="4.5rem" borderRadius="20px" placeholder="Search" />
                <InputRightElement width="4.5rem">
                  <Search boxSize={6} />
                </InputRightElement>
              </InputGroup>
              <Heading
                fontSize={["16px", "16px", "16px", "16px"]}
                color="#4A5568"
                textAlign="left"
                margin="10px"
              >
                Suggestion
              </Heading>
              <LocationItem />
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};
