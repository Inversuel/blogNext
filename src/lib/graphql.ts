import { GraphQLClient } from "graphql-request";

type RequestType = {
  query: any;
  variables?: any;
};

export async function request<T>({
  query,
  variables,
}: RequestType) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  const client = new GraphQLClient("https://graphql.datocms.com/", { headers });
  return client.request<T>(query, variables);
}
