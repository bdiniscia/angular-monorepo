import { HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import type { ApolloClientOptions} from '@apollo/client/core';
import { InMemoryCache, makeVar } from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { BUSINESS_EXPRESSION_MOCK, CLOUD_FUNCTION_MOCK, DIGITAL_PROCESS_MOCK, PAGE_INFO_MOCK } from './mocks';

// get the authentication token from local storage if it exists
const token = '';

const uri = 'https://api.orchestrationengine.io/oe-bff'; // <-- add the URL of the GraphQL server here
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const executionTemplatesVar = makeVar<any[]>([]);

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
        CloudFunction: CLOUD_FUNCTION_MOCK,
        PageInfo: PAGE_INFO_MOCK,
      },
    }),
    resolvers: {
      Mutation: {
        createExecutionTemplate: (_: any, { executionTemplate }: any) => {
          const newTemplate = {
            id: (Math.random() * 10000).toFixed(0), // Generate a random ID
            version: { id: (Math.random() * 10000).toFixed(0) } // Generate a version ID
          };
    
          // Store locally using makeVar
          executionTemplatesVar([...executionTemplatesVar(), newTemplate]);
  
          return newTemplate;
        }
      }
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
