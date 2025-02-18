import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Apollo} from 'apollo-angular';

import { GraphQLModule } from '../graphql/graphql.module';
import { QUERY_CLOUD_FUNCTIONS } from '../graphql/queries/QUERY_CLOUD_FUNCTIONS';
import { MUTATION_CREATE_EXECUTION_TEMPLATE } from '../graphql/mutations/MUTATION_CREATE_EXECUTION_TEMPLATE';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, GraphQLModule],
  template: `
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome angular-monorepo 👋
          </h1>
          <button (click)="createDP()">Create DP</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      public digitalProcesses: any[] = [];
      public loading = true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      public error: any;
      public DP = {
        "name": "New DP - Barb",
        "description": null,
        "trigger": [
          {
            "triggerType": "webhook",
            "eventType": "testEvent",
            "scenarioIds": [],
            "timeExpression": null
          }
        ],
        "steps": []
      }
  
      public constructor(private readonly apollo: Apollo) { }
  
      public ngOnInit() {
        this.apollo.watchQuery({
          query: QUERY_CLOUD_FUNCTIONS,
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .valueChanges.subscribe((result: any) => {
          console.log('result', result)
          this.digitalProcesses = result.data?.countries;
          this.loading = result.loading;
          this.error = result.error;
        });
      } 

      createDP() {
        this.apollo
          .mutate({
            mutation: MUTATION_CREATE_EXECUTION_TEMPLATE,
            variables: {
              executionTemplate: this.DP,
            },
          })
          .subscribe(
            ({ data }) => {
              console.log('got data', data);
            },
            error => {
              console.log('there was an error sending the query', error);
            },
          );
      }
}
