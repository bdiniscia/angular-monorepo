import { gql } from '@apollo/client'

export const QUERY_EXECUTION_STEP_SCENARIOS_TEMPLATES = gql`
  query ExecutionStepsTemplates($teamId: Int) {
    integromatExecutionStepsTemplates(teamId: $teamId) {
      id
      url
    }
  }
`
