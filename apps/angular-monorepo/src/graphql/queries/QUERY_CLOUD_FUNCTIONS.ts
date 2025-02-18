import { gql } from '@apollo/client/core'

export const QUERY_CLOUD_FUNCTIONS = gql`
  query CloudFunctions(
    $filter: FilterInput
    $sort: JSON
    $paging: PageInfoInput
  ) {
    cloudFunctions(filter: $filter, sort: $sort, paging: $paging) @client {
      cloudFunctions {
        authentication {
          basic
          method
          oauth2
          tokenBased
        }
        description
        groupId
        id
        httpMethod
        name
        tenantId
        url
      }
      paging {
        page
        pageSize
        total
      }
    }
  }
`
