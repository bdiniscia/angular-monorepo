import { gql } from '@apollo/client/core'

export const QUERY_EXECUTION_TEMPLATE_NAME = gql`
  query ExecutionTemplateName($executionTemplateId: String) {
    executionTemplate(id: $executionTemplateId)  {
      name
      version {
        id
        number
      }
      id
    }
  }
`
