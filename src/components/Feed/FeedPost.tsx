import React from "react";
import {
  Box,
  Button,
  Flex,
  Avatar,
  Badge,
  Text,
  Stack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/core";
import { UserTag, GalleryAlt, Location } from "../Icons/Icons";

interface FeedPostModalProps {
  feedPostIsOpen: ReturnType<typeof useDisclosure>["isOpen"];
  feedPostOnClose: ReturnType<typeof useDisclosure>["onClose"];
}

export const FeedPostModal = ({
  feedPostIsOpen,
  feedPostOnClose
}: FeedPostModalProps) => {
  return (
    <Modal isOpen={feedPostIsOpen} onClose={feedPostOnClose}>
      <ModalOverlay>
        <ModalContent w={["90%", "70%", "50%", "80%"]}>
          <ModalHeader
            fontSize="20px"
            fontWeight="bold"
            color="#072252"
            lineHeight="23px"
          >
            Create post
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Avatar
                size="md"
                name="Sourav Kumar Nanda"
                src="https://pbs.twimg.com/profile_images/1263485884734730241/s0YwDUi0_400x400.jpg"
              />
              <Box mx="10px" flexDirection="column">
                <Text fontSize="16px" fontWeight="bold">
                  Sourav Kumar Nanda
                </Text>
                <Badge fontSize="14px" fontWeight="normal" color="#485363">
                  Public
                </Badge>
              </Box>
            </Flex>
            <Flex my="30px">
              <Input placeholder="Think outside the box." />
            </Flex>
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Stack direction="row">
              <IconButton
                aria-label="anything"
                icon={<GalleryAlt boxSize={6} color="#485363" />}
              />
              <IconButton
                aria-label="anything"
                icon={<UserTag boxSize={6} color="#485363" />}
              />
              <IconButton
                aria-label="anything"
                icon={<Location boxSize={6} color="#485363" />}
              />
            </Stack>
            <Box>
              <Button colorScheme="blue">Post</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
