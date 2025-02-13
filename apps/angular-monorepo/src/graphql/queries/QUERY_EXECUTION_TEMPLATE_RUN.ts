import { gql } from '@apollo/client'

export const QUERY_EXECUTION_TEMPLATE_RUN = gql`
  query ExecutionTemplateRun($runId: String, $executionTemplateId: String) {
    executionTemplateRunDetails(
      executionTemplateId: $executionTemplateId
      runId: $runId
    ) {
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
        cloudFunctions {
          cloudFunctionId
          cloudFunctionInputJQFilter
          cloudFunctionName
          cloudFunctionOutputJQFilter
          input
          output
          status
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
    executionTemplate(id: $executionTemplateId) {
      name
      version {
        id
        number
      }
      id
    }
    getDraft(id: $executionTemplateId) {
      id
      name
      version {
        id
        number
      }
      description
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
      active
      state
      stateComments
      metadata {
        createdAt
        activatedAt
        createdBy
        activatedBy
      }
      trigger {
        scenarios {
          id
          teamId
          name
          description
          hookId
          isPaused
          usedPackages
          scheduling {
            type
          }
          createdByUser {
            id
            name
            email
          }
          updatedByUser {
            id
            name
            email
          }
          lastEdit
          error {
            errorCode
            message
          }
        }
        triggerType
        eventType
      }
      steps {
        stepType
        scenarios {
          scenarioId
          url
          method
          type
          scenario {
            id
            teamId
            name
            description
            hookId
            isPaused
            usedPackages
            lastEdit
            error {
              errorCode
              message
            }
          }
        }
        trigger {
          scenarios {
            id
            teamId
            name
            description
            hookId
            isPaused
            usedPackages
            scheduling {
              type
            }
            createdByUser {
              id
              name
              email
            }
            updatedByUser {
              id
              name
              email
            }
            lastEdit
            error {
              errorCode
              message
            }
          }
          scenariosBlueprints {
            id
            teamId
            error {
              errorCode
              message
            }
            blueprint {
              flow {
                id
                module
                version
              }
              metadata
            }
          }
          timeExpression
          triggerType
          eventType
        }
        subflows {
          executionTemplateId
          name
        }
        condition {
          left
          op
          right
        }
      }
    }
  }
`
