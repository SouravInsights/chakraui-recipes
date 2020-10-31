import React from "react";
import {
  Flex,
  Text,
  Avatar,
  HStack,
} from "@chakra-ui/core";
import { User } from "./User"
import { ActionButton } from "./ActionButton"

const TabsDataBody = ({ image, name, status }) => {
  return (
    <Flex justifyContent="flex-start" my="5px">
      <Avatar size="sm" name="Sourav Kumar Nanda" src={image} />
      <HStack px="10px" spacing="10px">
        <User name={name} />
        <Text
          fontWeight="normal"
          fontSize="14px"
          lineHeight="16px"
          color="#8493A8"
          mr="140px"
        >
          @{name}
        </Text>
        <ActionButton
          label={status}
          labelColor={"#5384EE"}
          iconName={status === "Follow" ? "Plus" : ""}
          color="#5384EE"
          align="flex-end"
          bg={status === "Follow" ? "rgba(83, 132, 238, 0.1)" : ""}
        />
      </HStack>
    </Flex>
  );
};

export default TabsDataBody