import * as React from "react";
import { Flex, Text, Avatar, Badge, HStack, VStack } from "@chakra-ui/core";
import User from "./User";
import FeedMoreModal from "./FeedMoreModal";

export interface FeedHeaderProp {
  privacy: string;
}

const FeedHeader = ({ privacy }: FeedHeaderProp) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex>
        <Avatar
          size="md"
          name="Sourav Kumar Nanda"
          src="https://pbs.twimg.com/profile_images/1263485884734730241/s0YwDUi0_400x400.jpg"
        />
        <HStack px="10px" spacing="5px" alignItems="flex-start">
          <VStack>
            <User name="Sourav" />
            <Badge
              fontSize="14px"
              fontWeight="normal"
              color="#485363"
              textTransform="none"
            >
              Public
            </Badge>
          </VStack>
          <Text fontWeight="normal" fontSize="14px" color="#8493A8">
            is with
          </Text>
          <User name="Ayaz" />
        </HStack>
      </Flex>

      <Flex justify="flex-end">
        <FeedMoreModal />
      </Flex>
    </Flex>
  );
};

export default FeedHeader;
