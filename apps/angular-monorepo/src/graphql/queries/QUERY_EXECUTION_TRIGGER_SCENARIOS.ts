import { gql } from '@apollo/client'

export const QUERY_EXECUTION_TRIGGER_SCENARIOS = gql`
  query ExecutionTriggerScenarios($teamId: Int) {
    cxpAccount {
      name
      integromatTeam {
        id
        organizationId
      }
    }
    integromatInitTriggerScenarios(teamId: $teamId) {
      id
      name
      description
      hookId
      isPaused
      usedPackages
    }
    integromatMidTriggerScenarios(teamId: $teamId) {
      id
      name
      description
      hookId
      isPaused
      usedPackages
    }
    integromatInitTriggerTemplates(teamId: $teamId) {
      id
      url
    }
    integromatMidTriggerTemplates(teamId: $teamId) {
      id
      url
    }
  }
`
