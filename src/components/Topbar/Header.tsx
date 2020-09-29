import React, { useEffect, useState } from "react";
import {
  chakra,
  Flex,
  HStack,
  Box,
  Skeleton,
  useDisclosure,
  IconButton
} from "@chakra-ui/core";
import Logo from "./Logo";
import {
  FaSearch,
  FaPlus,
  FaEnvelope,
  FaBell,
  FaSlidersH
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

import SettingsPanel from "./Panels";

interface HeaderData {
  name: string;
}

const data: HeaderData[] = [
  {
    name: "FaSearch"
  },
  {
    name: "FaPlus"
  },
  {
    name: "FaEnvelope"
  },
  {
    name: "FaBell"
  },
  {
    name: "FaSlidersH"
  }
];

interface HeaderItemProps {
  name: string;
}

const iconMap: Record<string, IconType> = {
  FaSearch,
  FaPlus,
  FaEnvelope,
  FaBell,
  FaSlidersH
};

const HeaderItem = ({ name }: HeaderItemProps) => {
 
  return (
    <IconButton
      as={iconMap[name]}
      boxSize={6}
      aria-label="Search"
      bg="none"
      color="#485363"
 
    />
  );
};

const HeaderContent = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const [apiData, setApiData] = useState<HeaderData[]>(
    Array.from({ length: data.length })
  );

  useEffect(() => {
    const delay = setTimeout(() => {
      setApiData(data);
      console.log("This will wait until api data is loaded.");
    }, 3000);

    return () => clearTimeout(delay);
  });

  return (
    <>
      <Flex w="100%" h="100%" px="2" align="center" justify="space-between">
        <Flex align="center">
          <chakra.a display="block" aria-label="Lobox logo">
            <Logo />
          </chakra.a>
        </Flex>

        <Flex maxW="720px" align="center" color="gray.400">
          <HStack spacing="10">
            {apiData.map((headerIcon, index) => {
              if (headerIcon) {
                return (
                  <HeaderItem name={headerIcon.name} key={headerIcon.name} />
                );
              }
              return (
                <Box>
                  <Skeleton boxSize={6} />
                </Box>
              );
            })}
          </HStack>
        </Flex>
      </Flex>
      <SettingsPanel isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} />
    </>
  );
};

const Header = (props: any) => {
  return (
    <chakra.header
      pos="fixed"
      top="0"
      zIndex="1"
      bg="white"
      left="0"
      right="0"
      borderBottomWidth="1px"
      width="full"
      {...props}
    >
      <chakra.div height="4.5rem" mx="60px">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
};

export default Header;
