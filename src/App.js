import React from "react";
import { render } from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import Items from './components/Items';

import './App.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://devin-surface.local:8080/v1/graphql',
  })
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>First app!</h2>
      <Items />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));

export default App;
