import { gql } from '@apollo/client'

export const QUERY_EXECUTION_STEP_SCENARIOS = gql`
  query ExecutionStepScenarios(
    $teamId: Int
    $paging: IntegromatPageInfoInput
    $filter: IntegromatFilterInput
  ) {
    cxpAccount {
      integromatTeam {
        id
        organizationId
      }
    }
    integromatExecutionStepScenarios(
      teamId: $teamId
      paging: $paging
      filter: $filter
    ) {
      scenarios {
        id
        teamId
        name
        description
        hookId
        isPaused
        usedPackages
      }
      pageInfo {
        page
        pageSize
      }
    }
  }
`
