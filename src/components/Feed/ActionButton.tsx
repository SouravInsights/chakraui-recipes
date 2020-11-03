import * as React from "react";
import { Icon, Button, Text } from "@chakra-ui/core";
import { LikeIcon, ShareIcon, CommentIcon } from "../Icons/Icons";
import Count from "./Count";

// ActionButton props
export interface ActionButtonProps {
  label: string;
  iconName: string;
}

const iconMap: Record<string, typeof LikeIcon> = {
  LikeIcon,
  ShareIcon,
  CommentIcon
};

// ActionButton component
const ActionButton = ({
  label,
  iconName,
  count,
  onClick,
  onCountClick,
  onIconClick,
  labelColor,
  bg
}: ActionButtonProps) => {
  return (
    <Button
      fontSize="15px"
      fontWeight="bold"
      color="#485363"
      leftIcon={
        iconName ? (
          <Icon as={iconMap[iconName]} boxSize={4} color="#485363" />
        ) : (
          ""
        )
      }
      rightIcon={
        <Count
          label={count}
          onClick={((e) => e.stopPropagation, onCountClick)}
        />
      }
      variant="ghost"
      _hover={{ bg: "none" }}
      _focus={{ boxShadow: "none" }}
      _active={{ bg: "none" }}
      onClick={((e) => e.stopPropagation, onIconClick)}
    >
      <Text color={labelColor ? labelColor : ""}>{label}</Text>
    </Button>
  );
};

export default ActionButton;
