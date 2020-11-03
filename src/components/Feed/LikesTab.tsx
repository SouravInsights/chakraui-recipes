import React from "react";
import {
  Flex,
  Text,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/core";
import LikesTabBody from "./LikesTabBody";
import { gql, useQuery } from "@apollo/client";
import { Like, Dislike, Boost, Doc, Congrats } from "../Icons/Icons";
import Count from "./Count";
import likesTabBodyData from "./likesTabBodyData";

const REACT_FEED = gql`
  query getFeedReactionSummary {
    getFeedReactionSummary(postId: 4) {
      id
      type
      count
    }
  }
`;

const ModaliconMap: Record<string, typeof Like | typeof Like> = {
  Like,
  Dislike,
  Boost,
  Doc,
  Congrats
};

export interface LikesTabsProps {
  label: string;
  iconName: string;
}

const LikeTabs = ({ label, string }: LikesTabsProps) => {
  const { loading, error, data } = useQuery(REACT_FEED);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data.getFeedReactionSummary) {
    let reactData = [];
    let allCount = 0;
    data.getFeedReactionSummary.map((reacts) => {
      allCount += reacts.count;
    });
    let allReactions = [
      {
        count: allCount,
        icon: "",
        title: "All"
      },
      {
        count: "0",
        icon: "Like"
      },
      {
        count: "0",
        icon: "Boost"
      },
      {
        count: "0",
        icon: "Congrats"
      },
      {
        count: "0",
        icon: "Dislike"
      },
      {
        count: "0",
        icon: "Doc"
      }
    ];

    data.getFeedReactionSummary.map((reacts) => {
      let findIndex = allReactions
        .map(function (e) {
          return e.icon;
        })
        .indexOf(reacts.type.charAt(0).toUpperCase() + reacts.type.slice(1));
      allReactions[findIndex].count = reacts.count;
    });

    console.log(allReactions);
    const likesTabData: LikesTabsProps[] = allReactions;

    return (
      <Tabs>
        <TabList>
          {likesTabData.map((item, i) => {
            return (
              <Tab>
                <Flex flexDirection="column">
                  {!item.title && (
                    <Icon
                      _hover={{ bg: "none" }}
                      _focus={{ boxShadow: "none" }}
                      _active={{ bg: "none" }}
                      as={ModaliconMap[item.icon]}
                      boxSize={10}
                      mx="15px"
                    />
                  )}
                  {item.title && (
                    <Text
                      fontWeight="bold"
                      color="#5384EE"
                      fontSize="15px"
                      mb="10px"
                      mt="5px"
                    >
                      {item.title}
                    </Text>
                  )}
                  <Count label={item.count} weight={"normal"} />
                </Flex>
              </Tab>
            );
          })}
        </TabList>
        <TabPanels overflowY="auto" justifyContent="center" alignItems="center">
          {likesTabBodyData.map((item, i) => {
            return (
              <TabPanel>
                {item.tabData.map((data, i) => {
                  return (
                    <LikesTabBody
                      image={data.image}
                      name={data.userName}
                      status={data.status}
                    />
                  );
                })}
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    );
  }
};

export default LikeTabs;
