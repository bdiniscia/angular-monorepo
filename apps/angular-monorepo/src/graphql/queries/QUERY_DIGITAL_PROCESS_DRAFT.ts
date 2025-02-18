import { gql } from '@apollo/client/core'

export const QUERY_DIGITAL_PROCESS_DRAFT = gql`
  query DigitalProcessDraft($executionTemplateId: String) {
    getDraft(id: $executionTemplateId) {
      UseCases {
        id
      }
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
        timeExpression
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
        cloudFunctions {
          cloudFunctionId
          cloudFunctionName
          cloudFunctionInputJQFilter
          cloudFunctionOutputJQFilter
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
