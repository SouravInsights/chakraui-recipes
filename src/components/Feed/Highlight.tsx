import React from "react";
import {
  SimpleGrid,
  Button,
  Link,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/core";
import {
  Work,
  GraduationCapG,
  SaxoPhoneG,
  AchievementG,
  Growth,
  Create
} from "../Icons/Icons";
import { HighlightChoiceModal } from "./HighlightChoice";

interface HighlightModalProps {
  highlightIsOpen: ReturnType<typeof useDisclosure>["isOpen"];
  highlightOnClose: ReturnType<typeof useDisclosure>["onClose"];
}

const HighlightModalItem = () => {
  return (
    <Link onClick={highlightChoiceOnOpen}>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p="10px"
        _hover={{ bg: "#F1F4F9" }}
      >
        <Work boxSize={8} />
        <Heading
          fontSize={["16px", "16px", "18px", "18px"]}
          fontWeight="bold"
          lineHeight="18px"
          color="#072252"
          textAlign="center"
          my="8px"
        >
          Work
        </Heading>
      </Flex>
    </Link>
  );
};

export const HighlightModal = ({
  highlightIsOpen,
  highlightOnClose
}: HighlightModalProps) => {
  const {
    isOpen: highlightChoiceIsOpen,
    onOpen: highlightChoiceOnOpen,
    onClose: highlightChoiceOnClose
  } = useDisclosure();

  return (
    <>
      <Modal
        size="2xl"
        isCentered={true}
        isOpen={highlightIsOpen}
        onClose={highlightOnClose}
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
            <ModalCloseButton
              borderRadius="50%"
              _focus={{ boxShadow: "none" }}
            />
            <ModalBody>
              {highlightChoiceIsOpen ? (
                <HighlightChoiceModal
                  highlightChoiceIsOpen={highlightChoiceIsOpen}
                  highlightChoiceOnClose={highlightChoiceOnClose}
                />
              ) : (
                <SimpleGrid mb="20px" columns={[2, 2, 3, 3]}>
                  <Link onClick={highlightChoiceOnOpen}>
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                      p="10px"
                      _hover={{ bg: "#F1F4F9" }}
                    >
                      <Work boxSize={8} />
                      <Heading
                        fontSize={["16px", "16px", "18px", "18px"]}
                        fontWeight="bold"
                        lineHeight="18px"
                        color="#072252"
                        textAlign="center"
                        my="8px"
                      >
                        Work
                      </Heading>
                    </Flex>
                  </Link>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ bg: "#F1F4F9" }}
                    flexDirection="column"
                    p="10px"
                  >
                    <GraduationCapG boxSize={8} />
                    <Heading
                      fontSize={["16px", "16px", "18px", "18px"]}
                      fontWeight="bold"
                      lineHeight="18px"
                      color="#072252"
                      my="8px"
                      textAlign="center"
                    >
                      Education
                    </Heading>
                  </Flex>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ bg: "#F1F4F9" }}
                    flexDirection="column"
                    p="10px"
                  >
                    <SaxoPhoneG boxSize={8} />
                    <Heading
                      fontSize={["16px", "16px", "18px", "18px"]}
                      fontWeight="bold"
                      lineHeight="18px"
                      color="#072252"
                      textAlign="center"
                      my="8px"
                    >
                      Lifestyle
                    </Heading>
                  </Flex>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ bg: "#F1F4F9" }}
                    flexDirection="column"
                    p="10px"
                  >
                    <AchievementG boxSize={8} />
                    <Heading
                      fontSize={["16px", "16px", "18px", "18px"]}
                      fontWeight="bold"
                      lineHeight="18px"
                      color="#072252"
                      textAlign="center"
                      my="8px"
                    >
                      Achivement
                    </Heading>
                  </Flex>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ bg: "#F1F4F9" }}
                    flexDirection="column"
                    p="10px"
                  >
                    <Growth boxSize={8} />
                    <Heading
                      fontSize={["16px", "16px", "18px", "18px"]}
                      fontWeight="bold"
                      lineHeight="18px"
                      color="#072252"
                      textAlign="center"
                      my="10px"
                    >
                      Self Development
                    </Heading>
                  </Flex>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ bg: "#F1F4F9" }}
                    flexDirection="column"
                    p="10px"
                  >
                    <Create mt="5px" boxSize={8} />
                    <Heading
                      fontSize={["16px", "16px", "18px", "18px"]}
                      fontWeight="bold"
                      lineHeight="18px"
                      color="#072252"
                      textAlign="center"
                      my="10px"
                    >
                      Create
                    </Heading>
                  </Flex>
                </SimpleGrid>
              )}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};
