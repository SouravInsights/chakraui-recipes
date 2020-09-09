import * as React from "react";
import { ChakraProvider } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";
import Header from "./components/Header";

export const App = () => (
  <ChakraProvider theme={theme} resetCSS portalZIndex={40}>
    <Header />
  </ChakraProvider>
);
