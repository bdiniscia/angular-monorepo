const getRandomIndex = (array: any[]) => {
    return Math.floor(Math.random() * array.length)
}

const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
}

const getRandomDate = (start = new Date(2022, 0, 1), end = new Date()) => {
    const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTimestamp).toISOString();
}

const getRandomId = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '01';
    for (let i = 0; i < 23; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}

const mockShortText = () => {
    const options = ["Lorem ipsum dolor sit amet", "Fusce lacus leo", "Donec tempor auctor sollicitudin"]
    return options[getRandomIndex(options)]
}

const mockLongText = () => {
    const options = [
        "Sed scelerisque feugiat lacus, quis tincidunt magna sagittis quis. Mauris quis ultrices purus.", 
        "Nullam porta, tortor quis scelerisque consequat, sem ex aliquam orci, sed aliquam lacus urna et est", 
        "Praesent ornare sit amet orci nec commodo"
    ]
    return options[getRandomIndex(options)]
}

const metadataDigitalProcess = () => {
    return {
        "__typename": "CXPMetadata",
        "createdAt": getRandomDate(),
        "activatedAt": getRandomDate(),
        "createdBy": "ab5cc180-9e91-460c-a18f-c1c3a37c6bed",
        "activatedBy": "",
        "createdByUser": {
            "__typename": "MetadataCreatedBy",
            "userName": "vbwuxnuser"
        }
    }
}

const stateDigitalProcess = () => {
    const options = [
        "active", 
        "inactive", 
    ]
    return options[getRandomIndex(options)]
}

const tenantDigitalProcess = () => {
    return {
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
      }
}

const versionDigitalProcess = () => {
    return {
        "id": getRandomId(),
        "number": getRandomNumber(10),
        "__typename": "TemplateVersion"
    }
}

const expressionBusinessExpression = () => {
    const options = [
        '{<: [1, 2]}', 
        '{==: [{var: "a"}, "v"]}', 
        '{in: [{var: "rule_list_in"}, ["String 1", "String 2"]]}'
    ]
    return options[getRandomIndex(options)]
}

const referencingTemplatesBusinessExpression = () => {
    return [{
        "id": getRandomId(),
        "versionId": getRandomId(),
        "name": mockShortText(),
        "__typename": "ExecutionTemplateBusinessExpression"
      }]
}

const authenticationCloudFunction = () => {
    const options = [
        {
            "__typename": "CloudFunctionAuth",
            "basic": null,
            "method": "none",
            "oauth2": null,
            "tokenBased": null
        },
        {
            "basic": {
              "key": "user",
              "secret": "pass"
            },
            "method": "basic",
            "oauth2": null,
            "tokenBased": null,
            "__typename": "CloudFunctionAuth"
          },
          {
            "basic": null,
            "method": "oauth2",
            "oauth2": {
              "clientId": "xxxxxx-db9e-438f-xxxx-xx33c38acf5",
              "clientSecret": "5oW8Q~sYdGFh-xxxxxxxxxxxx-idlJa~g",
              "scope": "api://4e106bb1-81ce-4425-9f2d-030xxxxxxx/.default",
              "audience": "",
              "tokenUrl": "https://login.microsoftonline.com/be0aba9e-ef7b-4a66-8d3c-xxxxxxxxx/oauth2/v2.0/token"
            },
            "tokenBased": null,
            "__typename": "CloudFunctionAuth"
          }
    ]
    return options[getRandomIndex(options)]
}

const httpMethodCloudFunction = () => {
    const options = [
        "GET",
        "POST",
        "PUT"
    ]
    return options[getRandomIndex(options)]
}

export const DIGITAL_PROCESS_MOCK = {
    fields: {
      name: {
        read() {
          return mockShortText()
        },
      },
      description: {
        read() {
          return mockLongText()
        },
      },
      id: {
        read() {
          return getRandomId()
        }
      },
      metadata: {
        read() {
          return metadataDigitalProcess() 
        }
      },
      state: {
        read() {
          return stateDigitalProcess() 
        }
      },
      stateComments: {
        read() {
          return mockShortText() 
        }
      },
      tenant: {
        read() {
          return tenantDigitalProcess() 
        }
      },
      runningInstances: {
        read() {
          return getRandomNumber(10) 
        }
      },
      completedInstances: {
        read() {
          return getRandomNumber(10) 
        }
      },
      failedInstances: {
        read() {
          return getRandomNumber(10) 
        }
      },
      stoppedInstances: {
        read() {
          return getRandomNumber(10) 
        }
      },
      version: {
        read() {
          return versionDigitalProcess() 
        }
      },
    },
}

export const BUSINESS_EXPRESSION_MOCK = {
    fields: {
      id: {
        read() {
          return getRandomId()
        },
      },
      name: {
        read() {
          return mockShortText()
        },
      },
      description: {
        read() {
            return mockLongText()
        },
      }, 
      expression: {
        read() {
            return expressionBusinessExpression()
        },
      },
      referencingTemplates: {
        read() {
            return referencingTemplatesBusinessExpression()
        },
      }
    },
}

export const CLOUD_FUNCTION_MOCK = {
    fields: {
      id: {
        read() {
          return getRandomId()
        },
      },
      name: {
        read() {
          return mockShortText()
        },
      },
      description: {
        read() {
            return mockLongText()
        },
      },
      groupId: {
        read() {
            return getRandomId()
        },
      },
      tenantId: {
        read() {
            return getRandomId()
        },
      },
      authentication: {
        read() {
            return authenticationCloudFunction()
        },
      },
      httpMethod: {
        read() {
            return httpMethodCloudFunction()
        },
      },
      url: {
        read() {
          return mockShortText()
        },
      },
    },
}

export const PAGE_INFO_MOCK = {
    fields: {
        page: {
            read() {
                return getRandomNumber(10) 
            }
        },
        pageSize: {
            read() {
                return getRandomNumber(10) 
            }
        },
        total: {
            read() {
                return 100
            }
        },
    },
}