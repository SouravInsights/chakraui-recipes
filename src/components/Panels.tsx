import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerProps,
  useDisclosure,
  Icon,
  Box,
  Flex,
  Heading,
  Text,
  As,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/core";
import {
  Bulb,
  Feed,
  User,
  Feedback,
  Globe,
  Help,
  Info,
  Privacy,
  Settings,
} from "./Icons";
import { FaAngleRight } from "react-icons/fa";

interface PanelItemProps {
  name: As;
  title: string;
  description: string;
}

const PanelItem = ({ name, title, description }: PanelItemProps) => {
  return (
    <Flex py={1} align="center">
      <Box>
        <Icon as={name} boxSize={6} color="#485363" />
      </Box>
      <Box mx={4} width="200px">
        <Heading fontSize="16px" color="#072252">
          {title}
        </Heading>
        <Text width="180px" fontSize="14px" color="#8493A8" isTruncated>
          {description}
        </Text>
      </Box>
      <Box>
        <Icon as={FaAngleRight} boxSize={6} color="#485363" />
      </Box>
    </Flex>
  );
};

interface SettingsData {
  name: As;
  title: string;
  description: string;
}

const data: SettingsData[] = [
  {
    name: User,
    title: "Account",
    description: "Profile, security, activity, account",
  },

  {
    name: Settings,
    title: "General settings",
    description: "Site language, notifications",
  },
  {
    name: Privacy,
    title: "Privacy",
    description: "Mentions, visibility, data",
  },

  {
    name: Feed,
    title: "Feed preferences",
    description: "Languages, blocked users",
  },

  { name: Globe, title: "Language", description: "Language" },

  {
    name: Help,
    title: "Help & support",
    description: "FAQ, privacy policy",
  },

  { name: Feedback, title: "Feedback", description: "Contact us" },

  {
    name: Info,
    title: "About lobox",
    description: "Anyone on or off lobox",
  },

  {
    name: Bulb,
    title: "Dark mode",
    description: "Anyone on or off lobox",
  },

  {
    name: Settings,
    title: "See all settings",
    description: "",
  },
];

interface SettingsPanelProps {
  isOpen: ReturnType<typeof useDisclosure>["isOpen"];
  onClose: ReturnType<typeof useDisclosure>["onClose"];
  finalFocusRef: DrawerProps["finalFocusRef"];
}

const SettingsPanel = ({
  isOpen,
  onClose,
  finalFocusRef,
}: SettingsPanelProps) => {
  const [apiData, setApiData] = useState<SettingsData[]>(
    Array.from({ length: data.length })
  );

  useEffect(() => {
    if (isOpen) {
      const delay = setTimeout(() => {
        setApiData(data);
        console.log("This will wait until api data is loaded.");
      }, 3000);

      return () => clearTimeout(delay);
    }
  }, [isOpen]);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Manage your lobox</DrawerHeader>
          <DrawerBody>
            {apiData.map((settingsItem, index) => {
              if (settingsItem) {
                return (
                  <PanelItem
                    name={settingsItem.name}
                    title={settingsItem.title}
                    description={settingsItem.description}
                    key={settingsItem.title}
                  />
                );
              }

              return (
                <Flex py={1} align="center" alignContent="space-between">
                  <Box>
                    <Skeleton boxSize={6} />
                  </Box>
                  <Box mx={4} width="200px">
                    <SkeletonText width="184px" fontSize="16px" />
                  </Box>
                  <Box>
                    <Skeleton boxSize={6} />
                  </Box>
                </Flex>
              );
            })}
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default SettingsPanel;
