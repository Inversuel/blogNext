import { gql } from "graphql-request";
export const allArticleIdQuery = gql`
  {
    allArticles {
      id
    }
  }
`;

export interface AllArticleId {
  data: Data
}

export interface Data {
  allArticles: AllArticle[]
}

export interface AllArticle {
  id: string
}
