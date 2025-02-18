import { HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import type { ApolloClientOptions} from '@apollo/client/core';
import { InMemoryCache, makeVar } from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS, Query } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { BUSINESS_EXPRESSION_MOCK, CLOUD_FUNCTION_MOCK, CLOUD_GROUP_MOCK, DIGITAL_PROCESS_MOCK, PAGE_INFO_MOCK } from './mocks-cache';
import { businessExpressionsResponse, cloudFunctionsResponse, cloudGroupsResponse, createExecutionTemplateResponse, cxpAccountResponse, digitalProcessResponse, draftDigitalProcessResponse, eventTypesResponse, executionStepsTemplatesResponse, executionTemplateRunDetailsResponse, executionTemplateRunsResponse, executionTemplatesResponse, executionTemplateVersionResponse, integromatExecutionStepScenariosResponse, integromatInitTriggerScenariosResponse, integromatInitTriggerTemplatesResponse, integromatMidTriggerScenariosResponse, integromatMidTriggerTemplatesResponse, integromatScenarioBlueprintResponse, validateExecutionTemplateResponse, webhooksEventsFilteredByHeadersResponse } from './mocks-resolvers';

// get the authentication token from local storage if it exists
const token = '';

// const uri = '/graphql'; // <-- add the URL of the GraphQL server here
const uri = 'https://api.orchestrationengine.io/oe-bff'; // <-- add the URL of the GraphQL server here
// eslint-disable-next-line @typescript-eslint/no-explicit-any


export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
   const headers = new HttpHeaders({
     "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
   });
  return {
    link: httpLink.create({
      uri,
      headers,
      withCredentials: false
    }),
    cache: new InMemoryCache({
      typePolicies: {
        ExecutionTemplate: DIGITAL_PROCESS_MOCK,
        BusinessExpression: BUSINESS_EXPRESSION_MOCK,
        //CloudFunction: CLOUD_FUNCTION_MOCK,
        PageInfo: PAGE_INFO_MOCK,
        CloudGroup: CLOUD_GROUP_MOCK,
      },
    }),
    resolvers: {
      Query: {
        cloudFunctions: () => cloudFunctionsResponse(),
        businessExpressions: () => businessExpressionsResponse(),
        cloudGroups: () => cloudGroupsResponse(),
        getDraft: () => draftDigitalProcessResponse(),
        eventTypes: () => eventTypesResponse(),
        integromatExecutionStepsTemplates: () => executionStepsTemplatesResponse(),
        cxpAccount: () => cxpAccountResponse(),
        integromatExecutionStepScenarios: () => integromatExecutionStepScenariosResponse(),
        executionTemplate: () => digitalProcessResponse(),
        executionTemplateRunDetails: () => executionTemplateRunDetailsResponse(),
        executionTemplateRuns: () => executionTemplateRunsResponse(),
        executionTemplateVersion: () => executionTemplateVersionResponse(),
        executionTemplates: () => executionTemplatesResponse(),
        integromatInitTriggerScenarios: () => integromatInitTriggerScenariosResponse(),
        integromatInitTriggerTemplates: () => integromatInitTriggerTemplatesResponse(),
        integromatMidTriggerScenarios: () => integromatMidTriggerScenariosResponse(),
        integromatMidTriggerTemplates: () => integromatMidTriggerTemplatesResponse(),
        integromatScenarioBlueprint: () => integromatScenarioBlueprintResponse(),
        validateExecutionTemplate: () => validateExecutionTemplateResponse(),
        webhooksEventsFilteredByHeaders: () => webhooksEventsFilteredByHeadersResponse()
      },
      Mutation: {
        createExecutionTemplate: (_: any, { executionTemplate }: any) => createExecutionTemplateResponse()
      },
    },
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all',
      },
    }
  };
}

@NgModule({
    exports: [ApolloModule],
    providers: [
      {
        provide: APOLLO_OPTIONS,
        useFactory: createApollo,
        deps: [HttpLink],
      },
    ],
  })

export class GraphQLModule { }

