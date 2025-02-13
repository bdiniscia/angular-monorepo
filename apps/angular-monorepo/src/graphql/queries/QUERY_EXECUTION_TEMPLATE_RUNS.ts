import { gql } from '@apollo/client'

export const QUERY_EXECUTION_TEMPLATE_RUNS = gql`
  query ExecutionTemplateRuns(
    $executionTemplateId: String
    $paging: PageInfoInput
    $sort: JSON
    $filter: FilterInput
  ) {
    executionTemplateRuns(
      executionTemplateId: $executionTemplateId
      paging: $paging
      sort: $sort
      filter: $filter
    ) {
      paging {
        page
        pageSize
        total
      }
      executionTemplateDebugs {
        id
        name
        templateVersion {
          id
          number
        }
        description
        tenant {
          name
          description
          integromatTeam {
            id
          }
          hookdeck {
            sourceUrl
          }
        }
        active
        status
        metadata {
          createdAt
          activatedAt
          createdBy
          activatedBy
          createdByUser {
            userId
            userName
            userEmail
          }
          activatedByUser {
            userId
            userName
            userEmail
          }
        }
        input
        error
        start
        finishAt
        runningInstances
        completedInstances
        failedInstances
        stoppedInstances
      }
    }
  }
`
