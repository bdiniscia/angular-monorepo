import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  availableSince?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  userEmail?: Maybe<Scalars['String']['output']>;
};

export type AccessInput = {
  availableSince?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['String']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

export type Accesses = {
  __typename?: 'Accesses';
  accesses?: Maybe<Array<Maybe<Access>>>;
  paging?: Maybe<PageInfo>;
};

export type AccountLimit = {
  __typename?: 'AccountLimit';
  currency?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type AccountLimitInput = {
  currency?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type ApprovalGroup = {
  __typename?: 'ApprovalGroup';
  customer?: Maybe<Customer>;
  id?: Maybe<Scalars['String']['output']>;
  legalEntity?: Maybe<LegalEntityId>;
  metadata?: Maybe<MetadataLegalEntity>;
  primary?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ApprovalGroupInput = {
  customer?: InputMaybe<CustomerInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  legalEntity?: InputMaybe<LegalEntityIdInput>;
  primary?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type BpmnDigitalProcess = {
  __typename?: 'BPMNDigitalProcess';
  content?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BusinessApplication = {
  __typename?: 'BusinessApplication';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BusinessApplications = {
  __typename?: 'BusinessApplications';
  businessApplications?: Maybe<Array<Maybe<BusinessApplication>>>;
  paging?: Maybe<PageInfo>;
};

export type BusinessExpression = {
  __typename?: 'BusinessExpression';
  description?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  expression?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  referencingTemplates?: Maybe<Array<Maybe<ExecutionTemplateBusinessExpression>>>;
};

export type BusinessExpressionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  expression?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BusinessKpi = {
  __typename?: 'BusinessKPI';
  businessApplicationIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BusinessKpIs = {
  __typename?: 'BusinessKPIs';
  businessKPIs?: Maybe<Array<Maybe<BusinessKpi>>>;
  paging?: Maybe<PageInfo>;
};

export type CxpAccountInfo = {
  __typename?: 'CXPAccountInfo';
  description?: Maybe<Scalars['String']['output']>;
  hookdeck?: Maybe<HookdeckAccountInfo>;
  id?: Maybe<Scalars['String']['output']>;
  integromatTeam?: Maybe<IntegromatTeam>;
  magicLinks?: Maybe<SchedulingSetttings>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CxpAccountTokens = {
  __typename?: 'CXPAccountTokens';
  celonis?: Maybe<Scalars['String']['output']>;
  hmacSecret?: Maybe<Scalars['String']['output']>;
};

export type CxpMetadata = {
  __typename?: 'CXPMetadata';
  activatedAt?: Maybe<Scalars['String']['output']>;
  activatedBy?: Maybe<Scalars['String']['output']>;
  activatedByUser?: Maybe<MetadataActivatedBy>;
  createdAt?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<MetadataCreatedBy>;
};

export type CelonisAnalysis = {
  __typename?: 'CelonisAnalysis';
  application?: Maybe<Scalars['Boolean']['output']>;
  applicationId?: Maybe<Scalars['String']['output']>;
  autoSaveId?: Maybe<Scalars['String']['output']>;
  contentId?: Maybe<Scalars['String']['output']>;
  contentVersion?: Maybe<Scalars['Int']['output']>;
  createDate?: Maybe<Scalars['String']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  favourite?: Maybe<Scalars['Boolean']['output']>;
  folderId?: Maybe<Scalars['String']['output']>;
  globalApp?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastPublishedDate?: Maybe<Scalars['String']['output']>;
  lastPublishedDraftId?: Maybe<Scalars['String']['output']>;
  lastPublishedUser?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  objectId?: Maybe<Scalars['String']['output']>;
  parentObjectId?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Scalars['String']['output']>;
  processId?: Maybe<Scalars['String']['output']>;
  publicLink?: Maybe<Scalars['Boolean']['output']>;
  publishedDraftId?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  tenantId?: Maybe<Scalars['String']['output']>;
  transportId?: Maybe<Scalars['String']['output']>;
};

export type CelonisKnowledgeModel = {
  __typename?: 'CelonisKnowledgeModel';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['String']['output']>;
};

export type CelonisKnowledgeModels = {
  __typename?: 'CelonisKnowledgeModels';
  content?: Maybe<Array<Maybe<CelonisKnowledgeModel>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CelonisNode = {
  __typename?: 'CelonisNode';
  activatedDraftId?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<Scalars['Boolean']['output']>;
  assetType?: Maybe<Scalars['String']['output']>;
  base?: Maybe<Scalars['String']['output']>;
  changeDate?: Maybe<Scalars['String']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  createdByName?: Maybe<Scalars['String']['output']>;
  creationDate?: Maybe<Scalars['String']['output']>;
  draftId?: Maybe<Scalars['String']['output']>;
  embeddable?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  invalidContent?: Maybe<Scalars['Boolean']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  objectId?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['String']['output']>;
  parentNodeId?: Maybe<Scalars['String']['output']>;
  parentNodeKey?: Maybe<Scalars['String']['output']>;
  publicAvailable?: Maybe<Scalars['Boolean']['output']>;
  root?: Maybe<Scalars['Boolean']['output']>;
  rootNodeId?: Maybe<Scalars['String']['output']>;
  rootNodeKey?: Maybe<Scalars['String']['output']>;
  rootWithKey?: Maybe<Scalars['String']['output']>;
  serializationType?: Maybe<Scalars['String']['output']>;
  serializedContent?: Maybe<Scalars['String']['output']>;
  showInViewerMode?: Maybe<Scalars['Boolean']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  spaceId?: Maybe<Scalars['String']['output']>;
  tenantId?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  workingDraftId?: Maybe<Scalars['String']['output']>;
};

export type CelonisRecord = {
  __typename?: 'CelonisRecord';
  description?: Maybe<Scalars['String']['output']>;
  fields?: Maybe<Array<Maybe<CelonisRecordField>>>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CelonisRecordData = {
  __typename?: 'CelonisRecordData';
  content?: Maybe<ContentField>;
  fieldsIds?: Maybe<Scalars['String']['output']>;
  kmId?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  recordId?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CelonisRecordField = {
  __typename?: 'CelonisRecordField';
  format?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type CelonisRecords = {
  __typename?: 'CelonisRecords';
  content?: Maybe<Array<Maybe<CelonisRecord>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type CelonisSpace = {
  __typename?: 'CelonisSpace';
  configuration?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<Scalars['String']['output']>;
  objectId?: Maybe<Scalars['String']['output']>;
  shareable?: Maybe<Scalars['Boolean']['output']>;
};

export type Chat = {
  __typename?: 'Chat';
  id?: Maybe<Scalars['String']['output']>;
  messages?: Maybe<Array<Maybe<MessageChat>>>;
  tenant?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

export type CloudFunction = {
  __typename?: 'CloudFunction';
  authentication?: Maybe<CloudFunctionAuth>;
  description?: Maybe<Scalars['String']['output']>;
  groupId?: Maybe<Scalars['String']['output']>;
  httpMethod?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenantId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CloudFunctionAuth = {
  __typename?: 'CloudFunctionAuth';
  basic?: Maybe<Scalars['JSON']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  oauth2?: Maybe<Scalars['JSON']['output']>;
  tokenBased?: Maybe<Scalars['JSON']['output']>;
};

export type CloudFunctionAuthInput = {
  basic?: InputMaybe<Scalars['JSON']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  oauth2?: InputMaybe<Scalars['JSON']['input']>;
  tokenBased?: InputMaybe<Scalars['JSON']['input']>;
};

export type CloudFunctionDebug = {
  __typename?: 'CloudFunctionDebug';
  cloudFunctionId?: Maybe<Scalars['String']['output']>;
  cloudFunctionInputJQFilter?: Maybe<Scalars['String']['output']>;
  cloudFunctionName?: Maybe<Scalars['String']['output']>;
  cloudFunctionOutputJQFilter?: Maybe<Scalars['String']['output']>;
  input?: Maybe<Scalars['JSON']['output']>;
  output?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CloudFunctionInput = {
  authentication?: InputMaybe<CloudFunctionAuthInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  httpMethod?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CloudFunctionStep = {
  __typename?: 'CloudFunctionStep';
  cloudFunctionId?: Maybe<Scalars['String']['output']>;
  cloudFunctionInputJQFilter?: Maybe<Scalars['String']['output']>;
  cloudFunctionName?: Maybe<Scalars['String']['output']>;
  cloudFunctionOutputJQFilter?: Maybe<Scalars['String']['output']>;
};

export type CloudFunctionStepInput = {
  cloudFunctionId?: InputMaybe<Scalars['String']['input']>;
  cloudFunctionInputJQFilter?: InputMaybe<Scalars['String']['input']>;
  cloudFunctionName?: InputMaybe<Scalars['String']['input']>;
  cloudFunctionOutputJQFilter?: InputMaybe<Scalars['String']['input']>;
};

export type CloudFunctions = {
  __typename?: 'CloudFunctions';
  cloudFunctions?: Maybe<Array<Maybe<CloudFunction>>>;
  paging?: Maybe<PageInfo>;
};

export type CloudGroup = {
  __typename?: 'CloudGroup';
  authentication?: Maybe<CloudGroupAuth>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentGroupId?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
};

export type CloudGroupAuth = {
  __typename?: 'CloudGroupAuth';
  basic?: Maybe<Scalars['JSON']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  oauth2?: Maybe<Scalars['JSON']['output']>;
  tokenBased?: Maybe<Scalars['JSON']['output']>;
};

export type CloudGroupAuthInput = {
  basic?: InputMaybe<Scalars['JSON']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  oauth2?: InputMaybe<Scalars['JSON']['input']>;
  tokenBased?: InputMaybe<Scalars['JSON']['input']>;
};

export type CloudGroupInput = {
  authentication?: InputMaybe<CloudGroupAuthInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentGroupId?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
};

export type CloudGroups = {
  __typename?: 'CloudGroups';
  cloudGroups?: Maybe<Array<Maybe<CloudGroup>>>;
  paging?: Maybe<PageInfo>;
};

export type CompletionEvent = {
  __typename?: 'CompletionEvent';
  at?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentMixinsLegalEntity = {
  __typename?: 'ComponentMixinsLegalEntity';
  escalated?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentMixinsLegalEntityInput = {
  escalated?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Condition = {
  __typename?: 'Condition';
  left?: Maybe<Scalars['String']['output']>;
  op?: Maybe<Scalars['String']['output']>;
  right?: Maybe<Scalars['JSON']['output']>;
};

export type ConditionDebug = {
  __typename?: 'ConditionDebug';
  error?: Maybe<Scalars['String']['output']>;
  input?: Maybe<Scalars['JSON']['output']>;
  left?: Maybe<Scalars['String']['output']>;
  op?: Maybe<Scalars['String']['output']>;
  output?: Maybe<Scalars['JSON']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
  right?: Maybe<Scalars['JSON']['output']>;
};

export type ConditionInput = {
  left?: InputMaybe<Scalars['String']['input']>;
  op?: InputMaybe<Scalars['String']['input']>;
  right?: InputMaybe<Scalars['JSON']['input']>;
};

export type Contact = {
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ContactDetails = {
  __typename?: 'ContactDetails';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  emails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  phones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  postcode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type ContactDetailsInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phones?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type ContactLegalEntity = {
  __typename?: 'ContactLegalEntity';
  contactEmail?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  preferredLanguage?: Maybe<Scalars['String']['output']>;
};

export type ContactLegalEntityInput = {
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  preferredLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type ContentField = {
  __typename?: 'ContentField';
  data?: Maybe<Scalars['JSON']['output']>;
  headers?: Maybe<Array<Maybe<HeaderDataField>>>;
};

export type Controller = {
  __typename?: 'Controller';
  name?: Maybe<Scalars['String']['output']>;
};

export type CustomAttribute = {
  __typename?: 'CustomAttribute';
  name?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Scalars['JSON']['output']>;
};

export type CustomAttributeInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Scalars['JSON']['input']>;
};

export type CustomAttributeScheduler = {
  __typename?: 'CustomAttributeScheduler';
  name?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Scalars['JSON']['output']>;
};

export type CustomAttributeSchedulerInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Scalars['JSON']['input']>;
};

export type CustomAttributes = {
  __typename?: 'CustomAttributes';
  customAttributes?: Maybe<Array<Maybe<CustomAttribute>>>;
};

export type CustomAttributesScheduler = {
  customAttributes?: InputMaybe<Array<InputMaybe<CustomAttributeSchedulerInput>>>;
};

export type Customer = {
  __typename?: 'Customer';
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  preferredLanguage?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
};

export type CustomerGroup = {
  __typename?: 'CustomerGroup';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['JSON']['output']>;
};

export type CustomerGroupInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['JSON']['input']>;
};

export type CustomerInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferredLanguage?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
};

export type Designer = {
  __typename?: 'Designer';
  messages?: Maybe<Array<Maybe<Message>>>;
  x?: Maybe<Scalars['Int']['output']>;
  y?: Maybe<Scalars['Int']['output']>;
};

export type DigitalProcessExecutionStates = {
  __typename?: 'DigitalProcessExecutionStates';
  EndDate?: Maybe<Scalars['String']['output']>;
  StartDate?: Maybe<Scalars['String']['output']>;
  digitalProcessID?: Maybe<Scalars['String']['output']>;
  digitalProcessName?: Maybe<Scalars['String']['output']>;
  digitalProcessVersionIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  executionStates?: Maybe<Array<Maybe<ExecutionStates>>>;
  maxStepCount?: Maybe<Scalars['Int']['output']>;
  tenantID?: Maybe<Scalars['String']['output']>;
};

export type DigitalProcessStepExecutionStates = {
  __typename?: 'DigitalProcessStepExecutionStates';
  ID?: Maybe<Scalars['String']['output']>;
  executionStates?: Maybe<Array<Maybe<ExecutionStates>>>;
  name?: Maybe<Scalars['String']['output']>;
  num?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type DigitalProcessStepsExecutionStates = {
  __typename?: 'DigitalProcessStepsExecutionStates';
  EndDate?: Maybe<Scalars['String']['output']>;
  StartDate?: Maybe<Scalars['String']['output']>;
  digitalProcessID?: Maybe<Scalars['String']['output']>;
  digitalProcessName?: Maybe<Scalars['String']['output']>;
  digitalProcessVersionIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  steps?: Maybe<Array<Maybe<DigitalProcessStepExecutionStates>>>;
  tenantID?: Maybe<Scalars['String']['output']>;
};

export type DocumentLegalEntity = {
  __typename?: 'DocumentLegalEntity';
  id?: Maybe<Scalars['String']['output']>;
};

export type DocumentLegalEntityInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EntitiesAddress = {
  __typename?: 'EntitiesAddress';
  contactDetails?: Maybe<ContactDetails>;
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<MetadataLegalEntity>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type EntitiesAddressInput = {
  contactDetails?: InputMaybe<ContactDetailsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type EventType = {
  __typename?: 'EventType';
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type EventTypeInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EventTypeResponse = {
  __typename?: 'EventTypeResponse';
  id?: Maybe<Scalars['ID']['output']>;
};

export type EventTypes = {
  __typename?: 'EventTypes';
  items?: Maybe<Array<Maybe<EventType>>>;
};

export type ExecutionRunContext = {
  __typename?: 'ExecutionRunContext';
  Context?: Maybe<Scalars['JSON']['output']>;
  Metadata?: Maybe<Scalars['JSON']['output']>;
};

export type ExecutionRunContextData = {
  __typename?: 'ExecutionRunContextData';
  draft?: Maybe<Scalars['Boolean']['output']>;
  executionEnvironment?: Maybe<Scalars['String']['output']>;
  executionTemplateID?: Maybe<Scalars['String']['output']>;
  executionTemplateVersionID?: Maybe<Scalars['String']['output']>;
  instanceid?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<ExecutionRunContextDataMetadata>;
  processid?: Maybe<Scalars['String']['output']>;
  replayid?: Maybe<Scalars['String']['output']>;
};

export type ExecutionRunContextDataMetadata = {
  __typename?: 'ExecutionRunContextDataMetadata';
  externalID?: Maybe<Scalars['String']['output']>;
  scenarioid?: Maybe<Scalars['String']['output']>;
};

export type ExecutionRunContextMetadata = {
  __typename?: 'ExecutionRunContextMetadata';
  tenant?: Maybe<Scalars['String']['output']>;
};

export type ExecutionStates = {
  __typename?: 'ExecutionStates';
  count?: Maybe<Scalars['Int']['output']>;
  instanceIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ExecutionTemplate = {
  __typename?: 'ExecutionTemplate';
  UseCases?: Maybe<Array<Maybe<UseCaseDigitalProcess>>>;
  active?: Maybe<Scalars['Boolean']['output']>;
  completedInstances?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  failedInstances?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<CxpMetadata>;
  name?: Maybe<Scalars['String']['output']>;
  runningInstances?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  stateComments?: Maybe<Scalars['String']['output']>;
  steps?: Maybe<Array<Maybe<Step>>>;
  stoppedInstances?: Maybe<Scalars['Int']['output']>;
  tenant?: Maybe<CxpAccountInfo>;
  trigger?: Maybe<Array<Maybe<Trigger>>>;
  version?: Maybe<TemplateVersion>;
};

export type ExecutionTemplateBusinessExpression = {
  __typename?: 'ExecutionTemplateBusinessExpression';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  versionId?: Maybe<Scalars['String']['output']>;
};

export type ExecutionTemplateDebug = {
  __typename?: 'ExecutionTemplateDebug';
  active?: Maybe<Scalars['Boolean']['output']>;
  completedInstances?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  failedInstances?: Maybe<Scalars['Int']['output']>;
  finishAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  input?: Maybe<Scalars['JSON']['output']>;
  metadata?: Maybe<CxpMetadata>;
  name?: Maybe<Scalars['String']['output']>;
  output?: Maybe<Scalars['JSON']['output']>;
  runningInstances?: Maybe<Scalars['Int']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  steps?: Maybe<Array<Maybe<StepDebug>>>;
  stoppedInstances?: Maybe<Scalars['Int']['output']>;
  templateVersion?: Maybe<TemplateVersion>;
  tenant?: Maybe<CxpAccountInfo>;
  triggers?: Maybe<Array<Maybe<TriggerDebug>>>;
  version?: Maybe<TemplateVersion>;
};

export type ExecutionTemplateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  stateComments?: InputMaybe<Scalars['String']['input']>;
  steps?: InputMaybe<Array<InputMaybe<StepInput>>>;
  tenant?: InputMaybe<Scalars['String']['input']>;
  trigger?: InputMaybe<Array<InputMaybe<TriggerInput>>>;
};

export type ExecutionTemplateRunsResponse = {
  __typename?: 'ExecutionTemplateRunsResponse';
  executionTemplateDebugs?: Maybe<Array<Maybe<ExecutionTemplateDebug>>>;
  paging?: Maybe<PageInfo>;
};

export type FilterInput = {
  q?: InputMaybe<Scalars['String']['input']>;
};

export type Flow = {
  __typename?: 'Flow';
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  module?: Maybe<Scalars['String']['output']>;
  parameters?: Maybe<Scalars['JSON']['output']>;
  routes?: Maybe<Array<Maybe<IntegromatBlueprint>>>;
  version?: Maybe<Scalars['String']['output']>;
};

export type Form = {
  __typename?: 'Form';
  availableLanguages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  customAttributes?: Maybe<Array<Maybe<CustomAttribute>>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type FormAnalytics = {
  __typename?: 'FormAnalytics';
  allRows?: Maybe<Scalars['JSON']['output']>;
  eventGroup?: Maybe<Scalars['JSON']['output']>;
  tenantId?: Maybe<Scalars['String']['output']>;
};

export type FormAnalyticsByCompany = {
  __typename?: 'FormAnalyticsByCompany';
  eventGroup?: Maybe<Scalars['JSON']['output']>;
  tenantId?: Maybe<Scalars['String']['output']>;
};

export type FormInput = {
  customAttributes?: InputMaybe<Array<InputMaybe<CustomAttributeInput>>>;
  language?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type FormSubmission = {
  __typename?: 'FormSubmission';
  data?: Maybe<Scalars['JSON']['output']>;
  form?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  magicLinkId?: Maybe<Scalars['String']['output']>;
  submittedAt?: Maybe<Scalars['String']['output']>;
  tenantId?: Maybe<Scalars['String']['output']>;
};

export type FormSubmissions = {
  __typename?: 'FormSubmissions';
  formSubmissions?: Maybe<Array<Maybe<FormSubmission>>>;
  paging?: Maybe<PageInfo>;
};

export type Forms = {
  __typename?: 'Forms';
  forms?: Maybe<Array<Maybe<Form>>>;
  paging?: Maybe<PageInfo>;
};

export type HeaderDataField = {
  __typename?: 'HeaderDataField';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type HookdeckAccountInfo = {
  __typename?: 'HookdeckAccountInfo';
  sourceUrl?: Maybe<Scalars['String']['output']>;
};

export type HookdeckRequest = {
  __typename?: 'HookdeckRequest';
  cli_events_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  data?: Maybe<HookdeckRequestData>;
  duplicate_hash?: Maybe<Scalars['String']['output']>;
  duplicate_hits?: Maybe<Scalars['String']['output']>;
  events_count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ignored_count?: Maybe<Scalars['Int']['output']>;
  ingest_priority?: Maybe<Scalars['String']['output']>;
  ingested_at?: Maybe<Scalars['String']['output']>;
  original_event_data_id?: Maybe<Scalars['String']['output']>;
  rejection_cause?: Maybe<Scalars['String']['output']>;
  source_id?: Maybe<Scalars['String']['output']>;
  team_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type HookdeckRequestData = {
  __typename?: 'HookdeckRequestData';
  body?: Maybe<Scalars['JSON']['output']>;
  headers?: Maybe<Scalars['JSON']['output']>;
};

export type HookdeckRequests = {
  __typename?: 'HookdeckRequests';
  paging?: Maybe<PageInfo>;
  requests?: Maybe<Array<Maybe<HookdeckRequest>>>;
};

export type IntegromatBlueprint = {
  __typename?: 'IntegromatBlueprint';
  flow?: Maybe<Array<Maybe<Flow>>>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type IntegromatFilterInput = {
  q?: InputMaybe<Scalars['String']['input']>;
};

export type IntegromatHook = {
  __typename?: 'IntegromatHook';
  editable?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  packageName?: Maybe<Scalars['String']['output']>;
  teamId?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  typeName?: Maybe<Scalars['String']['output']>;
  udid?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type IntegromatPageInfo = {
  __typename?: 'IntegromatPageInfo';
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
};

export type IntegromatPageInfoInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type IntegromatScenario = {
  __typename?: 'IntegromatScenario';
  createdByUser?: Maybe<IntegromatUser>;
  description?: Maybe<Scalars['String']['output']>;
  error?: Maybe<ResponseError>;
  hookId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isPaused?: Maybe<Scalars['Boolean']['output']>;
  lastEdit?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  scheduling?: Maybe<IntegromatScheduling>;
  teamId?: Maybe<Scalars['ID']['output']>;
  updatedByUser?: Maybe<IntegromatUser>;
  usedPackages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type IntegromatScenarioBlueprint = {
  __typename?: 'IntegromatScenarioBlueprint';
  blueprint?: Maybe<IntegromatBlueprint>;
  error?: Maybe<ResponseError>;
  id?: Maybe<Scalars['ID']['output']>;
  scheduling?: Maybe<IntegromatScheduling>;
  teamId?: Maybe<Scalars['ID']['output']>;
};

export type IntegromatScenarioBlueprintInput = {
  blueprint?: InputMaybe<Scalars['String']['input']>;
  scheduling?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['String']['input']>;
};

export type IntegromatScenarios = {
  __typename?: 'IntegromatScenarios';
  pageInfo?: Maybe<IntegromatPageInfo>;
  scenarios?: Maybe<Array<Maybe<IntegromatScenario>>>;
};

export type IntegromatScheduling = {
  __typename?: 'IntegromatScheduling';
  type?: Maybe<Scalars['String']['output']>;
};

export type IntegromatTeam = {
  __typename?: 'IntegromatTeam';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['Int']['output']>;
  scenariosDrafts?: Maybe<Scalars['Boolean']['output']>;
};

export type IntegromatTemplate = {
  __typename?: 'IntegromatTemplate';
  approved?: Maybe<Scalars['String']['output']>;
  approvedId?: Maybe<Scalars['Int']['output']>;
  approvedName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  public?: Maybe<Scalars['Boolean']['output']>;
  publicUrl?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['String']['output']>;
  publishedName?: Maybe<Scalars['String']['output']>;
  publisherId?: Maybe<Scalars['String']['output']>;
  requestedApproval?: Maybe<Scalars['Boolean']['output']>;
  teamId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  usedApps?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type IntegromatTemplateBlueprint = {
  __typename?: 'IntegromatTemplateBlueprint';
  blueprint?: Maybe<IntegromatBlueprint>;
  controller?: Maybe<Controller>;
  id?: Maybe<Scalars['ID']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  scheduling?: Maybe<IntegromatScheduling>;
};

export type IntegromatUser = {
  __typename?: 'IntegromatUser';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type InternalContact = {
  __typename?: 'InternalContact';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  preferredLanguage?: Maybe<Scalars['String']['output']>;
};

export type InternalContactInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferredLanguage?: InputMaybe<Scalars['String']['input']>;
};

export type Kpi = {
  __typename?: 'KPI';
  id?: Maybe<Scalars['String']['output']>;
};

export type KpiPlotting = {
  __typename?: 'KPIPlotting';
  id?: Maybe<Scalars['String']['output']>;
};

export type LegalEntities = {
  __typename?: 'LegalEntities';
  legalEntities?: Maybe<Array<Maybe<LegalEntity>>>;
  paging?: Maybe<PageInfo>;
};

export type LegalEntity = {
  __typename?: 'LegalEntity';
  accountLimit?: Maybe<AccountLimit>;
  approvalGroup?: Maybe<Array<Maybe<ApprovalGroup>>>;
  contacts?: Maybe<Array<Maybe<ContactLegalEntity>>>;
  customerGroups?: Maybe<Array<Maybe<CustomerGroup>>>;
  documents?: Maybe<Array<Maybe<DocumentLegalEntity>>>;
  entitiesAddresses?: Maybe<Array<Maybe<EntitiesAddress>>>;
  id?: Maybe<Scalars['ID']['output']>;
  legalInfo?: Maybe<LegalInfo>;
  metadata?: Maybe<MetadataLegalEntity>;
  mixins?: Maybe<RootMixinsLegalEntity>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type LegalEntityInput = {
  accountLimit?: InputMaybe<AccountLimitInput>;
  approvalGroup?: InputMaybe<Array<InputMaybe<ApprovalGroupInput>>>;
  contacts?: InputMaybe<Array<InputMaybe<ContactLegalEntityInput>>>;
  customerGroups?: InputMaybe<Array<InputMaybe<CustomerGroupInput>>>;
  documents?: InputMaybe<Array<InputMaybe<DocumentLegalEntityInput>>>;
  entitiesAddresses?: InputMaybe<Array<InputMaybe<EntitiesAddressInput>>>;
  legalInfo?: InputMaybe<LegalInfoInput>;
  mixins?: InputMaybe<RootMixinsLegalEntityInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type LegalInfo = {
  __typename?: 'LegalInfo';
  countryOfRegistration?: Maybe<Scalars['String']['output']>;
  legalName?: Maybe<Scalars['String']['output']>;
  registrationAgency?: Maybe<Scalars['String']['output']>;
  registrationDate?: Maybe<Scalars['String']['output']>;
  registrationId?: Maybe<Scalars['String']['output']>;
  taxRegistrationNumber?: Maybe<Scalars['String']['output']>;
};

export type LegalInfoInput = {
  countryOfRegistration?: InputMaybe<Scalars['String']['input']>;
  legalName?: InputMaybe<Scalars['String']['input']>;
  registrationAgency?: InputMaybe<Scalars['String']['input']>;
  registrationDate?: InputMaybe<Scalars['String']['input']>;
  registrationId?: InputMaybe<Scalars['String']['input']>;
  taxRegistrationNumber?: InputMaybe<Scalars['String']['input']>;
};

export type MagicLink = {
  __typename?: 'MagicLink';
  canBeSubmittedOnlyOnce?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customAttributes?: Maybe<Scalars['JSON']['output']>;
  expirationDate?: Maybe<Scalars['String']['output']>;
  forms?: Maybe<Array<Maybe<Form>>>;
  id?: Maybe<Scalars['ID']['output']>;
  instanceId?: Maybe<Scalars['String']['output']>;
  mixins?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<Scalars['JSON']['output']>;
  scheduleId?: Maybe<Scalars['String']['output']>;
  stylesheet?: Maybe<Scalars['String']['output']>;
  submissionEventType?: Maybe<Scalars['String']['output']>;
  submissions?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type MagicLinkInput = {
  customAttributes?: InputMaybe<Array<InputMaybe<CustomAttributeInput>>>;
  expirationDate?: InputMaybe<Scalars['String']['input']>;
  forms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mixins?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  recipient?: InputMaybe<Scalars['JSON']['input']>;
  stylesheet?: InputMaybe<Scalars['String']['input']>;
};

export type MagicLinkScheduler = {
  __typename?: 'MagicLinkScheduler';
  customAttributes?: Maybe<Array<Maybe<CustomAttributeScheduler>>>;
  forms?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  inactive?: Maybe<Scalars['Boolean']['output']>;
  lifetime?: Maybe<Scalars['Int']['output']>;
  mixins?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  periodicity?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<Scalars['JSON']['output']>;
  scheduleId?: Maybe<Scalars['String']['output']>;
  stylesheet?: Maybe<Scalars['String']['output']>;
};

export type MagicLinkSchedulerInput = {
  customAttributes?: InputMaybe<Array<InputMaybe<CustomAttributeSchedulerInput>>>;
  forms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  inactive?: InputMaybe<Scalars['Boolean']['input']>;
  lifetime?: InputMaybe<Scalars['Int']['input']>;
  mixins?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  periodicity?: InputMaybe<Scalars['String']['input']>;
  recipient?: InputMaybe<Scalars['JSON']['input']>;
  stylesheet?: InputMaybe<Scalars['String']['input']>;
};

export type Message = {
  __typename?: 'Message';
  category?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  severity?: Maybe<Scalars['String']['output']>;
};

export type MessageChat = {
  __typename?: 'MessageChat';
  chat_id?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

export type MetadataActivatedBy = {
  __typename?: 'MetadataActivatedBy';
  userEmail?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type MetadataCreatedBy = {
  __typename?: 'MetadataCreatedBy';
  userEmail?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type MetadataLegalEntity = {
  __typename?: 'MetadataLegalEntity';
  createdAt?: Maybe<Scalars['String']['output']>;
  modifiedAt?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type MixinsLegalEntity = {
  __typename?: 'MixinsLegalEntity';
  QMTDepartment?: Maybe<Scalars['String']['output']>;
  components?: Maybe<Array<Maybe<ComponentMixinsLegalEntity>>>;
  internalContact?: Maybe<InternalContact>;
  internalContact2?: Maybe<InternalContact>;
  internalContacts?: Maybe<Array<Maybe<InternalContact>>>;
  supplierCommodity?: Maybe<Scalars['String']['output']>;
  supplierLocation?: Maybe<Scalars['String']['output']>;
  supplierPlantId?: Maybe<Scalars['String']['output']>;
};

export type MixinsLegalEntityInput = {
  QMTDepartment?: InputMaybe<Scalars['String']['input']>;
  components?: InputMaybe<Array<InputMaybe<ComponentMixinsLegalEntityInput>>>;
  internalContact?: InputMaybe<InternalContactInput>;
  internalContact2?: InputMaybe<InternalContactInput>;
  internalContacts?: InputMaybe<Array<InputMaybe<InternalContactInput>>>;
  supplierCommodity?: InputMaybe<Scalars['String']['input']>;
  supplierLocation?: InputMaybe<Scalars['String']['input']>;
  supplierPlantId?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateExecutionTemplate?: Maybe<ExecutionTemplate>;
  createAccess?: Maybe<Access>;
  createBusinessExpression?: Maybe<BusinessExpression>;
  createCloudFunction?: Maybe<CloudFunction>;
  createCloudGroup?: Maybe<CloudGroup>;
  createEventType?: Maybe<EventTypeResponse>;
  createExecutionTemplate?: Maybe<ExecutionTemplate>;
  createForm?: Maybe<Form>;
  createLegalEntity?: Maybe<LegalEntity>;
  createMagicLink?: Maybe<MagicLink>;
  createMagicLinkScheduler?: Maybe<MagicLinkScheduler>;
  createNewChat?: Maybe<Chat>;
  createNextVersionExecutionTemplate?: Maybe<ExecutionTemplate>;
  createOrUpdateDraft?: Maybe<ExecutionTemplate>;
  createUseCase?: Maybe<UseCaseV2>;
  deactivateExecutionTemplate?: Maybe<ExecutionTemplate>;
  deleteBusinessExpression?: Maybe<BusinessExpression>;
  deleteDigitalProcessUseCase?: Maybe<Scalars['String']['output']>;
  deleteExecutionTemplate?: Maybe<Array<Maybe<ExecutionTemplate>>>;
  deleteForm?: Maybe<Scalars['String']['output']>;
  deleteLegalEntity?: Maybe<Scalars['String']['output']>;
  deleteMagicLinkScheduler?: Maybe<Scalars['String']['output']>;
  deleteMagicLinkSchedulerByRecipientCompanyId?: Maybe<Scalars['String']['output']>;
  duplicateForm?: Maybe<Form>;
  integromatHook?: Maybe<IntegromatHook>;
  integromatScenario?: Maybe<IntegromatScenario>;
  integromatScenarioFromTemplate?: Maybe<IntegromatScenario>;
  postChatMessage?: Maybe<MessageChat>;
  replayStepNumberFromRunId?: Maybe<Scalars['String']['output']>;
  revokeAccess?: Maybe<Scalars['String']['output']>;
  runScenario?: Maybe<Run>;
  saveCelonisToken?: Maybe<Scalars['String']['output']>;
  saveSchedulingSetttings?: Maybe<Scalars['String']['output']>;
  saveValueForKey?: Maybe<Scalars['JSON']['output']>;
  terminateExecutionTemplateRunById?: Maybe<Scalars['String']['output']>;
  updateBusinessExpression?: Maybe<BusinessExpression>;
  updateCloudFunction?: Maybe<CloudFunction>;
  updateCloudGroup?: Maybe<CloudGroup>;
  updateCustomAttributesMagicLinkScheduler?: Maybe<Scalars['JSON']['output']>;
  updateDigitalProcessUseCase?: Maybe<Scalars['String']['output']>;
  updateForm?: Maybe<Form>;
  updateLegalEntity?: Maybe<LegalEntity>;
  updateMagicLinkScheduler?: Maybe<MagicLinkScheduler>;
  updateMagicLinkSchedulerByRecipientCompanyId?: Maybe<Scalars['String']['output']>;
  updateTranslation?: Maybe<Scalars['String']['output']>;
  updateUseCase?: Maybe<UseCaseV2>;
};


export type MutationActivateExecutionTemplateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateAccessArgs = {
  access?: InputMaybe<AccessInput>;
};


export type MutationCreateBusinessExpressionArgs = {
  businessExpression?: InputMaybe<BusinessExpressionInput>;
};


export type MutationCreateCloudFunctionArgs = {
  cloudFunction?: InputMaybe<CloudFunctionInput>;
};


export type MutationCreateCloudGroupArgs = {
  cloudGroup?: InputMaybe<CloudGroupInput>;
};


export type MutationCreateEventTypeArgs = {
  eventType?: InputMaybe<EventTypeInput>;
};


export type MutationCreateExecutionTemplateArgs = {
  executionTemplate?: InputMaybe<ExecutionTemplateInput>;
};


export type MutationCreateFormArgs = {
  form?: InputMaybe<FormInput>;
};


export type MutationCreateLegalEntityArgs = {
  legalEntity?: InputMaybe<LegalEntityInput>;
};


export type MutationCreateMagicLinkArgs = {
  magicLink?: InputMaybe<MagicLinkInput>;
};


export type MutationCreateMagicLinkSchedulerArgs = {
  magicLinkScheduler?: InputMaybe<MagicLinkSchedulerInput>;
};


export type MutationCreateNextVersionExecutionTemplateArgs = {
  executionTemplate?: InputMaybe<ExecutionTemplateInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateOrUpdateDraftArgs = {
  executionTemplate?: InputMaybe<ExecutionTemplateInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUseCaseArgs = {
  useCase?: InputMaybe<UseCaseV2Input>;
};


export type MutationDeactivateExecutionTemplateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteBusinessExpressionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteDigitalProcessUseCaseArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  useCaseId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteExecutionTemplateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteFormArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteLegalEntityArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteMagicLinkSchedulerArgs = {
  scheduleId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteMagicLinkSchedulerByRecipientCompanyIdArgs = {
  recipientCompanyId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDuplicateFormArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationIntegromatHookArgs = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationIntegromatScenarioArgs = {
  scenarioBlueprint?: InputMaybe<IntegromatScenarioBlueprintInput>;
};


export type MutationIntegromatScenarioFromTemplateArgs = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
  templateId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPostChatMessageArgs = {
  chatId?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};


export type MutationReplayStepNumberFromRunIdArgs = {
  runId?: InputMaybe<Scalars['String']['input']>;
  stepNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRevokeAccessArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRunScenarioArgs = {
  runInput?: InputMaybe<RunInput>;
  scenarioId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSaveCelonisTokenArgs = {
  celonisToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSaveSchedulingSetttingsArgs = {
  schedulingSetttings?: InputMaybe<SchedulingSetttingsInput>;
};


export type MutationSaveValueForKeyArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};


export type MutationTerminateExecutionTemplateRunByIdArgs = {
  executionTemplateId?: InputMaybe<Scalars['String']['input']>;
  runId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateBusinessExpressionArgs = {
  businessExpression?: InputMaybe<BusinessExpressionInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCloudFunctionArgs = {
  cloudFunction?: InputMaybe<CloudFunctionInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCloudGroupArgs = {
  cloudGroup?: InputMaybe<CloudGroupInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCustomAttributesMagicLinkSchedulerArgs = {
  customAttributes?: InputMaybe<CustomAttributesScheduler>;
  magicLinkId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDigitalProcessUseCaseArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  useCaseId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateFormArgs = {
  form?: InputMaybe<FormInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLegalEntityArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  legalEntity?: InputMaybe<LegalEntityInput>;
};


export type MutationUpdateMagicLinkSchedulerArgs = {
  magicLinkScheduler?: InputMaybe<MagicLinkSchedulerInput>;
  scheduleId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateMagicLinkSchedulerByRecipientCompanyIdArgs = {
  contacts?: InputMaybe<Array<InputMaybe<Contact>>>;
  recipientCompanyId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTranslationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  translation?: InputMaybe<TranslationInput>;
};


export type MutationUpdateUseCaseArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  useCase?: InputMaybe<UseCaseV2Input>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  page?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PageInfoInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  BPMNDigitalProcess?: Maybe<BpmnDigitalProcess>;
  SVGDigitalProcess?: Maybe<SvgDigitalProcess>;
  access?: Maybe<Access>;
  accesses?: Maybe<Accesses>;
  aiAgents?: Maybe<CloudFunctions>;
  analysis?: Maybe<CelonisAnalysis>;
  businessApplications?: Maybe<BusinessApplications>;
  businessExpresion?: Maybe<BusinessExpression>;
  businessExpressions?: Maybe<Array<Maybe<BusinessExpression>>>;
  businessKPIs?: Maybe<BusinessKpIs>;
  celonisKnowledgeModelRecordFields?: Maybe<CelonisRecord>;
  celonisKnowledgeModelRecordFieldsData?: Maybe<CelonisRecordData>;
  celonisKnowledgeModelRecords?: Maybe<CelonisRecords>;
  celonisKnowledgeModels?: Maybe<CelonisKnowledgeModels>;
  celonisRecordData?: Maybe<CelonisRecordData>;
  chatById?: Maybe<Chat>;
  chats?: Maybe<Array<Maybe<Chat>>>;
  cloudFunction?: Maybe<CloudFunction>;
  cloudFunctions?: Maybe<CloudFunctions>;
  cloudGroup?: Maybe<CloudGroup>;
  cloudGroups?: Maybe<CloudGroups>;
  cxpAccount?: Maybe<CxpAccountInfo>;
  cxpAccountTokens?: Maybe<CxpAccountTokens>;
  diffExecutionTemplates?: Maybe<Scalars['String']['output']>;
  digitalProcessExecutionStates?: Maybe<DigitalProcessExecutionStates>;
  digitalProcessStepsExecutionStates?: Maybe<DigitalProcessStepsExecutionStates>;
  eventLogRequest?: Maybe<HookdeckRequest>;
  eventLogRequests?: Maybe<HookdeckRequests>;
  eventTypes?: Maybe<EventTypes>;
  executionRunContext?: Maybe<ExecutionRunContext>;
  executionTemplate?: Maybe<ExecutionTemplate>;
  executionTemplateRunDetails?: Maybe<ExecutionTemplateDebug>;
  executionTemplateRuns?: Maybe<ExecutionTemplateRunsResponse>;
  executionTemplateVersion?: Maybe<ExecutionTemplate>;
  executionTemplateVersions?: Maybe<Array<Maybe<ExecutionTemplate>>>;
  executionTemplates?: Maybe<Array<Maybe<ExecutionTemplate>>>;
  executionTemplatesByIds?: Maybe<Array<Maybe<ExecutionTemplate>>>;
  form?: Maybe<Form>;
  formSubmissions?: Maybe<FormSubmissions>;
  forms?: Maybe<Forms>;
  formsAnalytics?: Maybe<FormAnalytics>;
  formsAnalyticsByCompany?: Maybe<FormAnalyticsByCompany>;
  formsCustomAttributes?: Maybe<CustomAttributes>;
  formsScheduler?: Maybe<Schedules>;
  formsSchedulerByFormId?: Maybe<Schedules>;
  getDraft?: Maybe<ExecutionTemplate>;
  getValueForKey?: Maybe<Scalars['JSON']['output']>;
  integromatExecutionStepScenarios?: Maybe<IntegromatScenarios>;
  integromatExecutionStepsTemplates?: Maybe<Array<Maybe<IntegromatTemplate>>>;
  integromatHook?: Maybe<IntegromatHook>;
  integromatInitTriggerScenarios?: Maybe<Array<Maybe<IntegromatScenario>>>;
  integromatInitTriggerTemplates?: Maybe<Array<Maybe<IntegromatTemplate>>>;
  integromatMidTriggerScenarios?: Maybe<Array<Maybe<IntegromatScenario>>>;
  integromatMidTriggerTemplates?: Maybe<Array<Maybe<IntegromatTemplate>>>;
  integromatScenario?: Maybe<IntegromatScenario>;
  integromatScenarioBlueprint?: Maybe<IntegromatScenarioBlueprint>;
  integromatScenarios?: Maybe<IntegromatScenarios>;
  integromatTeam?: Maybe<IntegromatTeam>;
  integromatTemplate?: Maybe<IntegromatTemplate>;
  integromatTemplateBlueprint?: Maybe<IntegromatTemplateBlueprint>;
  integromatTemplates?: Maybe<Array<Maybe<IntegromatTemplate>>>;
  kpis?: Maybe<Array<Maybe<Kpi>>>;
  kpisForPlotting?: Maybe<Array<Maybe<KpiPlotting>>>;
  lastChatMessage?: Maybe<MessageChat>;
  latestChat?: Maybe<Chat>;
  legalEntities?: Maybe<LegalEntities>;
  legalEntity?: Maybe<LegalEntity>;
  magicLink?: Maybe<MagicLink>;
  magicLinks?: Maybe<Array<Maybe<MagicLink>>>;
  nodesTree?: Maybe<Array<Maybe<CelonisNode>>>;
  nouse?: Maybe<Scalars['String']['output']>;
  nouse2222?: Maybe<Scalars['String']['output']>;
  rulestore?: Maybe<Array<Maybe<Ruleset>>>;
  runningInstance?: Maybe<RunningInstance>;
  runningInstances?: Maybe<Array<Maybe<RunningInstance>>>;
  spaces?: Maybe<Array<Maybe<CelonisSpace>>>;
  tenant?: Maybe<Tenant>;
  tenantAnalytics?: Maybe<TenantAnalyticsData>;
  tenants?: Maybe<Array<Maybe<Tenant>>>;
  translation?: Maybe<Scalars['JSON']['output']>;
  useCase?: Maybe<UseCase>;
  useCaseExecutionStates?: Maybe<UseCaseExecutionStates>;
  useCaseV2?: Maybe<UseCaseV2>;
  useCases?: Maybe<UseCases>;
  useCasesExecutionStates?: Maybe<UseCasesExecutionStates>;
  useCasesV2?: Maybe<UseCasesV2>;
  userTask?: Maybe<Task>;
  userTasksList?: Maybe<Tasks>;
  validateExecutionTemplate?: Maybe<ExecutionTemplate>;
  webhooksEventsFilteredByHeaders?: Maybe<Array<Maybe<WebhookEvent>>>;
};


export type QueryBpmnDigitalProcessArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  versionId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySvgDigitalProcessArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  versionId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccessArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccessesArgs = {
  filter?: InputMaybe<FilterInput>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryAiAgentsArgs = {
  filter?: InputMaybe<FilterInput>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryAnalysisArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBusinessApplicationsArgs = {
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryBusinessExpresionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBusinessKpIsArgs = {
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryCelonisKnowledgeModelRecordFieldsArgs = {
  kmId?: InputMaybe<Scalars['String']['input']>;
  recordId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCelonisKnowledgeModelRecordFieldsDataArgs = {
  fieldsIds?: InputMaybe<Scalars['String']['input']>;
  kmId?: InputMaybe<Scalars['String']['input']>;
  recordId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCelonisKnowledgeModelRecordsArgs = {
  kmId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCelonisRecordDataArgs = {
  fieldsIds?: InputMaybe<Scalars['String']['input']>;
  kmId?: InputMaybe<Scalars['String']['input']>;
  recordId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChatByIdArgs = {
  chatId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCloudFunctionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCloudFunctionsArgs = {
  filter?: InputMaybe<FilterInput>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryCloudGroupArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCloudGroupsArgs = {
  filter?: InputMaybe<FilterInput>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryDiffExecutionTemplatesArgs = {
  executionTemplateJSON?: InputMaybe<ExecutionTemplateInput>;
  id1?: InputMaybe<Scalars['String']['input']>;
  id2?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDigitalProcessExecutionStatesArgs = {
  endTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDigitalProcessStepsExecutionStatesArgs = {
  endTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventLogRequestArgs = {
  requestId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventLogRequestsArgs = {
  filter?: InputMaybe<FilterInput>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryExecutionRunContextArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExecutionTemplateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExecutionTemplateRunDetailsArgs = {
  executionTemplateId?: InputMaybe<Scalars['String']['input']>;
  runId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExecutionTemplateRunsArgs = {
  executionTemplateId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterInput>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryExecutionTemplateVersionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  vId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExecutionTemplateVersionsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExecutionTemplatesByIdsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFormArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFormSubmissionsArgs = {
  filter?: InputMaybe<FilterInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryFormsArgs = {
  filter?: InputMaybe<FilterInput>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryFormsAnalyticsArgs = {
  tenantId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFormsAnalyticsByCompanyArgs = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFormsSchedulerByFormIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetDraftArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetValueForKeyArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIntegromatExecutionStepScenariosArgs = {
  filter?: InputMaybe<IntegromatFilterInput>;
  paging?: InputMaybe<IntegromatPageInfoInput>;
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegromatExecutionStepsTemplatesArgs = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegromatHookArgs = {
  hookId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegromatInitTriggerScenariosArgs = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegromatInitTriggerTemplatesArgs = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegromatMidTriggerScenariosArgs = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegromatMidTriggerTemplatesArgs = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegromatScenarioArgs = {
  scenarioId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegromatScenarioBlueprintArgs = {
  scenarioId?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegromatScenariosArgs = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegromatTeamArgs = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIntegromatTemplateArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIntegromatTemplateBlueprintArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIntegromatTemplatesArgs = {
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLastChatMessageArgs = {
  chatId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLegalEntitiesArgs = {
  filter?: InputMaybe<FilterInput>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryLegalEntityArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMagicLinkArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRunningInstanceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRunningInstancesArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTenantArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTranslationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUseCaseArgs = {
  endTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUseCaseExecutionStatesArgs = {
  endTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUseCaseV2Args = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUseCasesArgs = {
  endTime?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUseCasesExecutionStatesArgs = {
  endTime?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUseCasesV2Args = {
  filter?: InputMaybe<FilterInput>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryUserTaskArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserTasksListArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterInput>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
};


export type QueryValidateExecutionTemplateArgs = {
  executionTemplate?: InputMaybe<ExecutionTemplateInput>;
};


export type QueryWebhooksEventsFilteredByHeadersArgs = {
  header?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ResponseError = {
  __typename?: 'ResponseError';
  errorCode?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type RootMixinsLegalEntity = {
  __typename?: 'RootMixinsLegalEntity';
  root?: Maybe<MixinsLegalEntity>;
};

export type RootMixinsLegalEntityInput = {
  root?: InputMaybe<MixinsLegalEntityInput>;
};

export type Ruleset = {
  __typename?: 'Ruleset';
  id?: Maybe<Scalars['String']['output']>;
};

export type Run = {
  __typename?: 'Run';
  executionId?: Maybe<Scalars['String']['output']>;
};

export type RunInput = {
  source?: InputMaybe<Scalars['String']['input']>;
};

export type RunningInstance = {
  __typename?: 'RunningInstance';
  id?: Maybe<Scalars['String']['output']>;
};

export type SvgDigitalProcess = {
  __typename?: 'SVGDigitalProcess';
  content?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Scenario = {
  __typename?: 'Scenario';
  method?: Maybe<Scalars['String']['output']>;
  scenario?: Maybe<IntegromatScenario>;
  scenarioBlueprint?: Maybe<IntegromatScenarioBlueprint>;
  scenarioCompletionNotification?: Maybe<ScenarioCompletionNotification>;
  scenarioId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ScenarioDebug = {
  __typename?: 'ScenarioDebug';
  completionEvent?: Maybe<CompletionEvent>;
  externalRunId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  input?: Maybe<Scalars['JSON']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  output?: Maybe<Scalars['JSON']['output']>;
  scenario?: Maybe<IntegromatScenario>;
  scenarioBlueprint?: Maybe<IntegromatScenarioBlueprint>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ScenarioInput = {
  method?: InputMaybe<Scalars['String']['input']>;
  scenarioCompletionNotification?: InputMaybe<ScenarioCompletionNotificationInput>;
  scenarioId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Schedules = {
  __typename?: 'Schedules';
  Schedules?: Maybe<Array<Maybe<MagicLinkScheduler>>>;
};

export type SchedulingSetttings = {
  __typename?: 'SchedulingSetttings';
  schedulingScenario?: Maybe<Scalars['String']['output']>;
  submittedEventType?: Maybe<Scalars['String']['output']>;
};

export type SchedulingSetttingsInput = {
  schedulingScenario?: InputMaybe<Scalars['String']['input']>;
  submittedEventType?: InputMaybe<Scalars['String']['input']>;
};

export type Step = {
  __typename?: 'Step';
  cloudFunctions?: Maybe<Array<Maybe<CloudFunctionStep>>>;
  condition?: Maybe<Condition>;
  scenarios?: Maybe<Array<Maybe<Scenario>>>;
  stepType?: Maybe<Scalars['String']['output']>;
  subflows?: Maybe<Array<Maybe<Subflow>>>;
  trigger?: Maybe<Array<Maybe<Trigger>>>;
};

export type StepDebug = {
  __typename?: 'StepDebug';
  cloudFunctions?: Maybe<Array<Maybe<CloudFunctionDebug>>>;
  condition?: Maybe<ConditionDebug>;
  input?: Maybe<Scalars['JSON']['output']>;
  output?: Maybe<Scalars['JSON']['output']>;
  scenarios?: Maybe<Array<Maybe<ScenarioDebug>>>;
  status?: Maybe<Scalars['String']['output']>;
  stepType?: Maybe<Scalars['String']['output']>;
  subflows?: Maybe<Array<Maybe<SubflowDebug>>>;
  triggers?: Maybe<Array<Maybe<TriggerDebug>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type StepInput = {
  cloudFunctions?: InputMaybe<Array<InputMaybe<CloudFunctionStepInput>>>;
  condition?: InputMaybe<ConditionInput>;
  scenarios?: InputMaybe<Array<InputMaybe<ScenarioInput>>>;
  stepType?: InputMaybe<Scalars['String']['input']>;
  subflows?: InputMaybe<Array<InputMaybe<SubflowInput>>>;
  trigger?: InputMaybe<Array<InputMaybe<TriggerInput>>>;
};

export type Subflow = {
  __typename?: 'Subflow';
  executionTemplateId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SubflowDebug = {
  __typename?: 'SubflowDebug';
  input?: Maybe<Scalars['JSON']['output']>;
  output?: Maybe<Scalars['JSON']['output']>;
  templateId?: Maybe<Scalars['String']['output']>;
  templateVersion?: Maybe<TemplateVersion>;
  workflowId?: Maybe<Scalars['String']['output']>;
};

export type SubflowInput = {
  executionTemplateId?: InputMaybe<Scalars['String']['input']>;
};

export type Task = {
  __typename?: 'Task';
  completedAt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customAttributes?: Maybe<Scalars['JSON']['output']>;
  expiresAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  relatedEntityId?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  taskType?: Maybe<Scalars['String']['output']>;
  userEmail?: Maybe<Scalars['String']['output']>;
};

export type Tasks = {
  __typename?: 'Tasks';
  paging?: Maybe<PageInfo>;
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type TemplateVersion = {
  __typename?: 'TemplateVersion';
  id?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
};

export type TemplateVersionInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
};

export type Tenant = {
  __typename?: 'Tenant';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  integromatOrgID?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type TenantAnalyticsData = {
  __typename?: 'TenantAnalyticsData';
  charts?: Maybe<Array<Maybe<CelonisRecordData>>>;
  kpis?: Maybe<Array<Maybe<CelonisRecordData>>>;
};

export type Trigger = {
  __typename?: 'Trigger';
  eventType?: Maybe<Scalars['String']['output']>;
  scenarios?: Maybe<Array<Maybe<IntegromatScenario>>>;
  scenariosBlueprints?: Maybe<Array<Maybe<IntegromatScenarioBlueprint>>>;
  timeExpression?: Maybe<Scalars['String']['output']>;
  triggerType?: Maybe<Scalars['String']['output']>;
};

export type TriggerDebug = {
  __typename?: 'TriggerDebug';
  event?: Maybe<TriggerEvent>;
  eventType?: Maybe<Scalars['String']['output']>;
  scenarios?: Maybe<Array<Maybe<IntegromatScenario>>>;
  scenariosBlueprints?: Maybe<Array<Maybe<IntegromatScenarioBlueprint>>>;
  status?: Maybe<Scalars['String']['output']>;
  timeExpression?: Maybe<Scalars['String']['output']>;
  triggerType?: Maybe<Scalars['String']['output']>;
};

export type TriggerEvent = {
  __typename?: 'TriggerEvent';
  at?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TriggerInput = {
  eventType?: InputMaybe<Scalars['String']['input']>;
  scenarioIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timeExpression?: InputMaybe<Scalars['String']['input']>;
  triggerType?: InputMaybe<Scalars['String']['input']>;
};

export type UseCase = {
  __typename?: 'UseCase';
  EndDate?: Maybe<Scalars['String']['output']>;
  StartDate?: Maybe<Scalars['String']['output']>;
  digitalProcesses?: Maybe<Array<Maybe<UseCaseDigitalProcessExecutionStates>>>;
  tenantID?: Maybe<Scalars['String']['output']>;
  useCaseID?: Maybe<Scalars['String']['output']>;
  useCaseName?: Maybe<Scalars['String']['output']>;
};

export type UseCaseDigitalProcessExecutionStates = {
  __typename?: 'UseCaseDigitalProcessExecutionStates';
  DigitalProcessID?: Maybe<Scalars['String']['output']>;
  digitalProcessName?: Maybe<Scalars['String']['output']>;
  digitalProcessVersionIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  executionStates?: Maybe<Array<Maybe<ExecutionStates>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UseCaseExecutionStates = {
  __typename?: 'UseCaseExecutionStates';
  EndDate?: Maybe<Scalars['String']['output']>;
  StartDate?: Maybe<Scalars['String']['output']>;
  executionStates?: Maybe<Array<Maybe<ExecutionStates>>>;
  tenantID?: Maybe<Scalars['String']['output']>;
};

export type UseCaseListItem = {
  __typename?: 'UseCaseListItem';
  ID?: Maybe<Scalars['String']['output']>;
  digitalProcesses?: Maybe<Scalars['Int']['output']>;
  executionStates?: Maybe<Array<Maybe<ExecutionStates>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UseCaseV2 = {
  __typename?: 'UseCaseV2';
  businessApplicationIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  businessKPIIDs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageURL?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UseCaseV2Input = {
  businessApplicationIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  businessKPIIDs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageURL?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenantID?: InputMaybe<Scalars['String']['input']>;
};

export type UseCases = {
  __typename?: 'UseCases';
  EndDate?: Maybe<Scalars['String']['output']>;
  StartDate?: Maybe<Scalars['String']['output']>;
  tenantID?: Maybe<Scalars['String']['output']>;
  useCases?: Maybe<Array<Maybe<UseCaseListItem>>>;
};

export type UseCasesExecutionStates = {
  __typename?: 'UseCasesExecutionStates';
  EndDate?: Maybe<Scalars['String']['output']>;
  StartDate?: Maybe<Scalars['String']['output']>;
  executionStates?: Maybe<Array<Maybe<ExecutionStates>>>;
  tenantID?: Maybe<Scalars['String']['output']>;
};

export type UseCasesV2 = {
  __typename?: 'UseCasesV2';
  paging?: Maybe<PageInfo>;
  useCases?: Maybe<Array<Maybe<UseCaseV2>>>;
};

export type WebhookEvent = {
  __typename?: 'WebhookEvent';
  attempts?: Maybe<Scalars['Int']['output']>;
  cli_id?: Maybe<Scalars['JSON']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['JSON']['output']>;
  destination_id?: Maybe<Scalars['String']['output']>;
  error_code?: Maybe<Scalars['String']['output']>;
  event_data_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  last_attempt_at?: Maybe<Scalars['String']['output']>;
  next_attempt_at?: Maybe<Scalars['String']['output']>;
  request_id?: Maybe<Scalars['String']['output']>;
  response_status?: Maybe<Scalars['Int']['output']>;
  source_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  successful_at?: Maybe<Scalars['String']['output']>;
  team_id?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  webhook_id?: Maybe<Scalars['String']['output']>;
};

export type LegalEntityId = {
  __typename?: 'legalEntityID';
  id?: Maybe<Scalars['String']['output']>;
};

export type LegalEntityIdInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ScenarioCompletionNotification = {
  __typename?: 'scenarioCompletionNotification';
  onCompleteEvent?: Maybe<Scalars['Boolean']['output']>;
};

export type ScenarioCompletionNotificationInput = {
  onCompleteEvent?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TranslationInput = {
  translations?: InputMaybe<Scalars['JSON']['input']>;
};

export type UseCaseDigitalProcess = {
  __typename?: 'useCaseDigitalProcess';
  id?: Maybe<Scalars['String']['output']>;
};

export type CreateCloudGroupMutationVariables = Exact<{
  cloudGroup?: InputMaybe<CloudGroupInput>;
}>;


export type CreateCloudGroupMutation = { __typename?: 'Mutation', createCloudGroup?: { __typename?: 'CloudGroup', id?: string | null, name?: string | null, parentGroupId?: string | null, provider?: string | null, authentication?: { __typename?: 'CloudGroupAuth', basic?: any | null, method?: string | null, oauth2?: any | null, tokenBased?: any | null } | null } | null };

export type CreateEventTypeMutationVariables = Exact<{
  eventType?: InputMaybe<EventTypeInput>;
}>;


export type CreateEventTypeMutation = { __typename?: 'Mutation', createEventType?: { __typename?: 'EventTypeResponse', id?: string | null } | null };

export type CreateDigitalProcessMutationVariables = Exact<{
  executionTemplate?: InputMaybe<ExecutionTemplateInput>;
}>;


export type CreateDigitalProcessMutation = { __typename?: 'Mutation', createExecutionTemplate?: { __typename?: 'ExecutionTemplate', id?: string | null, version?: { __typename?: 'TemplateVersion', id?: string | null } | null } | null };

export type CreateOrUpdateDraftMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  executionTemplate?: InputMaybe<ExecutionTemplateInput>;
}>;


export type CreateOrUpdateDraftMutation = { __typename?: 'Mutation', createOrUpdateDraft?: { __typename?: 'ExecutionTemplate', id?: string | null, version?: { __typename?: 'TemplateVersion', id?: string | null } | null } | null };

export type ReplayStepNumberFromRunIdMutationVariables = Exact<{
  runId?: InputMaybe<Scalars['String']['input']>;
  stepNumber?: InputMaybe<Scalars['String']['input']>;
}>;


export type ReplayStepNumberFromRunIdMutation = { __typename?: 'Mutation', replayStepNumberFromRunId?: string | null };

export type BusinessExpressionsQueryVariables = Exact<{ [key: string]: never; }>;


export type BusinessExpressionsQuery = { __typename?: 'Query', businessExpressions?: Array<{ __typename?: 'BusinessExpression', id?: string | null, name?: string | null, description?: string | null, expression?: any | null, referencingTemplates?: Array<{ __typename?: 'ExecutionTemplateBusinessExpression', id?: string | null, versionId?: string | null, name?: string | null } | null> | null } | null> | null };

export type CloudFunctionsQueryVariables = Exact<{
  filter?: InputMaybe<FilterInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  paging?: InputMaybe<PageInfoInput>;
}>;


export type CloudFunctionsQuery = { __typename?: 'Query', cloudFunctions?: { __typename?: 'CloudFunctions', cloudFunctions?: Array<{ __typename?: 'CloudFunction', description?: string | null, groupId?: string | null, id?: string | null, httpMethod?: string | null, name?: string | null, tenantId?: string | null, url?: string | null, authentication?: { __typename?: 'CloudFunctionAuth', basic?: any | null, method?: string | null, oauth2?: any | null, tokenBased?: any | null } | null } | null> | null, paging?: { __typename?: 'PageInfo', page?: number | null, pageSize?: number | null, total?: number | null } | null } | null };

export type CloudGroupsQueryVariables = Exact<{
  filter?: InputMaybe<FilterInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  paging?: InputMaybe<PageInfoInput>;
}>;


export type CloudGroupsQuery = { __typename?: 'Query', cloudGroups?: { __typename?: 'CloudGroups', cloudGroups?: Array<{ __typename?: 'CloudGroup', id?: string | null, name?: string | null, parentGroupId?: string | null, provider?: string | null, authentication?: { __typename?: 'CloudGroupAuth', basic?: any | null, method?: string | null, oauth2?: any | null } | null } | null> | null, paging?: { __typename?: 'PageInfo', page?: number | null, pageSize?: number | null, total?: number | null } | null } | null };

export type DigitalProcessDraftQueryVariables = Exact<{
  executionTemplateId?: InputMaybe<Scalars['String']['input']>;
}>;


export type DigitalProcessDraftQuery = { __typename?: 'Query', getDraft?: { __typename?: 'ExecutionTemplate', id?: string | null, name?: string | null, description?: string | null, active?: boolean | null, state?: string | null, stateComments?: string | null, UseCases?: Array<{ __typename?: 'useCaseDigitalProcess', id?: string | null } | null> | null, version?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null, tenant?: { __typename?: 'CXPAccountInfo', name?: string | null, integromatTeam?: { __typename?: 'IntegromatTeam', id?: number | null, organizationId?: number | null } | null, hookdeck?: { __typename?: 'HookdeckAccountInfo', sourceUrl?: string | null } | null } | null, metadata?: { __typename?: 'CXPMetadata', createdAt?: string | null, activatedAt?: string | null, createdBy?: string | null, activatedBy?: string | null } | null, trigger?: Array<{ __typename?: 'Trigger', timeExpression?: string | null, triggerType?: string | null, eventType?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, scheduling?: { __typename?: 'IntegromatScheduling', type?: string | null } | null, createdByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, updatedByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null> | null } | null> | null, steps?: Array<{ __typename?: 'Step', stepType?: string | null, scenarios?: Array<{ __typename?: 'Scenario', scenarioId?: string | null, url?: string | null, method?: string | null, type?: string | null, scenario?: { __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null } | null> | null, trigger?: Array<{ __typename?: 'Trigger', timeExpression?: string | null, triggerType?: string | null, eventType?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, scheduling?: { __typename?: 'IntegromatScheduling', type?: string | null } | null, createdByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, updatedByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null> | null, scenariosBlueprints?: Array<{ __typename?: 'IntegromatScenarioBlueprint', id?: string | null, teamId?: string | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null, blueprint?: { __typename?: 'IntegromatBlueprint', metadata?: any | null, flow?: Array<{ __typename?: 'Flow', id?: string | null, module?: string | null, version?: string | null } | null> | null } | null } | null> | null } | null> | null, subflows?: Array<{ __typename?: 'Subflow', executionTemplateId?: string | null, name?: string | null } | null> | null, cloudFunctions?: Array<{ __typename?: 'CloudFunctionStep', cloudFunctionId?: string | null, cloudFunctionName?: string | null, cloudFunctionInputJQFilter?: string | null, cloudFunctionOutputJQFilter?: string | null } | null> | null, condition?: { __typename?: 'Condition', left?: string | null, op?: string | null, right?: any | null } | null } | null> | null } | null };

export type EventTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type EventTypesQuery = { __typename?: 'Query', eventTypes?: { __typename?: 'EventTypes', items?: Array<{ __typename?: 'EventType', id?: string | null, name?: string | null, key?: string | null } | null> | null } | null };

export type ExecutionStepScenariosQueryVariables = Exact<{
  teamId?: InputMaybe<Scalars['Int']['input']>;
  paging?: InputMaybe<IntegromatPageInfoInput>;
  filter?: InputMaybe<IntegromatFilterInput>;
}>;


export type ExecutionStepScenariosQuery = { __typename?: 'Query', cxpAccount?: { __typename?: 'CXPAccountInfo', integromatTeam?: { __typename?: 'IntegromatTeam', id?: number | null, organizationId?: number | null } | null } | null, integromatExecutionStepScenarios?: { __typename?: 'IntegromatScenarios', scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null } | null> | null, pageInfo?: { __typename?: 'IntegromatPageInfo', page?: number | null, pageSize?: number | null } | null } | null };

export type ExecutionStepsTemplatesQueryVariables = Exact<{
  teamId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ExecutionStepsTemplatesQuery = { __typename?: 'Query', integromatExecutionStepsTemplates?: Array<{ __typename?: 'IntegromatTemplate', id?: string | null, url?: string | null } | null> | null };

export type ExecutionTemplateQueryVariables = Exact<{
  executionTemplateId?: InputMaybe<Scalars['String']['input']>;
}>;


export type ExecutionTemplateQuery = { __typename?: 'Query', executionTemplate?: { __typename?: 'ExecutionTemplate', id?: string | null, name?: string | null, description?: string | null, active?: boolean | null, state?: string | null, stateComments?: string | null, UseCases?: Array<{ __typename?: 'useCaseDigitalProcess', id?: string | null } | null> | null, version?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null, tenant?: { __typename?: 'CXPAccountInfo', name?: string | null, integromatTeam?: { __typename?: 'IntegromatTeam', id?: number | null, organizationId?: number | null } | null, hookdeck?: { __typename?: 'HookdeckAccountInfo', sourceUrl?: string | null } | null } | null, metadata?: { __typename?: 'CXPMetadata', createdAt?: string | null, activatedAt?: string | null, createdBy?: string | null, activatedBy?: string | null } | null, trigger?: Array<{ __typename?: 'Trigger', timeExpression?: string | null, triggerType?: string | null, eventType?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, scheduling?: { __typename?: 'IntegromatScheduling', type?: string | null } | null, createdByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, updatedByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null> | null } | null> | null, steps?: Array<{ __typename?: 'Step', stepType?: string | null, scenarios?: Array<{ __typename?: 'Scenario', scenarioId?: string | null, url?: string | null, method?: string | null, type?: string | null, scenario?: { __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null } | null> | null, trigger?: Array<{ __typename?: 'Trigger', timeExpression?: string | null, triggerType?: string | null, eventType?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, scheduling?: { __typename?: 'IntegromatScheduling', type?: string | null } | null, createdByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, updatedByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null> | null, scenariosBlueprints?: Array<{ __typename?: 'IntegromatScenarioBlueprint', id?: string | null, teamId?: string | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null, blueprint?: { __typename?: 'IntegromatBlueprint', metadata?: any | null, flow?: Array<{ __typename?: 'Flow', id?: string | null, module?: string | null, version?: string | null } | null> | null } | null } | null> | null } | null> | null, subflows?: Array<{ __typename?: 'Subflow', executionTemplateId?: string | null, name?: string | null } | null> | null, cloudFunctions?: Array<{ __typename?: 'CloudFunctionStep', cloudFunctionId?: string | null, cloudFunctionName?: string | null, cloudFunctionInputJQFilter?: string | null, cloudFunctionOutputJQFilter?: string | null } | null> | null, condition?: { __typename?: 'Condition', left?: string | null, op?: string | null, right?: any | null } | null } | null> | null } | null };

export type ExecutionTemplatesQueryVariables = Exact<{ [key: string]: never; }>;


export type ExecutionTemplatesQuery = { __typename?: 'Query', executionTemplates?: Array<{ __typename?: 'ExecutionTemplate', active?: boolean | null, description?: string | null, id?: string | null, name?: string | null, state?: string | null, stateComments?: string | null, runningInstances?: number | null, completedInstances?: number | null, failedInstances?: number | null, stoppedInstances?: number | null, metadata?: { __typename?: 'CXPMetadata', createdAt?: string | null, activatedAt?: string | null, createdBy?: string | null, activatedBy?: string | null, createdByUser?: { __typename?: 'MetadataCreatedBy', userName?: string | null } | null } | null, tenant?: { __typename?: 'CXPAccountInfo', name?: string | null, integromatTeam?: { __typename?: 'IntegromatTeam', id?: number | null, organizationId?: number | null } | null, hookdeck?: { __typename?: 'HookdeckAccountInfo', sourceUrl?: string | null } | null } | null, version?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null } | null> | null };

export type ExecutionTemplateNameQueryVariables = Exact<{
  executionTemplateId?: InputMaybe<Scalars['String']['input']>;
}>;


export type ExecutionTemplateNameQuery = { __typename?: 'Query', executionTemplate?: { __typename?: 'ExecutionTemplate', name?: string | null, id?: string | null, version?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null } | null };

export type ExecutionTemplateRunQueryVariables = Exact<{
  runId?: InputMaybe<Scalars['String']['input']>;
  executionTemplateId?: InputMaybe<Scalars['String']['input']>;
}>;


export type ExecutionTemplateRunQuery = { __typename?: 'Query', executionTemplateRunDetails?: { __typename?: 'ExecutionTemplateDebug', id?: string | null, name?: string | null, description?: string | null, active?: boolean | null, status?: string | null, runningInstances?: number | null, error?: string | null, input?: any | null, output?: any | null, start?: string | null, finishAt?: string | null, templateVersion?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null, tenant?: { __typename?: 'CXPAccountInfo', name?: string | null, description?: string | null, integromatTeam?: { __typename?: 'IntegromatTeam', id?: number | null } | null, hookdeck?: { __typename?: 'HookdeckAccountInfo', sourceUrl?: string | null } | null } | null, metadata?: { __typename?: 'CXPMetadata', createdAt?: string | null, activatedAt?: string | null, createdBy?: string | null, activatedBy?: string | null, createdByUser?: { __typename?: 'MetadataCreatedBy', userId?: string | null, userName?: string | null, userEmail?: string | null } | null, activatedByUser?: { __typename?: 'MetadataActivatedBy', userId?: string | null, userName?: string | null, userEmail?: string | null } | null } | null, triggers?: Array<{ __typename?: 'TriggerDebug', triggerType?: string | null, eventType?: string | null, status?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, usedPackages?: Array<string | null> | null } | null> | null, scenariosBlueprints?: Array<{ __typename?: 'IntegromatScenarioBlueprint', id?: string | null, teamId?: string | null } | null> | null, event?: { __typename?: 'TriggerEvent', name?: string | null, at?: string | null, body?: any | null } | null } | null> | null, steps?: Array<{ __typename?: 'StepDebug', status?: string | null, type?: string | null, stepType?: string | null, input?: any | null, output?: any | null, scenarios?: Array<{ __typename?: 'ScenarioDebug', id?: string | null, url?: string | null, externalRunId?: string | null, method?: string | null, type?: string | null, input?: any | null, output?: any | null, scenario?: { __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, usedPackages?: Array<string | null> | null } | null, scenarioBlueprint?: { __typename?: 'IntegromatScenarioBlueprint', id?: string | null, teamId?: string | null } | null, completionEvent?: { __typename?: 'CompletionEvent', name?: string | null, at?: string | null, body?: any | null } | null } | null> | null, triggers?: Array<{ __typename?: 'TriggerDebug', timeExpression?: string | null, triggerType?: string | null, eventType?: string | null, status?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, usedPackages?: Array<string | null> | null } | null> | null, scenariosBlueprints?: Array<{ __typename?: 'IntegromatScenarioBlueprint', id?: string | null, teamId?: string | null } | null> | null, event?: { __typename?: 'TriggerEvent', name?: string | null, at?: string | null, body?: any | null } | null } | null> | null, condition?: { __typename?: 'ConditionDebug', left?: string | null, op?: string | null, right?: any | null, result?: boolean | null, error?: string | null, input?: any | null, output?: any | null } | null, cloudFunctions?: Array<{ __typename?: 'CloudFunctionDebug', cloudFunctionId?: string | null, cloudFunctionInputJQFilter?: string | null, cloudFunctionName?: string | null, cloudFunctionOutputJQFilter?: string | null, input?: any | null, output?: any | null, status?: string | null } | null> | null, subflows?: Array<{ __typename?: 'SubflowDebug', input?: any | null, output?: any | null, templateId?: string | null, workflowId?: string | null, templateVersion?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null } | null> | null } | null> | null } | null, executionTemplate?: { __typename?: 'ExecutionTemplate', name?: string | null, id?: string | null, version?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null } | null, getDraft?: { __typename?: 'ExecutionTemplate', id?: string | null, name?: string | null, description?: string | null, active?: boolean | null, state?: string | null, stateComments?: string | null, version?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null, tenant?: { __typename?: 'CXPAccountInfo', name?: string | null, integromatTeam?: { __typename?: 'IntegromatTeam', id?: number | null, organizationId?: number | null } | null, hookdeck?: { __typename?: 'HookdeckAccountInfo', sourceUrl?: string | null } | null } | null, metadata?: { __typename?: 'CXPMetadata', createdAt?: string | null, activatedAt?: string | null, createdBy?: string | null, activatedBy?: string | null } | null, trigger?: Array<{ __typename?: 'Trigger', triggerType?: string | null, eventType?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, scheduling?: { __typename?: 'IntegromatScheduling', type?: string | null } | null, createdByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, updatedByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null> | null } | null> | null, steps?: Array<{ __typename?: 'Step', stepType?: string | null, scenarios?: Array<{ __typename?: 'Scenario', scenarioId?: string | null, url?: string | null, method?: string | null, type?: string | null, scenario?: { __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null } | null> | null, trigger?: Array<{ __typename?: 'Trigger', timeExpression?: string | null, triggerType?: string | null, eventType?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, scheduling?: { __typename?: 'IntegromatScheduling', type?: string | null } | null, createdByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, updatedByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null> | null, scenariosBlueprints?: Array<{ __typename?: 'IntegromatScenarioBlueprint', id?: string | null, teamId?: string | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null, blueprint?: { __typename?: 'IntegromatBlueprint', metadata?: any | null, flow?: Array<{ __typename?: 'Flow', id?: string | null, module?: string | null, version?: string | null } | null> | null } | null } | null> | null } | null> | null, subflows?: Array<{ __typename?: 'Subflow', executionTemplateId?: string | null, name?: string | null } | null> | null, condition?: { __typename?: 'Condition', left?: string | null, op?: string | null, right?: any | null } | null } | null> | null } | null };

export type ExecutionTemplateRunsQueryVariables = Exact<{
  executionTemplateId?: InputMaybe<Scalars['String']['input']>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  filter?: InputMaybe<FilterInput>;
}>;


export type ExecutionTemplateRunsQuery = { __typename?: 'Query', executionTemplateRuns?: { __typename?: 'ExecutionTemplateRunsResponse', paging?: { __typename?: 'PageInfo', page?: number | null, pageSize?: number | null, total?: number | null } | null, executionTemplateDebugs?: Array<{ __typename?: 'ExecutionTemplateDebug', id?: string | null, name?: string | null, description?: string | null, active?: boolean | null, status?: string | null, input?: any | null, error?: string | null, start?: string | null, finishAt?: string | null, runningInstances?: number | null, completedInstances?: number | null, failedInstances?: number | null, stoppedInstances?: number | null, templateVersion?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null, tenant?: { __typename?: 'CXPAccountInfo', name?: string | null, description?: string | null, integromatTeam?: { __typename?: 'IntegromatTeam', id?: number | null } | null, hookdeck?: { __typename?: 'HookdeckAccountInfo', sourceUrl?: string | null } | null } | null, metadata?: { __typename?: 'CXPMetadata', createdAt?: string | null, activatedAt?: string | null, createdBy?: string | null, activatedBy?: string | null, createdByUser?: { __typename?: 'MetadataCreatedBy', userId?: string | null, userName?: string | null, userEmail?: string | null } | null, activatedByUser?: { __typename?: 'MetadataActivatedBy', userId?: string | null, userName?: string | null, userEmail?: string | null } | null } | null } | null> | null } | null };

export type ExecutionTemplateRunsDetailsQueryVariables = Exact<{
  executionTemplateId?: InputMaybe<Scalars['String']['input']>;
  paging?: InputMaybe<PageInfoInput>;
  sort?: InputMaybe<Scalars['JSON']['input']>;
  filter?: InputMaybe<FilterInput>;
}>;


export type ExecutionTemplateRunsDetailsQuery = { __typename?: 'Query', executionTemplateRuns?: { __typename?: 'ExecutionTemplateRunsResponse', paging?: { __typename?: 'PageInfo', page?: number | null, pageSize?: number | null, total?: number | null } | null, executionTemplateDebugs?: Array<{ __typename?: 'ExecutionTemplateDebug', id?: string | null, name?: string | null, description?: string | null, active?: boolean | null, status?: string | null, runningInstances?: number | null, error?: string | null, input?: any | null, output?: any | null, start?: string | null, finishAt?: string | null, templateVersion?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null, tenant?: { __typename?: 'CXPAccountInfo', name?: string | null, description?: string | null, integromatTeam?: { __typename?: 'IntegromatTeam', id?: number | null } | null, hookdeck?: { __typename?: 'HookdeckAccountInfo', sourceUrl?: string | null } | null } | null, metadata?: { __typename?: 'CXPMetadata', createdAt?: string | null, activatedAt?: string | null, createdBy?: string | null, activatedBy?: string | null, createdByUser?: { __typename?: 'MetadataCreatedBy', userId?: string | null, userName?: string | null, userEmail?: string | null } | null, activatedByUser?: { __typename?: 'MetadataActivatedBy', userId?: string | null, userName?: string | null, userEmail?: string | null } | null } | null, triggers?: Array<{ __typename?: 'TriggerDebug', timeExpression?: string | null, triggerType?: string | null, eventType?: string | null, status?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, usedPackages?: Array<string | null> | null } | null> | null, scenariosBlueprints?: Array<{ __typename?: 'IntegromatScenarioBlueprint', id?: string | null, teamId?: string | null } | null> | null, event?: { __typename?: 'TriggerEvent', name?: string | null, at?: string | null, body?: any | null } | null } | null> | null, steps?: Array<{ __typename?: 'StepDebug', status?: string | null, type?: string | null, stepType?: string | null, input?: any | null, output?: any | null, scenarios?: Array<{ __typename?: 'ScenarioDebug', id?: string | null, url?: string | null, externalRunId?: string | null, method?: string | null, type?: string | null, input?: any | null, output?: any | null, scenario?: { __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, usedPackages?: Array<string | null> | null } | null, scenarioBlueprint?: { __typename?: 'IntegromatScenarioBlueprint', id?: string | null, teamId?: string | null } | null, completionEvent?: { __typename?: 'CompletionEvent', name?: string | null, at?: string | null, body?: any | null } | null } | null> | null, triggers?: Array<{ __typename?: 'TriggerDebug', timeExpression?: string | null, triggerType?: string | null, eventType?: string | null, status?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, usedPackages?: Array<string | null> | null } | null> | null, scenariosBlueprints?: Array<{ __typename?: 'IntegromatScenarioBlueprint', id?: string | null, teamId?: string | null } | null> | null, event?: { __typename?: 'TriggerEvent', name?: string | null, at?: string | null, body?: any | null } | null } | null> | null, condition?: { __typename?: 'ConditionDebug', left?: string | null, op?: string | null, right?: any | null, result?: boolean | null, error?: string | null, input?: any | null, output?: any | null } | null, subflows?: Array<{ __typename?: 'SubflowDebug', input?: any | null, output?: any | null, templateId?: string | null, workflowId?: string | null, templateVersion?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null } | null> | null } | null> | null } | null> | null } | null };

export type ExecutionTemplateVersionQueryVariables = Exact<{
  executionTemplateId?: InputMaybe<Scalars['String']['input']>;
  executionTemplateVId?: InputMaybe<Scalars['String']['input']>;
}>;


export type ExecutionTemplateVersionQuery = { __typename?: 'Query', executionTemplateVersion?: { __typename?: 'ExecutionTemplate', id?: string | null, name?: string | null, description?: string | null, active?: boolean | null, state?: string | null, stateComments?: string | null, UseCases?: Array<{ __typename?: 'useCaseDigitalProcess', id?: string | null } | null> | null, version?: { __typename?: 'TemplateVersion', id?: string | null, number?: number | null } | null, tenant?: { __typename?: 'CXPAccountInfo', name?: string | null, integromatTeam?: { __typename?: 'IntegromatTeam', id?: number | null, organizationId?: number | null } | null, hookdeck?: { __typename?: 'HookdeckAccountInfo', sourceUrl?: string | null } | null } | null, metadata?: { __typename?: 'CXPMetadata', createdAt?: string | null, activatedAt?: string | null, createdBy?: string | null, activatedBy?: string | null } | null, trigger?: Array<{ __typename?: 'Trigger', timeExpression?: string | null, triggerType?: string | null, eventType?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, scheduling?: { __typename?: 'IntegromatScheduling', type?: string | null } | null, createdByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, updatedByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null> | null } | null> | null, steps?: Array<{ __typename?: 'Step', stepType?: string | null, scenarios?: Array<{ __typename?: 'Scenario', scenarioId?: string | null, url?: string | null, method?: string | null, type?: string | null, scenario?: { __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null } | null> | null, trigger?: Array<{ __typename?: 'Trigger', timeExpression?: string | null, triggerType?: string | null, eventType?: string | null, scenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, teamId?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null, lastEdit?: string | null, scheduling?: { __typename?: 'IntegromatScheduling', type?: string | null } | null, createdByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, updatedByUser?: { __typename?: 'IntegromatUser', id?: string | null, name?: string | null, email?: string | null } | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null> | null, scenariosBlueprints?: Array<{ __typename?: 'IntegromatScenarioBlueprint', id?: string | null, teamId?: string | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null, blueprint?: { __typename?: 'IntegromatBlueprint', metadata?: any | null, flow?: Array<{ __typename?: 'Flow', id?: string | null, module?: string | null, version?: string | null } | null> | null } | null } | null> | null } | null> | null, subflows?: Array<{ __typename?: 'Subflow', executionTemplateId?: string | null, name?: string | null } | null> | null, cloudFunctions?: Array<{ __typename?: 'CloudFunctionStep', cloudFunctionId?: string | null, cloudFunctionName?: string | null, cloudFunctionInputJQFilter?: string | null, cloudFunctionOutputJQFilter?: string | null } | null> | null, condition?: { __typename?: 'Condition', left?: string | null, op?: string | null, right?: any | null } | null } | null> | null } | null };

export type ExecutionTriggerScenariosQueryVariables = Exact<{
  teamId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ExecutionTriggerScenariosQuery = { __typename?: 'Query', cxpAccount?: { __typename?: 'CXPAccountInfo', name?: string | null, integromatTeam?: { __typename?: 'IntegromatTeam', id?: number | null, organizationId?: number | null } | null } | null, integromatInitTriggerScenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null } | null> | null, integromatMidTriggerScenarios?: Array<{ __typename?: 'IntegromatScenario', id?: string | null, name?: string | null, description?: string | null, hookId?: string | null, isPaused?: boolean | null, usedPackages?: Array<string | null> | null } | null> | null, integromatInitTriggerTemplates?: Array<{ __typename?: 'IntegromatTemplate', id?: string | null, url?: string | null } | null> | null, integromatMidTriggerTemplates?: Array<{ __typename?: 'IntegromatTemplate', id?: string | null, url?: string | null } | null> | null };

export type IntegromatScenarioBlueprintQueryVariables = Exact<{
  teamId?: InputMaybe<Scalars['Int']['input']>;
  scenarioId?: InputMaybe<Scalars['String']['input']>;
}>;


export type IntegromatScenarioBlueprintQuery = { __typename?: 'Query', integromatScenarioBlueprint?: { __typename?: 'IntegromatScenarioBlueprint', id?: string | null, teamId?: string | null, blueprint?: { __typename?: 'IntegromatBlueprint', name?: string | null, metadata?: any | null, flow?: Array<{ __typename?: 'Flow', id?: string | null, module?: string | null, version?: string | null, parameters?: any | null, routes?: Array<{ __typename?: 'IntegromatBlueprint', name?: string | null, metadata?: any | null, flow?: Array<{ __typename?: 'Flow', id?: string | null, module?: string | null, parameters?: any | null, version?: string | null, routes?: Array<{ __typename?: 'IntegromatBlueprint', metadata?: any | null, name?: string | null, flow?: Array<{ __typename?: 'Flow', id?: string | null, module?: string | null, parameters?: any | null, version?: string | null, routes?: Array<{ __typename?: 'IntegromatBlueprint', metadata?: any | null, name?: string | null, flow?: Array<{ __typename?: 'Flow', id?: string | null, module?: string | null, parameters?: any | null, version?: string | null, routes?: Array<{ __typename?: 'IntegromatBlueprint', metadata?: any | null, name?: string | null, flow?: Array<{ __typename?: 'Flow', id?: string | null, module?: string | null, parameters?: any | null, version?: string | null, routes?: Array<{ __typename?: 'IntegromatBlueprint', metadata?: any | null, name?: string | null, flow?: Array<{ __typename?: 'Flow', id?: string | null, module?: string | null, parameters?: any | null, version?: string | null } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null } | null, scheduling?: { __typename?: 'IntegromatScheduling', type?: string | null } | null, error?: { __typename?: 'ResponseError', errorCode?: number | null, message?: string | null } | null } | null };

export type ValidateExecutionTemplateQueryVariables = Exact<{
  executionTemplate?: InputMaybe<ExecutionTemplateInput>;
}>;


export type ValidateExecutionTemplateQuery = { __typename?: 'Query', validateExecutionTemplate?: { __typename?: 'ExecutionTemplate', name?: string | null, error?: string | null, version?: { __typename?: 'TemplateVersion', id?: string | null } | null } | null };

export type WebhooksEventsFilteredByHeadersQueryVariables = Exact<{
  header?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
}>;


export type WebhooksEventsFilteredByHeadersQuery = { __typename?: 'Query', webhooksEventsFilteredByHeaders?: Array<{ __typename?: 'WebhookEvent', attempts?: number | null, cli_id?: any | null, created_at?: string | null, data?: any | null, destination_id?: string | null, error_code?: string | null, event_data_id?: string | null, id?: string | null, last_attempt_at?: string | null, next_attempt_at?: string | null, request_id?: string | null, response_status?: number | null, source_id?: string | null, status?: string | null, successful_at?: string | null, team_id?: string | null, updated_at?: string | null, webhook_id?: string | null } | null> | null };

export const CreateCloudGroupDocument = gql`
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
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateCloudGroupGQL extends Apollo.Mutation<CreateCloudGroupMutation, CreateCloudGroupMutationVariables> {
    document = CreateCloudGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateEventTypeDocument = gql`
    mutation CreateEventType($eventType: EventTypeInput) {
  createEventType(eventType: $eventType) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateEventTypeGQL extends Apollo.Mutation<CreateEventTypeMutation, CreateEventTypeMutationVariables> {
    document = CreateEventTypeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateDigitalProcessDocument = gql`
    mutation CreateDigitalProcess($executionTemplate: ExecutionTemplateInput) {
  createExecutionTemplate(executionTemplate: $executionTemplate) {
    id
    version {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDigitalProcessGQL extends Apollo.Mutation<CreateDigitalProcessMutation, CreateDigitalProcessMutationVariables> {
    document = CreateDigitalProcessDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOrUpdateDraftDocument = gql`
    mutation CreateOrUpdateDraft($id: String, $executionTemplate: ExecutionTemplateInput) {
  createOrUpdateDraft(id: $id, executionTemplate: $executionTemplate) {
    id
    version {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOrUpdateDraftGQL extends Apollo.Mutation<CreateOrUpdateDraftMutation, CreateOrUpdateDraftMutationVariables> {
    document = CreateOrUpdateDraftDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReplayStepNumberFromRunIdDocument = gql`
    mutation ReplayStepNumberFromRunId($runId: String, $stepNumber: String) {
  replayStepNumberFromRunId(runId: $runId, stepNumber: $stepNumber)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReplayStepNumberFromRunIdGQL extends Apollo.Mutation<ReplayStepNumberFromRunIdMutation, ReplayStepNumberFromRunIdMutationVariables> {
    document = ReplayStepNumberFromRunIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BusinessExpressionsDocument = gql`
    query BusinessExpressions {
  businessExpressions {
    id
    name
    description
    expression
    referencingTemplates {
      id
      versionId
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BusinessExpressionsGQL extends Apollo.Query<BusinessExpressionsQuery, BusinessExpressionsQueryVariables> {
    document = BusinessExpressionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CloudFunctionsDocument = gql`
    query CloudFunctions($filter: FilterInput, $sort: JSON, $paging: PageInfoInput) {
  cloudFunctions(filter: $filter, sort: $sort, paging: $paging) {
    cloudFunctions {
      authentication {
        basic
        method
        oauth2
        tokenBased
      }
      description
      groupId
      id
      httpMethod
      name
      tenantId
      url
    }
    paging {
      page
      pageSize
      total
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CloudFunctionsGQL extends Apollo.Query<CloudFunctionsQuery, CloudFunctionsQueryVariables> {
    document = CloudFunctionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CloudGroupsDocument = gql`
    query cloudGroups($filter: FilterInput, $sort: JSON, $paging: PageInfoInput) {
  cloudGroups(filter: $filter, sort: $sort, paging: $paging) {
    cloudGroups {
      authentication {
        basic
        method
        oauth2
      }
      id
      name
      parentGroupId
      provider
    }
    paging {
      page
      pageSize
      total
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CloudGroupsGQL extends Apollo.Query<CloudGroupsQuery, CloudGroupsQueryVariables> {
    document = CloudGroupsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DigitalProcessDraftDocument = gql`
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
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DigitalProcessDraftGQL extends Apollo.Query<DigitalProcessDraftQuery, DigitalProcessDraftQueryVariables> {
    document = DigitalProcessDraftDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EventTypesDocument = gql`
    query EventTypes {
  eventTypes {
    items {
      id
      name
      key
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EventTypesGQL extends Apollo.Query<EventTypesQuery, EventTypesQueryVariables> {
    document = EventTypesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExecutionStepScenariosDocument = gql`
    query ExecutionStepScenarios($teamId: Int, $paging: IntegromatPageInfoInput, $filter: IntegromatFilterInput) {
  cxpAccount {
    integromatTeam {
      id
      organizationId
    }
  }
  integromatExecutionStepScenarios(
    teamId: $teamId
    paging: $paging
    filter: $filter
  ) {
    scenarios {
      id
      teamId
      name
      description
      hookId
      isPaused
      usedPackages
    }
    pageInfo {
      page
      pageSize
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExecutionStepScenariosGQL extends Apollo.Query<ExecutionStepScenariosQuery, ExecutionStepScenariosQueryVariables> {
    document = ExecutionStepScenariosDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExecutionStepsTemplatesDocument = gql`
    query ExecutionStepsTemplates($teamId: Int) {
  integromatExecutionStepsTemplates(teamId: $teamId) {
    id
    url
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExecutionStepsTemplatesGQL extends Apollo.Query<ExecutionStepsTemplatesQuery, ExecutionStepsTemplatesQueryVariables> {
    document = ExecutionStepsTemplatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExecutionTemplateDocument = gql`
    query ExecutionTemplate($executionTemplateId: String) {
  executionTemplate(id: $executionTemplateId) {
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
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExecutionTemplateGQL extends Apollo.Query<ExecutionTemplateQuery, ExecutionTemplateQueryVariables> {
    document = ExecutionTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExecutionTemplatesDocument = gql`
    query ExecutionTemplates {
  executionTemplates {
    active
    description
    id
    metadata {
      createdAt
      activatedAt
      createdBy
      activatedBy
      createdByUser {
        userName
      }
    }
    name
    state
    stateComments
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
    runningInstances
    completedInstances
    failedInstances
    stoppedInstances
    version {
      id
      number
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExecutionTemplatesGQL extends Apollo.Query<ExecutionTemplatesQuery, ExecutionTemplatesQueryVariables> {
    document = ExecutionTemplatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExecutionTemplateNameDocument = gql`
    query ExecutionTemplateName($executionTemplateId: String) {
  executionTemplate(id: $executionTemplateId) {
    name
    version {
      id
      number
    }
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExecutionTemplateNameGQL extends Apollo.Query<ExecutionTemplateNameQuery, ExecutionTemplateNameQueryVariables> {
    document = ExecutionTemplateNameDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExecutionTemplateRunDocument = gql`
    query ExecutionTemplateRun($runId: String, $executionTemplateId: String) {
  executionTemplateRunDetails(
    executionTemplateId: $executionTemplateId
    runId: $runId
  ) {
    id
    name
    templateVersion {
      id
      number
    }
    description
    tenant {
      name
      description
      integromatTeam {
        id
      }
      hookdeck {
        sourceUrl
      }
    }
    active
    status
    metadata {
      createdAt
      activatedAt
      createdBy
      activatedBy
      createdByUser {
        userId
        userName
        userEmail
      }
      activatedByUser {
        userId
        userName
        userEmail
      }
    }
    triggers {
      scenarios {
        id
        teamId
        name
        usedPackages
      }
      scenariosBlueprints {
        id
        teamId
      }
      triggerType
      eventType
      event {
        name
        at
        body
      }
      status
    }
    steps {
      status
      type
      stepType
      scenarios {
        id
        url
        externalRunId
        method
        type
        scenario {
          id
          teamId
          name
          usedPackages
        }
        scenarioBlueprint {
          id
          teamId
        }
        input
        output
        completionEvent {
          name
          at
          body
        }
      }
      triggers {
        scenarios {
          id
          teamId
          name
          usedPackages
        }
        scenariosBlueprints {
          id
          teamId
        }
        timeExpression
        triggerType
        eventType
        event {
          name
          at
          body
        }
        status
      }
      input
      output
      condition {
        left
        op
        right
        result
        error
        input
        output
      }
      cloudFunctions {
        cloudFunctionId
        cloudFunctionInputJQFilter
        cloudFunctionName
        cloudFunctionOutputJQFilter
        input
        output
        status
      }
      subflows {
        input
        output
        templateId
        workflowId
        templateVersion {
          id
          number
        }
      }
    }
    runningInstances
    error
    input
    output
    start
    finishAt
  }
  executionTemplate(id: $executionTemplateId) {
    name
    version {
      id
      number
    }
    id
  }
  getDraft(id: $executionTemplateId) {
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
      condition {
        left
        op
        right
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExecutionTemplateRunGQL extends Apollo.Query<ExecutionTemplateRunQuery, ExecutionTemplateRunQueryVariables> {
    document = ExecutionTemplateRunDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExecutionTemplateRunsDocument = gql`
    query ExecutionTemplateRuns($executionTemplateId: String, $paging: PageInfoInput, $sort: JSON, $filter: FilterInput) {
  executionTemplateRuns(
    executionTemplateId: $executionTemplateId
    paging: $paging
    sort: $sort
    filter: $filter
  ) {
    paging {
      page
      pageSize
      total
    }
    executionTemplateDebugs {
      id
      name
      templateVersion {
        id
        number
      }
      description
      tenant {
        name
        description
        integromatTeam {
          id
        }
        hookdeck {
          sourceUrl
        }
      }
      active
      status
      metadata {
        createdAt
        activatedAt
        createdBy
        activatedBy
        createdByUser {
          userId
          userName
          userEmail
        }
        activatedByUser {
          userId
          userName
          userEmail
        }
      }
      input
      error
      start
      finishAt
      runningInstances
      completedInstances
      failedInstances
      stoppedInstances
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExecutionTemplateRunsGQL extends Apollo.Query<ExecutionTemplateRunsQuery, ExecutionTemplateRunsQueryVariables> {
    document = ExecutionTemplateRunsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExecutionTemplateRunsDetailsDocument = gql`
    query ExecutionTemplateRunsDetails($executionTemplateId: String, $paging: PageInfoInput, $sort: JSON, $filter: FilterInput) {
  executionTemplateRuns(
    executionTemplateId: $executionTemplateId
    paging: $paging
    sort: $sort
    filter: $filter
  ) {
    paging {
      page
      pageSize
      total
    }
    executionTemplateDebugs {
      id
      name
      templateVersion {
        id
        number
      }
      description
      tenant {
        name
        description
        integromatTeam {
          id
        }
        hookdeck {
          sourceUrl
        }
      }
      active
      status
      metadata {
        createdAt
        activatedAt
        createdBy
        activatedBy
        createdByUser {
          userId
          userName
          userEmail
        }
        activatedByUser {
          userId
          userName
          userEmail
        }
      }
      triggers {
        scenarios {
          id
          teamId
          name
          usedPackages
        }
        scenariosBlueprints {
          id
          teamId
        }
        timeExpression
        triggerType
        eventType
        event {
          name
          at
          body
        }
        status
      }
      steps {
        status
        type
        stepType
        scenarios {
          id
          url
          externalRunId
          method
          type
          scenario {
            id
            teamId
            name
            usedPackages
          }
          scenarioBlueprint {
            id
            teamId
          }
          input
          output
          completionEvent {
            name
            at
            body
          }
        }
        triggers {
          scenarios {
            id
            teamId
            name
            usedPackages
          }
          scenariosBlueprints {
            id
            teamId
          }
          timeExpression
          triggerType
          eventType
          event {
            name
            at
            body
          }
          status
        }
        input
        output
        condition {
          left
          op
          right
          result
          error
          input
          output
        }
        subflows {
          input
          output
          templateId
          workflowId
          templateVersion {
            id
            number
          }
        }
      }
      runningInstances
      error
      input
      output
      start
      finishAt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExecutionTemplateRunsDetailsGQL extends Apollo.Query<ExecutionTemplateRunsDetailsQuery, ExecutionTemplateRunsDetailsQueryVariables> {
    document = ExecutionTemplateRunsDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExecutionTemplateVersionDocument = gql`
    query ExecutionTemplateVersion($executionTemplateId: String, $executionTemplateVId: String) {
  executionTemplateVersion(id: $executionTemplateId, vId: $executionTemplateVId) {
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
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExecutionTemplateVersionGQL extends Apollo.Query<ExecutionTemplateVersionQuery, ExecutionTemplateVersionQueryVariables> {
    document = ExecutionTemplateVersionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExecutionTriggerScenariosDocument = gql`
    query ExecutionTriggerScenarios($teamId: Int) {
  cxpAccount {
    name
    integromatTeam {
      id
      organizationId
    }
  }
  integromatInitTriggerScenarios(teamId: $teamId) {
    id
    name
    description
    hookId
    isPaused
    usedPackages
  }
  integromatMidTriggerScenarios(teamId: $teamId) {
    id
    name
    description
    hookId
    isPaused
    usedPackages
  }
  integromatInitTriggerTemplates(teamId: $teamId) {
    id
    url
  }
  integromatMidTriggerTemplates(teamId: $teamId) {
    id
    url
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExecutionTriggerScenariosGQL extends Apollo.Query<ExecutionTriggerScenariosQuery, ExecutionTriggerScenariosQueryVariables> {
    document = ExecutionTriggerScenariosDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const IntegromatScenarioBlueprintDocument = gql`
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
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class IntegromatScenarioBlueprintGQL extends Apollo.Query<IntegromatScenarioBlueprintQuery, IntegromatScenarioBlueprintQueryVariables> {
    document = IntegromatScenarioBlueprintDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ValidateExecutionTemplateDocument = gql`
    query ValidateExecutionTemplate($executionTemplate: ExecutionTemplateInput) {
  validateExecutionTemplate(executionTemplate: $executionTemplate) {
    name
    version {
      id
    }
    error
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ValidateExecutionTemplateGQL extends Apollo.Query<ValidateExecutionTemplateQuery, ValidateExecutionTemplateQueryVariables> {
    document = ValidateExecutionTemplateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const WebhooksEventsFilteredByHeadersDocument = gql`
    query WebhooksEventsFilteredByHeaders($header: String, $value: String) {
  webhooksEventsFilteredByHeaders(header: $header, value: $value) {
    attempts
    cli_id
    created_at
    data
    destination_id
    error_code
    event_data_id
    id
    last_attempt_at
    next_attempt_at
    request_id
    response_status
    source_id
    status
    successful_at
    team_id
    updated_at
    webhook_id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WebhooksEventsFilteredByHeadersGQL extends Apollo.Query<WebhooksEventsFilteredByHeadersQuery, WebhooksEventsFilteredByHeadersQueryVariables> {
    document = WebhooksEventsFilteredByHeadersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }