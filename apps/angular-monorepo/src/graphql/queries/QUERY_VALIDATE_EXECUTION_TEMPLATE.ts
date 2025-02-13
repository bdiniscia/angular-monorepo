import { gql } from '@apollo/client'

export const QUERY_VALIDATE_EXECUTION_TEMPLATE = gql`
  query ValidateExecutionTemplate($executionTemplate: ExecutionTemplateInput) {
    validateExecutionTemplate(executionTemplate: $executionTemplate) {
      name
      version {
        id
      }
      error
    }
  }
`
