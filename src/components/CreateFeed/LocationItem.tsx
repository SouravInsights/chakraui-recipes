import React from "react";
import { SimpleGrid, Flex, Heading, Icon } from "@chakra-ui/core";
import {
  Transport,
  Resturant,
  MapMarker,
  Shopping,
  Museum,
  Food
} from "../Icons/Icons";

export const LocationItem = () => {
  return (
    <>
      {data.map((item, i) => {
        return (
          <SimpleGrid mb="10px" columns={1}>
            <Flex
              alignItems="flex-start"
              justifyContent="flex-start"
              _hover={{ bg: "#F1F4F9" }}
              flexDirection="row"
              margin="5px"
              px="10px"
              py="10px"
              borderRadius="8px"
            >
              <Icon as={iconMap[item.icon]} boxSize={10} color="#5384EE" />
              <Flex
                alignItems="flex-start"
                justifyContent="flex-start"
                flexDirection="column"
                marginLeft="10px"
              >
                <Heading
                  fontSize={["16px", "16px", "16px", "16px"]}
                  fontWeight="bold"
                  color="#072252"
                  textAlign="left"
                  // margin="10px"
                >
                  {item.title}
                </Heading>
                <Heading
                  as="h6"
                  size="xs"
                  fontSize={["12px", "12px", "14px", "14px"]}
                  textAlign="left"
                  color="#4A5568"
                >
                  {item.subTitle}
                </Heading>
              </Flex>
            </Flex>
          </SimpleGrid>
        );
      })}
    </>
  );
};
interface LocationData {
  title: string;
  subTitle: string;
  icon: string;
}

const data: LocationData[] = [
  {
    title: "San Francisco, CA, United States",
    subTitle: "City",
    icon: "Food"
  },
  {
    title: "Santa Caluse Ruins",
    subTitle: "Sights & museums",
    icon: "Museum"
  },
  {
    title: "Santana Farm & Goods",
    subTitle: " Shopping",
    icon: "Shopping"
  },
  {
    title: "San Sebastian Park",
    subTitle: "Natural & geographical",
    icon: "MapMarker"
  },
  {
    title: "San Marco Restaurant",
    subTitle: "Restaurant",
    icon: "Resturant"
  }
];
const iconMap: Record<string, typeof Food | typeof Museum> = {
  Transport,
  Resturant,
  MapMarker,
  Shopping,
  Museum,
  Food
};
