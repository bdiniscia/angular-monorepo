import { gql } from '@apollo/client/core'

export const QUERY_WEBHOOK_DATA_V2 = gql`
  query WebhooksEventsFilteredByHeaders($header: String, $value: String) {
    webhooksEventsFilteredByHeaders(header: $header, value: $value)  {
      attempts
      cli_id
      created_at
      data
      destination_id
      error_code
      event_data_id
      id
      last_attempt_at
      next_attempt_at
      request_id
      response_status
      source_id
      status
      successful_at
      team_id
      updated_at
      webhook_id
    }
  }
`
