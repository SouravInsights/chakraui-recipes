import { useForm } from "react-hook-form";
import React, { useState } from "react";
import {
  Flex,
  Avatar,
  Heading,
  Text,
  Badge,
  Box,
  FormControl,
  Textarea,
  Input,
  Select,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  IconButton,
  Stack,
  useDisclosure,
  FormErrorMessage,
  Button
} from "@chakra-ui/core";
import { Suitcase, GalleryAlt, UserTag, Location } from "../Icons/Icons";

import { gql, useMutation } from "@apollo/client";

const POST_HIGHLIGHT_FORM_DATA = gql`
  mutation PostHighlightFormData($newFeed: FeedInput) {
    createFeed(input: $newFeed) {
      userId
      content
    }
  }
`;

export interface HighlightFormModalProps {
  highlightFormIsOpen: ReturnType<typeof useDisclosure>["isOpen"];
  highlightFormOnClose: ReturnType<typeof useDisclosure>["onClose"];
}

export const HighlightFormModal = ({
  highlightFormIsOpen,
  highlightFormOnClose
}: HighlightFormModalProps) => {
  const [createFeed, newFeed] = useMutation(POST_HIGHLIGHT_FORM_DATA);

  const onSubmit = (input) => {
    createFeed({
      variables: { newFeed: input }
    });
  };

  /*   if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error!</p>;
  } */

  return (
    <Modal
      size="2xl"
      isCentered={true}
      isOpen={highlightFormIsOpen}
      onClose={highlightFormOnClose}
    >
      <ModalOverlay>
        <ModalContent>
          <ModalCloseButton borderRadius="50%" _focus={{ boxShadow: "none" }} />
          <ModalHeader
            fontSize="20px"
            fontWeight="bold"
            color="#072252"
            lineHeight="23px"
          >
            Create highlight
          </ModalHeader>
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
                <Badge
                  fontSize="14px"
                  fontWeight="normal"
                  color="#485363"
                  textTransform="none"
                >
                  Public
                </Badge>
              </Box>
            </Flex>
            <Flex
              my="14px"
              flexDirection="column"
              align="center"
              justify="center"
            >
              <Suitcase />
              <Heading
                fontSize="20px"
                fontWeight="bold"
                color="#5384EE"
                lineHeight="23px"
              >
                New Job
              </Heading>

              {/* Highlight form component */}

              <HighlightForm onSubmit={onSubmit} />
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
              <Button colorScheme="blue" type="submit">
                Post
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

const HighlightForm = ({ onSubmit }) => {
  const [userId, setUserId] = React.useState("");
  const [content, setContent] = React.useState("");
  const [company, setCompany] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    onSubmit({ userId, content });
  };

  return (
    <form onSubmit={submit}>
      <Stack spacing={["14px", "14px", "20px", "20px"]}>
        <Input
          name="userId"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(parseInt(e.target.value))}
        />
        {console.log(userId)}
        <Input
          name="content"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {console.log(content)}
        {/*  
          <Input
            name="name"
            value={company}
            placeholder="Company"
            onChange={(e) => setCompany(e.target.value)}
          /> 
        */}

        {/*   
          <Select placeholder="Contract Type" color="#485363">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Checkbox>Volunteer experience</Checkbox>
          <Textarea placeholder="Tell us more about your story..." /> 
        */}
        <Button colorScheme="blue" type="submit">
          Post
        </Button>
      </Stack>
    </form>
  );
};
