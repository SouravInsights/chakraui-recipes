import { useForm } from "react-hook-form";
import React from "react";
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

const postHighlightFormData = gql`
  mutation PostHighlightFormData($input: FeedInput) {
    createFeed(input: $input) {
      userId
      highlight {
        title
        company
      }
    }
  }
`;

export interface HighlightFormProps {
  highlightFormIsOpen: ReturnType<typeof useDisclosure>["isOpen"];
  highlightFormOnClose: ReturnType<typeof useDisclosure>["onClose"];
}

export const HighlightForm = ({
  highlightFormIsOpen,
  highlightFormOnClose
}: HighlightFormProps) => {
  let input: any;
  const [createFeed, { data }] = useMutation(postHighlightFormData);

  const { handleSubmit, errors, register, formState } = useForm();

  /*   function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value !== "Naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error || true;
  }

  function onSubmit(values) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
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
            </Flex>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createFeed({ variables: { type: input.value } });
                input.value = "";
              }}
            >
              <FormControl isInvalid={errors.name}>
                <Stack spacing={["14px", "14px", "20px", "20px"]}>
                  <Input
                    name="title"
                    placeholder="Job Title"
                    ref={(node) => {
                      input = node;
                    }}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                  <Input
                    name="name"
                    placeholder="Company"
                    ref={(node) => {
                      input = node;
                    }}
                  />

                  <Select placeholder="Contract Type" color="#485363">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <Checkbox>Volunteer experience</Checkbox>
                  <Textarea
                    placeholder="Tell us more about your story..."
                    ref={(node) => {
                      input = node;
                    }}
                  />
                  <Button colorScheme="blue" type="submit">
                    Post
                  </Button>
                </Stack>
              </FormControl>
            </form>
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
