export const ALL_CATEGORIES_QUERY = gql`
  query categoryCollectionQuery {
    categoryCollection {
      items {
        name
        slug
      }
    }
  }
`;
