import * as React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";
//import Header from "./components/Topbar/Header";
import CreateFeed from "./components/CreateFeed/CreateFeed";
import { Feed } from "./components/Feed/Feed";
import "./index.css";

const client = new ApolloClient({
  uri: "https://api.dev.lobox.com/feed/graphiql",
  cache: new InMemoryCache()
});

export const App = () => (
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme} resetCSS portalZIndex={40}>
      <CreateFeed />
      <Feed />
    </ChakraProvider>
  </ApolloProvider>
);
