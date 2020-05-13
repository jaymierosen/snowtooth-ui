import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    url: 'https://snowtooth.moonhighway.com'
  }),
  cache: new InMemoryCache()
})

ReactDOM.render(<App />, document.getElementById("root"));
