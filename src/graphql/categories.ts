import { gql } from "@apollo/client"

export const GET_CATEGORIES_QUERY = gql`
  query {
    categories {
      slug
      title
      categoryId
    }
  }
`

export const GET_RECOMENDED_ITEM = gql`
  query {
    categories(where: { slug: "03/recomendacoes" }) {
      id
      products {
        image
        title
        slug
        productId
      }
    }
  }
`
