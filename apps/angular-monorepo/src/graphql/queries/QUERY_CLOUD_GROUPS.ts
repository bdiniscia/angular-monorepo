import { gql } from '@apollo/client/core'

export const QUERY_CLOUD_GROUPS = gql`
  query cloudGroups($filter: FilterInput, $sort: JSON, $paging: PageInfoInput) {
    cloudGroups(filter: $filter, sort: $sort, paging: $paging) {
      cloudGroups {
        authentication {
          basic
          method
          oauth2
        }
        id
        name
        parentGroupId
        provider
      }
      paging {
        page
        pageSize
        total
      }
    }
  }
`
