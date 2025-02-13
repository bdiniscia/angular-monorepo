import { HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import type { ApolloClientOptions} from '@apollo/client/core';
import { InMemoryCache, makeVar } from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { BUSINESS_EXPRESSION_MOCK, CLOUD_FUNCTION_MOCK, DIGITAL_PROCESS_MOCK, PAGE_INFO_MOCK } from './mocks';

// get the authentication token from local storage if it exists
// const token = localStorage.getItem('token');

const uri = 'https://api.orchestrationengine.io/oe-bff'; // <-- add the URL of the GraphQL server here
// eslint-disable-next-line @typescript-eslint/no-explicit-any

const executionTemplatesVar = makeVar<any[]>([]);

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
   const headers = new HttpHeaders({
     "Access-Control-Allow-Origin": "*",
      authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ3WTlxa1pVNGRpUXViR0JJYTFHRHEydHlpaHdydS1YRTRpZUtEb056YUxnIn0.eyJleHAiOjE3Mzk0NDc4MDcsImlhdCI6MTczOTQ0MDYwNywiYXV0aF90aW1lIjoxNzM5NDQwNjA3LCJqdGkiOiI2NGQ4N2IzYi1iMDkzLTRjNjMtYmY2OS05Yzc5NWFjZTFhMzAiLCJpc3MiOiJodHRwczovL2tleWNsb2FrLm9yY2hlc3RyYXRpb25lbmdpbmUuaW8vcmVhbG1zL29lIiwiYXVkIjoibGpicXRlbmFudCIsInN1YiI6ImFiNWNjMTgwLTllOTEtNDYwYy1hMThmLWMxYzNhMzdjNmJlZCIsInR5cCI6IklEIiwiYXpwIjoibGpicXRlbmFudCIsInNpZCI6ImEyODI3NDllLTc3NDItNDNlMy04ODc0LWVkZjNjMzc0NDdjYSIsImF0X2hhc2giOiJqUjhNOHF5WmJOUlRTZkROSGdtSndnIiwiYWNyIjoiMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW9lIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiLCJvZS5mb3JtX2FkbWluIiwiYWRtaW4iXSwibmFtZSI6IlZCV1VYTlVzZXIgVkJXVVhOVXNlciIsInVzZXJFbWFpbCI6InZid3V4bnVzZXJAcWF0ZXN0LmNvbSIsInByZWZlcnJlZF91c2VybmFtZSI6InZid3V4bnVzZXIiLCJnaXZlbl9uYW1lIjoiVkJXVVhOVXNlciIsImZhbWlseV9uYW1lIjoiVkJXVVhOVXNlciIsInRlbmFudCI6IjAxSkdKVlNOMFhZMlpZRlhWUUI4TUpRQjdKIiwiZW1haWwiOiJ2Ynd1eG51c2VyQHFhdGVzdC5jb20ifQ.c2AyiVW6iMT6J5t1WbnsiDQaHBRnOJ_6xiQ2Wz5Lq0-uNJ4jho8ex_ClY4J3j0hgaA3IqxqGdmS7tUxA3PWW342nt_adW-uL75tdqksELe7y7F7Y9d4kShZDDlRZJ-J3Cf6PWR0WUWSO7x8-jRf8vs0nytAjwpD0_wsSMp57tqKTQZBROCwFg82ULvQcvbDR50bUKrHnzuTMhryQ_wKDr64dUvQt-o66eL_kLmmlJLQA6i4yrwrjPTfstmtaVTid9YahFtR1fHa5FQ4AJon4Iz7MFdDPUs_wybDyL-pAXYtY-kcIQYqMgS_TbOYOfC5WgEmSi1QRxzUk52htH0wD4A`,
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
