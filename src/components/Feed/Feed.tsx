import * as React from "react";
import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  Stack,
  Input,
  Popover,
  PopoverContent,
  PopoverBody
} from "@chakra-ui/core";
import { gql, useQuery } from "@apollo/client";
import { LikeReact, Dislike, Boost, Doc, Congrats } from "../Icons/Icons";
import Comment from "./Comment";
import { ActionButton } from "./ActionButton";
import { FeedHeader } from "./FeedHeader";
import LikesTabModal from "./LikesTabModal";
import CommentReaction from "./CommentReaction";

const FEED_DATA = gql`
  query getFeed {
    getAllFeedAsPageable(pageNo: 1) {
      postId
      userId
      content
      highlight {
        title
        company
        contractType
        description
      }
      media {
        mediaLink
      }
      tag {
        tagOwnerId
      }
      privacy {
        type
      }
      feedActionCount {
        shareCount
        reactionCount
        commentCount
      }
    }
  }
`;

export const Feed = () => {
  const [show, setShow] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [likeButtonIcon, setlikeButtonIcon] = React.useState("LikeIcon");
  const [isReactOpen, setIsReactOpen] = React.useState(false);

  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  const visible = () => setShowModal(!showModal);
  const invisible = () => setShowModal(false);

  const handleShowComment = () => {
    setShow(!show);
  };

  const openReact = () => setIsReactOpen(!isOpen);
  const closeReact = () => setIsReactOpen(false);

  const handleIcon = (name) => {
    setlikeButtonIcon(name);
    setIsOpen(false);
  };

  const { data, loading, error } = useQuery(FEED_DATA);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.getAllFeedAsPageable.map((feed) => (
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
          key={feed.postId}
        >
          <Stack spacing="20px">
            {feed.privacy && <FeedHeader privacy={feed.privacy.type} />}
            <Text
              fontWeight="normal"
              fontSize="15px"
              lineHeight="140%"
              letterSpacing="0.02em"
            >
              {feed.content}
            </Text>
            {isOpen && (
              <CommentReaction
                handleIcon={handleIcon}
                default={likeButtonIcon}
              />
            )}
            <Flex
              flexDirection={["row", "row", "row", "row"]}
              justify={[
                "space-around",
                "space-around",
                "space-around",
                "space-around"
              ]}
            >
              <ActionButton
                label="Like"
                iconName={likeButtonIcon}
                count={21}
                onIconClick={open}
                onCountClick={visible}
              />
              <ActionButton
                label="Comment"
                iconName="CommentIcon"
                count={21}
                onClick={handleShowComment}
              />
              <ActionButton label="Share" iconName="ShareIcon" />
            </Flex>
            {show && (
              <Text
                fontWeight="400"
                fontSize="14px"
                lineHeight="18px"
                color="#5384EE"
              >
                Show more comments
              </Text>
            )}
            {show && (
              <Flex flexDirection="column" alignItems="left">
                <Comment />
                <Comment ml="8%" my="10px" />
              </Flex>
            )}
            <HStack>
              <Avatar
                size="sm"
                name="Sourav Kumar Nanda"
                src="https://pbs.twimg.com/profile_images/1263485884734730241/s0YwDUi0_400x400.jpg"
              />

              <Box>
                <Input borderRadius="20px" placeholder="Write a comment..." />
              </Box>
            </HStack>
          </Stack>
          <LikesTabModal tabsIsOpen={showModal} tabsOnClose={invisible} />
        </Flex>
      ))}
    </>
  );
};
