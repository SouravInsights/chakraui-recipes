import * as React from "react";
import {
  Box,
  Flex,
  Text,
  Avatar,
  Link,
  Divider,
  Button,
  useDisclosure
} from "@chakra-ui/core";
import { Gallery, Highlight, Location } from "../Icons/Icons";
import { FeedPostModal } from "./FeedPost";
import { HighlightModal } from "./Highlight";

const Feed = () => {
  const {
    isOpen: feedPostIsOpen,
    onOpen: feedPostOnOpen,
    onClose: feedPostOnClose
  } = useDisclosure();

  const {
    isOpen: highlightIsOpen,
    onOpen: highlightOnOpen,
    onClose: highlightOnClose
  } = useDisclosure();

  return (
    <>
      <Flex
        flexDirection="column"
        bg="#FFFFFF"
        boxShadow="0px 0px 8px rgba(53, 83, 108, 0.16)"
        borderRadius="4px"
        w={["90%", "70%", "50%", "45%"]}
        //w={{ xs: "flex", sm: "650px", md: "650px", lg: "650px" }}
        h="auto"
        mt="100px"
        mx="auto"
      >
        <Flex h="100px" p="20px" flexDirection="row">
          <Box width="10%">
            <Avatar
              size="sm"
              name="Sourav Kumar Nanda"
              src="https://pbs.twimg.com/profile_images/1263485884734730241/s0YwDUi0_400x400.jpg"
            />
          </Box>
          <Link onClick={feedPostOnOpen} outline="none" width="100%">
            <Box mx="10px" width="100%">
              <Text>Think oustside the box.</Text>
            </Box>
          </Link>
        </Flex>
        <Divider orientation="horizontal" />
        <Flex
          flexDirection={["row", "row", "row", "row"]}
          justify={[
            "space-around",
            "space-around",
            "space-around",
            "space-around"
          ]}
        >
          <Button
            fontSize="15px"
            fontWeight="bold"
            color="#485363"
            leftIcon={<Gallery boxSize={4} color="#D32F2F" />}
            variant="ghost"
            _hover={{ bg: "none" }}
            _focus={{ boxShadow: "none" }}
            _active={{ bg: "none" }}
          >
            Image/Video
          </Button>
          <Button
            fontSize="15px"
            fontWeight="bold"
            color="#485363"
            leftIcon={<Highlight boxSize={4} color="#5384EE" />}
            variant="ghost"
            _hover={{ bg: "none" }}
            _focus={{ boxShadow: "none" }}
            _active={{ bg: "none" }}
            onClick={highlightOnOpen}
          >
            Highlight
          </Button>
          <Button
            fontSize="15px"
            fontWeight="bold"
            color="#485363"
            leftIcon={<Location boxSize={4} color="#43A047" />}
            variant="ghost"
            _hover={{ bg: "none" }}
            _focus={{ boxShadow: "none" }}
            _active={{ bg: "none" }}
          >
            Check-in
          </Button>
        </Flex>
      </Flex>
      <FeedPostModal
        feedPostIsOpen={feedPostIsOpen}
        feedPostOnClose={feedPostOnClose}
      />
      <HighlightModal
        highlightIsOpen={highlightIsOpen}
        highlightOnClose={highlightOnClose}
      />
    </>
  );
};

export default Feed;
