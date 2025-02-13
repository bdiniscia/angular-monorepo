import { gql } from '@apollo/client'

export const QUERY_SCENARIO_BLUEPRINT = gql`
  query IntegromatScenarioBlueprint($teamId: Int, $scenarioId: String) {
    integromatScenarioBlueprint(teamId: $teamId, scenarioId: $scenarioId) {
      id
      teamId
      blueprint {
        name
        metadata
        flow {
          id
          module
          version
          parameters
          routes {
            name
            metadata
            flow {
              id
              module
              parameters
              version
              routes {
                metadata
                name
                flow {
                  id
                  module
                  parameters
                  version
                  routes {
                    metadata
                    name
                    flow {
                      id
                      module
                      parameters
                      version
                      routes {
                        metadata
                        name
                        flow {
                          id
                          module
                          parameters
                          version
                          routes {
                            metadata
                            name
                            flow {
                              id
                              module
                              parameters
                              version
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      scheduling {
        type
      }
      error {
        errorCode
        message
      }
    }
  }
`
