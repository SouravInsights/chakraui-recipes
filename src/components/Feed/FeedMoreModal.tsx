import React from "react";
import {
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useDisclosure
} from "@chakra-ui/core";
import FeedMoreModalBody from "./FeedMoreModalBody";
import { MenuIcon } from "../Icons/Icons";

const FeedMoreModal = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <MenuIcon boxSize={4} />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <FeedMoreModalBody />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default FeedMoreModal;
