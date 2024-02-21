import { gql } from "graphql-request";
export const allArticleQuery = gql`
  {
    allArticles {
      author {
        name
        id
        photo {
          alt
          url
        }
      }
      title
      smallDescription
      posted
      imageMain {
        url
        alt
        author
        id
        title
      }
      id
      description {
        value
        links
      }
      category {
        title
        position
        id
      }
      _publishedAt
      featureArticle
    }
  }
`;
