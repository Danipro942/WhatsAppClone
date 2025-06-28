import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "apollo-link-context";
import { getToken } from "../utils/token";
import { createUploadLink } from "apollo-upload-client";

const httpLink = createUploadLink({
  uri: process.env.REACT_APP_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
