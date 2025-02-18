import { makeVar } from "@apollo/client/core";
import { BusinessExpression, BusinessExpressionsQuery, CloudGroups, CxpAccountInfo, EventType, EventTypes, ExecutionTemplate, ExecutionTemplateDebug, ExecutionTemplateRunsResponse, IntegromatScenario, IntegromatScenarioBlueprint, IntegromatScenarios, IntegromatTemplate } from "../generated/graphql";
import { getRandomId } from "./mocks-cache";

// <----------- QUERIES ------------>
export const cloudFunctionsResponse = makeVar<any>({
    "cloudFunctions": [
        {
            "authentication": {
                "basic": null,
                "method": "none",
                "oauth2": null,
                "tokenBased": null
            },
            "description": "",
            "groupId": "01JGZZBV10AC4NXMDWWNB5RRV7",
            "id": "01JGZZRQYG7DG5HA3BP3D17BQY",
            "httpMethod": "GET",
            "name": "Weather",
            "tenantId": "01JGJVSN0XY2ZYFXVQB8MJQB7J",
            "url": "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
        },
        {
            "authentication": {
                "basic": null,
                "method": "none",
                "oauth2": null,
                "tokenBased": null
            },
            "description": "aCloudFunction description",
            "groupId": "01JGZZBV10AC4NXMDWWNB5RRV7",
            "id": "01JH05A07DRTEBMJJHVRZKA6GN",
            "httpMethod": "GET",
            "name": "aCloudFunction",
            "tenantId": "01JGJVSN0XY2ZYFXVQB8MJQB7J",
            "url": "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41"
        },
        {
            "authentication": {
                "basic": null,
                "method": "none",
                "oauth2": null,
                "tokenBased": null
            },
            "description": "aCloudFunction description2",
            "groupId": "01JGZZBV10AC4NXMDWWNB5RRV7",
            "id": "01JH05DXED788YZ7SV3G1TT8ZX",
            "httpMethod": "GET",
            "name": "aCloudFunction2",
            "tenantId": "01JGJVSN0XY2ZYFXVQB8MJQB7J",
            "url": "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41"
        }
    ],
    "paging": {
        "page": 1,
        "pageSize": 10,
        "total": 3
    }
});

export const businessExpressionsResponse = makeVar<BusinessExpression[]>([
    {
        "id": "01JKZ69MZ4KM2ZKT9Z7FW31CJ4",
        "name": "New Rule",
        "description": "Description of the Rule",
        "expression": {
            "in": [
                {
                    "var": "new_rule"
                },
                [
                    "Item 1",
                    "Item 2",
                    "Item 3"
                ]
            ]
        },
        "referencingTemplates": null,
        "__typename": "BusinessExpression"
    },
    {
        "id": "01JM2JGBV1STFDYK4ER4WF3SK4",
        "name": "Chain Management Rule",
        "description": "Chain Management Rule description",
        "expression": {
            "==": [
                {
                    "var": "chain_management_rule"
                },
                true
            ]
        },
        "referencingTemplates": null,
        "__typename": "BusinessExpression"
    }
])

export const cloudGroupsResponse = makeVar<CloudGroups>({
    "cloudGroups": [
        {
            "authentication": {
                "basic": null,
                "method": "none",
                "oauth2": null,
                "tokenBased": null
            },
            "id": "01JGZZBV10AC4NXMDWWNB5RRV7",
            "name": "jmca",
            "parentGroupId": "",
            "provider": "azure"
        },
        {
            "authentication": {
                "basic": null,
                "method": "none",
                "oauth2": null,
                "tokenBased": null
            },
            "id": "01JHJ5YAGRNR0BTP4H4PQWMR8N",
            "name": "regression",
            "parentGroupId": "",
            "provider": "azure"
        }
    ],
    "paging": {
        "page": 1,
        "pageSize": 10,
        "total": 2
    }
})

export const draftDigitalProcessResponse = makeVar<ExecutionTemplate>({
    "UseCases": null,
    "id": "01JJX4048QXJD23ZMMXX97037M",
    "name": "QA Digital Process.8a54b52a-1ba0-4a35-8e8a-4eea989e5ddd",
    "version": {
        "id": "draft-01JM5PSW88VGBPM4CKS0ASQQRM",
        "number": 0,
        "__typename": "TemplateVersion"
    },
    "description": "a digital process with a scenario type to call Make",
    "tenant": {
        "name": "ljbqtenant",
        "integromatTeam": {
            "id": 350,
            "organizationId": 351,
            "__typename": "IntegromatTeam"
        },
        "hookdeck": {
            "sourceUrl": "signals.emporix.io/01JGJVSN0XY2ZYFXVQB8MJQB7J/signal",
            "__typename": "HookdeckAccountInfo"
        },
        "__typename": "CXPAccountInfo"
    },
    "active": null,
    "state": null,
    "stateComments": null,
    "metadata": {
        "createdAt": "2025-02-15T21:04:03.848Z",
        "activatedAt": "0001-01-01T00:00:00Z",
        "createdBy": "ab5cc180-9e91-460c-a18f-c1c3a37c6bed",
        "activatedBy": "",
        "__typename": "CXPMetadata"
    },
    "trigger": [
        {
            "scenarios": [],
            "timeExpression": null,
            "triggerType": "webhook",
            "eventType": "t.event.73c16742-9079-497e-918e-9cef5490e96b",
            "__typename": "Trigger"
        }
    ],
    "steps": [
        {
            "stepType": "scenario",
            "scenarios": [
                {
                    "scenarioId": "39",
                    "url": "",
                    "method": "",
                    "type": null,
                    "scenario": {
                        "id": "39",
                        "teamId": "350",
                        "name": "RMIntelligenceApi",
                        "description": "",
                        "hookId": "11",
                        "isPaused": false,
                        "usedPackages": [
                            "celonisinternal-celonis-oe",
                            "celonisinternal-celonis-iapi",
                            "celonisinternal-celonis-iapi",
                            "celonisinternal-celonis-oe"
                        ],
                        "lastEdit": "2025-01-14T12:21:11.047Z",
                        "error": null,
                        "__typename": "IntegromatScenario"
                    },
                    "__typename": "Scenario"
                }
            ],
            "trigger": null,
            "subflows": null,
            "cloudFunctions": null,
            "condition": null,
            "__typename": "Step"
        }
    ],
    "__typename": "ExecutionTemplate"
})

export const eventTypesResponse = makeVar<EventType[]>([
    {
        "id": "01JGJZXMQES289SJ1TAH0E1E85",
        "name": "jmca.a.b.c",
        "key": "jmca.a.b.c",
        "__typename": "EventType"
    },
    {
        "id": "01JGNC6H15N0YGAWWRVQ0H0T3A",
        "name": "testeventwebhook",
        "key": "test.event.webhook",
        "__typename": "EventType"
    },
    {
        "id": "01JGNDETB1ZRTEPEQWAFPNXJ2F",
        "name": "abc",
        "key": "abc",
        "__typename": "EventType"
    }
])

export const executionStepsTemplatesResponse = makeVar<IntegromatTemplate[]>([
    {
        "id": "14",
        "url": "10-wait-for-execution-template",
        "__typename": "IntegromatTemplate"
    }
])

export const cxpAccountResponse = makeVar<CxpAccountInfo>({
    "id": "01JGJVSN0XY2ZYFXVQB8MJQB7J",
    "name": "ljbqtenant",
    "description": "OCZUWXKEFO_Description",
    "integromatTeam": {
        "id": 350
    },
    "hookdeck": {
        "sourceUrl": "signals.emporix.io/01JGJVSN0XY2ZYFXVQB8MJQB7J/signal"
    },
    "magicLinks": {
        "schedulingScenario": "43",
        "submittedEventType": "magic-link.submitted"
    },
    "__typename": "CXPAccountInfo"
})

export const integromatExecutionStepScenariosResponse = makeVar<IntegromatScenarios>({
    "scenarios": [
        {
            "id": "49",
            "teamId": "350",
            "name": "RMTest sleep",
            "description": "",
            "hookId": "16",
            "isPaused": false,
            "usedPackages": [
                "celonisinternal-celonis-oe",
                "util",
                "celonisinternal-celonis-oe"
            ],
            "__typename": "IntegromatScenario"
        },
        {
            "id": "47",
            "teamId": "350",
            "name": "Integration Celonis OE",
            "description": "",
            "hookId": null,
            "isPaused": false,
            "usedPackages": [
                "celonisinternal-celonis-oe"
            ],
            "__typename": "IntegromatScenario"
        },
        {
            "id": "43",
            "teamId": "350",
            "name": "Send magic link to supplier",
            "description": "",
            "hookId": "13",
            "isPaused": false,
            "usedPackages": [
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-oe"
            ],
            "__typename": "IntegromatScenario"
        },
        {
            "id": "39",
            "teamId": "350",
            "name": "RMIntelligenceApi",
            "description": "",
            "hookId": "11",
            "isPaused": false,
            "usedPackages": [
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-iapi",
                "celonisinternal-celonis-iapi",
                "celonisinternal-celonis-oe"
            ],
            "__typename": "IntegromatScenario"
        },
        {
            "id": "44",
            "teamId": "350",
            "name": "Integration Celonis OE",
            "description": "",
            "hookId": null,
            "isPaused": false,
            "usedPackages": [
                "celonisinternal-celonis-oe"
            ],
            "__typename": "IntegromatScenario"
        },
        {
            "id": "40",
            "teamId": "350",
            "name": "RM - Create and submit survey",
            "description": "",
            "hookId": "12",
            "isPaused": false,
            "usedPackages": [
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-oe"
            ],
            "__typename": "IntegromatScenario"
        },
        {
            "id": "36",
            "teamId": "350",
            "name": "RM midTriggerTest",
            "description": "",
            "hookId": "10",
            "isPaused": false,
            "usedPackages": [
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-oe"
            ],
            "__typename": "IntegromatScenario"
        },
        {
            "id": "21",
            "teamId": "350",
            "name": "JMCATest",
            "description": "",
            "hookId": "5",
            "isPaused": false,
            "usedPackages": [
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-oe"
            ],
            "__typename": "IntegromatScenario"
        },
        {
            "id": "38",
            "teamId": "350",
            "name": "Integration Celonis OE",
            "description": "",
            "hookId": null,
            "isPaused": false,
            "usedPackages": [
                "celonisinternal-celonis-oe"
            ],
            "__typename": "IntegromatScenario"
        },
        {
            "id": "35",
            "teamId": "350",
            "name": "Integration Celonis OE",
            "description": "",
            "hookId": null,
            "isPaused": false,
            "usedPackages": [
                "celonisinternal-celonis-oe",
                "celonisinternal-celonis-oe"
            ],
            "__typename": "IntegromatScenario"
        }
    ],
    "pageInfo": {
        "page": 0,
        "pageSize": 10,
        "__typename": "IntegromatPageInfo"
    },
    "__typename": "IntegromatScenarios"
})

export const digitalProcessResponse = makeVar<ExecutionTemplate>({
    "id": "01JJX4048QXJD23ZMMXX97037M",
    "name": "QA Digital Process.8a54b52a-1ba0-4a35-8e8a-4eea989e5ddd",
    "version": {
        "id": "01JJX4048QXJD23ZMMXWV3047X",
        "number": 1
    },
    "description": "a digital process with a scenario type to call Make",
    "tenant": {
        "id": "01JGJVSN0XY2ZYFXVQB8MJQB7J",
        "name": "ljbqtenant",
        "description": "OCZUWXKEFO_Description",
        "integromatTeam": {
            "id": 350
        },
        "hookdeck": {
            "sourceUrl": "signals.emporix.io/01JGJVSN0XY2ZYFXVQB8MJQB7J/signal"
        },
        "magicLinks": {
            "schedulingScenario": "43",
            "submittedEventType": "magic-link.submitted"
        }
    },
    "active": null,
    "state": "active",
    "stateComments": null,
    "metadata": {
        "createdAt": "2025-01-31T02:45:48.439Z",
        "activatedAt": "2025-01-31T02:45:48.759Z",
        "createdBy": "ab5cc180-9e91-460c-a18f-c1c3a37c6bed",
        "activatedBy": "",
        "createdByUser": {
            "userId": "ab5cc180-9e91-460c-a18f-c1c3a37c6bed",
            "userName": "vbwuxnuser",
            "userEmail": "vbwuxnuser@qatest.com"
        },
        "activatedByUser": {
            "userId": "ab5cc180-9e91-460c-a18f-c1c3a37c6bed",
            "userName": "vbwuxnuser",
            "userEmail": "vbwuxnuser@qatest.com"
        }
    },
    "trigger": [
        {
            "scenarios": [],
            "scenariosBlueprints": null,
            "triggerType": "webhook",
            "timeExpression": null,
            "eventType": "t.event.73c16742-9079-497e-918e-9cef5490e96b"
        }
    ],
    "steps": [
        {
            "stepType": "cloudfunction",
            "scenarios": null,
            "subflows": null,
            "condition": null,
            "cloudFunctions": [
                {
                    "cloudFunctionId": "01JJX3ZZ0ZD5B4X6SVXZZQHRKA",
                    "cloudFunctionName": "QA_Cloud_Function29e34eaf-9e10-4dff-971f-1b2ed4ec5f93",
                    "cloudFunctionInputJQFilter": ".",
                    "cloudFunctionOutputJQFilter": "."
                }
            ]
        }
    ],
    "runningInstances": 0,
    "completedInstances": 1,
    "failedInstances": 0,
    "stoppedInstances": 0,
    "error": null,
    "UseCases": [],
    "__typename": "ExecutionTemplate"
})

export const executionTemplateRunDetailsResponse = makeVar<ExecutionTemplateDebug>({
    "id": "draft-01JK64CZPPHCPXYNPFXQHW37EW-01JGJVSN0XY2ZYFXVQB8MJQB7J-01JK64DYV1FRYF38HH5WZKRWB4",
    "name": null,
    "templateVersion": {
        "id": "draft-01JK64CZPPHCPXYNPFXQHW37EW",
        "number": 0,
        "__typename": "TemplateVersion"
    },
    "description": null,
    "tenant": {
        "name": "ljbqtenant",
        "description": "OCZUWXKEFO_Description",
        "integromatTeam": {
            "id": 350,
            "__typename": "IntegromatTeam"
        },
        "hookdeck": {
            "sourceUrl": "signals.emporix.io/01JGJVSN0XY2ZYFXVQB8MJQB7J/signal",
            "__typename": "HookdeckAccountInfo"
        },
        "__typename": "CXPAccountInfo"
    },
    "active": null,
    "status": "finished",
    "metadata": null,
    "triggers": [
        {
            "scenarios": [],
            "scenariosBlueprints": null,
            "triggerType": "webhook",
            "eventType": "t.event.73c16742-9079-497e-918e-9cef5490e96b",
            "event": {
                "name": "t.event.73c16742-9079-497e-918e-9cef5490e96b",
                "at": "2025-02-03T14:46:31.614Z",
                "body": {
                    "happy": true,
                    "newtest": "hello"
                },
                "__typename": "TriggerEvent"
            },
            "status": null,
            "__typename": "TriggerDebug"
        }
    ],
    "steps": [
        {
            "status": "finished",
            "type": "cloudfunction",
            "stepType": null,
            "scenarios": null,
            "triggers": null,
            "input": {
                "_draft": true,
                "_executionEnvironment": "production",
                "_replayid": "",
                "executionTemplateID": "01JJX4048QXJD23ZMMXX97037M",
                "executionTemplateVersionID": "draft-01JK64CZPPHCPXYNPFXQHW37EW",
                "instanceid": "033b0319-b31b-4c47-a9b2-cfae5e6f07f4",
                "metadata": {
                    "externalID": "ui-test-194cc46b-fa70-4000-8cf2-ada44ddb5c00",
                    "scenarioid": ""
                },
                "processid": "draft-01JK64CZPPHCPXYNPFXQHW37EW-01JGJVSN0XY2ZYFXVQB8MJQB7J-01JK64DYV1FRYF38HH5WZKRWB4",
                "t.event.73c16742-9079-497e-918e-9cef5490e96b": {
                    "happy": true,
                    "newtest": "hello"
                }
            },
            "output": {
                "QA_Cloud_Function29e34eaf-9e10-4dff-971f-1b2ed4ec5f93": {
                    "metadata": {
                        "occurredAt": "2025-02-03T14:46:31Z",
                        "type": "cloud-function"
                    },
                    "result": {
                        "elevation": 38,
                        "generationtime_ms": 0.0011920928955078125,
                        "latitude": 52.52,
                        "longitude": 13.419998,
                        "timezone": "GMT",
                        "timezone_abbreviation": "GMT",
                        "utc_offset_seconds": 0
                    }
                },
                "_draft": true,
                "_executionEnvironment": "production",
                "_replayid": "",
                "executionTemplateID": "01JJX4048QXJD23ZMMXX97037M",
                "executionTemplateVersionID": "draft-01JK64CZPPHCPXYNPFXQHW37EW",
                "instanceid": "033b0319-b31b-4c47-a9b2-cfae5e6f07f4",
                "metadata": {
                    "externalID": "ui-test-194cc46b-fa70-4000-8cf2-ada44ddb5c00",
                    "scenarioid": ""
                },
                "processid": "draft-01JK64CZPPHCPXYNPFXQHW37EW-01JGJVSN0XY2ZYFXVQB8MJQB7J-01JK64DYV1FRYF38HH5WZKRWB4",
                "t.event.73c16742-9079-497e-918e-9cef5490e96b": {
                    "happy": true,
                    "newtest": "hello"
                }
            },
            "condition": null,
            "cloudFunctions": [
                {
                    "cloudFunctionId": "01JJX3ZZ0ZD5B4X6SVXZZQHRKA",
                    "cloudFunctionInputJQFilter": ".",
                    "cloudFunctionName": "QA_Cloud_Function29e34eaf-9e10-4dff-971f-1b2ed4ec5f93",
                    "cloudFunctionOutputJQFilter": ".",
                    "input": {
                        "_draft": true,
                        "_executionEnvironment": "production",
                        "_replayid": "",
                        "executionTemplateID": "01JJX4048QXJD23ZMMXX97037M",
                        "executionTemplateVersionID": "draft-01JK64CZPPHCPXYNPFXQHW37EW",
                        "instanceid": "033b0319-b31b-4c47-a9b2-cfae5e6f07f4",
                        "metadata": {
                            "externalID": "ui-test-194cc46b-fa70-4000-8cf2-ada44ddb5c00",
                            "scenarioid": ""
                        },
                        "processid": "draft-01JK64CZPPHCPXYNPFXQHW37EW-01JGJVSN0XY2ZYFXVQB8MJQB7J-01JK64DYV1FRYF38HH5WZKRWB4",
                        "t.event.73c16742-9079-497e-918e-9cef5490e96b": {
                            "happy": true,
                            "newtest": "hello"
                        }
                    },
                    "output": {
                        "QA_Cloud_Function29e34eaf-9e10-4dff-971f-1b2ed4ec5f93": {
                            "metadata": {
                                "occurredAt": "2025-02-03T14:46:31Z",
                                "type": "cloud-function"
                            },
                            "result": {
                                "elevation": 38,
                                "generationtime_ms": 0.0011920928955078125,
                                "latitude": 52.52,
                                "longitude": 13.419998,
                                "timezone": "GMT",
                                "timezone_abbreviation": "GMT",
                                "utc_offset_seconds": 0
                            }
                        },
                        "_draft": true,
                        "_executionEnvironment": "production",
                        "_replayid": "",
                        "executionTemplateID": "01JJX4048QXJD23ZMMXX97037M",
                        "executionTemplateVersionID": "draft-01JK64CZPPHCPXYNPFXQHW37EW",
                        "instanceid": "033b0319-b31b-4c47-a9b2-cfae5e6f07f4",
                        "metadata": {
                            "externalID": "ui-test-194cc46b-fa70-4000-8cf2-ada44ddb5c00",
                            "scenarioid": ""
                        },
                        "processid": "draft-01JK64CZPPHCPXYNPFXQHW37EW-01JGJVSN0XY2ZYFXVQB8MJQB7J-01JK64DYV1FRYF38HH5WZKRWB4",
                        "t.event.73c16742-9079-497e-918e-9cef5490e96b": {
                            "happy": true,
                            "newtest": "hello"
                        }
                    },
                    "status": "running",
                    "__typename": "CloudFunctionDebug"
                }
            ],
            "subflows": null,
            "__typename": "StepDebug"
        }
    ],
    "runningInstances": null,
    "error": null,
    "input": {
        "_draft": true,
        "_executionEnvironment": "production",
        "_replayid": "",
        "executionTemplateID": "01JJX4048QXJD23ZMMXX97037M",
        "executionTemplateVersionID": "draft-01JK64CZPPHCPXYNPFXQHW37EW",
        "instanceid": "033b0319-b31b-4c47-a9b2-cfae5e6f07f4",
        "metadata": {
            "externalID": "ui-test-194cc46b-fa70-4000-8cf2-ada44ddb5c00",
            "scenarioid": ""
        },
        "processid": "draft-01JK64CZPPHCPXYNPFXQHW37EW-01JGJVSN0XY2ZYFXVQB8MJQB7J-01JK64DYV1FRYF38HH5WZKRWB4",
        "t.event.73c16742-9079-497e-918e-9cef5490e96b": {
            "happy": true,
            "newtest": "hello"
        }
    },
    "output": {
        "QA_Cloud_Function29e34eaf-9e10-4dff-971f-1b2ed4ec5f93": {
            "metadata": {
                "occurredAt": "2025-02-03T14:46:31Z",
                "type": "cloud-function"
            },
            "result": {
                "elevation": 38,
                "generationtime_ms": 0.0011920928955078125,
                "latitude": 52.52,
                "longitude": 13.419998,
                "timezone": "GMT",
                "timezone_abbreviation": "GMT",
                "utc_offset_seconds": 0
            }
        },
        "_draft": true,
        "_executionEnvironment": "production",
        "_replayid": "",
        "executionTemplateID": "01JJX4048QXJD23ZMMXX97037M",
        "executionTemplateVersionID": "draft-01JK64CZPPHCPXYNPFXQHW37EW",
        "instanceid": "033b0319-b31b-4c47-a9b2-cfae5e6f07f4",
        "metadata": {
            "externalID": "ui-test-194cc46b-fa70-4000-8cf2-ada44ddb5c00",
            "scenarioid": ""
        },
        "processid": "draft-01JK64CZPPHCPXYNPFXQHW37EW-01JGJVSN0XY2ZYFXVQB8MJQB7J-01JK64DYV1FRYF38HH5WZKRWB4",
        "t.event.73c16742-9079-497e-918e-9cef5490e96b": {
            "happy": true,
            "newtest": "hello"
        }
    },
    "start": "2025-02-03T14:46:31.614Z",
    "finishAt": "2025-02-03T14:46:31.815Z",
    "__typename": "ExecutionTemplateDebug"
})

export const executionTemplateRunsResponse = makeVar<ExecutionTemplateRunsResponse>({
    "paging": {
        "page": 1,
        "pageSize": 10,
        "total": 1,
        "__typename": "PageInfo"
    },
    "executionTemplateDebugs": [
        {
            "id": "01JJX4048QXJD23ZMMXWV3047X-01JGJVSN0XY2ZYFXVQB8MJQB7J-01JJX404WM7XJ6BMFRKC90SECD",
            "name": null,
            "templateVersion": {
                "id": "01JJX4048QXJD23ZMMXWV3047X",
                "number": 1,
                "__typename": "TemplateVersion"
            },
            "description": null,
            "tenant": {
                "name": "ljbqtenant",
                "description": "OCZUWXKEFO_Description",
                "integromatTeam": {
                    "id": 350,
                    "__typename": "IntegromatTeam"
                },
                "hookdeck": {
                    "sourceUrl": "signals.emporix.io/01JGJVSN0XY2ZYFXVQB8MJQB7J/signal",
                    "__typename": "HookdeckAccountInfo"
                },
                "__typename": "CXPAccountInfo"
            },
            "active": null,
            "status": "finished",
            "metadata": null,
            "input": {
                "_draft": false,
                "_executionEnvironment": "production",
                "_replayid": "",
                "executionTemplateID": "01JJX4048QXJD23ZMMXX97037M",
                "executionTemplateVersionID": "01JJX4048QXJD23ZMMXWV3047X",
                "instanceid": "fe056376-27fe-48f1-9e1c-30da16942382",
                "metadata": {
                    "externalID": "04fd8f8b-696f-4fc5-aaad-db9d8f7a041f",
                    "scenarioid": ""
                },
                "processid": "01JJX4048QXJD23ZMMXWV3047X-01JGJVSN0XY2ZYFXVQB8MJQB7J-01JJX404WM7XJ6BMFRKC90SECD",
                "t.event.73c16742-9079-497e-918e-9cef5490e96b": {
                    "key": "value"
                }
            },
            "error": null,
            "start": "2025-01-31T02:45:49.13Z",
            "finishAt": "2025-01-31T02:45:49.332Z",
            "runningInstances": null,
            "completedInstances": null,
            "failedInstances": null,
            "stoppedInstances": null,
            "__typename": "ExecutionTemplateDebug"
        }
    ],
    "__typename": "ExecutionTemplateRunsResponse"
})

export const executionTemplateVersionResponse = makeVar<ExecutionTemplate>({
    "UseCases": [],
    "id": "01JJX4048QXJD23ZMMXX97037M",
    "name": "QA Digital Process.8a54b52a-1ba0-4a35-8e8a-4eea989e5ddd",
    "version": {
        "id": "01JJX4048QXJD23ZMMXWV3047X",
        "number": 1,
        "__typename": "TemplateVersion"
    },
    "description": "a digital process with a scenario type to call Make",
    "tenant": {
        "name": "ljbqtenant",
        "integromatTeam": {
            "id": 350,
            "organizationId": 351,
            "__typename": "IntegromatTeam"
        },
        "hookdeck": {
            "sourceUrl": "signals.emporix.io/01JGJVSN0XY2ZYFXVQB8MJQB7J/signal",
            "__typename": "HookdeckAccountInfo"
        },
        "__typename": "CXPAccountInfo"
    },
    "active": null,
    "state": "active",
    "stateComments": null,
    "metadata": {
        "createdAt": "2025-01-31T02:45:48.439Z",
        "activatedAt": "2025-01-31T02:45:48.759Z",
        "createdBy": "ab5cc180-9e91-460c-a18f-c1c3a37c6bed",
        "activatedBy": "",
        "__typename": "CXPMetadata"
    },
    "trigger": [
        {
            "scenarios": [],
            "timeExpression": null,
            "triggerType": "webhook",
            "eventType": "t.event.73c16742-9079-497e-918e-9cef5490e96b",
            "__typename": "Trigger"
        }
    ],
    "steps": [
        {
            "stepType": "cloudfunction",
            "scenarios": null,
            "trigger": null,
            "subflows": null,
            "cloudFunctions": [
                {
                    "cloudFunctionId": "01JJX3ZZ0ZD5B4X6SVXZZQHRKA",
                    "cloudFunctionName": "QA_Cloud_Function29e34eaf-9e10-4dff-971f-1b2ed4ec5f93",
                    "cloudFunctionInputJQFilter": ".",
                    "cloudFunctionOutputJQFilter": ".",
                    "__typename": "CloudFunctionStep"
                }
            ],
            "condition": null,
            "__typename": "Step"
        }
    ],
    "__typename": "ExecutionTemplate"
})

export const executionTemplatesResponse = makeVar<ExecutionTemplate[]>([
    {
        "active": null,
        "description": "a digital process with a scenario type to call Make",
        "id": "01JM3QTS6J6GSK2K4CGQB0HMZK",
        "metadata": {
            "createdAt": "2025-02-15T02:43:33.202Z",
            "activatedAt": "2025-02-15T02:43:33.518Z",
            "createdBy": "ab5cc180-9e91-460c-a18f-c1c3a37c6bed",
            "activatedBy": "",
            "createdByUser": {
                "userName": "vbwuxnuser",
                "__typename": "MetadataCreatedBy"
            },
            "__typename": "CXPMetadata"
        },
        "name": "QA Digital Process.62c67159-b647-4a5b-82fa-33b16e5e8f4c",
        "state": "active",
        "stateComments": null,
        "tenant": {
            "name": "ljbqtenant",
            "integromatTeam": {
                "id": 350,
                "organizationId": 351,
                "__typename": "IntegromatTeam"
            },
            "hookdeck": {
                "sourceUrl": "signals.emporix.io/01JGJVSN0XY2ZYFXVQB8MJQB7J/signal",
                "__typename": "HookdeckAccountInfo"
            },
            "__typename": "CXPAccountInfo"
        },
        "runningInstances": 0,
        "completedInstances": 1,
        "failedInstances": 0,
        "stoppedInstances": 0,
        "version": {
            "id": "01JM3QTS6J6GSK2K4CGNQM1HXT",
            "number": 1,
            "__typename": "TemplateVersion"
        },
        "__typename": "ExecutionTemplate"
    },
    {
        "active": null,
        "description": "a digital process with a scenario type to call Make",
        "id": "01JJX4048QXJD23ZMMXX97037M",
        "metadata": {
            "createdAt": "2025-01-31T02:45:48.439Z",
            "activatedAt": "2025-01-31T02:45:48.759Z",
            "createdBy": "ab5cc180-9e91-460c-a18f-c1c3a37c6bed",
            "activatedBy": "",
            "createdByUser": {
                "userName": "vbwuxnuser",
                "__typename": "MetadataCreatedBy"
            },
            "__typename": "CXPMetadata"
        },
        "name": "QA Digital Process.8a54b52a-1ba0-4a35-8e8a-4eea989e5ddd",
        "state": "active",
        "stateComments": null,
        "tenant": {
            "name": "ljbqtenant",
            "integromatTeam": {
                "id": 350,
                "organizationId": 351,
                "__typename": "IntegromatTeam"
            },
            "hookdeck": {
                "sourceUrl": "signals.emporix.io/01JGJVSN0XY2ZYFXVQB8MJQB7J/signal",
                "__typename": "HookdeckAccountInfo"
            },
            "__typename": "CXPAccountInfo"
        },
        "runningInstances": 0,
        "completedInstances": 3,
        "failedInstances": 0,
        "stoppedInstances": 0,
        "version": {
            "id": "01JJX4048QXJD23ZMMXWV3047X",
            "number": 1,
            "__typename": "TemplateVersion"
        },
        "__typename": "ExecutionTemplate"
    },
    {
        "active": null,
        "description": "a digital process with a scenario type to call Make",
        "id": "01JJX3ZTWJ842CJ42660R0E50D",
        "metadata": {
            "createdAt": "2025-01-31T02:45:38.834Z",
            "activatedAt": "2025-01-31T02:45:39.158Z",
            "createdBy": "ab5cc180-9e91-460c-a18f-c1c3a37c6bed",
            "activatedBy": "",
            "createdByUser": {
                "userName": "vbwuxnuser",
                "__typename": "MetadataCreatedBy"
            },
            "__typename": "CXPMetadata"
        },
        "name": "QA Digital Process.8a54b52a-1ba0-4a35-8e8a-4eea989e5ddd",
        "state": "inactive",
        "stateComments": null,
        "tenant": {
            "name": "ljbqtenant",
            "integromatTeam": {
                "id": 350,
                "organizationId": 351,
                "__typename": "IntegromatTeam"
            },
            "hookdeck": {
                "sourceUrl": "signals.emporix.io/01JGJVSN0XY2ZYFXVQB8MJQB7J/signal",
                "__typename": "HookdeckAccountInfo"
            },
            "__typename": "CXPAccountInfo"
        },
        "runningInstances": 0,
        "completedInstances": 1,
        "failedInstances": 0,
        "stoppedInstances": 0,
        "version": {
            "id": "01JJX3ZTWJ842CJ4265Y75D6A2",
            "number": 1,
            "__typename": "TemplateVersion"
        },
        "__typename": "ExecutionTemplate"
    }
])

export const integromatInitTriggerScenariosResponse = makeVar<IntegromatScenario[]>([
    {
        "id": "49",
        "name": "RMTest sleep",
        "description": "",
        "hookId": "16",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "util",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "47",
        "name": "Integration Celonis OE",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "43",
        "name": "Send magic link to supplier",
        "description": "",
        "hookId": "13",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "39",
        "name": "RMIntelligenceApi",
        "description": "",
        "hookId": "11",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-iapi",
            "celonisinternal-celonis-iapi",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "44",
        "name": "Integration Celonis OE",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "40",
        "name": "RM - Create and submit survey",
        "description": "",
        "hookId": "12",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "36",
        "name": "RM midTriggerTest",
        "description": "",
        "hookId": "10",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "21",
        "name": "JMCATest",
        "description": "",
        "hookId": "5",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "38",
        "name": "Integration Celonis OE",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "35",
        "name": "Integration Celonis OE",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "34",
        "name": "Generate Access Link",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "29",
        "name": "Open Hailing Frequencies",
        "description": "",
        "hookId": "8",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "app#swapi",
            "builtin",
            "app#swapi",
            "json",
            "builtin",
            "json",
            "app#swapi",
            "json",
            "builtin",
            "json",
            "celonisinternal-celonis-oe",
            "mailjet",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "33",
        "name": "Process Permission to Land Request",
        "description": "",
        "hookId": "9",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "app#swapi",
            "builtin",
            "app#swapi",
            "builtin",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "32",
        "name": "Integration Celonis OE",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "26",
        "name": "Central Orbit Control",
        "description": "",
        "hookId": "7",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "app#swapi",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "31",
        "name": "Integration SWAPI",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "app#swapi"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "27",
        "name": "Start Draft Planetary Orbit",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "23",
        "name": "Current Spotbuy OTD from Intelligence API",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-iapi"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "22",
        "name": "JMCATestStart",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    }
])

export const integromatInitTriggerTemplatesResponse = makeVar<IntegromatTemplate[]>([
    {
        "id": "2",
        "url": "2-start-trigger",
        "__typename": "IntegromatTemplate"
    }
])

export const integromatMidTriggerScenariosResponse = makeVar<IntegromatScenario[]>([
    {
        "id": "49",
        "name": "RMTest sleep",
        "description": "",
        "hookId": "16",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "util",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "47",
        "name": "Integration Celonis OE",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "43",
        "name": "Send magic link to supplier",
        "description": "",
        "hookId": "13",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "39",
        "name": "RMIntelligenceApi",
        "description": "",
        "hookId": "11",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-iapi",
            "celonisinternal-celonis-iapi",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "44",
        "name": "Integration Celonis OE",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "40",
        "name": "RM - Create and submit survey",
        "description": "",
        "hookId": "12",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "36",
        "name": "RM midTriggerTest",
        "description": "",
        "hookId": "10",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "21",
        "name": "JMCATest",
        "description": "",
        "hookId": "5",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "38",
        "name": "Integration Celonis OE",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "35",
        "name": "Integration Celonis OE",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "34",
        "name": "Generate Access Link",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "29",
        "name": "Open Hailing Frequencies",
        "description": "",
        "hookId": "8",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "app#swapi",
            "builtin",
            "app#swapi",
            "json",
            "builtin",
            "json",
            "app#swapi",
            "json",
            "builtin",
            "json",
            "celonisinternal-celonis-oe",
            "mailjet",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "33",
        "name": "Process Permission to Land Request",
        "description": "",
        "hookId": "9",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "app#swapi",
            "builtin",
            "app#swapi",
            "builtin",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "32",
        "name": "Integration Celonis OE",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "26",
        "name": "Central Orbit Control",
        "description": "",
        "hookId": "7",
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe",
            "app#swapi",
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "31",
        "name": "Integration SWAPI",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "app#swapi"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "27",
        "name": "Start Draft Planetary Orbit",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "23",
        "name": "Current Spotbuy OTD from Intelligence API",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-iapi"
        ],
        "__typename": "IntegromatScenario"
    },
    {
        "id": "22",
        "name": "JMCATestStart",
        "description": "",
        "hookId": null,
        "isPaused": false,
        "usedPackages": [
            "celonisinternal-celonis-oe"
        ],
        "__typename": "IntegromatScenario"
    }
])

export const integromatMidTriggerTemplatesResponse = makeVar<IntegromatTemplate[]>([
    {
        "id": "3",
        "url": "3-mid-scenario-trigger",
        "__typename": "IntegromatTemplate"
    }
])

export const integromatScenarioBlueprintResponse = makeVar<IntegromatScenarioBlueprint>({
    "id": "39",
    "teamId": "350",
    "blueprint": {
        "name": "RMIntelligenceApi",
        "metadata": {
            "instant": true,
            "version": 1,
            "designer": {
                "orphans": [],
                "samples": {
                    "4": {
                        "page": 0,
                        "sort": [],
                        "total": 1,
                        "content": {
                            "data": {
                                "NAME": "Automated Spot Buy"
                            },
                            "headers": [
                                {
                                    "id": "NAME",
                                    "name": "Name",
                                    "type": "string",
                                    "unit": null,
                                    "format": null,
                                    "sortable": true,
                                    "filterable": true,
                                    "aggregation": false
                                }
                            ]
                        },
                        "pageSize": 50,
                        "__IMTINDEX__": 1,
                        "__IMTLENGTH__": 1
                    }
                }
            },
            "scenario": {
                "dlq": false,
                "slots": null,
                "dataloss": false,
                "maxErrors": 3,
                "autoCommit": true,
                "roundtrips": 1,
                "sequential": false,
                "confidential": false,
                "freshVariables": false,
                "autoCommitTriggerLast": true
            }
        },
        "flow": [
            {
                "id": "1",
                "module": "celonisinternal-celonis-oe:receiveAuthorizedCloudEvent",
                "version": "1",
                "parameters": {
                    "__IMTHOOK__": 11
                },
                "routes": null,
                "__typename": "Flow"
            },
            {
                "id": "5",
                "module": "celonisinternal-celonis-iapi:getKnowledgeModelKpiData",
                "version": "1",
                "parameters": {
                    "__IMTCONN__": 790
                },
                "routes": null,
                "__typename": "Flow"
            },
            {
                "id": "4",
                "module": "celonisinternal-celonis-iapi:listKnowledgeModelRecordData",
                "version": "1",
                "parameters": {
                    "__IMTCONN__": 790
                },
                "routes": null,
                "__typename": "Flow"
            },
            {
                "id": "2",
                "module": "celonisinternal-celonis-oe:notifyComplete",
                "version": "1",
                "parameters": {
                    "__IMTCONN__": 440
                },
                "routes": null,
                "__typename": "Flow"
            }
        ],
        "__typename": "IntegromatBlueprint"
    },
    "scheduling": {
        "type": "immediately",
        "__typename": "IntegromatScheduling"
    },
    "error": null,
    "__typename": "IntegromatScenarioBlueprint"
})

export const validateExecutionTemplateResponse = makeVar<ExecutionTemplate>({
    "name": "QA Digital Process.8a54b52a-1ba0-4a35-8e8a-4eea989e5ddd",
    "version": {
        "id": "",
        "__typename": "TemplateVersion"
    },
    "error": null,
    "__typename": "ExecutionTemplate"
})

export const webhooksEventsFilteredByHeadersResponse = makeVar<any[]>([
    {
        "attempts": 1,
        "cli_id": null,
        "created_at": "2025-01-31T02:45:49.074Z",
        "data": {
            "body": {
                "key": "value"
            },
            "headers": {
                "Accept": "*/*",
                "Accept-Encoding": "gzip,deflate",
                "Ce-Id": "04fd8f8b-696f-4fc5-aaad-db9d8f7a041f",
                "Ce-Source": "test.source",
                "Ce-Specversion": "1.0",
                "Ce-Type": "t.event.73c16742-9079-497e-918e-9cef5490e96b",
                "Content-Length": "20",
                "Content-Type": "application/json",
                "User-Agent": "Apache-HttpClient/4.5.13 (Java/21.0.6)",
                "X-Forwarded-For": "192.168.51.131",
                "X-Forwarded-Host": "webhooks.orchestrationengine.io",
                "X-Forwarded-Port": "443",
                "X-Forwarded-Proto": "https",
                "X-Forwarded-Server": "traefik-79c9c579d8-8vcqj",
                "X-Hmac-Signature": "qog13ZXMd2CTG/0gqon9D7wK3KjstEvRk3Bkjt0UPxY=",
                "X-Real-Ip": "192.168.51.131",
                "X-Replaced-Path": "/01JGJVSN0XY2ZYFXVQB8MJQB7J/signal"
            },
            "parsed_query": {
                "pageNumber": [
                    "1"
                ],
                "pageSize": [
                    "10000"
                ],
                "q": [
                    "data.headers.Ce-Id:\"04fd8f8b-696f-4fc5-aaad-db9d8f7a041f\""
                ]
            },
            "path": "pageNumber=1&pageSize=10000&q=data.headers.Ce-Id:%2204fd8f8b-696f-4fc5-aaad-db9d8f7a041f%22",
            "query": "pageNumber=1&pageSize=10000&q=data.headers.Ce-Id:%2204fd8f8b-696f-4fc5-aaad-db9d8f7a041f%22",
            "is_large_payload": false
        },
        "destination_id": "01JGJVSN0XY2ZYFXVQB8MJQB7J",
        "error_code": null,
        "event_data_id": "01JJX404WJBE2GF861T09BVQK0",
        "id": "01JJX404WJBE2GF861T09BVQK0",
        "last_attempt_at": "2025-01-31T02:45:49.074Z",
        "next_attempt_at": null,
        "request_id": "01JJX404WJBE2GF861T09BVQK0",
        "response_status": 200,
        "source_id": "01JGJVSN0XY2ZYFXVQB8MJQB7J",
        "status": "SUCCESS",
        "successful_at": "2025-01-31T02:45:49.074Z",
        "team_id": "",
        "updated_at": "2025-01-31T02:45:49.074Z",
        "webhook_id": "01JJX404WJBE2GF861T09BVQK0",
        "__typename": "WebhookEvent"
    }
])


// <----------- MUTATIONS ------------>
const executionTemplatesVar = makeVar<ExecutionTemplate[]>([]);

export const createExecutionTemplateResponse = () => {
    const newTemplate: ExecutionTemplate = {
        "id": getRandomId(),
        "version": {
            "id": getRandomId(),
            "__typename": "TemplateVersion"
        },
        "__typename": "ExecutionTemplate"
    }
    // Store locally using makeVar
    executionTemplatesVar([...executionTemplatesVar(), newTemplate]);

    return newTemplate;
}