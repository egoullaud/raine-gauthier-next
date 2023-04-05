import { gql } from "graphql-request";

export const GET_ALL_QUERY = gql`
  query Categories {
    categories {
      title
      id
      slug
      images {
        title
        id
        slug
        image {
          url
          id
        }
      }
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  {
    categories {
      title
      id
      slug
    }
  }
`;

export const CATEGORY_BY_SLUG = gql`
  query categoryBySlug($slug: String!) {
    category(where: { slug: $slug }) {
      title
      images {
        title
      }
    }
  }
`;
