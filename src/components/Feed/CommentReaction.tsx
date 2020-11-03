import * as React from "react";
import { Box, ButtonGroup } from "@chakra-ui/core";
import { Like, Dislike, Boost, Doc, Congrats } from "../Icons/Icons";

const CommentReaction = ({ ...props }) => {
  return (
    <Box
      bg="white"
      w="50%"
      boxShadow="0px 0px 1px 0px rgba(0,0,0,0.2)"
      borderRadius="4px"
      p={1}
      align="center"
      color="white"
      ml="50%"
      onMouseLeave={() => props.handleIcon(props.default)}
    >
      <ButtonGroup>
        <Box
          as={Like}
          boxSize={6}
          color="#5384EE"
          onClick={() => props.handleIcon("LikeReact")}
        />
        <Box
          as={Boost}
          boxSize={6}
          color="#5384EE"
          onClick={() => props.handleIcon("Boost")}
        />
        <Box
          as={Congrats}
          boxSize={6}
          color="#5384EE"
          onClick={() => props.handleIcon("Congrats")}
        />
        <Box
          as={Dislike}
          boxSize={6}
          color="#5384EE"
          onClick={() => props.handleIcon("Dislike")}
        />
        <Box
          as={Doc}
          boxSize={6}
          color="#5384EE"
          onClick={() => props.handleIcon("Doc")}
        />
      </ButtonGroup>
    </Box>
  );
};

export default CommentReaction;
