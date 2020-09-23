import React from "react";
import {
  SimpleGrid,
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

interface HighlightModalProps {
  highlightIsOpen: ReturnType<typeof useDisclosure>["isOpen"];
  highlightOnClose: ReturnType<typeof useDisclosure>["onClose"];
}

export const HighlightModal = ({
  highlightIsOpen,
  highlightOnClose
}: HighlightModalProps) => {
  return (
    <Modal size="lg" isOpen={highlightIsOpen} onClose={highlightOnClose}>
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
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid mb="20px" columns={[2, 2, 3, 3]} spacing="40px">
              <Flex
                alignItems="center"
                justifyContent="center"
                bg="blue.100"
                flexDirection="column"
                p="10px"
              >
                <Work boxSize={8} />
                <Heading
                  fontSize={["16px", "16px", "18px", "18px"]}
                  fontWeight="bold"
                  lineHeight="18px"
                  color="#072252"
                  textAlign="center"
                >
                  Work
                </Heading>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="center"
                bg="blue.100"
                flexDirection="column"
                p="10px"
              >
                <GraduationCapG boxSize={8} />
                <Heading
                  fontSize={["16px", "16px", "18px", "18px"]}
                  fontWeight="bold"
                  lineHeight="18px"
                  color="#072252"
                  textAlign="center"
                >
                  Education
                </Heading>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="center"
                bg="blue.100"
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
                >
                  Lifestyle
                </Heading>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="center"
                bg="blue.100"
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
                >
                  Achivement
                </Heading>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="center"
                bg="blue.100"
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
                >
                  Self Development
                </Heading>
              </Flex>
              <Flex
                alignItems="center"
                justifyContent="center"
                bg="blue.100"
                flexDirection="column"
                p="10px"
              >
                <Create boxSize={8} />
                <Heading
                  fontSize={["16px", "16px", "18px", "18px"]}
                  fontWeight="bold"
                  lineHeight="18px"
                  color="#072252"
                  textAlign="center"
                >
                  Create
                </Heading>
              </Flex>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
