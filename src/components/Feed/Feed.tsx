import * as React from "react";
import {
  Box,
  Flex,
  Text,
  Avatar,
  Badge,
  HStack,
  Stack,
  Heading,
  Button
} from "@chakra-ui/core";
import { Gallery, Highlight, Location } from "../Icons/Icons";
import { FeedPostModal } from "./FeedPost";
import { HighlightModal } from "./Highlight";

interface UserProp {
  name: string;
}

const User = ({ name }: UserProp) => {
  return (
    <Heading
      fontStyle="normal"
      fontWeight="bold"
      fontSize="16px"
      lineHeight="125%"
    >
      {name}
    </Heading>
  );
};

const FeedHeader = () => {
  return (
    <Flex align="center">
      <Avatar
        size="md"
        name="Sourav Kumar Nanda"
        src="https://pbs.twimg.com/profile_images/1263485884734730241/s0YwDUi0_400x400.jpg"
      />
      <Box flexDirection="column">
        <HStack px="10px" spacing="5px">
          <User name="Sourav" />
          <Text
            fontWeight="normal"
            fontSize="14px"
            lineHeight="16px"
            color="#8493A8"
          >
            is with
          </Text>
          <User name="Ayaz" />
        </HStack>

        <HStack py="4px" px="10px">
          <Badge
            fontSize="14px"
            fontWeight="normal"
            color="#485363"
            textTransform="none"
          >
            Public
          </Badge>
        </HStack>
      </Box>
    </Flex>
  );
};

export const Feed = () => {
  return (
    <Flex
      px="20px"
      pb="20px"
      pt="20px"
      flexDirection="column"
      bg="#FFFFFF"
      boxShadow="0px 0px 8px rgba(53, 83, 108, 0.16)"
      borderRadius="4px"
      w={["90%", "70%", "50%", "45%"]}
      //w={{ xs: "flex", sm: "650px", md: "650px", lg: "650px" }}
      h="auto"
      mt="20px"
      mx="auto"
    >
      <Stack spacing="20px">
        <FeedHeader />

        <Text
          fontWeight="normal"
          fontSize="15px"
          lineHeight="140%"
          letterSpacing="0.02em"
        >
          Nisi dolor occaecat qui eu laborum cillum enim ipsum duis nisi tempor.
          Nisi do consectetur tempor do mollit adipisicing commodo amet
          incididunt. Minim culpa minim minim sunt deserunt #figma @Andy Warhol
          nut consectetur @Apple labore proident nostrud. Non duis labore duis
          nulla culpa pariatur esse
        </Text>
      </Stack>
    </Flex>
  );
};

const data: FeedData[] = [
  {
    name: "User",
    title: "Account",
    description: "Profile, security, activity, account"
  },

  {
    name: "Settings",
    title: "General settings",
    description: "Site language, notifications"
  },
  {
    name: "Privacy",
    title: "Privacy",
    description: "Mentions, visibility, data"
  },

  {
    name: "Feed",
    title: "Feed preferences",
    description: "Languages, blocked users"
  },

  { name: "Globe", title: "Language", description: "Language" },

  {
    name: "Help",
    title: "Help & support",
    description: "FAQ, privacy policy"
  },

  { name: "Feedback", title: "Feedback", description: "Contact us" },

  {
    name: "Info",
    title: "About lobox",
    description: "Anyone on or off lobox"
  },

  {
    name: "Bulb",
    title: "Dark mode",
    description: "Anyone on or off lobox"
  },

  {
    name: "Settings",
    title: "See all settings",
    description: ""
  }
];
