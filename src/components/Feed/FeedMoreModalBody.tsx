import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import { Save, Bell, Cancel, LinkPost, Flag } from "../Icons/Icons";

const FeedMoreModalBody = () => {
  return (
    <Box flexDirection="column">
      <Box justify="flex-start">
        <Flex flexDirection="column">
          <Flex flexDirection="row" align="center">
            <Save boxSize={4} />
            <Heading
              fontStyle="normal"
              fontWeight="bold"
              fontSize="16px"
              px="10px"
            >
              Save Post
            </Heading>
          </Flex>
          <Text fontWeight="bold" fontSize="14px" color="#8493A8" px="25px">
            Add this to your saved posts
          </Text>
        </Flex>
      </Box>
      <Box justify="flex-start">
        <Flex flexDirection="column">
          <Flex flexDirection="row" align="center">
            <Bell boxSize={4} />
            <Heading
              fontStyle="normal"
              fontWeight="bold"
              fontSize="16px"
              px="10px"
            >
              Turn on post notifications
            </Heading>
          </Flex>
          <Text fontWeight="bold" fontSize="14px" color="#8493A8" px="25px">
            Recive notifications from this post
          </Text>
        </Flex>
      </Box>{" "}
      <Box justify="flex-start">
        <Flex flexDirection="column">
          <Flex flexDirection="row" align="center">
            <Cancel boxSize={4} />
            <Heading
              fontStyle="normal"
              fontWeight="bold"
              fontSize="16px"
              px="10px"
            >
              Unfollow Ralph Webb
            </Heading>
          </Flex>
          <Text fontWeight="bold" fontSize="14px" color="#8493A8" px="25px">
            Stop seeing posts from Ralph
          </Text>
        </Flex>
      </Box>{" "}
      <Box justify="flex-start">
        <Flex flexDirection="column">
          <Flex flexDirection="row" align="center">
            <LinkPost boxSize={4} />
            <Heading
              fontStyle="normal"
              fontWeight="bold"
              fontSize="16px"
              px="10px"
            >
              Copy link
            </Heading>
          </Flex>
          <Text fontWeight="bold" fontSize="14px" color="#8493A8" px="25px">
            Copy link to clipboard
          </Text>
        </Flex>
      </Box>{" "}
      <Box justify="flex-start">
        <Flex flexDirection="column">
          <Flex flexDirection="row" align="center">
            <Flag boxSize={4} />
            <Heading
              fontStyle="normal"
              fontWeight="bold"
              fontSize="16px"
              px="10px"
            >
              Report this post
            </Heading>
          </Flex>
          <Text fontWeight="bold" fontSize="14px" color="#8493A8" px="25px">
            I’m concerned about this post
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default FeedMoreModalBody;
