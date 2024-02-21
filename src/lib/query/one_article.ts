import { gql } from "graphql-request";
export const oneArticleQuery = gql`
  query ($id: ItemId!){
    article(filter: { id: { eq: $id } }) {
      _publishedAt
      title
      smallDescription
      posted
      imageMain {
        id
        url
        title
        alt
      }
      id
      featureArticle
      description {
        value
      }
      category {
        title
        id
      }
      author {
        name
        id
        photo {
          alt
          url
        }
      }
    }
  }
`;
