import * as React from "react";
import { Box, Flex, Text, Avatar, Badge, HStack } from "@chakra-ui/core";
import User from "./User";

export interface FeedHeaderProp {
  privacy: string;
}

const FeedHeader = ({ privacy }: FeedHeaderProp) => {
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
            {privacy}
          </Badge>
        </HStack>
      </Box>
    </Flex>
  );
};

export default FeedHeader;
