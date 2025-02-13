import { gql } from '@apollo/client'

export const MUTATION_CREATE_CLOUD_GROUP = gql`
  mutation CreateCloudGroup($cloudGroup: CloudGroupInput) {
    createCloudGroup(cloudGroup: $cloudGroup) {
      authentication {
        basic
        method
        oauth2
        tokenBased
      }
      id
      name
      parentGroupId
      provider
    }
  }
`
