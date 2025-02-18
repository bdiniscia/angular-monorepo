import { gql } from '@apollo/client/core'

export const MUTATION_CREATE_UPDATE_DIGITAL_PROCESS_DRAFT = gql`
  mutation CreateOrUpdateDraft(
    $id: String
    $executionTemplate: ExecutionTemplateInput
  ) {
    createOrUpdateDraft(id: $id, executionTemplate: $executionTemplate) {
      id
      version {
        id
      }
    }
  }
`
