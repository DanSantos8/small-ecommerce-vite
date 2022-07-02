import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl52vz94m2h3m01uk8b0wdo8d/master",
  cache: new InMemoryCache(),
})
