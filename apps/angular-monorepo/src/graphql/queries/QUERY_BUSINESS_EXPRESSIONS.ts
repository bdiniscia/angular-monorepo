import { gql } from '@apollo/client'

export const QUERY_BUSINESS_EXPRESSIONS = gql`
  query BusinessExpressions {
    businessExpressions {
      id
      name
      description
      expression
      referencingTemplates {
        id
        versionId
        name
      }
    }
  }
`
