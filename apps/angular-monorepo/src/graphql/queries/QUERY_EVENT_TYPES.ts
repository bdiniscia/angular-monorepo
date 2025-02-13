import { gql } from '@apollo/client/core'

export const QUERY_EVENT_TYPES = gql`
  query EventTypes {
    eventTypes {
      items {
        id
        name
        key
      }
    }
  }
`
