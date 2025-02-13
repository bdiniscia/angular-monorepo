import { gql } from '@apollo/client'

export const MUTATION_CREATE_EXECUTION_TEMPLATE = gql`
  mutation CreateDigitalProcess($executionTemplate: ExecutionTemplateInput) {
    createExecutionTemplate(executionTemplate: $executionTemplate) @client {
      id
      version {
        id
      }
    }
  }
`
