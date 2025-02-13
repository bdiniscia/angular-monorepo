import { gql } from '@apollo/client'

export const QUERY_EXECUTION_TEMPLATE_RUNS_DETAILS = gql`
  query ExecutionTemplateRunsDetails(
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
        triggers {
          scenarios {
            id
            teamId
            name
            usedPackages
          }
          scenariosBlueprints {
            id
            teamId
          }
          timeExpression
          triggerType
          eventType
          event {
            name
            at
            body
          }
          status
        }
        steps {
          status
          type
          stepType
          scenarios {
            id
            url
            externalRunId
            method
            type
            scenario {
              id
              teamId
              name
              usedPackages
            }
            scenarioBlueprint {
              id
              teamId
            }
            input
            output
            completionEvent {
              name
              at
              body
            }
          }
          triggers {
            scenarios {
              id
              teamId
              name
              usedPackages
            }
            scenariosBlueprints {
              id
              teamId
            }
            timeExpression
            triggerType
            eventType
            event {
              name
              at
              body
            }
            status
          }
          input
          output
          condition {
            left
            op
            right
            result
            error
            input
            output
          }
          subflows {
            input
            output
            templateId
            workflowId
            templateVersion {
              id
              number
            }
          }
        }
        runningInstances
        error
        input
        output
        start
        finishAt
      }
    }
  }
`
