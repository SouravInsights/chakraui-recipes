import * as React from "react";
import { ChakraProvider } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";
//import Header from "./components/Topbar/Header";
import Feed from "./components/Feed/Feed";

export const App = () => (
  <ChakraProvider theme={theme} resetCSS portalZIndex={40}>
    <Feed />
  </ChakraProvider>
);
