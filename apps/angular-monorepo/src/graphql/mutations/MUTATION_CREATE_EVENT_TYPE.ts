import { gql } from '@apollo/client'

export const MUTATION_CREATE_EVENT_TYPE = gql`
  mutation CreateEventType($eventType: EventTypeInput) {
    createEventType(eventType: $eventType) {
      id
    }
  }
`
