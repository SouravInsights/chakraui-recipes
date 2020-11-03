import * as React from "react";
import { Box, Flex, Text, Avatar, HStack, Heading } from "@chakra-ui/core";
import { gql, useQuery } from "@apollo/client";
import { User } from "./User";

const FEED_COMMENTS = gql`
  query GetFeedParentComment {
    getFeedParentCommentAsPageable(postId: 4, pageNo: 1) {
      commentId
      content
      childComments {
        commentId
        content
      }
    }
  }
`;

const Comment = ({ ...props }) => {
  const { data, loading, error } = useQuery(FEED_COMMENTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.getFeedParentCommentAsPageable.map((comment) => (
        <Flex {...props}>
          <Avatar
            size="sm"
            name="Sourav Kumar Nanda"
            src="https://raw.githubusercontent.com/Santoshd561/Highlight/main/DSC_0283.jpg"
          />
          <Box flexDirection="column" borderRadius="8px">
            <Box
              flexDirection="column"
              bg="#F1F4F9"
              borderRadius="8px"
              mx="10px"
              px="5px"
            >
              <HStack px="10px" py="5px">
                <User name="Sourav" />
              </HStack>
              <HStack px="10px" py="5px">
                <Text
                  fontWeight="normal"
                  fontSize="14px"
                  lineHeight="16px"
                  color="#8493A8"
                >
                  {comment.content}
                </Text>
              </HStack>
            </Box>
            <HStack px="20px" py="5px" spacing="15px">
              <Heading
                fontWeight="bold"
                fontSize="16px"
                color="#8493A8"
                lineHeight="125%"
              >
                React
              </Heading>
              <Heading
                fontWeight="bold"
                fontSize="16px"
                color="#8493A8"
                lineHeight="125%"
              >
                Reply
              </Heading>
              <Text fontWeight="normal" fontSize="12px" color="#8493A8">
                47 m
              </Text>
            </HStack>
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default Comment;
