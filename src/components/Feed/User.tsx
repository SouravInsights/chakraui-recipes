import * as React from "react";
import { Heading } from "@chakra-ui/core";

// User handle props
export interface UserProp {
  name: string;
}

// User handle component
const User = ({ name }: UserProp) => {
  return (
    <Heading
      fontStyle="normal"
      fontWeight="bold"
      fontSize="16px"
      lineHeight="125%"
    >
      {name}
    </Heading>
  );
};

export default User;
