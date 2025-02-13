import { gql } from '@apollo/client'

export const MUTATION_REPLAY_STEP = gql`
  mutation ReplayStepNumberFromRunId($runId: String, $stepNumber: String) {
    replayStepNumberFromRunId(runId: $runId, stepNumber: $stepNumber)
  }
`
