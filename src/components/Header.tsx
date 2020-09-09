import React from "react";
import {
  chakra,
  Flex,
  HStack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/core";
import Logo from "./Logo";
import {
  FaSearch,
  FaPlus,
  FaEnvelope,
  FaBell,
  FaSlidersH,
} from "react-icons/fa";
import SettingsPanel from "./Panels";

const HeaderContent = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

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
            <IconButton
              icon={<FaSearch />}
              aria-label="Search"
              bg="none"
              fontSize="20px"
              color="#485363"
            />

            <IconButton
              icon={<FaPlus />}
              aria-label="Create posts"
              bg="none"
              fontSize="20px"
              color="#485363"
            />

            <IconButton
              icon={<FaEnvelope />}
              aria-label="Messages"
              bg="none"
              fontSize="20px"
              color="#485363"
            />

            <IconButton
              icon={<FaBell />}
              aria-label="Notification"
              bg="none"
              fontSize="20px"
              color="#485363"
            />

            <IconButton
              icon={<FaSlidersH />}
              aria-label="Settings"
              bg="none"
              fontSize="20px"
              color="#485363"
              ref={btnRef}
              onClick={onOpen}
            />
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
