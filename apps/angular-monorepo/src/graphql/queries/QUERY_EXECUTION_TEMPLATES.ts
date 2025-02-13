import { gql } from '@apollo/client/core'

export const QUERY_EXECUTION_TEMPLATES = gql`
  query ExecutionTemplates {
    executionTemplates {
      active
      description
      id
      metadata {
        createdAt
        activatedAt
        createdBy
        activatedBy
        createdByUser {
          userName
        }
      }
      name
      state
      stateComments
      tenant {
        name
        integromatTeam {
          id
          organizationId
        }
        hookdeck {
          sourceUrl
        }
      }
      runningInstances
      completedInstances
      failedInstances
      stoppedInstances
      version {
        id
        number
      }
    }
  }
`
