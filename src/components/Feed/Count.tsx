import * as React from "react";
import { Text } from "@chakra-ui/core";

// Count props
export interface CountProps {
  label: number;
}
// Count component
const Count = ({ label, onClick, weight }: CountProps) => {
  return (
    <Text
      fontStyle="normal"
      fontWeight={weight ? weight : "bold"}
      fontSize="15px"
      lineHeight="125%"
      onClick={((e) => e.stopPropagation, onClick)}
    >
      {label}
    </Text>
  );
};

export default Count;
