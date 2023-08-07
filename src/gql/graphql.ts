/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** An ISO-8601 encoded UTC date string */
  DateTime: { input: any; output: any; }
  /** A blob of JSON represented as a pretty formatted string */
  JSON: { input: any; output: any; }
  /** A blob of XML represented as a pretty formatted string */
  XML: { input: any; output: any; }
  /** A Team identifier using a slug, and optionally negated with a leading `!` */
  TeamSelector: { input: any; output: any; }
  /** A Pipeline identifier using a slug, and optionally negated with a leading `!` */
  PipelineSelector: { input: any; output: any; }
  /** A User identifier using a UUID, and optionally negated with a leading `!` */
  UserSelector: { input: any; output: any; }
  /** A blob of YAML */
  YAML: { input: any; output: any; }
  /**
   * Represents non-fractional signed whole numeric values.
   *
   * `JSInt` can represent values between -(2^53) + 1 and 2^53 - 1.
   */
  JSInt: { input: any; output: any; }
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Find an agent by its slug */
  agent?: Maybe<Agent>;
  /** Find an agent token by its slug */
  agentToken?: Maybe<AgentToken>;
  /** Find a API Access Token code */
  apiAccessTokenCode?: Maybe<ApiAccessTokenCode>;
  /** Find an artifact by its UUID */
  artifact?: Maybe<Artifact>;
  /** Find an audit event via its uuid */
  auditEvent?: Maybe<AuditEvent>;
  /** Find a build by its slug or UUID */
  build?: Maybe<Build>;
  /** Find a GraphQL snippet */
  graphQLSnippet?: Maybe<GraphQlSnippet>;
  /** Find a build job by its UUID */
  job?: Maybe<Job>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Find a notification service via its UUID */
  notificationService?: Maybe<NotificationService>;
  /** Find an organization by its slug */
  organization?: Maybe<Organization>;
  /** Find an organization invitation via its slug */
  organizationInvitation?: Maybe<OrganizationInvitation>;
  /** Find an organization membership via its slug */
  organizationMember?: Maybe<OrganizationMember>;
  /** Find a pipeline by its slug */
  pipeline?: Maybe<Pipeline>;
  /** Find a pipeline schedule by its slug */
  pipelineSchedule?: Maybe<PipelineSchedule>;
  /** Find an sso provider either using it's slug, or UUID */
  ssoProvider?: Maybe<SsoProvider>;
  /** Find a team by its UUID */
  team?: Maybe<Team>;
  /** Context of the current user using the GraphQL API */
  viewer?: Maybe<Viewer>;
};


/** The query root for this schema */
export type QueryAgentArgs = {
  slug: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryAgentTokenArgs = {
  slug: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryApiAccessTokenCodeArgs = {
  code: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryArtifactArgs = {
  uuid: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryAuditEventArgs = {
  uuid: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryBuildArgs = {
  slug?: InputMaybe<Scalars['ID']['input']>;
  uuid?: InputMaybe<Scalars['ID']['input']>;
};


/** The query root for this schema */
export type QueryGraphQlSnippetArgs = {
  uuid: Scalars['String']['input'];
};


/** The query root for this schema */
export type QueryJobArgs = {
  uuid: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryNotificationServiceArgs = {
  uuid: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryOrganizationArgs = {
  slug: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryOrganizationInvitationArgs = {
  slug: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryOrganizationMemberArgs = {
  slug: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryPipelineArgs = {
  slug: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QueryPipelineScheduleArgs = {
  slug: Scalars['ID']['input'];
};


/** The query root for this schema */
export type QuerySsoProviderArgs = {
  slug?: InputMaybe<Scalars['ID']['input']>;
  uuid?: InputMaybe<Scalars['ID']['input']>;
};


/** The query root for this schema */
export type QueryTeamArgs = {
  slug: Scalars['ID']['input'];
};

/** An agent */
export type Agent = Node & {
  __typename?: 'Agent';
  clusterQueue?: Maybe<ClusterQueue>;
  /** The time when the agent connected to Buildkite */
  connectedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The connection state of the agent */
  connectionState: Scalars['String']['output'];
  /** The date the agent was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time when the agent disconnected from Buildkite */
  disconnectedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The last time the agent performed a `heartbeat` operation to the Agent API */
  heartbeatAt?: Maybe<Scalars['DateTime']['output']>;
  /** The hostname of the machine running the agent */
  hostname?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The IP address that the agent has connected from */
  ipAddress?: Maybe<Scalars['String']['output']>;
  /** If this version of agent has been deprecated by Buildkite */
  isDeprecated: Scalars['Boolean']['output'];
  /**
   * Returns whether or not this agent is running a job. If isRunningJob true, but
   * the `job` field is empty, the current user doesn't have access to view the job
   */
  isRunningJob: Scalars['Boolean']['output'];
  /** The currently running job */
  job?: Maybe<Job>;
  /** Jobs that have been assigned to this agent */
  jobs?: Maybe<JobConnection>;
  /** The date the agent was lost from Buildkite if it didn't cleanly disconnect */
  lostAt?: Maybe<Scalars['DateTime']['output']>;
  /** The meta data this agent was stared with */
  metaData?: Maybe<Array<Scalars['String']['output']>>;
  /** The name of the agent */
  name: Scalars['String']['output'];
  /** The operating system the agent is running on */
  operatingSystem?: Maybe<OperatingSystem>;
  organization?: Maybe<Organization>;
  permissions: AgentPermissions;
  /** The process identifier (PID) of the agent process on the machine */
  pid?: Maybe<Scalars['String']['output']>;
  /** @deprecated DEPRECATED: please use heartbeatAt */
  pingedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The priority setting for the agent */
  priority?: Maybe<Scalars['Int']['output']>;
  /** Whether this agent is visible to everyone, including people outside this organization */
  public: Scalars['Boolean']['output'];
  /** The time this agent was forced to stop */
  stopForcedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that forced this agent to stop */
  stopForcedBy?: Maybe<User>;
  /**
   * The time the agent was first asked to stop
   * @deprecated Use either `stoppedGracefullyAt` or `stopForcedAt`
   */
  stoppedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The user that initially stopped this agent
   * @deprecated Use either `stoppedGracefullyBy` or `stopForcedBy`
   */
  stoppedBy?: Maybe<User>;
  /** The time the agent was gracefully stopped by a user */
  stoppedGracefullyAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that gracefully stopped this agent */
  stoppedGracefullyBy?: Maybe<User>;
  /** The User-Agent of the program that is making Agent API requests to Buildkite */
  userAgent?: Maybe<Scalars['String']['output']>;
  /** The public UUID for the agent */
  uuid: Scalars['String']['output'];
  /** The version of the agent */
  version?: Maybe<Scalars['String']['output']>;
  /** Whether this agent's version has known issues and should be upgraded */
  versionHasKnownIssues: Scalars['Boolean']['output'];
};


/** An agent */
export type AgentJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentQueryRules?: InputMaybe<Array<Scalars['String']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  concurrency?: InputMaybe<JobConcurrencySearch>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JobOrder>;
  passed?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Array<JobStates>>;
  step?: InputMaybe<JobStepSearch>;
  type?: InputMaybe<Array<JobTypes>>;
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

export type ClusterQueue = {
  __typename?: 'ClusterQueue';
  cluster?: Maybe<Cluster>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  /** The public UUID for this cluster queue */
  uuid: Scalars['ID']['output'];
};

export type Cluster = {
  __typename?: 'Cluster';
  /** Returns agent tokens for the Cluster */
  agentTokens?: Maybe<ClusterAgentTokenConnection>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization?: Maybe<Organization>;
  queues?: Maybe<ClusterQueueConnection>;
  /** The public UUID for this cluster */
  uuid: Scalars['ID']['output'];
};


export type ClusterAgentTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ClusterQueuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ClusterQueueOrder>;
};

export type ClusterAgentTokenConnection = Connection & {
  __typename?: 'ClusterAgentTokenConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<ClusterAgentTokenEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type Connection = {
  count: Scalars['Int']['output'];
  pageInfo?: Maybe<PageInfo>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type ClusterAgentTokenEdge = {
  __typename?: 'ClusterAgentTokenEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ClusterToken>;
};

/** A token used to connect an agent in cluster to Buildkite */
export type ClusterToken = Node & {
  __typename?: 'ClusterToken';
  cluster?: Maybe<Cluster>;
  createdBy?: Maybe<User>;
  /** A description about what this cluster agent token is used for */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The content of this cluster token */
  token: Scalars['String']['output'];
  /** The public UUID for this cluster token */
  uuid: Scalars['ID']['output'];
};

/** A user */
export type User = Node & {
  __typename?: 'User';
  avatar: Avatar;
  /** If this user account is an official bot managed by Buildkite */
  bot: Scalars['Boolean']['output'];
  /** Returns builds that this user has created. */
  builds?: Maybe<BuildConnection>;
  /** The primary email for the user */
  email: Scalars['String']['output'];
  /** Does the user have a password set */
  hasPassword: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The name of the user */
  name: Scalars['String']['output'];
  /** The public UUID of the user */
  uuid: Scalars['String']['output'];
};


/** A user */
export type UserBuildsArgs = {
  branch?: InputMaybe<Array<Scalars['String']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  metaData?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<Array<BuildStates>>;
};

/** An avatar belonging to a user */
export type Avatar = {
  __typename?: 'Avatar';
  /** The URL of the avatar */
  url: Scalars['String']['output'];
};

/** All the possible states a build can be in */
export enum BuildStates {
  /** The build is blocked */
  Blocked = 'BLOCKED',
  /** The build was canceled */
  Canceled = 'CANCELED',
  /** The build is currently being canceled */
  Canceling = 'CANCELING',
  /** The build is currently being created */
  Creating = 'CREATING',
  /** The build failed */
  Failed = 'FAILED',
  /** The build is failing */
  Failing = 'FAILING',
  /** The build wasn't run */
  NotRun = 'NOT_RUN',
  /** The build passed */
  Passed = 'PASSED',
  /** The build is currently running jobs */
  Running = 'RUNNING',
  /** The build has yet to start running jobs */
  Scheduled = 'SCHEDULED',
  /** The build was skipped */
  Skipped = 'SKIPPED'
}

export type BuildConnection = Connection & {
  __typename?: 'BuildConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<BuildEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type BuildEdge = {
  __typename?: 'BuildEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Build>;
};

/** A build from a pipeline */
export type Build = Node & {
  __typename?: 'Build';
  annotations?: Maybe<AnnotationConnection>;
  /** The current blocked state of the build */
  blockedState?: Maybe<BuildBlockedStates>;
  /** The branch for the build */
  branch: Scalars['String']['output'];
  /** The time when the build was cancelled */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The user who canceled this build. If the build was canceled, and this value is
   * null, then it was canceled automatically by Buildkite
   */
  canceledBy?: Maybe<User>;
  /** The fully-qualified commit for the build */
  commit: Scalars['String']['output'];
  /** The time when the build was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<BuildCreator>;
  /** Custom environment variables passed to this build */
  env?: Maybe<Array<Scalars['String']['output']>>;
  /** The time when the build finished */
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  jobs?: Maybe<JobConnection>;
  /** The message for the build */
  message?: Maybe<Scalars['String']['output']>;
  metaData?: Maybe<BuildMetaDataConnection>;
  /** The number of the build */
  number: Scalars['Int']['output'];
  organization: Organization;
  pipeline: Pipeline;
  pullRequest?: Maybe<PullRequest>;
  /** The build that this build was rebuilt from */
  rebuiltFrom?: Maybe<Build>;
  /** The time when the build became scheduled for running */
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  /** Where the build was created */
  source: BuildSource;
  /** The time when the build started running */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The current state of the build */
  state: BuildStates;
  /** The job that this build was triggered from */
  triggeredFrom?: Maybe<JobTypeTrigger>;
  /** The URL for the build */
  url: Scalars['String']['output'];
  /** The UUID for the build */
  uuid: Scalars['String']['output'];
};


/** A build from a pipeline */
export type BuildAnnotationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  style?: InputMaybe<Array<AnnotationStyle>>;
};


/** A build from a pipeline */
export type BuildJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentQueryRules?: InputMaybe<Array<Scalars['String']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  concurrency?: InputMaybe<JobConcurrencySearch>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JobOrder>;
  passed?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<JobPrioritySearch>;
  state?: InputMaybe<Array<JobStates>>;
  step?: InputMaybe<JobStepSearch>;
  type?: InputMaybe<Array<JobTypes>>;
};


/** A build from a pipeline */
export type BuildMetaDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The visual style of the annotation */
export enum AnnotationStyle {
  /** The default styling of an annotation */
  Default = 'DEFAULT',
  /**  The annotation has a red border with a cross next to it */
  Error = 'ERROR',
  /** The annotation has a blue border with an information icon next to it */
  Info = 'INFO',
  /** The annotation has a green border with a tick next to it */
  Success = 'SUCCESS',
  /** The annotation has an orange border with a warning icon next to it */
  Warning = 'WARNING'
}

export type AnnotationConnection = Connection & {
  __typename?: 'AnnotationConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<AnnotationEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type AnnotationEdge = {
  __typename?: 'AnnotationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Annotation>;
};

/** An annotation allows you to add arbitrary content to the top of a build page in the Buildkite UI */
export type Annotation = Node & {
  __typename?: 'Annotation';
  /** The body of the annotation */
  body?: Maybe<AnnotationBody>;
  /** The context of the annotation that helps you differentiate this one from others */
  context: Scalars['String']['output'];
  /** The date the annotation was created */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The visual style of the annotation */
  style?: Maybe<AnnotationStyle>;
  /** The last time the annotation was changed */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The public UUID for this annotation */
  uuid: Scalars['ID']['output'];
};

/** A body of an annotation */
export type AnnotationBody = {
  __typename?: 'AnnotationBody';
  /**
   * The body of the annotation rendered as HTML. The renderer result could be an
   * empty string if the textual version has unsupported HTML tags
   */
  html?: Maybe<Scalars['String']['output']>;
  /** The body of the annotation as text */
  text: Scalars['String']['output'];
};

/** All the possible blocked states a build can be in */
export enum BuildBlockedStates {
  /** The blocked build is failed */
  Failed = 'FAILED',
  /** The blocked build is passed */
  Passed = 'PASSED',
  /** The blocked build is running */
  Running = 'RUNNING'
}

/** Either a `User` or an `UnregisteredUser` type */
export type BuildCreator = UnregisteredUser | User;

/** A person who hasn’t signed up to Buildkite */
export type UnregisteredUser = {
  __typename?: 'UnregisteredUser';
  avatar: Avatar;
  /** The email for the user */
  email?: Maybe<Scalars['String']['output']>;
  /** The name of the user */
  name?: Maybe<Scalars['String']['output']>;
};

/** Searching for concurrency groups on jobs */
export type JobConcurrencySearch = {
  /** The groups you want to search */
  group?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** The different orders you can sort jobs by */
export enum JobOrder {
  /** Order by the most recently assigned jobs first */
  RecentlyAssigned = 'RECENTLY_ASSIGNED',
  /** Order by the most recently created jobs first */
  RecentlyCreated = 'RECENTLY_CREATED'
}

/** Search jobs by priority */
export type JobPrioritySearch = {
  /** The priority number to search */
  number?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** All the possible states a job can be in */
export enum JobStates {
  /** The job was accepted by the agent, and now it's waiting to start running */
  Accepted = 'ACCEPTED',
  /** The job has been assigned to an agent, and it's waiting for it to accept */
  Assigned = 'ASSIGNED',
  /** The job is waiting on a `block` step to finish */
  Blocked = 'BLOCKED',
  /** The job was in a `BLOCKED` state when the build failed */
  BlockedFailed = 'BLOCKED_FAILED',
  /** The jobs configuration means that it can't be run */
  Broken = 'BROKEN',
  /** The job was canceled */
  Canceled = 'CANCELED',
  /** The job is currently canceling */
  Canceling = 'CANCELING',
  /** The job expired before it was started on an agent */
  Expired = 'EXPIRED',
  /** The job has finished */
  Finished = 'FINISHED',
  /** The job is waiting for jobs with the same concurrency group to finish */
  Limited = 'LIMITED',
  /** The job is waiting on a concurrency group check before becoming either `LIMITED` or `SCHEDULED` */
  Limiting = 'LIMITING',
  /** The job has just been created and doesn't have a state yet */
  Pending = 'PENDING',
  /** The job is running */
  Running = 'RUNNING',
  /** The job is scheduled and waiting for an agent */
  Scheduled = 'SCHEDULED',
  /** The job was skipped */
  Skipped = 'SKIPPED',
  /** The job timed out */
  TimedOut = 'TIMED_OUT',
  /** The job is timing out for taking too long */
  TimingOut = 'TIMING_OUT',
  /** This `block` job has been manually unblocked */
  Unblocked = 'UNBLOCKED',
  /** This `block` job was in an `UNBLOCKED` state when the build failed */
  UnblockedFailed = 'UNBLOCKED_FAILED',
  /** The job is waiting on a `wait` step to finish */
  Waiting = 'WAITING',
  /** The job was in a `WAITING` state when the build failed */
  WaitingFailed = 'WAITING_FAILED'
}

/** Searching for jobs based on step information */
export type JobStepSearch = {
  /** The key assigned to the step */
  key?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** All the possible types of jobs that can exist */
export enum JobTypes {
  /** A job that blocks a pipeline from progressing until it's manually unblocked */
  Block = 'BLOCK',
  /** A job that runs a command on an agent */
  Command = 'COMMAND',
  /** A job that triggers another build on a pipeline */
  Trigger = 'TRIGGER',
  /** A job that waits for all previous jobs to finish */
  Wait = 'WAIT'
}

export type JobConnection = Connection & {
  __typename?: 'JobConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<JobEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type JobEdge = {
  __typename?: 'JobEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Job>;
};

/** Kinds of jobs that can exist on a build */
export type Job = JobTypeBlock | JobTypeCommand | JobTypeTrigger | JobTypeWait;

/** A type of job that requires a user to unblock it before proceeding in a build pipeline */
export type JobTypeBlock = Node & {
  __typename?: 'JobTypeBlock';
  /** The build that this job is a part of */
  build?: Maybe<Build>;
  id: Scalars['ID']['output'];
  /** Whether or not this job can be unblocked yet (may be waiting on another job to finish) */
  isUnblockable?: Maybe<Scalars['Boolean']['output']>;
  /** The label of this block step */
  label?: Maybe<Scalars['String']['output']>;
  /** The state of the job */
  state: JobStates;
  /** The step that defined this job. Some older jobs in the system may not have an associated step */
  step?: Maybe<StepInput>;
  /** The time when the job was created */
  unblockedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that unblocked this job */
  unblockedBy?: Maybe<User>;
  /** The UUID for this job */
  uuid: Scalars['String']['output'];
};

/** An input step collects information from a user */
export type StepInput = Step & {
  __typename?: 'StepInput';
  /** The conditional evaluated for this step */
  conditional?: Maybe<Scalars['String']['output']>;
  /** Dependencies of this job */
  dependencies?: Maybe<DependencyConnection>;
  /** The user-defined key for this step */
  key?: Maybe<Scalars['String']['output']>;
  /** The UUID for this step */
  uuid: Scalars['String']['output'];
};


/** An input step collects information from a user */
export type StepInputDependenciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Step = {
  /** The conditional evaluated for this step */
  conditional?: Maybe<Scalars['String']['output']>;
  /** Dependencies of this job */
  dependencies?: Maybe<DependencyConnection>;
  /** The user-defined key for this step */
  key?: Maybe<Scalars['String']['output']>;
  /** The UUID for this step */
  uuid: Scalars['String']['output'];
};


export type StepDependenciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DependencyConnection = Connection & {
  __typename?: 'DependencyConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<DependencyEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type DependencyEdge = {
  __typename?: 'DependencyEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Dependency>;
};

export type Dependency = {
  __typename?: 'Dependency';
  /** Is this dependency allowed to fail */
  allowFailure: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The step key or step identifier that this step depends on */
  key?: Maybe<Scalars['String']['output']>;
  /** The UUID for this dependency */
  uuid: Scalars['ID']['output'];
};

/** A type of job that runs a command on an agent */
export type JobTypeCommand = Node & {
  __typename?: 'JobTypeCommand';
  /** The agent that is running the job */
  agent?: Maybe<Agent>;
  /** The ruleset used to find an agent to run this job */
  agentQueryRules?: Maybe<Array<Scalars['String']['output']>>;
  /** Artifacts uploaded to this job */
  artifacts?: Maybe<ArtifactConnection>;
  /** A glob of files to automatically upload after the job finishes */
  automaticArtifactUploadPaths?: Maybe<Scalars['String']['output']>;
  /** The build that this job is a part of */
  build?: Maybe<Build>;
  /** The time when the job was cancelled */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The cluster of this job */
  cluster?: Maybe<Cluster>;
  /** The cluster queue of this job */
  clusterQueue?: Maybe<ClusterQueue>;
  /** The command the job will run */
  command?: Maybe<Scalars['String']['output']>;
  /** Concurrency information related to a job */
  concurrency?: Maybe<JobConcurrency>;
  /** The time when the job was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Environment variables for this job */
  env?: Maybe<Array<Scalars['String']['output']>>;
  /** Job events */
  events: JobEventConnection;
  /** The exit status returned by the command on the agent */
  exitStatus?: Maybe<Scalars['String']['output']>;
  /** The time when the job was expired */
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time when the job finished */
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** The label of the job */
  label?: Maybe<Scalars['String']['output']>;
  /** The matrix configuration values for this particular job */
  matrix?: Maybe<Scalars['JSON']['output']>;
  /** The index of this job within the parallel job group it is a part of. Null if this job is not part of a parallel job group. */
  parallelGroupIndex?: Maybe<Scalars['Int']['output']>;
  /**
   * The total number of jobs in the parallel job group this job is a part of. Null
   * if this job is not part of a parallel job group.
   */
  parallelGroupTotal?: Maybe<Scalars['Int']['output']>;
  /** If the job has finished and passed */
  passed: Scalars['Boolean']['output'];
  /** The pipeline that this job is a part of */
  pipeline?: Maybe<Pipeline>;
  /** The priority of this job */
  priority: JobPriority;
  /** Job retry rules */
  retryRules?: Maybe<JobRetryRules>;
  /** The time when the job became available to be run by an agent */
  runnableAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time when the job became scheduled for running */
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The termination signal which killed the command, if the command was killed */
  signal?: Maybe<Scalars['String']['output']>;
  /**
   * If the termination signal was sent by the agent, the reason the agent took
   * that action. If this field is null, and the `signal` field is not null, the
   * command was killed by another process or by the operating system.
   */
  signalReason?: Maybe<JobEventSignalReason>;
  /** If the job soft failed */
  softFailed: Scalars['Boolean']['output'];
  /** The time when the job started running */
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The state of the job */
  state: JobStates;
  /** The step that defined this job. Some older jobs in the system may not have an associated step */
  step?: Maybe<StepCommand>;
  /** The URL for the job */
  url: Scalars['String']['output'];
  /** The UUID for this job */
  uuid: Scalars['String']['output'];
};


/** A type of job that runs a command on an agent */
export type JobTypeCommandArtifactsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A type of job that runs a command on an agent */
export type JobTypeCommandEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ArtifactConnection = Connection & {
  __typename?: 'ArtifactConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<ArtifactEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ArtifactEdge = {
  __typename?: 'ArtifactEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Artifact>;
};

/** A file uploaded from the agent whilst running a job */
export type Artifact = Node & {
  __typename?: 'Artifact';
  /**
   * The download URL for the artifact. Unless you've used your own artifact
   * storage, the URL will be valid for only 10 minutes.
   */
  downloadURL: Scalars['String']['output'];
  /** The time when the artifact will, or did, expire */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** The job that uploaded this artifact */
  job?: Maybe<JobTypeCommand>;
  /** The mime type of the file provided by the agent */
  mimeType: Scalars['String']['output'];
  /** The path of the uploaded artifact */
  path: Scalars['String']['output'];
  /** A SHA1SUM of the file */
  sha1sum: Scalars['String']['output'];
  /** The size of the file in bytes that was uploaded */
  size: Scalars['Int']['output'];
  /** The upload state of the artifact */
  state: Scalars['String']['output'];
  /** The public UUID for this artifact */
  uuid: Scalars['ID']['output'];
};

/** Concurrency configuration for a job */
export type JobConcurrency = {
  __typename?: 'JobConcurrency';
  /** The concurrency group */
  group: Scalars['String']['output'];
  /** The maximum amount of jobs in the concurrency that are allowed to run at any given time */
  limit: Scalars['Int']['output'];
};

export type JobEventConnection = Connection & {
  __typename?: 'JobEventConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<JobEventEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type JobEventEdge = {
  __typename?: 'JobEventEdge';
  cursor: Scalars['String']['output'];
  node: JobEvent;
};

export type JobEvent = {
  /** The actor that caused this event to occur */
  actor: JobEventActor;
  id: Scalars['ID']['output'];
  /** The job that this event belongs to */
  job: JobTypeCommand;
  /** The time when the event occurred */
  timestamp: Scalars['DateTime']['output'];
  /** The type of event */
  type: JobEventType;
  /** The public UUID for this job event */
  uuid: Scalars['ID']['output'];
};

/** The actor who was responsible for the job event */
export type JobEventActor = {
  __typename?: 'JobEventActor';
  /** The node corresponding to this actor if available */
  node?: Maybe<JobEventActorNodeUnion>;
  /** The type of this actor */
  type: JobEventActorType;
  /** The public UUID of this actor if available */
  uuid?: Maybe<Scalars['ID']['output']>;
};

/** Actor types that can create events on a job */
export type JobEventActorNodeUnion = Agent | Dispatch | User;

/** A job dispatch for a particular Organization */
export type Dispatch = {
  __typename?: 'Dispatch';
  id: Scalars['ID']['output'];
  /** The public UUID for this organization dispatch */
  uuid: Scalars['String']['output'];
};

/** All the actors that can have created a job event */
export enum JobEventActorType {
  /** The actor was an agent */
  Agent = 'AGENT',
  /** The actor was the dispatcher */
  Dispatch = 'DISPATCH',
  /** The actor was the system */
  System = 'SYSTEM',
  /** The actor was a user */
  User = 'USER'
}

/** All the possible types of events that happen to a Job */
export enum JobEventType {
  /** The Job was accepted by an agent */
  Accepted = 'ACCEPTED',
  /** The agent took too long to start the job */
  AcceptedExpired = 'ACCEPTED_EXPIRED',
  /** The agent disconnected while processing this job */
  AgentDisconnected = 'AGENT_DISCONNECTED',
  /** The agent was lost while processing this job */
  AgentLost = 'AGENT_LOST',
  /** The agent was stopped while processing this job */
  AgentStopped = 'AGENT_STOPPED',
  /** The Job was assigned to an agent */
  Assigned = 'ASSIGNED',
  /** The agent took too long to accept the job */
  AssignedExpired = 'ASSIGNED_EXPIRED',
  /** The Job uploaded steps to the current build */
  BuildStepUploadCreated = 'BUILD_STEP_UPLOAD_CREATED',
  /** The Job was marked for cancelation by a user */
  Cancelation = 'CANCELATION',
  /** The Job was canceled */
  Canceled = 'CANCELED',
  /** The Job was changed */
  Changed = 'CHANGED',
  /** The Job expired before it was started on an agent */
  Expired = 'EXPIRED',
  /** The Job was finished by an agent */
  Finished = 'FINISHED',
  /** The Job is limited by a concurrency group */
  Limited = 'LIMITED',
  /** The Job sent a notification */
  Notification = 'NOTIFICATION',
  /** The Job was retried either automatically or by a user */
  Retried = 'RETRIED',
  /** The Job was scheduled */
  Scheduled = 'SCHEDULED',
  /** The Job was started by an agent */
  Started = 'STARTED',
  /** The Job was timed out */
  TimedOut = 'TIMED_OUT',
  /** The Job was unblocked by a user */
  Unblocked = 'UNBLOCKED'
}

/** A pipeline */
export type Pipeline = Node & {
  __typename?: 'Pipeline';
  /** Whether existing builds can be rebuilt as new builds. */
  allowRebuilds?: Maybe<Scalars['Boolean']['output']>;
  /** Whether this pipeline has been archived */
  archived: Scalars['Boolean']['output'];
  /** The time when the pipeline was archived */
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that archived this pipeline */
  archivedBy?: Maybe<User>;
  /** A branch filter pattern to limit which pushed branches trigger builds on this pipeline. */
  branchConfiguration?: Maybe<Scalars['String']['output']>;
  /** Returns the builds for this pipeline */
  builds?: Maybe<BuildConnection>;
  /**
   * When a new build is created on a branch, any previous builds that are running
   * on the same branch will be automatically cancelled
   */
  cancelIntermediateBuilds: Scalars['Boolean']['output'];
  /**
   * Limit which branches build cancelling applies to, for example `!main` will
   * ensure that the main branch won't have it's builds automatically cancelled.
   */
  cancelIntermediateBuildsBranchFilter?: Maybe<Scalars['String']['output']>;
  cluster?: Maybe<Cluster>;
  /** The shortest length to which any git commit ID may be truncated while guaranteeing referring to a unique commit */
  commitShortLength: Scalars['Int']['output'];
  /** The time when the pipeline was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user who created the pipeline */
  createdBy?: Maybe<User>;
  /** The default branch for this pipeline */
  defaultBranch?: Maybe<Scalars['String']['output']>;
  /** The short description of the pipeline */
  description?: Maybe<Scalars['String']['output']>;
  /** Returns true if the viewer has favorited this pipeline */
  favorite: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  jobs?: Maybe<JobConnection>;
  metrics?: Maybe<PipelineMetricConnection>;
  /** The name of the pipeline */
  name: Scalars['String']['output'];
  /** The next build number in the sequence */
  nextBuildNumber: Scalars['Int']['output'];
  organization: Organization;
  permissions: PipelinePermissions;
  /**
   * Whether this pipeline is visible to everyone, including people outside this organization
   * @deprecated Use `visibility`
   */
  public: Scalars['Boolean']['output'];
  /** The repository for this pipeline */
  repository?: Maybe<Repository>;
  /** Schedules for this pipeline */
  schedules?: Maybe<PipelineScheduleConnection>;
  /**
   * When a new build is created on a branch, any previous builds that haven't yet
   * started on the same branch will be automatically marked as skipped.
   */
  skipIntermediateBuilds: Scalars['Boolean']['output'];
  /**
   * Limit which branches build skipping applies to, for example `!main` will
   * ensure that the main branch won't have it's builds automatically skipped.
   */
  skipIntermediateBuildsBranchFilter?: Maybe<Scalars['String']['output']>;
  /** The slug of the pipeline */
  slug: Scalars['String']['output'];
  steps?: Maybe<PipelineSteps>;
  /** Tags that have been given to this pipeline */
  tags: Array<PipelineTag>;
  /** Teams associated with this pipeline */
  teams?: Maybe<TeamPipelineConnection>;
  /** The URL for the pipeline */
  url: Scalars['String']['output'];
  /** The UUID of the pipeline */
  uuid: Scalars['String']['output'];
  /** Whether this pipeline is visible to everyone, including people outside this organization */
  visibility: PipelineVisibility;
  /** The URL to use in your repository settings for commit webhooks */
  webhookURL: Scalars['String']['output'];
};


/** A pipeline */
export type PipelineBuildsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  branch?: InputMaybe<Array<Scalars['String']['input']>>;
  commit?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAtFrom?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtTo?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  metaData?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<Array<BuildStates>>;
};


/** A pipeline */
export type PipelineJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentQueryRules?: InputMaybe<Array<Scalars['String']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  concurrency?: InputMaybe<JobConcurrencySearch>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JobOrder>;
  passed?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<JobPrioritySearch>;
  state?: InputMaybe<Array<JobStates>>;
  step?: InputMaybe<JobStepSearch>;
  type?: InputMaybe<Array<JobTypes>>;
};


/** A pipeline */
export type PipelineMetricsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A pipeline */
export type PipelineSchedulesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** A pipeline */
export type PipelineTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TeamPipelineOrder>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type PipelineMetricConnection = Connection & {
  __typename?: 'PipelineMetricConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<PipelineMetricEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PipelineMetricEdge = {
  __typename?: 'PipelineMetricEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PipelineMetric>;
};

/** A metric for a pipeline */
export type PipelineMetric = Node & {
  __typename?: 'PipelineMetric';
  id: Scalars['ID']['output'];
  /** The label of this metric */
  label: Scalars['ID']['output'];
  /** The URL for this metric */
  url?: Maybe<Scalars['String']['output']>;
  /** The value for this metric */
  value?: Maybe<Scalars['String']['output']>;
};

/** An organization */
export type Organization = Node & {
  __typename?: 'Organization';
  agents?: Maybe<AgentConnection>;
  /** Returns agent access tokens for an Organization. By default returns all tokens, whether revoked or non-revoked. */
  agentTokens?: Maybe<AgentTokenConnection>;
  auditEvents?: Maybe<OrganizationAuditEventConnection>;
  /** Return cluster in the Organization by UUID */
  cluster?: Maybe<Cluster>;
  /** Returns clusters for an Organization */
  clusters?: Maybe<ClusterConnection>;
  /** The URL to an icon representing this organization */
  iconUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invitations?: Maybe<OrganizationInvitationConnection>;
  /** Whether teams is enabled for this organization */
  isTeamsEnabled: Scalars['Boolean']['output'];
  jobs?: Maybe<JobConnection>;
  /** Returns users within the organization */
  members?: Maybe<OrganizationMemberConnection>;
  /** The name of the organization */
  name: Scalars['String']['output'];
  permissions: OrganizationPermissions;
  /** Return all the pipelines the current user has access to for this organization */
  pipelines?: Maybe<PipelineConnection>;
  /** Whether this organization is visible to everyone, including people outside it */
  public: Scalars['Boolean']['output'];
  /** The slug used to represent the organization in URLs */
  slug: Scalars['String']['output'];
  /** The single sign-on configuration of this organization */
  sso?: Maybe<OrganizationSso>;
  /** Single sign on providers created for an organization */
  ssoProviders?: Maybe<SsoProviderConnection>;
  /** Return all the suite the current user has access to for this organization */
  suites?: Maybe<SuiteConnection>;
  /** Returns teams within the organization that the viewer can see */
  teams?: Maybe<TeamConnection>;
  /** The public UUID for this organization */
  uuid: Scalars['String']['output'];
};


/** An organization */
export type OrganizationAgentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cluster?: InputMaybe<Scalars['ID']['input']>;
  clusterQueue?: InputMaybe<Array<Scalars['ID']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isRunningJob?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  metaData?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** An organization */
export type OrganizationAgentTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
};


/** An organization */
export type OrganizationAuditEventsArgs = {
  actor?: InputMaybe<Array<Scalars['ID']['input']>>;
  actorType?: InputMaybe<Array<AuditActorType>>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  occurredAtFrom?: InputMaybe<Scalars['DateTime']['input']>;
  occurredAtTo?: InputMaybe<Scalars['DateTime']['input']>;
  order?: InputMaybe<OrganizationAuditEventOrders>;
  subject?: InputMaybe<Array<Scalars['ID']['input']>>;
  subjectType?: InputMaybe<Array<AuditSubjectType>>;
  subjectUUID?: InputMaybe<Array<Scalars['ID']['input']>>;
  type?: InputMaybe<Array<AuditEventType>>;
};


/** An organization */
export type OrganizationClusterArgs = {
  id: Scalars['ID']['input'];
};


/** An organization */
export type OrganizationClustersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ClusterOrder>;
};


/** An organization */
export type OrganizationInvitationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrganizationInvitationOrders>;
  state?: InputMaybe<Array<OrganizationInvitationStates>>;
};


/** An organization */
export type OrganizationJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentQueryRules?: InputMaybe<Array<Scalars['String']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  concurrency?: InputMaybe<JobConcurrencySearch>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JobOrder>;
  passed?: InputMaybe<Scalars['Boolean']['input']>;
  priority?: InputMaybe<JobPrioritySearch>;
  state?: InputMaybe<Array<JobStates>>;
  step?: InputMaybe<JobStepSearch>;
  type?: InputMaybe<Array<JobTypes>>;
};


/** An organization */
export type OrganizationMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrganizationMemberOrder>;
  role?: InputMaybe<Array<OrganizationMemberRole>>;
  search?: InputMaybe<Scalars['String']['input']>;
  security?: InputMaybe<OrganizationMemberSecurityInput>;
  sso?: InputMaybe<OrganizationMemberSsoInput>;
  team?: InputMaybe<Scalars['TeamSelector']['input']>;
};


/** An organization */
export type OrganizationPipelinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtTo?: InputMaybe<Scalars['DateTime']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PipelineOrders>;
  repository?: InputMaybe<PipelineRepositoryInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  team?: InputMaybe<Scalars['TeamSelector']['input']>;
};


/** An organization */
export type OrganizationSsoProvidersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An organization */
export type OrganizationSuitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtTo?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SuiteOrders>;
  search?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<Scalars['TeamSelector']['input']>;
};


/** An organization */
export type OrganizationTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TeamOrder>;
  pipeline?: InputMaybe<Scalars['PipelineSelector']['input']>;
  privacy?: InputMaybe<Array<TeamPrivacy>>;
  search?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['UserSelector']['input']>;
};

export type AgentConnection = Connection & {
  __typename?: 'AgentConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<AgentEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type AgentEdge = {
  __typename?: 'AgentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Agent>;
};

export type AgentTokenConnection = Connection & {
  __typename?: 'AgentTokenConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<AgentTokenEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type AgentTokenEdge = {
  __typename?: 'AgentTokenEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AgentToken>;
};

/** A token used to connect an agent to Buildkite */
export type AgentToken = Node & {
  __typename?: 'AgentToken';
  /** The time this agent token was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that created this agent token */
  createdBy?: Maybe<User>;
  /** A description about what this agent token is used for */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  organization?: Maybe<Organization>;
  permissions: AgentTokenPermissions;
  /** Whether agents registered with this token will be visible to everyone, including people outside this organization */
  public: Scalars['Boolean']['output'];
  /** The time this agent token was revoked */
  revokedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that revoked this agent token */
  revokedBy?: Maybe<User>;
  /** The reason as defined by the user why this token was revoked */
  revokedReason?: Maybe<Scalars['String']['output']>;
  /** The name of the agent */
  token: Scalars['String']['output'];
  /** The public UUID for the agent */
  uuid: Scalars['ID']['output'];
};

/** Permissions information about what actions the current user can do against the agent token */
export type AgentTokenPermissions = {
  __typename?: 'AgentTokenPermissions';
  /** Whether the user can revoke this agent token */
  agentTokenRevoke?: Maybe<Permission>;
};

/** The result of checking a permissions */
export type Permission = {
  __typename?: 'Permission';
  allowed: Scalars['Boolean']['output'];
  code?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

/** All the possible types of actors in an Audit Event */
export enum AuditActorType {
  User = 'USER'
}

/** The different orders you can sort audit events by */
export enum OrganizationAuditEventOrders {
  /** Order by the most recently occurring events first */
  RecentlyOccurred = 'RECENTLY_OCCURRED'
}

/** All the possible types of subjects in an Audit Event */
export enum AuditSubjectType {
  AgentToken = 'AGENT_TOKEN',
  ApiAccessToken = 'API_ACCESS_TOKEN',
  Authorization = 'AUTHORIZATION',
  Cluster = 'CLUSTER',
  ClusterPermission = 'CLUSTER_PERMISSION',
  ClusterQueue = 'CLUSTER_QUEUE',
  ClusterToken = 'CLUSTER_TOKEN',
  NotificationService = 'NOTIFICATION_SERVICE',
  Organization = 'ORGANIZATION',
  OrganizationInvitation = 'ORGANIZATION_INVITATION',
  OrganizationMember = 'ORGANIZATION_MEMBER',
  Pipeline = 'PIPELINE',
  PipelineSchedule = 'PIPELINE_SCHEDULE',
  ScmPipelineSettings = 'SCM_PIPELINE_SETTINGS',
  ScmRepositoryHost = 'SCM_REPOSITORY_HOST',
  ScmService = 'SCM_SERVICE',
  SsoProvider = 'SSO_PROVIDER',
  Subscription = 'SUBSCRIPTION',
  Suite = 'SUITE',
  Team = 'TEAM',
  TeamMember = 'TEAM_MEMBER',
  TeamPipeline = 'TEAM_PIPELINE',
  TeamSuite = 'TEAM_SUITE',
  User = 'USER',
  UserEmail = 'USER_EMAIL',
  UserTotp = 'USER_TOTP'
}

/** All the possible types of an Audit Event */
export enum AuditEventType {
  AgentTokenCreated = 'AGENT_TOKEN_CREATED',
  AgentTokenRevoked = 'AGENT_TOKEN_REVOKED',
  AgentTokenUpdated = 'AGENT_TOKEN_UPDATED',
  ApiAccessTokenCreated = 'API_ACCESS_TOKEN_CREATED',
  ApiAccessTokenDeleted = 'API_ACCESS_TOKEN_DELETED',
  ApiAccessTokenOrganizationAccessRevoked = 'API_ACCESS_TOKEN_ORGANIZATION_ACCESS_REVOKED',
  ApiAccessTokenUpdated = 'API_ACCESS_TOKEN_UPDATED',
  AuthorizationCreated = 'AUTHORIZATION_CREATED',
  AuthorizationDeleted = 'AUTHORIZATION_DELETED',
  ClusterCreated = 'CLUSTER_CREATED',
  ClusterDeleted = 'CLUSTER_DELETED',
  ClusterPermissionCreated = 'CLUSTER_PERMISSION_CREATED',
  ClusterPermissionDeleted = 'CLUSTER_PERMISSION_DELETED',
  ClusterPermissionUpdated = 'CLUSTER_PERMISSION_UPDATED',
  ClusterQueueCreated = 'CLUSTER_QUEUE_CREATED',
  ClusterQueueDeleted = 'CLUSTER_QUEUE_DELETED',
  ClusterQueueUpdated = 'CLUSTER_QUEUE_UPDATED',
  ClusterTokenCreated = 'CLUSTER_TOKEN_CREATED',
  ClusterTokenDeleted = 'CLUSTER_TOKEN_DELETED',
  ClusterTokenUpdated = 'CLUSTER_TOKEN_UPDATED',
  ClusterUpdated = 'CLUSTER_UPDATED',
  NotificationServiceBroken = 'NOTIFICATION_SERVICE_BROKEN',
  NotificationServiceCreated = 'NOTIFICATION_SERVICE_CREATED',
  NotificationServiceDeleted = 'NOTIFICATION_SERVICE_DELETED',
  NotificationServiceDisabled = 'NOTIFICATION_SERVICE_DISABLED',
  NotificationServiceEnabled = 'NOTIFICATION_SERVICE_ENABLED',
  NotificationServiceUpdated = 'NOTIFICATION_SERVICE_UPDATED',
  OrganizationCreated = 'ORGANIZATION_CREATED',
  OrganizationDeleted = 'ORGANIZATION_DELETED',
  OrganizationInvitationAccepted = 'ORGANIZATION_INVITATION_ACCEPTED',
  OrganizationInvitationCreated = 'ORGANIZATION_INVITATION_CREATED',
  OrganizationInvitationResent = 'ORGANIZATION_INVITATION_RESENT',
  OrganizationInvitationRevoked = 'ORGANIZATION_INVITATION_REVOKED',
  OrganizationMemberCreated = 'ORGANIZATION_MEMBER_CREATED',
  OrganizationMemberDeleted = 'ORGANIZATION_MEMBER_DELETED',
  OrganizationMemberUpdated = 'ORGANIZATION_MEMBER_UPDATED',
  OrganizationTeamsDisabled = 'ORGANIZATION_TEAMS_DISABLED',
  OrganizationTeamsEnabled = 'ORGANIZATION_TEAMS_ENABLED',
  OrganizationUpdated = 'ORGANIZATION_UPDATED',
  PipelineCreated = 'PIPELINE_CREATED',
  PipelineDeleted = 'PIPELINE_DELETED',
  PipelineScheduleCreated = 'PIPELINE_SCHEDULE_CREATED',
  PipelineScheduleDeleted = 'PIPELINE_SCHEDULE_DELETED',
  PipelineScheduleUpdated = 'PIPELINE_SCHEDULE_UPDATED',
  PipelineUpdated = 'PIPELINE_UPDATED',
  PipelineVisibilityChanged = 'PIPELINE_VISIBILITY_CHANGED',
  PipelineWebhookUrlRotated = 'PIPELINE_WEBHOOK_URL_ROTATED',
  ScmPipelineSettingsCreated = 'SCM_PIPELINE_SETTINGS_CREATED',
  ScmPipelineSettingsDeleted = 'SCM_PIPELINE_SETTINGS_DELETED',
  ScmPipelineSettingsUpdated = 'SCM_PIPELINE_SETTINGS_UPDATED',
  ScmRepositoryHostCreated = 'SCM_REPOSITORY_HOST_CREATED',
  ScmRepositoryHostDestroyed = 'SCM_REPOSITORY_HOST_DESTROYED',
  ScmRepositoryHostUpdated = 'SCM_REPOSITORY_HOST_UPDATED',
  ScmServiceCreated = 'SCM_SERVICE_CREATED',
  ScmServiceDeleted = 'SCM_SERVICE_DELETED',
  ScmServiceUpdated = 'SCM_SERVICE_UPDATED',
  SsoProviderCreated = 'SSO_PROVIDER_CREATED',
  SsoProviderDeleted = 'SSO_PROVIDER_DELETED',
  SsoProviderDisabled = 'SSO_PROVIDER_DISABLED',
  SsoProviderEnabled = 'SSO_PROVIDER_ENABLED',
  SsoProviderUpdated = 'SSO_PROVIDER_UPDATED',
  SubscriptionPlanChangeScheduled = 'SUBSCRIPTION_PLAN_CHANGE_SCHEDULED',
  SubscriptionPlanChanged = 'SUBSCRIPTION_PLAN_CHANGED',
  SuiteApiTokenRegenerated = 'SUITE_API_TOKEN_REGENERATED',
  SuiteCreated = 'SUITE_CREATED',
  SuiteDeleted = 'SUITE_DELETED',
  SuiteUpdated = 'SUITE_UPDATED',
  SuiteVisibilityChanged = 'SUITE_VISIBILITY_CHANGED',
  TeamCreated = 'TEAM_CREATED',
  TeamDeleted = 'TEAM_DELETED',
  TeamMemberCreated = 'TEAM_MEMBER_CREATED',
  TeamMemberDeleted = 'TEAM_MEMBER_DELETED',
  TeamMemberUpdated = 'TEAM_MEMBER_UPDATED',
  TeamPipelineCreated = 'TEAM_PIPELINE_CREATED',
  TeamPipelineDeleted = 'TEAM_PIPELINE_DELETED',
  TeamPipelineUpdated = 'TEAM_PIPELINE_UPDATED',
  TeamSuiteCreated = 'TEAM_SUITE_CREATED',
  TeamSuiteDeleted = 'TEAM_SUITE_DELETED',
  TeamSuiteUpdated = 'TEAM_SUITE_UPDATED',
  TeamUpdated = 'TEAM_UPDATED',
  UserApiAccessTokenOrganizationAccessAdded = 'USER_API_ACCESS_TOKEN_ORGANIZATION_ACCESS_ADDED',
  UserApiAccessTokenOrganizationAccessRemoved = 'USER_API_ACCESS_TOKEN_ORGANIZATION_ACCESS_REMOVED',
  UserEmailCreated = 'USER_EMAIL_CREATED',
  UserEmailDeleted = 'USER_EMAIL_DELETED',
  UserEmailMarkedPrimary = 'USER_EMAIL_MARKED_PRIMARY',
  UserEmailVerified = 'USER_EMAIL_VERIFIED',
  UserPasswordReset = 'USER_PASSWORD_RESET',
  UserPasswordResetRequested = 'USER_PASSWORD_RESET_REQUESTED',
  UserTotpActivated = 'USER_TOTP_ACTIVATED',
  UserTotpCreated = 'USER_TOTP_CREATED',
  UserTotpDeleted = 'USER_TOTP_DELETED',
  UserUpdated = 'USER_UPDATED'
}

export type OrganizationAuditEventConnection = Connection & {
  __typename?: 'OrganizationAuditEventConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<OrganizationAuditEventEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type OrganizationAuditEventEdge = {
  __typename?: 'OrganizationAuditEventEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AuditEvent>;
};

/** Audit record of an event which occurred in the system */
export type AuditEvent = Node & {
  __typename?: 'AuditEvent';
  /** The actor who caused this event */
  actor?: Maybe<AuditActor>;
  /** The context in which this event occurred */
  context?: Maybe<AuditContext>;
  /** The changed data in the event */
  data?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  /** The time at which this event occurred */
  occurredAt: Scalars['DateTime']['output'];
  /** The subject of this event */
  subject?: Maybe<AuditSubject>;
  /** The type of event */
  type: AuditEventType;
  /** The public UUID for the event */
  uuid: Scalars['ID']['output'];
};

/** The actor who caused an AuditEvent */
export type AuditActor = {
  __typename?: 'AuditActor';
  /** The GraphQL ID for this actor */
  id: Scalars['ID']['output'];
  /** The name or short description of this actor */
  name?: Maybe<Scalars['String']['output']>;
  /** The node corresponding to this actor, if available */
  node?: Maybe<AuditActorNode>;
  /** The type of this actor */
  type?: Maybe<AuditActorType>;
  /** The public UUID of this actor */
  uuid: Scalars['ID']['output'];
};

/** Kinds of actors which can perform audit events */
export type AuditActorNode = User;

/** Kinds of contexts in which an audit event can be performed */
export type AuditContext = AuditApiContext | AuditWebContext;

/** Context for an audit event created during an REST/GraphQL API request */
export type AuditApiContext = {
  __typename?: 'AuditAPIContext';
  /** The remote IP which made the request */
  requestIpAddress?: Maybe<Scalars['String']['output']>;
  /** The client supplied user agent which made the request */
  requestUserAgent?: Maybe<Scalars['String']['output']>;
};

/** Context for an audit event created during a web request */
export type AuditWebContext = {
  __typename?: 'AuditWebContext';
  /** The remote IP which made the request */
  requestIpAddress?: Maybe<Scalars['String']['output']>;
  /** The client supplied user agent which made the request */
  requestUserAgent?: Maybe<Scalars['String']['output']>;
  /** When the session started, if available */
  sessionCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** When the session was escalated, if available and escalated */
  sessionEscalatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The session's authenticated user, if available */
  sessionUser?: Maybe<User>;
  /** The session's authenticated user's uuid */
  sessionUserUuid?: Maybe<Scalars['ID']['output']>;
};

/** The subject of an AuditEvent */
export type AuditSubject = {
  __typename?: 'AuditSubject';
  /** The GraphQL ID for the subject */
  id: Scalars['ID']['output'];
  /** The name or short description of this subject */
  name?: Maybe<Scalars['String']['output']>;
  /** The node corresponding to the subject, if available */
  node?: Maybe<AuditSubjectNode>;
  /** The type of this subject */
  type?: Maybe<AuditSubjectType>;
  /** The public UUID of this subject */
  uuid: Scalars['ID']['output'];
};

/** Kinds of subjects which can have audit events performed on them */
export type AuditSubjectNode = AgentToken | ApiAccessToken | AuthorizationBitbucket | AuthorizationGitHub | AuthorizationGitHubEnterprise | Cluster | ClusterPermission | ClusterQueue | ClusterToken | Email | NotificationServiceSlack | NotificationServiceWebhook | Organization | OrganizationInvitation | OrganizationMember | Pipeline | PipelineSchedule | ScmPipelineSettings | ScmRepositoryHost | ScmService | SsoProviderGitHubApp | SsoProviderGoogleGSuite | SsoProviderSaml | Subscription | Suite | Team | TeamMember | TeamPipeline | TeamSuite | Totp | User;

/** API access tokens for authentication with the Buildkite API */
export type ApiAccessToken = Node & {
  __typename?: 'APIAccessToken';
  id: Scalars['ID']['output'];
  /** The public UUID for the API Access Token */
  uuid: Scalars['ID']['output'];
};

/** A Bitbucket account authorized with a Buildkite account */
export type AuthorizationBitbucket = Authorization & Node & {
  __typename?: 'AuthorizationBitbucket';
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

export type Authorization = {
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

/** A GitHub account authorized with a Buildkite account */
export type AuthorizationGitHub = Authorization & Node & {
  __typename?: 'AuthorizationGitHub';
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

/** A GitHub Enterprise account authorized with a Buildkite account */
export type AuthorizationGitHubEnterprise = Authorization & Node & {
  __typename?: 'AuthorizationGitHubEnterprise';
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

export type ClusterPermission = {
  __typename?: 'ClusterPermission';
  actor?: Maybe<ClusterPermissionActor>;
  /** Whether the actor can add pipelines to this cluster */
  can_add_pipelines: Scalars['Boolean']['output'];
  /** Whether the actor can manage the associated cluster */
  can_manage: Scalars['Boolean']['output'];
  /** Whether the actor can see this cluster's tokens */
  can_see_tokens: Scalars['Boolean']['output'];
  cluster?: Maybe<Cluster>;
  id: Scalars['ID']['output'];
  /** The public UUID for this cluster permission */
  uuid: Scalars['ID']['output'];
};

/** Actor to whom a cluster permission is applied */
export type ClusterPermissionActor = OrganizationMember | Team;

/** A member of an organization */
export type OrganizationMember = Node & {
  __typename?: 'OrganizationMember';
  /** Whether or not organizations are required to pay for this user */
  complimentary: Scalars['Boolean']['output'];
  /** The time when this user was added to the organization */
  createdAt: Scalars['DateTime']['output'];
  /** The user that added invited this user */
  createdBy?: Maybe<User>;
  id: Scalars['ID']['output'];
  organization: Organization;
  permissions: OrganizationMemberPermissions;
  /** Pipelines the user has access to within the organization */
  pipelines: OrganizationMemberPipelineConnection;
  /** The users role within the organization */
  role: OrganizationMemberRole;
  security: OrganizationMemberSecurity;
  sso: OrganizationMemberSso;
  /** Teams that this user is a part of within the organization */
  teams: TeamMemberConnection;
  user: User;
  /** The public UUID for this organization member */
  uuid: Scalars['String']['output'];
};


/** A member of an organization */
export type OrganizationMemberPipelinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PipelineOrders>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** A member of an organization */
export type OrganizationMemberTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TeamMemberOrder>;
};

/** Permissions information about what actions the current user can do against the organization membership record */
export type OrganizationMemberPermissions = {
  __typename?: 'OrganizationMemberPermissions';
  /** Whether the user can delete the user from the organization */
  organizationMemberDelete?: Maybe<Permission>;
  /** Whether the user can update the organization's members role information */
  organizationMemberUpdate?: Maybe<Permission>;
};

/** The different orders you can sort pipelines by */
export enum PipelineOrders {
  /** Order by name alphabetically */
  Name = 'NAME',
  /** Order by favorites first alphabetically, then the rest of the pipelines alphabetically */
  NameWithFavoritesFirst = 'NAME_WITH_FAVORITES_FIRST',
  /** Order by the most recently created pipelines first */
  RecentlyCreated = 'RECENTLY_CREATED',
  /** Order by relevance when searching for pipelines */
  Relevance = 'RELEVANCE'
}

export type OrganizationMemberPipelineConnection = Connection & {
  __typename?: 'OrganizationMemberPipelineConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<OrganizationMemberPipelineEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type OrganizationMemberPipelineEdge = {
  __typename?: 'OrganizationMemberPipelineEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<OrganizationMemberPipeline>;
};

/** Represents the connection between a user an a pipeline within an organization */
export type OrganizationMemberPipeline = {
  __typename?: 'OrganizationMemberPipeline';
  /** The pipeline the user has access to within the organization */
  pipeline: Pipeline;
};

/** The roles a user can be within an organization */
export enum OrganizationMemberRole {
  /** Has full access to the entire organization */
  Admin = 'ADMIN',
  /** The user is a regular member of the organization */
  Member = 'MEMBER'
}

/** Information about what security settings the user has enabled in Buildkite */
export type OrganizationMemberSecurity = {
  __typename?: 'OrganizationMemberSecurity';
  /** If the user has secured their Buildkite user account with a password */
  passwordProtected: Scalars['Boolean']['output'];
  /** If the user has enabled Two Factor Authentication */
  twoFactorEnabled: Scalars['Boolean']['output'];
};

/** Information about the SSO setup for this organization member */
export type OrganizationMemberSso = {
  __typename?: 'OrganizationMemberSSO';
  /** SSO authorizations provided by your organization that have been created for this user */
  authorizations?: Maybe<SsoAuthorizationConnection>;
  /** The SSO mode of the organization member */
  mode?: Maybe<OrganizationMemberSsoModeEnum>;
};


/** Information about the SSO setup for this organization member */
export type OrganizationMemberSsoAuthorizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Array<SsoAuthorizationState>>;
};

/** All the possible states an SSO Authorization */
export enum SsoAuthorizationState {
  /** The authorization has been verified and is in use */
  Verified = 'VERIFIED',
  /** The authorization was verified but has since expired */
  VerifiedExpired = 'VERIFIED_EXPIRED',
  /** The authorization was verified but has since been manually revoked */
  VerifiedRevoked = 'VERIFIED_REVOKED',
  /** The authorization was verified but has since been destroyed as the user logged out of that session */
  VerifiedUserSessionDestroyed = 'VERIFIED_USER_SESSION_DESTROYED'
}

export type SsoAuthorizationConnection = Connection & {
  __typename?: 'SSOAuthorizationConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<SsoAuthorizationEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SsoAuthorizationEdge = {
  __typename?: 'SSOAuthorizationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<SsoAuthorization>;
};

export type SsoAuthorization = {
  __typename?: 'SSOAuthorization';
  /** The time when this SSO Authorization was created */
  createdAt: Scalars['DateTime']['output'];
  /** The time when this SSO Authorization was expired */
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** Details around the identity provided by the SSO provider */
  identity?: Maybe<SsoAuthorizationIdentity>;
  /** The time when this SSO Authorization was manually revoked */
  revokedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The SSO provider associated with this authorization */
  ssoProvider: SsoProvider;
  /** The current state of the SSO Authorization */
  state: SsoAuthorizationState;
  /** The user associated with this authorization */
  user?: Maybe<User>;
  /** The time when this SSO Authorization was destroyed because the user logged out */
  userSessionDestroyedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The public UUID for this SSO authorization */
  uuid: Scalars['String']['output'];
};

export type SsoAuthorizationIdentity = {
  __typename?: 'SSOAuthorizationIdentity';
  /** The avatar URL provided in this identity */
  avatarURL?: Maybe<Scalars['String']['output']>;
  /** The email addresses provided in this identity */
  email?: Maybe<Scalars['String']['output']>;
  /** The name provided in this identity */
  name?: Maybe<Scalars['String']['output']>;
  /** The identifier provided in this identity */
  uid?: Maybe<Scalars['String']['output']>;
};

export type SsoProvider = {
  /** The time when this SSO Provider was created */
  createdAt: Scalars['DateTime']['output'];
  /** The user that created this SSO Provider */
  createdBy: User;
  /** The time when this SSO Provider was disabled */
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that disabled this SSO Provider */
  disabledBy?: Maybe<User>;
  /** The reason this SSO Provider was disabled */
  disabledReason?: Maybe<Scalars['String']['output']>;
  /** An email domain whose addresses should be offered this SSO Provider during login. */
  emailDomain?: Maybe<Scalars['String']['output']>;
  emailDomainVerificationAddress?: Maybe<Scalars['String']['output']>;
  emailDomainVerifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time when this SSO Provider was enabled */
  enabledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that enabled this SSO Provider */
  enabledBy?: Maybe<User>;
  id: Scalars['ID']['output'];
  /** An extra message that can be added the Authorization screen of an SSO Provider */
  note?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  /** How long a session should last before requiring re-authorization. A `null` value indicates an infinite session. */
  sessionDurationInHours?: Maybe<Scalars['Int']['output']>;
  /** The current state of the SSO Provider */
  state: SsoProviderStates;
  /** Whether the SSO Provider requires a test authorization. If true, the provider can not yet be activated. */
  testAuthorizationRequired?: Maybe<Scalars['Boolean']['output']>;
  /** The type of SSO Provider */
  type: SsoProviderTypes;
  /** The authorization URL for this SSO Provider */
  url: Scalars['String']['output'];
  /** The UUID for this SSO Provider */
  uuid: Scalars['ID']['output'];
};

/** All the possible states an SSO Provider can be in */
export enum SsoProviderStates {
  /** The SSO Provider has been created, but has not been enabled for use yet */
  Created = 'CREATED',
  /** The SSO Provider has been disabled and can't be used directly */
  Disabled = 'DISABLED',
  /** The SSO Provider has been setup correctly and can be used by users */
  Enabled = 'ENABLED'
}

/** All the possible SSO Provider types */
export enum SsoProviderTypes {
  /** A SSO Provider configured to use a GitHub App for authorization */
  GithubApp = 'GITHUB_APP',
  /** A SSO Provider configured to use Google G Suite for authorization */
  GoogleGsuite = 'GOOGLE_GSUITE',
  /** An SSO Provider configured to use SAML */
  Saml = 'SAML'
}

/** The SSO authorization modes you can use on a member */
export enum OrganizationMemberSsoModeEnum {
  /** The member can either use SSO or their email & password */
  Optional = 'OPTIONAL',
  /** The member must use SSO to access your organization */
  Required = 'REQUIRED'
}

/** The different orders you can sort team members by */
export enum TeamMemberOrder {
  /** Order by name alphabetically */
  Name = 'NAME',
  /** Order by the most recently added members first */
  RecentlyCreated = 'RECENTLY_CREATED',
  /** Order by most relevant results when doing a search */
  Relevance = 'RELEVANCE'
}

export type TeamMemberConnection = Connection & {
  __typename?: 'TeamMemberConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<TeamMemberEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TeamMemberEdge = {
  __typename?: 'TeamMemberEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<TeamMember>;
};

/** An member of a team */
export type TeamMember = Node & {
  __typename?: 'TeamMember';
  /** The time when the team member was added */
  createdAt: Scalars['DateTime']['output'];
  /** The user that added this team member */
  createdBy?: Maybe<User>;
  id: Scalars['ID']['output'];
  /** The organization member associated with this team member */
  organizationMember?: Maybe<OrganizationMember>;
  permissions: TeamMemberPermissions;
  /** The users role within the team */
  role: TeamMemberRole;
  /** The team associated with this team member */
  team?: Maybe<Team>;
  /** The user associated with this team member */
  user?: Maybe<User>;
  /** The public UUID for this team member */
  uuid: Scalars['ID']['output'];
};

/** Permissions information about what actions the current user can do against the team membership record */
export type TeamMemberPermissions = {
  __typename?: 'TeamMemberPermissions';
  /** Whether the user can delete the user from the team */
  teamMemberDelete?: Maybe<Permission>;
  /** Whether the user can update the team's members admin status */
  teamMemberUpdate?: Maybe<Permission>;
};

/** The roles a user can be within a team */
export enum TeamMemberRole {
  /** The user can manage pipelines and users within the team */
  Maintainer = 'MAINTAINER',
  /** The user is a regular member of the team */
  Member = 'MEMBER'
}

/** An organization team */
export type Team = Node & {
  __typename?: 'Team';
  /** The time when this team was created */
  createdAt: Scalars['DateTime']['output'];
  /** The user that created this team */
  createdBy?: Maybe<User>;
  /** New organization members will be granted this role on this team */
  defaultMemberRole: TeamMemberRole;
  /** A description of the team */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Add new organization members to this team by default */
  isDefaultTeam: Scalars['Boolean']['output'];
  /** Users that are part of this team */
  members?: Maybe<TeamMemberConnection>;
  /** Whether or not team members can create new pipelines in this team */
  membersCanCreatePipelines: Scalars['Boolean']['output'];
  /**
   * Whether or not team members can delete pipelines in this team
   * @deprecated This property has been removed without replacement
   */
  membersCanDeletePipelines: Scalars['Boolean']['output'];
  /** The name of the team */
  name: Scalars['String']['output'];
  /** The organization that this team is a part of */
  organization?: Maybe<Organization>;
  permissions: TeamPermissions;
  /** Pipelines associated with this team */
  pipelines?: Maybe<TeamPipelineConnection>;
  /** The privacy setting for this team */
  privacy: TeamPrivacy;
  /** The slug of the team */
  slug: Scalars['String']['output'];
  /** Suites associated with this team */
  suites?: Maybe<TeamSuiteConnection>;
  /** The public UUID for this team */
  uuid: Scalars['ID']['output'];
};


/** An organization team */
export type TeamMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TeamMemberOrder>;
  role?: InputMaybe<Array<TeamMemberRole>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** An organization team */
export type TeamPipelinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TeamPipelineOrder>;
  search?: InputMaybe<Scalars['String']['input']>;
};


/** An organization team */
export type TeamSuitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TeamSuiteOrder>;
};

/** Permissions information about what actions the current user can do against the team */
export type TeamPermissions = {
  __typename?: 'TeamPermissions';
  /** Whether the user can see the pipelines within the team */
  pipelineView?: Maybe<Permission>;
  /** Whether the user can delete the team */
  teamDelete?: Maybe<Permission>;
  /** Whether the user can administer add members from the organization to this team */
  teamMemberCreate?: Maybe<Permission>;
  /** Whether the user can add pipelines from other teams to this one */
  teamPipelineCreate?: Maybe<Permission>;
  /** Whether the user can add suites from other teams to this one */
  teamSuiteCreate?: Maybe<Permission>;
  /** Whether the user can update the team's name and description */
  teamUpdate?: Maybe<Permission>;
};

/** The different orders you can sort pipelines by */
export enum TeamPipelineOrder {
  /** Order by name alphabetically */
  Name = 'NAME',
  /** Order by the most recently added pipelines first */
  RecentlyCreated = 'RECENTLY_CREATED',
  /** Order by most relevant results when doing a search */
  Relevance = 'RELEVANCE'
}

/** A collection of TeamPipeline records */
export type TeamPipelineConnection = Connection & {
  __typename?: 'TeamPipelineConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<TeamPipelineEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TeamPipelineEdge = {
  __typename?: 'TeamPipelineEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<TeamPipeline>;
};

/** An pipeline that's been assigned to a team */
export type TeamPipeline = Node & {
  __typename?: 'TeamPipeline';
  /** The access level users have to this pipeline */
  accessLevel: PipelineAccessLevels;
  /** The time when the pipeline was added */
  createdAt: Scalars['DateTime']['output'];
  /** The user that added this pipeline to the team */
  createdBy?: Maybe<User>;
  id: Scalars['ID']['output'];
  permissions: TeamPipelinePermissions;
  /** The pipeline associated with this team member */
  pipeline?: Maybe<Pipeline>;
  /** The team associated with this team member */
  team?: Maybe<Team>;
  /** The public UUID for this team member */
  uuid: Scalars['ID']['output'];
};

/** The access levels that can be assigned to a pipeline */
export enum PipelineAccessLevels {
  /** Allows builds and read only */
  BuildAndRead = 'BUILD_AND_READ',
  /** Allows edits, builds and reads */
  ManageBuildAndRead = 'MANAGE_BUILD_AND_READ',
  /** Read only - no builds or edits */
  ReadOnly = 'READ_ONLY'
}

/** Permission information about what actions the current user can do against the team pipelines */
export type TeamPipelinePermissions = {
  __typename?: 'TeamPipelinePermissions';
  /** Whether the user can delete the pipeline from the team */
  teamPipelineDelete?: Maybe<Permission>;
  /** Whether the user can update the pipeline connection to the team */
  teamPipelineUpdate?: Maybe<Permission>;
};

/** Whether a team is visible or secret within an organization */
export enum TeamPrivacy {
  /** Visible to organization administrators and members */
  Secret = 'SECRET',
  /** Visible to all members of the organization */
  Visible = 'VISIBLE'
}

/** The different orders you can sort suites by */
export enum TeamSuiteOrder {
  /** Order by name alphabetically */
  Name = 'NAME',
  /** Order by the most recently added suites first */
  RecentlyCreated = 'RECENTLY_CREATED',
  /** Order by most relevant results when doing a search */
  Relevance = 'RELEVANCE'
}

/** A collection of TeamSuite records */
export type TeamSuiteConnection = Connection & {
  __typename?: 'TeamSuiteConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<TeamSuiteEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TeamSuiteEdge = {
  __typename?: 'TeamSuiteEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<TeamSuite>;
};

/** A suite that's been assigned to a team */
export type TeamSuite = Node & {
  __typename?: 'TeamSuite';
  /** The access level users have to this suite */
  accessLevel: SuiteAccessLevels;
  /** The time when the suite was added */
  createdAt: Scalars['DateTime']['output'];
  /** The user that added this suite to the team */
  createdBy?: Maybe<User>;
  id: Scalars['ID']['output'];
  permissions: TeamSuitePermissions;
  /** The suite associated with this team member */
  suite?: Maybe<Suite>;
  /** The team associated with this team member */
  team?: Maybe<Team>;
  /** The public UUID for this team suite */
  uuid: Scalars['String']['output'];
};

/** The access levels that can be assigned to a suite */
export enum SuiteAccessLevels {
  /** Allows edits and reads */
  ManageAndRead = 'MANAGE_AND_READ',
  /** Read only */
  ReadOnly = 'READ_ONLY'
}

/** Permission information about what actions the current user can do against the team suites */
export type TeamSuitePermissions = {
  __typename?: 'TeamSuitePermissions';
  /** Whether the user can delete the suite from the team */
  teamSuiteDelete?: Maybe<Permission>;
  /** Whether the user can update the suite connection to the team */
  teamSuiteUpdate?: Maybe<Permission>;
};

/** A suite */
export type Suite = Node & {
  __typename?: 'Suite';
  /** The time when the suite was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The default branch for this suite */
  defaultBranch?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The name of the suite */
  name: Scalars['String']['output'];
  organization: Organization;
  /** The slug of the suite */
  slug: Scalars['String']['output'];
  /** Teams associated with this suite */
  teams?: Maybe<TeamSuiteConnection>;
  /** The URL for the suite */
  url: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};


/** A suite */
export type SuiteTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<TeamSuiteOrder>;
  search?: InputMaybe<Scalars['String']['input']>;
};

/** An email address */
export type Email = Node & {
  __typename?: 'Email';
  /** The email address */
  address: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Whether the email address is the user's primary address */
  primary: Scalars['Boolean']['output'];
  /** The public UUID for this email */
  uuid: Scalars['ID']['output'];
  /** Whether the email address has been verified by the user */
  verified: Scalars['Boolean']['output'];
};

/** Deliver notifications to Slack */
export type NotificationServiceSlack = Node & NotificationService & {
  __typename?: 'NotificationServiceSlack';
  /** The description of this service */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The name of the service provider */
  name: Scalars['String']['output'];
};

export type NotificationService = {
  /** The description of this service */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The name of the service provider */
  name: Scalars['String']['output'];
};

/** Deliver notifications to a custom URL */
export type NotificationServiceWebhook = NotificationService & {
  __typename?: 'NotificationServiceWebhook';
  /** The description of this service */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The name of the service provider */
  name: Scalars['String']['output'];
};

/** A pending invitation to a user to join this organization */
export type OrganizationInvitation = Node & {
  __typename?: 'OrganizationInvitation';
  /** The time when the invitation was accepted */
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that accepted this invite */
  acceptedBy?: Maybe<User>;
  /** The time when the invitation was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that added invited this email address */
  createdBy?: Maybe<User>;
  /** The email address of this invitation */
  email: Scalars['String']['output'];
  /** The time when the invitation was automatically expired */
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  organization?: Maybe<Organization>;
  permissions: OrganizationInvitationPermissions;
  /** The time when this invitation was revoked */
  revokedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that revoked this invitation */
  revokedBy?: Maybe<User>;
  /** The role the user will have in the organization once they've accepted the invitation */
  role: OrganizationMemberRole;
  /** The slug of the invitation that can be used to find an invitation in the query root */
  slug: Scalars['String']['output'];
  sso: OrganizationInvitationSsoType;
  /** The current state of the invitation */
  state: OrganizationInvitationStates;
  /** Teams that have been assigned to this invitation */
  teams?: Maybe<OrganizationInvitationTeamAssignmentConnection>;
  /** The UUID of the invitation */
  uuid: Scalars['String']['output'];
};


/** A pending invitation to a user to join this organization */
export type OrganizationInvitationTeamsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};

/** Permissions information about what actions the current user can do against this invitation */
export type OrganizationInvitationPermissions = {
  __typename?: 'OrganizationInvitationPermissions';
  /** Whether the user can resend this invitation */
  organizationInvitationResend?: Maybe<Permission>;
  /** Whether the user can revoke this invitation */
  organizationInvitationRevoke?: Maybe<Permission>;
};

/** Information about the SSO setup for this invited organization member */
export type OrganizationInvitationSsoType = {
  __typename?: 'OrganizationInvitationSSOType';
  /** The SSO mode of the invited organization member */
  mode?: Maybe<OrganizationMemberSsoModeEnum>;
};

/** All the possible states that an organization invitation can be */
export enum OrganizationInvitationStates {
  /** The invitation was accepted by the person it was sent to */
  Accepted = 'ACCEPTED',
  /** The invitation wasn't accepted and the link has expired */
  Expired = 'EXPIRED',
  /** The invitation is waiting for a user to accept it */
  Pending = 'PENDING',
  /** The invitation was revoked and can no longer be accepted */
  Revoked = 'REVOKED'
}

export type OrganizationInvitationTeamAssignmentConnection = Connection & {
  __typename?: 'OrganizationInvitationTeamAssignmentConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<OrganizationInvitationTeamAssignmentEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type OrganizationInvitationTeamAssignmentEdge = {
  __typename?: 'OrganizationInvitationTeamAssignmentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<OrganizationInvitationTeamAssignment>;
};

/** A team that has been assigned to an invitation */
export type OrganizationInvitationTeamAssignment = {
  __typename?: 'OrganizationInvitationTeamAssignment';
  id: Scalars['ID']['output'];
  /** The role that the user will have once they've accepted the invite */
  role: TeamMemberRole;
  /** The team that this assignment refers to */
  team: Team;
};

/** A schedule of when a build should automatically triggered for a Pipeline */
export type PipelineSchedule = Node & {
  __typename?: 'PipelineSchedule';
  /** The branch to use for builds that this schedule triggers. Defaults to to the default branch in the Pipeline */
  branch?: Maybe<Scalars['String']['output']>;
  /** Returns the builds created by this schedule */
  builds?: Maybe<BuildConnection>;
  /** The commit to use for builds that this schedule triggers. Defaults to `HEAD` */
  commit?: Maybe<Scalars['String']['output']>;
  /** The time when this schedule was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  /** A definition of the trigger build schedule in cron syntax */
  cronline: Scalars['String']['output'];
  /** If this Pipeline schedule is currently enabled */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** Environment variables passed to any triggered builds */
  env?: Maybe<Array<Scalars['String']['output']>>;
  /** The time when this schedule failed */
  failedAt?: Maybe<Scalars['DateTime']['output']>;
  /** If the last attempt at triggering this scheduled build fails, this will be the reason */
  failedMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** A short description of the Pipeline schedule */
  label: Scalars['String']['output'];
  /** The message to use for builds that this schedule triggers */
  message?: Maybe<Scalars['String']['output']>;
  /** The time when this schedule will create a build next */
  nextBuildAt?: Maybe<Scalars['DateTime']['output']>;
  permissions: PipelineSchedulePermissions;
  pipeline?: Maybe<Pipeline>;
  /** The UUID of the Pipeline schedule */
  uuid: Scalars['String']['output'];
};


/** A schedule of when a build should automatically triggered for a Pipeline */
export type PipelineScheduleBuildsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** Permission information about what actions the current user can do against the pipeline schedule */
export type PipelineSchedulePermissions = {
  __typename?: 'PipelineSchedulePermissions';
  /** Whether the user can delete the schedule */
  pipelineScheduleDelete?: Maybe<Permission>;
  /** Whether the user can update the schedule */
  pipelineScheduleUpdate?: Maybe<Permission>;
};

export type ScmPipelineSettings = {
  __typename?: 'SCMPipelineSettings';
  id: Scalars['ID']['output'];
};

export type ScmRepositoryHost = {
  __typename?: 'SCMRepositoryHost';
  id: Scalars['ID']['output'];
};

export type ScmService = {
  __typename?: 'SCMService';
  id: Scalars['ID']['output'];
};

/** Single sign-on provided by GitHub */
export type SsoProviderGitHubApp = Node & SsoProvider & {
  __typename?: 'SSOProviderGitHubApp';
  /** The time when this SSO Provider was created */
  createdAt: Scalars['DateTime']['output'];
  /** The user that created this SSO Provider */
  createdBy: User;
  /** The time when this SSO Provider was disabled */
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that disabled this SSO Provider */
  disabledBy?: Maybe<User>;
  /** The reason this SSO Provider was disabled */
  disabledReason?: Maybe<Scalars['String']['output']>;
  /** An email domain whose addresses should be offered this SSO Provider during login. */
  emailDomain?: Maybe<Scalars['String']['output']>;
  emailDomainVerificationAddress?: Maybe<Scalars['String']['output']>;
  emailDomainVerifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time when this SSO Provider was enabled */
  enabledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that enabled this SSO Provider */
  enabledBy?: Maybe<User>;
  /** The name of the organization on GitHub that the user must be in for an SSO authorization to be verified */
  githubOrganizationName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** An extra message that can be added the Authorization screen of an SSO Provider */
  note?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  /** How long a session should last before requiring re-authorization. A `null` value indicates an infinite session. */
  sessionDurationInHours?: Maybe<Scalars['Int']['output']>;
  /** The current state of the SSO Provider */
  state: SsoProviderStates;
  /** Whether the SSO Provider requires a test authorization. If true, the provider can not yet be activated. */
  testAuthorizationRequired?: Maybe<Scalars['Boolean']['output']>;
  /** The type of SSO Provider */
  type: SsoProviderTypes;
  /** The authorization URL for this SSO Provider */
  url: Scalars['String']['output'];
  /** The UUID for this SSO Provider */
  uuid: Scalars['ID']['output'];
};

/** Single sign-on provided by Google */
export type SsoProviderGoogleGSuite = Node & SsoProvider & {
  __typename?: 'SSOProviderGoogleGSuite';
  /** The time when this SSO Provider was created */
  createdAt: Scalars['DateTime']['output'];
  /** The user that created this SSO Provider */
  createdBy: User;
  /** The time when this SSO Provider was disabled */
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that disabled this SSO Provider */
  disabledBy?: Maybe<User>;
  /** The reason this SSO Provider was disabled */
  disabledReason?: Maybe<Scalars['String']['output']>;
  /** Whether or not the hosted domain should be presented to the user during SSO */
  discloseGoogleHostedDomain: Scalars['Boolean']['output'];
  /** An email domain whose addresses should be offered this SSO Provider during login. */
  emailDomain?: Maybe<Scalars['String']['output']>;
  emailDomainVerificationAddress?: Maybe<Scalars['String']['output']>;
  emailDomainVerifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time when this SSO Provider was enabled */
  enabledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that enabled this SSO Provider */
  enabledBy?: Maybe<User>;
  /** The Google hosted domain that is required to be present in OAuth */
  googleHostedDomain: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** An extra message that can be added the Authorization screen of an SSO Provider */
  note?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  /** How long a session should last before requiring re-authorization. A `null` value indicates an infinite session. */
  sessionDurationInHours?: Maybe<Scalars['Int']['output']>;
  /** The current state of the SSO Provider */
  state: SsoProviderStates;
  /** Whether the SSO Provider requires a test authorization. If true, the provider can not yet be activated. */
  testAuthorizationRequired?: Maybe<Scalars['Boolean']['output']>;
  /** The type of SSO Provider */
  type: SsoProviderTypes;
  /** The authorization URL for this SSO Provider */
  url: Scalars['String']['output'];
  /** The UUID for this SSO Provider */
  uuid: Scalars['ID']['output'];
};

/** Single sign-on provided via SAML */
export type SsoProviderSaml = Node & SsoProvider & {
  __typename?: 'SSOProviderSAML';
  /** The time when this SSO Provider was created */
  createdAt: Scalars['DateTime']['output'];
  /** The user that created this SSO Provider */
  createdBy: User;
  /** The algorithm used to calculate the digest value during a SAML exchange */
  digestMethod: SsoProviderSamlxmlSecurity;
  /** The time when this SSO Provider was disabled */
  disabledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that disabled this SSO Provider */
  disabledBy?: Maybe<User>;
  /** The reason this SSO Provider was disabled */
  disabledReason?: Maybe<Scalars['String']['output']>;
  /** An email domain whose addresses should be offered this SSO Provider during login. */
  emailDomain?: Maybe<Scalars['String']['output']>;
  emailDomainVerificationAddress?: Maybe<Scalars['String']['output']>;
  emailDomainVerifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The time when this SSO Provider was enabled */
  enabledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user that enabled this SSO Provider */
  enabledBy?: Maybe<User>;
  id: Scalars['ID']['output'];
  /** Information about the IdP */
  identityProvider?: Maybe<SsoProviderSamlIdPType>;
  /** An extra message that can be added the Authorization screen of an SSO Provider */
  note?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<Organization>;
  serviceProvider: SsoProviderSamlspType;
  /** How long a session should last before requiring re-authorization. A `null` value indicates an infinite session. */
  sessionDurationInHours?: Maybe<Scalars['Int']['output']>;
  /** The algorithm used to calculate the signature value during a SAML exchange */
  signatureMethod: SsoProviderSamlrsaxmlSecurity;
  /** The current state of the SSO Provider */
  state: SsoProviderStates;
  /** Whether the SSO Provider requires a test authorization. If true, the provider can not yet be activated. */
  testAuthorizationRequired?: Maybe<Scalars['Boolean']['output']>;
  /** The type of SSO Provider */
  type: SsoProviderTypes;
  /** The authorization URL for this SSO Provider */
  url: Scalars['String']['output'];
  /** The UUID for this SSO Provider */
  uuid: Scalars['ID']['output'];
};

/** XML security algorithms used in the SAML exchange */
export enum SsoProviderSamlxmlSecurity {
  /** http://www.w3.org/2000/09/xmldsig#sha1 */
  Sha1 = 'SHA1',
  /** http://www.w3.org/2001/04/xmlenc#sha256 */
  Sha256 = 'SHA256',
  /** http://www.w3.org/2001/04/xmldsig-more#sha384 */
  Sha384 = 'SHA384',
  /** http://www.w3.org/2001/04/xmlenc#sha512 */
  Sha512 = 'SHA512'
}

/** Information about the IdP for a SAML SSO Provider */
export type SsoProviderSamlIdPType = {
  __typename?: 'SSOProviderSAMLIdPType';
  /** The certificated provided by the IdP */
  certificate?: Maybe<Scalars['String']['output']>;
  /** The IdP Issuer value for this SSO Provider */
  issuer?: Maybe<Scalars['String']['output']>;
  /** The metadata used to configure this SSO provider if it was provided */
  metadata?: Maybe<SsoProviderSamlMetadataType>;
  /** The name of the IdP Service. Returns nil if no name can be guessed from the SSO URL */
  name?: Maybe<Scalars['String']['output']>;
  /** The IdP SSO URL for this SSO Provider */
  ssoURL?: Maybe<Scalars['String']['output']>;
};

/** SAML metadata used for configuration */
export type SsoProviderSamlMetadataType = {
  __typename?: 'SSOProviderSAMLMetadataType';
  /** The URL that this metadata can be publicly accessed at */
  url?: Maybe<Scalars['String']['output']>;
  /** The XML for this metadata */
  xml?: Maybe<Scalars['XML']['output']>;
};

/** Information about Buildkite as a SAML Service Provider */
export type SsoProviderSamlspType = {
  __typename?: 'SSOProviderSAMLSPType';
  /** The IdP Issuer value for this SSO Provider */
  issuer?: Maybe<Scalars['String']['output']>;
  /** The metadata used to configure this SSO provider if it was provided */
  metadata?: Maybe<SsoProviderSamlMetadataType>;
  /** The IdP SSO URL for this SSO Provider */
  ssoURL?: Maybe<Scalars['String']['output']>;
};

/** XML RSA security algorithms used in the SAML exchange */
export enum SsoProviderSamlrsaxmlSecurity {
  /** http://www.w3.org/2000/09/xmldsig#rsa-sha1 */
  RsaSha1 = 'RSA_SHA1',
  /** http://www.w3.org/2001/04/xmldsig-more#rsa-sha256 */
  RsaSha256 = 'RSA_SHA256',
  /** http://www.w3.org/2001/04/xmldsig-more#rsa-sha384 */
  RsaSha384 = 'RSA_SHA384',
  /** http://www.w3.org/2001/04/xmldsig-more#rsa-sha512 */
  RsaSha512 = 'RSA_SHA512'
}

export type Subscription = {
  __typename?: 'Subscription';
  id: Scalars['ID']['output'];
};

/** A TOTP configuration */
export type Totp = {
  __typename?: 'TOTP';
  id: Scalars['ID']['output'];
  /** The recovery code batch associated with this TOTP configuration */
  recoveryCodes: RecoveryCodeBatch;
  /** Whether the TOTP configuration has been verified yet */
  verified: Scalars['Boolean']['output'];
};

/** A batch of recovery codes */
export type RecoveryCodeBatch = {
  __typename?: 'RecoveryCodeBatch';
  /** Whether the batch of recovery codes is active */
  active: Scalars['Boolean']['output'];
  /**
   * The recovery codes from this batch. Codes are consumed when used, and codes
   * will be included in this list whether consumed or not
   */
  codes: Array<RecoveryCode>;
  id: Scalars['ID']['output'];
};

/** A recovery code */
export type RecoveryCode = {
  __typename?: 'RecoveryCode';
  /** The recovery code. */
  code: Scalars['String']['output'];
  /** Whether the recovery codes is used */
  consumed: Scalars['Boolean']['output'];
  /** Foo */
  consumedAt?: Maybe<Scalars['String']['output']>;
};

/** The different orders you can sort clusters by */
export enum ClusterOrder {
  /** Order by name alphabetically */
  Name = 'NAME',
  /** Order by the most recently created clusters first */
  RecentlyCreated = 'RECENTLY_CREATED'
}

export type ClusterConnection = Connection & {
  __typename?: 'ClusterConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<ClusterEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ClusterEdge = {
  __typename?: 'ClusterEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Cluster>;
};

/** The different orders you can sort organization invitations by */
export enum OrganizationInvitationOrders {
  /** Order by email address alphabetically */
  Email = 'EMAIL',
  /** Order by the most recently created invitations first */
  RecentlyCreated = 'RECENTLY_CREATED'
}

export type OrganizationInvitationConnection = Connection & {
  __typename?: 'OrganizationInvitationConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<OrganizationInvitationEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type OrganizationInvitationEdge = {
  __typename?: 'OrganizationInvitationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<OrganizationInvitation>;
};

/** The different orders you can sort members by */
export enum OrganizationMemberOrder {
  /** Order by name alphabetically */
  Name = 'NAME',
  /** Order by the most recently created members first */
  RecentlyCreated = 'RECENTLY_CREATED',
  /** Order by relevance when searching for members */
  Relevance = 'RELEVANCE'
}

export type OrganizationMemberSecurityInput = {
  passwordProtected?: InputMaybe<Scalars['Boolean']['input']>;
  twoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrganizationMemberSsoInput = {
  mode: OrganizationMemberSsoModeEnum;
};

export type OrganizationMemberConnection = Connection & {
  __typename?: 'OrganizationMemberConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<OrganizationMemberEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type OrganizationMemberEdge = {
  __typename?: 'OrganizationMemberEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<OrganizationMember>;
};

/** Permissions information about what actions the current user can do against the organization */
export type OrganizationPermissions = {
  __typename?: 'OrganizationPermissions';
  /** Whether the user can create agent tokens */
  agentTokenCreate?: Maybe<Permission>;
  /** Whether the user can access agent tokens */
  agentTokenView?: Maybe<Permission>;
  /** Whether the user can create a see a list of agents in organization */
  agentView?: Maybe<Permission>;
  /** Whether the user can access audit events for the organization */
  auditEventsView?: Maybe<Permission>;
  /** Whether the user can change the notification services for the organization */
  notificationServiceUpdate?: Maybe<Permission>;
  /** Whether the user can view and manage billing for the organization */
  organizationBillingUpdate?: Maybe<Permission>;
  /** Whether the user can invite members from an organization */
  organizationInvitationCreate?: Maybe<Permission>;
  /** Whether the user can update/remove members from an organization */
  organizationMemberUpdate?: Maybe<Permission>;
  /** Whether the user can see members in the organization */
  organizationMemberView?: Maybe<Permission>;
  /** Whether the user can see sensitive information about members in the organization */
  organizationMemberViewSensitive?: Maybe<Permission>;
  /** Whether the user can change the organization name and related source code provider settings */
  organizationUpdate?: Maybe<Permission>;
  /** Whether the user can create a new pipeline in the organization */
  pipelineCreate?: Maybe<Permission>;
  /** Whether the user can create a new pipeline without adding it to any teams within the organization */
  pipelineCreateWithoutTeams?: Maybe<Permission>;
  /** Whether the user can create a see a list of pipelines in organization */
  pipelineView?: Maybe<Permission>;
  /** Whether the user can change SSO Providers for the organization */
  ssoProviderCreate?: Maybe<Permission>;
  /** Whether the user can change SSO Providers for the organization */
  ssoProviderUpdate?: Maybe<Permission>;
  /** Whether the user can create a see a list of suites in organization */
  suiteView?: Maybe<Permission>;
  /** Whether the user can administer one or all the teams in the organization */
  teamAdmin?: Maybe<Permission>;
  /** Whether the user can create teams for the organization */
  teamCreate?: Maybe<Permission>;
  /** Whether the user can toggle teams on/off for the organization */
  teamEnabledChange?: Maybe<Permission>;
  /** Whether the user can see teams in the organization */
  teamView?: Maybe<Permission>;
};

/** Repository information for a pipeline */
export type PipelineRepositoryInput = {
  /** The remote URL for this repository i.e. git@github.com:foo/bar.git */
  url: Scalars['String']['input'];
};

export type PipelineConnection = Connection & {
  __typename?: 'PipelineConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<PipelineEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PipelineEdge = {
  __typename?: 'PipelineEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Pipeline>;
};

/** Single sign-on settings for an organization */
export type OrganizationSso = {
  __typename?: 'OrganizationSSO';
  /** Whether this account is configured for single sign-on */
  isEnabled: Scalars['Boolean']['output'];
  /** The single sign-on provider for this organization */
  provider?: Maybe<OrganizationSsoProvider>;
};

/** Single sign-on provider information for an organization */
export type OrganizationSsoProvider = {
  __typename?: 'OrganizationSSOProvider';
  name: Scalars['String']['output'];
};

export type SsoProviderConnection = Connection & {
  __typename?: 'SSOProviderConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<SsoProviderEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SsoProviderEdge = {
  __typename?: 'SSOProviderEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<SsoProvider>;
};

/** The different orders you can sort suites by */
export enum SuiteOrders {
  /** Order by name alphabetically */
  Name = 'NAME',
  /** Order by the most recently created suites first */
  RecentlyCreated = 'RECENTLY_CREATED',
  /** Order by relevance when searching for suites */
  Relevance = 'RELEVANCE'
}

export type SuiteConnection = Connection & {
  __typename?: 'SuiteConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<SuiteEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type SuiteEdge = {
  __typename?: 'SuiteEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Suite>;
};

/** The different orders you can sort teams by */
export enum TeamOrder {
  /** Order by name alphabetically */
  Name = 'NAME',
  /** Order by the most recently created teams first */
  RecentlyCreated = 'RECENTLY_CREATED',
  /** Order by relevance when searching for teams */
  Relevance = 'RELEVANCE'
}

export type TeamConnection = Connection & {
  __typename?: 'TeamConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<TeamEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type TeamEdge = {
  __typename?: 'TeamEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Team>;
};

/** Permission information about what actions the current user can do against the pipeline */
export type PipelinePermissions = {
  __typename?: 'PipelinePermissions';
  /** Whether the user can create builds on this pipeline */
  buildCreate: Permission;
  /** Whether the user can delete this pipeline */
  pipelineDelete: Permission;
  /** Whether the user can favorite this pipeline */
  pipelineFavorite: Permission;
  /** Whether the user can create schedules on this pipeline */
  pipelineScheduleCreate: Permission;
  /** Whether the user can edit the settings of this pipeline */
  pipelineUpdate: Permission;
};

/** A repository associated with a pipeline */
export type Repository = {
  __typename?: 'Repository';
  /** The repository’s provider */
  provider?: Maybe<RepositoryProvider>;
  /** The git URL for this repository */
  url: Scalars['String']['output'];
};

export type RepositoryProvider = {
  /** The name of the provider */
  name: Scalars['String']['output'];
  /** This URL to the provider’s web interface */
  url?: Maybe<Scalars['String']['output']>;
  /** The URL to use when setting up webhooks from the provider to trigger Buildkite builds */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

export type PipelineScheduleConnection = Connection & {
  __typename?: 'PipelineScheduleConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<PipelineScheduleEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type PipelineScheduleEdge = {
  __typename?: 'PipelineScheduleEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PipelineSchedule>;
};

/** Steps defined on a pipeline */
export type PipelineSteps = {
  __typename?: 'PipelineSteps';
  /** A YAML representation of the pipeline steps */
  yaml?: Maybe<Scalars['YAML']['output']>;
};

/** A tag associated with a pipeline */
export type PipelineTag = {
  __typename?: 'PipelineTag';
  /** The label for this tag */
  label: Scalars['String']['output'];
};

/** The visibility of the pipeline */
export enum PipelineVisibility {
  /** The pipeline is private */
  Private = 'PRIVATE',
  /** The pipeline is public */
  Public = 'PUBLIC'
}

/** The priority with which a job will run */
export type JobPriority = {
  __typename?: 'JobPriority';
  number?: Maybe<Scalars['Int']['output']>;
};

/** Retry Rules for a job */
export type JobRetryRules = {
  __typename?: 'JobRetryRules';
  automatic?: Maybe<Array<Maybe<JobRetryRuleAutomatic>>>;
  manual?: Maybe<Scalars['Boolean']['output']>;
};

/** Automatic retry rule configuration */
export type JobRetryRuleAutomatic = {
  __typename?: 'JobRetryRuleAutomatic';
  exitStatus?: Maybe<Scalars['String']['output']>;
  limit?: Maybe<Scalars['String']['output']>;
  signalReason?: Maybe<Scalars['String']['output']>;
};

/** The reason why a signal was sent to the job's process, or why the process did not start */
export enum JobEventSignalReason {
  /**
   * The agent pre-bootstrap hook refused the job. Note that in this case, no
   * signal was sent to the process, the bootstrap was not run at all.
   */
  AgentRefused = 'AGENT_REFUSED',
  /** The agent sent the signal to the process because the agent was stopped */
  AgentStop = 'AGENT_STOP',
  /** The agent sent the signal to the process because the job was canceled */
  Cancel = 'CANCEL',
  /**
   * The agent was unable to start the job process, often due to memory or resource
   * constraints. Note that in this case, no signal was sent to the process, it
   * simply never started.
   */
  ProcessRunError = 'PROCESS_RUN_ERROR'
}

/** A step in a build that runs a command on an agent */
export type StepCommand = Step & {
  __typename?: 'StepCommand';
  /** The conditional evaluated for this step */
  conditional?: Maybe<Scalars['String']['output']>;
  /** Dependencies of this job */
  dependencies?: Maybe<DependencyConnection>;
  /** The user-defined key for this step */
  key?: Maybe<Scalars['String']['output']>;
  /** The UUID for this step */
  uuid: Scalars['String']['output'];
};


/** A step in a build that runs a command on an agent */
export type StepCommandDependenciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A type of job that triggers another build on a pipeline */
export type JobTypeTrigger = Node & {
  __typename?: 'JobTypeTrigger';
  /** The build that this job is a part of */
  build?: Maybe<Build>;
  id: Scalars['ID']['output'];
  /** The label of this trigger step */
  label?: Maybe<Scalars['String']['output']>;
  /** The state of the job */
  state: JobStates;
  /** The step that defined this job. Some older jobs in the system may not have an associated step */
  step?: Maybe<StepTrigger>;
  /** The build that this job triggered */
  triggered?: Maybe<Build>;
  /** The UUID for this job */
  uuid: Scalars['String']['output'];
};

/** A trigger step creates a build on another pipeline */
export type StepTrigger = Step & {
  __typename?: 'StepTrigger';
  /** The conditional evaluated for this step */
  conditional?: Maybe<Scalars['String']['output']>;
  /** Dependencies of this job */
  dependencies?: Maybe<DependencyConnection>;
  /** The user-defined key for this step */
  key?: Maybe<Scalars['String']['output']>;
  /** The UUID for this step */
  uuid: Scalars['String']['output'];
};


/** A trigger step creates a build on another pipeline */
export type StepTriggerDependenciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A type of job that waits for all previous jobs to pass before proceeding the build pipeline */
export type JobTypeWait = Node & {
  __typename?: 'JobTypeWait';
  /** The build that this job is a part of */
  build?: Maybe<Build>;
  id: Scalars['ID']['output'];
  /** The label of this wait step */
  label?: Maybe<Scalars['String']['output']>;
  /** The state of the job */
  state: JobStates;
  /** The step that defined this job. Some older jobs in the system may not have an associated step */
  step?: Maybe<StepWait>;
  /** The UUID for this job */
  uuid: Scalars['String']['output'];
};

/** A wait step waits for all previous steps to have successfully completed before allowing following jobs to continue */
export type StepWait = Step & {
  __typename?: 'StepWait';
  /** The conditional evaluated for this step */
  conditional?: Maybe<Scalars['String']['output']>;
  /** Dependencies of this job */
  dependencies?: Maybe<DependencyConnection>;
  /** The user-defined key for this step */
  key?: Maybe<Scalars['String']['output']>;
  /** The UUID for this step */
  uuid: Scalars['String']['output'];
};


/** A wait step waits for all previous steps to have successfully completed before allowing following jobs to continue */
export type StepWaitDependenciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type BuildMetaDataConnection = Connection & {
  __typename?: 'BuildMetaDataConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<BuildMetaDataEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type BuildMetaDataEdge = {
  __typename?: 'BuildMetaDataEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<BuildMetaData>;
};

/** A comment on a build */
export type BuildMetaData = {
  __typename?: 'BuildMetaData';
  /** The key used to set this meta data */
  key: Scalars['String']['output'];
  /** The value set to this meta data */
  value: Scalars['String']['output'];
};

/** A pull request on a provider */
export type PullRequest = {
  __typename?: 'PullRequest';
  id: Scalars['String']['output'];
};

export type BuildSource = {
  name: Scalars['String']['output'];
};

/** The different orders you can sort cluster queues by */
export enum ClusterQueueOrder {
  /** Order by key alphabetically */
  Key = 'KEY',
  /** Order by the most recently created cluster queues first */
  RecentlyCreated = 'RECENTLY_CREATED'
}

export type ClusterQueueConnection = Connection & {
  __typename?: 'ClusterQueueConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<ClusterQueueEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ClusterQueueEdge = {
  __typename?: 'ClusterQueueEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ClusterQueue>;
};

/** A operating system that an agent can run on */
export type OperatingSystem = {
  __typename?: 'OperatingSystem';
  /** The name of the operating system */
  name: Scalars['String']['output'];
};

/** Permissions information about what actions the current user can do against this agent */
export type AgentPermissions = {
  __typename?: 'AgentPermissions';
  /** Whether the user can stop the agent remotely */
  agentStop?: Maybe<Permission>;
};

/** A code that is used by an API Application to request an API Access Token */
export type ApiAccessTokenCode = Node & {
  __typename?: 'APIAccessTokenCode';
  application?: Maybe<ApiApplication>;
  /** The time when this code was authorized by a user */
  authorizedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The IP address of the client that authorized this code */
  authorizedIPAddress?: Maybe<Scalars['String']['output']>;
  /** The actual code used to find this API Access Token Code record */
  code: Scalars['String']['output'];
  /** The description of the code provided by the API Application */
  description: Scalars['String']['output'];
  /** The time when this code will expire */
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
};

/** An API Application */
export type ApiApplication = Node & {
  __typename?: 'APIApplication';
  /** A description of the application */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The name of this application */
  name: Scalars['String']['output'];
};

/** A shared GraphQL query */
export type GraphQlSnippet = {
  __typename?: 'GraphQLSnippet';
  /** When this GraphQL snippet was created */
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** The default operation name for this snippet */
  operationName?: Maybe<Scalars['String']['output']>;
  /** The query of this GraphQL snippet */
  query: Scalars['String']['output'];
  /** The URL for the GraphQL snippet */
  url: Scalars['String']['output'];
  /** The public UUID for this snippet */
  uuid: Scalars['ID']['output'];
};

/** Represents the current user session */
export type Viewer = Node & {
  __typename?: 'Viewer';
  authorizations?: Maybe<AuthorizationConnection>;
  builds?: Maybe<BuildConnection>;
  changelogs?: Maybe<ChangelogConnection>;
  /** Emails associated with the current user */
  emails?: Maybe<EmailConnection>;
  /** The ID of the current user */
  id: Scalars['ID']['output'];
  jobs?: Maybe<JobConnection>;
  notice?: Maybe<Notice>;
  organizations?: Maybe<OrganizationConnection>;
  /** The current user's permissions */
  permissions: ViewerPermissions;
  /**
   * The user's active TOTP configuration, if any.
   *
   * This field is private, requires an escalated session, and cannot be accessed via the public GraphQL API.
   */
  totp?: Maybe<Totp>;
  /** The current user */
  user?: Maybe<User>;
};


/** Represents the current user session */
export type ViewerAuthorizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Array<AuthorizationType>>;
};


/** Represents the current user session */
export type ViewerBuildsArgs = {
  branch?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  metaData?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<BuildStates>;
};


/** Represents the current user session */
export type ViewerChangelogsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents the current user session */
export type ViewerEmailsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents the current user session */
export type ViewerJobsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  agentQueryRules?: InputMaybe<Array<Scalars['String']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<JobOrder>;
  priority?: InputMaybe<JobPrioritySearch>;
  state?: InputMaybe<Array<JobStates>>;
  type?: InputMaybe<Array<JobTypes>>;
};


/** Represents the current user session */
export type ViewerNoticeArgs = {
  namespace: NoticeNamespaces;
  scope: Scalars['String']['input'];
};


/** Represents the current user session */
export type ViewerOrganizationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents the current user session */
export type ViewerTotpArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** The type of the authorization */
export enum AuthorizationType {
  /** Bitbucket Authorization */
  Bitbucket = 'BITBUCKET',
  /** GitHub Authorization */
  Github = 'GITHUB',
  /** GitHub Enterprise Authorization */
  GithubEnterprise = 'GITHUB_ENTERPRISE'
}

export type AuthorizationConnection = Connection & {
  __typename?: 'AuthorizationConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<AuthorizationEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type AuthorizationEdge = {
  __typename?: 'AuthorizationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Authorization>;
};

export type ChangelogConnection = Connection & {
  __typename?: 'ChangelogConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<ChangelogEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ChangelogEdge = {
  __typename?: 'ChangelogEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Changelog>;
};

/** A changelog */
export type Changelog = Node & {
  __typename?: 'Changelog';
  author?: Maybe<ChangelogAuthor>;
  /** The body of this changelog */
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The date and time this changelog was published */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The tag for this changelog */
  tag: Scalars['String']['output'];
  /** The title for this changelog */
  title: Scalars['String']['output'];
  /** The public UUID for this changelog */
  uuid: Scalars['String']['output'];
};

/** The author of the changelog */
export type ChangelogAuthor = {
  __typename?: 'ChangelogAuthor';
  avatar: Avatar;
  /** The name of the author */
  name: Scalars['String']['output'];
};

export type EmailConnection = Connection & {
  __typename?: 'EmailConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<EmailEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type EmailEdge = {
  __typename?: 'EmailEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Email>;
};

/** All the possible namespaces for a notice */
export enum NoticeNamespaces {
  /** A change to an existing feature */
  Change = 'CHANGE',
  /** The user has had an email suggested to them */
  EmailSuggestion = 'EMAIL_SUGGESTION',
  /** An event announcement */
  Event = 'EVENT',
  /** A new feature was added */
  Feature = 'FEATURE'
}

/** A notice or notice that a user sees in the Buildkite UI */
export type Notice = {
  __typename?: 'Notice';
  /** The time when this notice was dismissed from the UI */
  dismissedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** The namespace of this notice */
  namespace: NoticeNamespaces;
  /** The scope within the namespace */
  scope: Scalars['String']['output'];
};

export type OrganizationConnection = Connection & {
  __typename?: 'OrganizationConnection';
  count: Scalars['Int']['output'];
  edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
  pageInfo?: Maybe<PageInfo>;
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Organization>;
};

/** Permissions information about what actions the current user can do */
export type ViewerPermissions = {
  __typename?: 'ViewerPermissions';
  /** Whether the viewer can configure two-factor authentication */
  totpConfigure: Permission;
};

/** The root for mutations in this schema */
export type Mutation = {
  __typename?: 'Mutation';
  /** Instruct an agent to stop accepting new build jobs and shut itself down. */
  agentStop?: Maybe<AgentStopPayload>;
  /** Create a new agent registration token. */
  agentTokenCreate?: Maybe<AgentTokenCreatePayload>;
  /** Revoke an agent registration token. */
  agentTokenRevoke?: Maybe<AgentTokenRevokePayload>;
  /**
   * Authorize an API Access Token Code generated by an API Application. Please
   * note this mutation is private and cannot be executed externally.
   */
  apiAccessTokenCodeAuthorize?: Maybe<ApiAccessTokenCodeAuthorizeMutationPayload>;
  /** Annotate a build with information to appear on the build page. */
  buildAnnotate?: Maybe<BuildAnnotatePayload>;
  /** Cancel a build. */
  buildCancel?: Maybe<BuildCancelPayload>;
  /** Create a build. */
  buildCreate?: Maybe<BuildCreatePayload>;
  /** Rebuild a build. */
  buildRebuild?: Maybe<BuildRebuildPayload>;
  /** Add a new email address for the current user */
  emailCreate?: Maybe<EmailCreatePayload>;
  /** Resend a verification email. */
  emailResendVerification?: Maybe<EmailResendVerificationPayload>;
  /** Create a GraphQL snippet. */
  graphQLSnippetCreate?: Maybe<GraphQlSnippetCreatePayload>;
  /** Unblocks a build's "Block pipeline" job. */
  jobTypeBlockUnblock?: Maybe<JobTypeBlockUnblockPayload>;
  /** Cancel a job. */
  jobTypeCommandCancel?: Maybe<JobTypeCommandCancelPayload>;
  /** Retry a job. */
  jobTypeCommandRetry?: Maybe<JobTypeCommandRetryPayload>;
  /**
   * Dismisses a notice from the Buildkite UI. This mutation is idempotent so if
   * you dismiss the same notice multiple times, it will return the original
   * `dismissedAt` time
   */
  noticeDismiss?: Maybe<NoticeDismissPayload>;
  /** Send email invitations to this organization. */
  organizationInvitationCreate?: Maybe<OrganizationInvitationCreatePayload>;
  /** Resend an organization invitation email. */
  organizationInvitationResend?: Maybe<OrganizationInvitationResendPayload>;
  /** Revoke an invitation to an organization so that it can no longer be accepted. */
  organizationInvitationRevoke?: Maybe<OrganizationInvitationRevokePayload>;
  /** Remove a user from an organization. */
  organizationMemberDelete?: Maybe<OrganizationMemberDeletePayload>;
  /** Change a user's role within an organization. */
  organizationMemberUpdate?: Maybe<OrganizationMemberUpdatePayload>;
  /** Archive a pipeline. */
  pipelineArchive?: Maybe<PipelineArchivePayload>;
  /** Create a pipeline. */
  pipelineCreate?: Maybe<PipelineCreatePayload>;
  /** Create SCM webhooks for a pipeline. */
  pipelineCreateWebhook?: Maybe<PipelineCreateWebhookPayload>;
  /** Delete a pipeline. */
  pipelineDelete?: Maybe<PipelineDeletePayload>;
  /** Favorite a pipeline. */
  pipelineFavorite?: Maybe<PipelineFavoritePayload>;
  /**
   * Rotate a pipeline's webhook URL.
   *
   * Note that the old webhook URL will stop working immediately and so must be updated quickly to avoid interruption.
   */
  pipelineRotateWebhookURL?: Maybe<PipelineRotateWebhookUrlPayload>;
  /** Create a scheduled build on pipeline. */
  pipelineScheduleCreate?: Maybe<PipelineScheduleCreatePayload>;
  /** Delete a scheduled build on pipeline. */
  pipelineScheduleDelete?: Maybe<PipelineScheduleDeletePayload>;
  /** Update a scheduled build on pipeline. */
  pipelineScheduleUpdate?: Maybe<PipelineScheduleUpdatePayload>;
  /** Unarchive a pipeline. */
  pipelineUnarchive?: Maybe<PipelineUnarchivePayload>;
  /** Change the settings for a pipeline. */
  pipelineUpdate?: Maybe<PipelineUpdatePayload>;
  /** Create a SSO provider. */
  ssoProviderCreate?: Maybe<SsoProviderCreatePayload>;
  /** Delete a SSO provider. */
  ssoProviderDelete?: Maybe<SsoProviderDeletePayload>;
  /** Disable a SSO provider. */
  ssoProviderDisable?: Maybe<SsoProviderDisablePayload>;
  /** Enable a SSO provider. */
  ssoProviderEnable?: Maybe<SsoProviderEnablePayload>;
  /** Change the settings for a SSO provider. */
  ssoProviderUpdate?: Maybe<SsoProviderUpdatePayload>;
  /** Create a team. */
  teamCreate?: Maybe<TeamCreatePayload>;
  /** Delete a team. */
  teamDelete?: Maybe<TeamDeletePayload>;
  /** Add a user to a team. */
  teamMemberCreate?: Maybe<TeamMemberCreatePayload>;
  /** Remove a user from a team. */
  teamMemberDelete?: Maybe<TeamMemberDeletePayload>;
  /** Update a user's role in a team. */
  teamMemberUpdate?: Maybe<TeamMemberUpdatePayload>;
  /** Add a pipeline to a team. */
  teamPipelineCreate?: Maybe<TeamPipelineCreatePayload>;
  /** Remove a pipeline from a team. */
  teamPipelineDelete?: Maybe<TeamPipelineDeletePayload>;
  /** Update a pipeline's access level within a team. */
  teamPipelineUpdate?: Maybe<TeamPipelineUpdatePayload>;
  /** Add a suite to a team. */
  teamSuiteCreate?: Maybe<TeamSuiteCreatePayload>;
  /** Remove a suite from a team. */
  teamSuiteDelete?: Maybe<TeamSuiteDeletePayload>;
  /** Update a suite's access level within a team. */
  teamSuiteUpdate?: Maybe<TeamSuiteUpdatePayload>;
  /** Change the settings for a team. */
  teamUpdate?: Maybe<TeamUpdatePayload>;
  /**
   * Activate a previously-generated TOTP configuration, and its Recovery Codes.
   *
   * Once activated, both this TOTP configuration, and the associated Recovery Codes will become active for the user.
   * Any previous TOTP configuration or Recovery Codes will no longer be usable.
   *
   * This mutation is private, requires an escalated session, and cannot be accessed via the public GraphQL API.
   */
  totpActivate?: Maybe<TotpActivatePayload>;
  /**
   * Create a new TOTP configuration for the current user.
   *
   * This will produce a TOTP configuration with an associated set of Recovery
   * Codes. The Recovery Codes must be presented to the user prior to the TOTP's
   * activation with `totpActivate`.
   * Neither TOTP configuration nor Recovery Codes will be usable until they have been activated.
   *
   * This mutation is private, requires an escalated session, and cannot be accessed via the public GraphQL API.
   */
  totpCreate?: Maybe<TotpCreatePayload>;
  /**
   * Delete a TOTP configuration.
   *
   * If a TOTP configuration was active, it will no longer be used for logging on to the user's account.
   * Any Recovery Codes associated with the TOTP configuration will also no longer be usable.
   *
   * This mutation is private, requires an escalated session, and cannot be accessed via the public GraphQL API.
   */
  totpDelete?: Maybe<TotpDeletePayload>;
  /**
   * Generate a new set of Recovery Codes for a given TOTP.
   *
   * The new Recovery Codes will immediately replace any existing recovery codes.
   *
   * This mutation is private, requires an escalated session, and cannot be accessed via the public GraphQL API.
   */
  totpRecoveryCodesRegenerate?: Maybe<TotpRecoveryCodesRegeneratePayload>;
};


/** The root for mutations in this schema */
export type MutationAgentStopArgs = {
  input: AgentStopInput;
};


/** The root for mutations in this schema */
export type MutationAgentTokenCreateArgs = {
  input: AgentTokenCreateInput;
};


/** The root for mutations in this schema */
export type MutationAgentTokenRevokeArgs = {
  input: AgentTokenRevokeInput;
};


/** The root for mutations in this schema */
export type MutationApiAccessTokenCodeAuthorizeArgs = {
  input: ApiAccessTokenCodeAuthorizeMutationInput;
};


/** The root for mutations in this schema */
export type MutationBuildAnnotateArgs = {
  input: BuildAnnotateInput;
};


/** The root for mutations in this schema */
export type MutationBuildCancelArgs = {
  input: BuildCancelInput;
};


/** The root for mutations in this schema */
export type MutationBuildCreateArgs = {
  input: BuildCreateInput;
};


/** The root for mutations in this schema */
export type MutationBuildRebuildArgs = {
  input: BuildRebuildInput;
};


/** The root for mutations in this schema */
export type MutationEmailCreateArgs = {
  input: EmailCreateInput;
};


/** The root for mutations in this schema */
export type MutationEmailResendVerificationArgs = {
  input: EmailResendVerificationInput;
};


/** The root for mutations in this schema */
export type MutationGraphQlSnippetCreateArgs = {
  input: GraphQlSnippetCreateInput;
};


/** The root for mutations in this schema */
export type MutationJobTypeBlockUnblockArgs = {
  input: JobTypeBlockUnblockInput;
};


/** The root for mutations in this schema */
export type MutationJobTypeCommandCancelArgs = {
  input: JobTypeCommandCancelInput;
};


/** The root for mutations in this schema */
export type MutationJobTypeCommandRetryArgs = {
  input: JobTypeCommandRetryInput;
};


/** The root for mutations in this schema */
export type MutationNoticeDismissArgs = {
  input: NoticeDismissInput;
};


/** The root for mutations in this schema */
export type MutationOrganizationInvitationCreateArgs = {
  input: OrganizationInvitationCreateInput;
};


/** The root for mutations in this schema */
export type MutationOrganizationInvitationResendArgs = {
  input: OrganizationInvitationResendInput;
};


/** The root for mutations in this schema */
export type MutationOrganizationInvitationRevokeArgs = {
  input: OrganizationInvitationRevokeInput;
};


/** The root for mutations in this schema */
export type MutationOrganizationMemberDeleteArgs = {
  input: OrganizationMemberDeleteInput;
};


/** The root for mutations in this schema */
export type MutationOrganizationMemberUpdateArgs = {
  input: OrganizationMemberUpdateInput;
};


/** The root for mutations in this schema */
export type MutationPipelineArchiveArgs = {
  input: PipelineArchiveInput;
};


/** The root for mutations in this schema */
export type MutationPipelineCreateArgs = {
  input: PipelineCreateInput;
};


/** The root for mutations in this schema */
export type MutationPipelineCreateWebhookArgs = {
  input: PipelineCreateWebhookInput;
};


/** The root for mutations in this schema */
export type MutationPipelineDeleteArgs = {
  input: PipelineDeleteInput;
};


/** The root for mutations in this schema */
export type MutationPipelineFavoriteArgs = {
  input: PipelineFavoriteInput;
};


/** The root for mutations in this schema */
export type MutationPipelineRotateWebhookUrlArgs = {
  input: PipelineRotateWebhookUrlInput;
};


/** The root for mutations in this schema */
export type MutationPipelineScheduleCreateArgs = {
  input: PipelineScheduleCreateInput;
};


/** The root for mutations in this schema */
export type MutationPipelineScheduleDeleteArgs = {
  input: PipelineScheduleDeleteInput;
};


/** The root for mutations in this schema */
export type MutationPipelineScheduleUpdateArgs = {
  input: PipelineScheduleUpdateInput;
};


/** The root for mutations in this schema */
export type MutationPipelineUnarchiveArgs = {
  input: PipelineUnarchiveInput;
};


/** The root for mutations in this schema */
export type MutationPipelineUpdateArgs = {
  input: PipelineUpdateInput;
};


/** The root for mutations in this schema */
export type MutationSsoProviderCreateArgs = {
  input: SsoProviderCreateInput;
};


/** The root for mutations in this schema */
export type MutationSsoProviderDeleteArgs = {
  input: SsoProviderDeleteInput;
};


/** The root for mutations in this schema */
export type MutationSsoProviderDisableArgs = {
  input: SsoProviderDisableInput;
};


/** The root for mutations in this schema */
export type MutationSsoProviderEnableArgs = {
  input: SsoProviderEnableInput;
};


/** The root for mutations in this schema */
export type MutationSsoProviderUpdateArgs = {
  input: SsoProviderUpdateInput;
};


/** The root for mutations in this schema */
export type MutationTeamCreateArgs = {
  input: TeamCreateInput;
};


/** The root for mutations in this schema */
export type MutationTeamDeleteArgs = {
  input: TeamDeleteInput;
};


/** The root for mutations in this schema */
export type MutationTeamMemberCreateArgs = {
  input: TeamMemberCreateInput;
};


/** The root for mutations in this schema */
export type MutationTeamMemberDeleteArgs = {
  input: TeamMemberDeleteInput;
};


/** The root for mutations in this schema */
export type MutationTeamMemberUpdateArgs = {
  input: TeamMemberUpdateInput;
};


/** The root for mutations in this schema */
export type MutationTeamPipelineCreateArgs = {
  input: TeamPipelineCreateInput;
};


/** The root for mutations in this schema */
export type MutationTeamPipelineDeleteArgs = {
  input: TeamPipelineDeleteInput;
};


/** The root for mutations in this schema */
export type MutationTeamPipelineUpdateArgs = {
  input: TeamPipelineUpdateInput;
};


/** The root for mutations in this schema */
export type MutationTeamSuiteCreateArgs = {
  input: TeamSuiteCreateInput;
};


/** The root for mutations in this schema */
export type MutationTeamSuiteDeleteArgs = {
  input: TeamSuiteDeleteInput;
};


/** The root for mutations in this schema */
export type MutationTeamSuiteUpdateArgs = {
  input: TeamSuiteUpdateInput;
};


/** The root for mutations in this schema */
export type MutationTeamUpdateArgs = {
  input: TeamUpdateInput;
};


/** The root for mutations in this schema */
export type MutationTotpActivateArgs = {
  input: TotpActivateInput;
};


/** The root for mutations in this schema */
export type MutationTotpCreateArgs = {
  input: TotpCreateInput;
};


/** The root for mutations in this schema */
export type MutationTotpDeleteArgs = {
  input: TotpDeleteInput;
};


/** The root for mutations in this schema */
export type MutationTotpRecoveryCodesRegenerateArgs = {
  input: TotpRecoveryCodesRegenerateInput;
};

/** Autogenerated input type of AgentStop */
export type AgentStopInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** If this agent should finish the current job before stopping */
  graceful?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of AgentStop. */
export type AgentStopPayload = {
  __typename?: 'AgentStopPayload';
  agent: Agent;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of AgentTokenCreate */
export type AgentTokenCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  organizationID: Scalars['ID']['input'];
  public?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of AgentTokenCreate. */
export type AgentTokenCreatePayload = {
  __typename?: 'AgentTokenCreatePayload';
  agentTokenEdge: AgentTokenEdge;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  organization: Organization;
};

/** Autogenerated input type of AgentTokenRevoke */
export type AgentTokenRevokeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** The reason why this agent token should be revoked */
  reason: Scalars['String']['input'];
};

/** Autogenerated return type of AgentTokenRevoke. */
export type AgentTokenRevokePayload = {
  __typename?: 'AgentTokenRevokePayload';
  agentToken: AgentToken;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of APIAccessTokenCodeAuthorizeMutation */
export type ApiAccessTokenCodeAuthorizeMutationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of APIAccessTokenCodeAuthorizeMutation. */
export type ApiAccessTokenCodeAuthorizeMutationPayload = {
  __typename?: 'APIAccessTokenCodeAuthorizeMutationPayload';
  apiAccessTokenCode: ApiAccessTokenCode;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of BuildAnnotate */
export type BuildAnnotateInput = {
  /** Append to an existing annotation */
  append?: InputMaybe<Scalars['Boolean']['input']>;
  /** The body of the annotation. Markdown and some limited HTML is supported */
  body?: InputMaybe<Scalars['String']['input']>;
  /** The GraphQL ID of the build you want to annotate */
  buildID: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** A string label to differentiate this annotation from other annotations. The default is `default` */
  context?: InputMaybe<Scalars['String']['input']>;
  /** The style of the annotation. The default is `DEFAULT` */
  style?: InputMaybe<AnnotationStyle>;
};

/** Autogenerated return type of BuildAnnotate. */
export type BuildAnnotatePayload = {
  __typename?: 'BuildAnnotatePayload';
  annotation?: Maybe<Annotation>;
  annotationEdge?: Maybe<AnnotationEdge>;
  build?: Maybe<Build>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of BuildCancel */
export type BuildCancelInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of BuildCancel. */
export type BuildCancelPayload = {
  __typename?: 'BuildCancelPayload';
  build: Build;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of BuildCreate */
export type BuildCreateInput = {
  author?: InputMaybe<BuildAuthorInput>;
  /** The branch for the build */
  branch?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The commit for the build */
  commit?: InputMaybe<Scalars['String']['input']>;
  /** Environment variables used for the build */
  env?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The message that is displayed on the build */
  message?: InputMaybe<Scalars['String']['input']>;
  metaData?: InputMaybe<Array<BuildMetaDataInput>>;
  /** The GraphQL ID of the pipeline you want to create a build on */
  pipelineID: Scalars['ID']['input'];
};

/** Author for a build */
export type BuildAuthorInput = {
  /** The email for the build author */
  email: Scalars['String']['input'];
  /** The name for the build author */
  name: Scalars['String']['input'];
};

/** Meta-data key/value pairs for a build */
export type BuildMetaDataInput = {
  /** The key for this meta-data item */
  key: Scalars['String']['input'];
  /** The value for this meta-data item */
  value: Scalars['String']['input'];
};

/** Autogenerated return type of BuildCreate. */
export type BuildCreatePayload = {
  __typename?: 'BuildCreatePayload';
  build?: Maybe<Build>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of BuildRebuild */
export type BuildRebuildInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of BuildRebuild. */
export type BuildRebuildPayload = {
  __typename?: 'BuildRebuildPayload';
  build: Build;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  rebuild: Build;
};

/** Autogenerated input type of EmailCreate */
export type EmailCreateInput = {
  address: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of EmailCreate. */
export type EmailCreatePayload = {
  __typename?: 'EmailCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  emailEdge: EmailEdge;
  viewer: Viewer;
};

/** Autogenerated input type of EmailResendVerification */
export type EmailResendVerificationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of EmailResendVerification. */
export type EmailResendVerificationPayload = {
  __typename?: 'EmailResendVerificationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  email: Email;
};

/** Autogenerated input type of GraphQLSnippetCreate */
export type GraphQlSnippetCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  operationName?: InputMaybe<Scalars['ID']['input']>;
  query: Scalars['String']['input'];
};

/** Autogenerated return type of GraphQLSnippetCreate. */
export type GraphQlSnippetCreatePayload = {
  __typename?: 'GraphQLSnippetCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  graphQLSnippet: GraphQlSnippet;
};

/** Autogenerated input type of JobTypeBlockUnblock */
export type JobTypeBlockUnblockInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Hash of values for the block step's fields. */
  fields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of JobTypeBlockUnblock. */
export type JobTypeBlockUnblockPayload = {
  __typename?: 'JobTypeBlockUnblockPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  jobTypeBlock: JobTypeBlock;
};

/** Autogenerated input type of JobTypeCommandCancel */
export type JobTypeCommandCancelInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of JobTypeCommandCancel. */
export type JobTypeCommandCancelPayload = {
  __typename?: 'JobTypeCommandCancelPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  jobTypeCommand: JobTypeCommand;
};

/** Autogenerated input type of JobTypeCommandRetry */
export type JobTypeCommandRetryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of JobTypeCommandRetry. */
export type JobTypeCommandRetryPayload = {
  __typename?: 'JobTypeCommandRetryPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  jobTypeCommand: JobTypeCommand;
  retriedInJobTypeCommand: JobTypeCommand;
};

/** Autogenerated input type of NoticeDismiss */
export type NoticeDismissInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of NoticeDismiss. */
export type NoticeDismissPayload = {
  __typename?: 'NoticeDismissPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  notice?: Maybe<Notice>;
};

/** Autogenerated input type of OrganizationInvitationCreate */
export type OrganizationInvitationCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  emails: Array<Scalars['String']['input']>;
  organizationID: Scalars['ID']['input'];
  role?: InputMaybe<OrganizationMemberRole>;
  sso?: InputMaybe<OrganizationInvitationSsoInput>;
  teams?: InputMaybe<Array<OrganizationInvitationTeamAssignmentInput>>;
};

export type OrganizationInvitationSsoInput = {
  mode: OrganizationMemberSsoModeEnum;
};

/** Used to assign teams to organization invitation in mutations */
export type OrganizationInvitationTeamAssignmentInput = {
  /** The ID of the team you want the user to join once they've accepted the invite */
  id: Scalars['ID']['input'];
  /** The role in the team you want the user to have */
  role: TeamMemberRole;
};

/** Autogenerated return type of OrganizationInvitationCreate. */
export type OrganizationInvitationCreatePayload = {
  __typename?: 'OrganizationInvitationCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  invitationEdges?: Maybe<Array<Maybe<OrganizationInvitationEdge>>>;
  organization?: Maybe<Organization>;
};

/** Autogenerated input type of OrganizationInvitationResend */
export type OrganizationInvitationResendInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of OrganizationInvitationResend. */
export type OrganizationInvitationResendPayload = {
  __typename?: 'OrganizationInvitationResendPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  organizationInvitation: OrganizationInvitation;
};

/** Autogenerated input type of OrganizationInvitationRevoke */
export type OrganizationInvitationRevokeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of OrganizationInvitationRevoke. */
export type OrganizationInvitationRevokePayload = {
  __typename?: 'OrganizationInvitationRevokePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  organization: Organization;
  organizationInvitation: OrganizationInvitation;
  organizationInvitationEdge: OrganizationInvitationEdge;
};

/** Autogenerated input type of OrganizationMemberDelete */
export type OrganizationMemberDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of OrganizationMemberDelete. */
export type OrganizationMemberDeletePayload = {
  __typename?: 'OrganizationMemberDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOrganizationMemberID: Scalars['ID']['output'];
  organization?: Maybe<Organization>;
  user?: Maybe<User>;
};

/** Autogenerated input type of OrganizationMemberUpdate */
export type OrganizationMemberUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  role?: InputMaybe<OrganizationMemberRole>;
  sso?: InputMaybe<OrganizationMemberSsoInput>;
};

/** Autogenerated return type of OrganizationMemberUpdate. */
export type OrganizationMemberUpdatePayload = {
  __typename?: 'OrganizationMemberUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  organizationMember?: Maybe<OrganizationMember>;
};

/** Autogenerated input type of PipelineArchive */
export type PipelineArchiveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of PipelineArchive. */
export type PipelineArchivePayload = {
  __typename?: 'PipelineArchivePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pipeline: Pipeline;
};

/** Autogenerated input type of PipelineCreate */
export type PipelineCreateInput = {
  /** If existing builds can be rebuilt as new builds. */
  allowRebuilds?: InputMaybe<Scalars['Boolean']['input']>;
  /** A branch filter pattern to limit which pushed branches trigger builds on this pipeline. */
  branchConfiguration?: InputMaybe<Scalars['String']['input']>;
  /** If intermediate builds should be canceled as new builds are created */
  cancelIntermediateBuilds?: InputMaybe<Scalars['Boolean']['input']>;
  /** A branch filter to scope which builds this is applied to */
  cancelIntermediateBuildsBranchFilter?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The GraphQL ID of the cluster you want to use for the pipeline */
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  /** The default branch used to show statistics about the build */
  defaultBranch?: InputMaybe<Scalars['String']['input']>;
  /** A description of this pipeline. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The `graphql_name` of the pipeline. */
  name: Scalars['String']['input'];
  /** The initial build number to use in the sequence */
  nextBuildNumber?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
  /** A source code repository that will back this pipeline */
  repository: PipelineRepositoryInput;
  /** If intermediate builds should be skipped as new builds are created */
  skipIntermediateBuilds?: InputMaybe<Scalars['Boolean']['input']>;
  /** A branch filter to scope which builds this is applied to */
  skipIntermediateBuildsBranchFilter?: InputMaybe<Scalars['String']['input']>;
  /** Steps used by this pipeline defined as YAML */
  steps: PipelineStepsInput;
  /** Tags you want this pipeline to have */
  tags?: InputMaybe<Array<PipelineTagInput>>;
  /** Which teams this pipeline should be assigned to */
  teams?: InputMaybe<Array<PipelineTeamAssignmentInput>>;
  /** The visibility of the pipeline, either PUBLIC or PRIVATE. */
  visibility?: InputMaybe<PipelineVisibility>;
};

/** Step definition for a pipeline */
export type PipelineStepsInput = {
  /** A YAML representation of the steps in this pipeline. This is formatted the same as `buildkite-agent pipeline upload */
  yaml: Scalars['String']['input'];
};

/** Tag associated with a pipeline */
export type PipelineTagInput = {
  /** The label of this tag */
  label: Scalars['String']['input'];
};

/** Used to assign teams to pipelines */
export type PipelineTeamAssignmentInput = {
  /** The access level members within the team have to the pipeline */
  accessLevel?: InputMaybe<PipelineAccessLevels>;
  /** The ID of the team you want to be assigned */
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of PipelineCreate. */
export type PipelineCreatePayload = {
  __typename?: 'PipelineCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  cluster?: Maybe<Cluster>;
  organization: Organization;
  pipeline: Pipeline;
  pipelineEdge: PipelineEdge;
};

/** Autogenerated input type of PipelineCreateWebhook */
export type PipelineCreateWebhookInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of PipelineCreateWebhook. */
export type PipelineCreateWebhookPayload = {
  __typename?: 'PipelineCreateWebhookPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pipelineID: Scalars['ID']['output'];
};

/** Autogenerated input type of PipelineDelete */
export type PipelineDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of PipelineDelete. */
export type PipelineDeletePayload = {
  __typename?: 'PipelineDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPipelineID: Scalars['ID']['output'];
  organization: Organization;
};

/** Autogenerated input type of PipelineFavorite */
export type PipelineFavoriteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  favorite: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of PipelineFavorite. */
export type PipelineFavoritePayload = {
  __typename?: 'PipelineFavoritePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pipeline?: Maybe<Pipeline>;
};

/** Autogenerated input type of PipelineRotateWebhookURL */
export type PipelineRotateWebhookUrlInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of PipelineRotateWebhookURL. */
export type PipelineRotateWebhookUrlPayload = {
  __typename?: 'PipelineRotateWebhookURLPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pipeline: Pipeline;
};

/** Autogenerated input type of PipelineScheduleCreate */
export type PipelineScheduleCreateInput = {
  branch?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commit?: InputMaybe<Scalars['String']['input']>;
  cronline?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  env?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  pipelineID: Scalars['ID']['input'];
};

/** Autogenerated return type of PipelineScheduleCreate. */
export type PipelineScheduleCreatePayload = {
  __typename?: 'PipelineScheduleCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pipeline: Pipeline;
  pipelineScheduleEdge: PipelineScheduleEdge;
};

/** Autogenerated input type of PipelineScheduleDelete */
export type PipelineScheduleDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of PipelineScheduleDelete. */
export type PipelineScheduleDeletePayload = {
  __typename?: 'PipelineScheduleDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedPipelineScheduleID: Scalars['ID']['output'];
  pipeline?: Maybe<Pipeline>;
};

/** Autogenerated input type of PipelineScheduleUpdate */
export type PipelineScheduleUpdateInput = {
  branch?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  commit?: InputMaybe<Scalars['String']['input']>;
  cronline?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  env?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of PipelineScheduleUpdate. */
export type PipelineScheduleUpdatePayload = {
  __typename?: 'PipelineScheduleUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pipelineSchedule: PipelineSchedule;
};

/** Autogenerated input type of PipelineUnarchive */
export type PipelineUnarchiveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of PipelineUnarchive. */
export type PipelineUnarchivePayload = {
  __typename?: 'PipelineUnarchivePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pipeline: Pipeline;
};

/** Autogenerated input type of PipelineUpdate */
export type PipelineUpdateInput = {
  /** If existing builds can be rebuilt as new builds. */
  allowRebuilds?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Whether or not this pipeline should be archived. This field is deprecated and
   * will be removed on 2022-06-01. Use ArchivePipeline and UnarchivePipeline
   * mutations instead.
   */
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  /** A branch filter pattern to limit which pushed branches trigger builds on this pipeline. */
  branchConfiguration?: InputMaybe<Scalars['String']['input']>;
  /** If intermediate builds should be canceled as new builds are created */
  cancelIntermediateBuilds?: InputMaybe<Scalars['Boolean']['input']>;
  /** A branch filter to scope which builds this is applied to */
  cancelIntermediateBuildsBranchFilter?: InputMaybe<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The GraphQL ID of the cluster you want to update for the pipeline */
  clusterId?: InputMaybe<Scalars['ID']['input']>;
  /** The default branch used to show statistics about the build */
  defaultBranch?: InputMaybe<Scalars['String']['input']>;
  /** A description of this pipeline. */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** The `graphql_name` of the pipeline. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The next build number to use in the sequence */
  nextBuildNumber?: InputMaybe<Scalars['Int']['input']>;
  /** A source code repository that will back this pipeline */
  repository?: InputMaybe<PipelineRepositoryInput>;
  /** If intermediate builds should be skipped as new builds are created */
  skipIntermediateBuilds?: InputMaybe<Scalars['Boolean']['input']>;
  /** A branch filter to scope which builds this is applied to */
  skipIntermediateBuildsBranchFilter?: InputMaybe<Scalars['String']['input']>;
  /** Steps used by this pipeline defined as YAML */
  steps?: InputMaybe<PipelineStepsInput>;
  /** Tags you want this pipeline to have */
  tags?: InputMaybe<Array<PipelineTagInput>>;
  /** The visibility of the pipeline, either PUBLIC or PRIVATE. */
  visibility?: InputMaybe<PipelineVisibility>;
};

/** Autogenerated return type of PipelineUpdate. */
export type PipelineUpdatePayload = {
  __typename?: 'PipelineUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pipeline: Pipeline;
};

/** Autogenerated input type of SSOProviderCreate */
export type SsoProviderCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  digestMethod?: InputMaybe<SsoProviderSamlxmlSecurity>;
  discloseGoogleHostedDomain?: InputMaybe<Scalars['Boolean']['input']>;
  emailDomain?: InputMaybe<Scalars['String']['input']>;
  emailDomainVerificationAddress?: InputMaybe<Scalars['String']['input']>;
  githubOrganizationName?: InputMaybe<Scalars['String']['input']>;
  googleHostedDomain?: InputMaybe<Scalars['String']['input']>;
  identityProvider?: InputMaybe<SsoProviderSamlIdP>;
  note?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  sessionDurationInHours?: InputMaybe<Scalars['Int']['input']>;
  signatureMethod?: InputMaybe<SsoProviderSamlrsaxmlSecurity>;
  type: SsoProviderTypes;
};

export type SsoProviderSamlIdP = {
  certificate?: InputMaybe<Scalars['String']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<SsoProviderSamlIdPMetadata>;
  ssoURL?: InputMaybe<Scalars['String']['input']>;
};

export type SsoProviderSamlIdPMetadata = {
  url?: InputMaybe<Scalars['String']['input']>;
  xml?: InputMaybe<Scalars['XML']['input']>;
};

/** Autogenerated return type of SSOProviderCreate. */
export type SsoProviderCreatePayload = {
  __typename?: 'SSOProviderCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  organization: Organization;
  ssoProvider: SsoProvider;
  ssoProviderEdge: SsoProviderEdge;
};

/** Autogenerated input type of SSOProviderDelete */
export type SsoProviderDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of SSOProviderDelete. */
export type SsoProviderDeletePayload = {
  __typename?: 'SSOProviderDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedSSOProviderId: Scalars['ID']['output'];
  organization: Organization;
};

/** Autogenerated input type of SSOProviderDisable */
export type SsoProviderDisableInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  disabledReason?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of SSOProviderDisable. */
export type SsoProviderDisablePayload = {
  __typename?: 'SSOProviderDisablePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  ssoProvider: SsoProvider;
};

/** Autogenerated input type of SSOProviderEnable */
export type SsoProviderEnableInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of SSOProviderEnable. */
export type SsoProviderEnablePayload = {
  __typename?: 'SSOProviderEnablePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  ssoProvider: SsoProvider;
};

/** Autogenerated input type of SSOProviderUpdate */
export type SsoProviderUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  digestMethod?: InputMaybe<SsoProviderSamlxmlSecurity>;
  discloseGoogleHostedDomain?: InputMaybe<Scalars['Boolean']['input']>;
  emailDomain?: InputMaybe<Scalars['String']['input']>;
  emailDomainVerificationAddress?: InputMaybe<Scalars['String']['input']>;
  githubOrganizationName?: InputMaybe<Scalars['String']['input']>;
  googleHostedDomain?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  identityProvider?: InputMaybe<SsoProviderSamlIdP>;
  note?: InputMaybe<Scalars['String']['input']>;
  sessionDurationInHours?: InputMaybe<Scalars['Int']['input']>;
  signatureMethod?: InputMaybe<SsoProviderSamlrsaxmlSecurity>;
};

/** Autogenerated return type of SSOProviderUpdate. */
export type SsoProviderUpdatePayload = {
  __typename?: 'SSOProviderUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  ssoProvider: SsoProvider;
};

/** Autogenerated input type of TeamCreate */
export type TeamCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** New organization members will be granted this role on this team */
  defaultMemberRole: TeamMemberRole;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Add new organization members to this team by default */
  isDefaultTeam: Scalars['Boolean']['input'];
  /** If members in this team can create pipelines in it */
  membersCanCreatePipelines?: InputMaybe<Scalars['Boolean']['input']>;
  /** Deprecated: If members in this team can delete pipelines assigned to it */
  membersCanDeletePipelines?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  organizationID: Scalars['ID']['input'];
  /** The privacy setting for this team */
  privacy: TeamPrivacy;
};

/** Autogenerated return type of TeamCreate. */
export type TeamCreatePayload = {
  __typename?: 'TeamCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  organization: Organization;
  teamEdge: TeamEdge;
};

/** Autogenerated input type of TeamDelete */
export type TeamDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of TeamDelete. */
export type TeamDeletePayload = {
  __typename?: 'TeamDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTeamID: Scalars['ID']['output'];
  organization: Organization;
};

/** Autogenerated input type of TeamMemberCreate */
export type TeamMemberCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  teamID: Scalars['ID']['input'];
  userID: Scalars['ID']['input'];
};

/** Autogenerated return type of TeamMemberCreate. */
export type TeamMemberCreatePayload = {
  __typename?: 'TeamMemberCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  team?: Maybe<Team>;
  teamMemberEdge?: Maybe<TeamMemberEdge>;
};

/** Autogenerated input type of TeamMemberDelete */
export type TeamMemberDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of TeamMemberDelete. */
export type TeamMemberDeletePayload = {
  __typename?: 'TeamMemberDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTeamMemberID: Scalars['ID']['output'];
  team?: Maybe<Team>;
};

/** Autogenerated input type of TeamMemberUpdate */
export type TeamMemberUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  role: TeamMemberRole;
};

/** Autogenerated return type of TeamMemberUpdate. */
export type TeamMemberUpdatePayload = {
  __typename?: 'TeamMemberUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  teamMember: TeamMember;
};

/** Autogenerated input type of TeamPipelineCreate */
export type TeamPipelineCreateInput = {
  accessLevel?: InputMaybe<PipelineAccessLevels>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  pipelineID: Scalars['ID']['input'];
  teamID: Scalars['ID']['input'];
};

/** Autogenerated return type of TeamPipelineCreate. */
export type TeamPipelineCreatePayload = {
  __typename?: 'TeamPipelineCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pipeline?: Maybe<Pipeline>;
  team?: Maybe<Team>;
  teamPipeline?: Maybe<TeamPipeline>;
  teamPipelineEdge?: Maybe<TeamPipelineEdge>;
};

/** Autogenerated input type of TeamPipelineDelete */
export type TeamPipelineDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of TeamPipelineDelete. */
export type TeamPipelineDeletePayload = {
  __typename?: 'TeamPipelineDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTeamPipelineID: Scalars['ID']['output'];
  team?: Maybe<Team>;
};

/** Autogenerated input type of TeamPipelineUpdate */
export type TeamPipelineUpdateInput = {
  accessLevel: PipelineAccessLevels;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of TeamPipelineUpdate. */
export type TeamPipelineUpdatePayload = {
  __typename?: 'TeamPipelineUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  teamPipeline: TeamPipeline;
};

/** Autogenerated input type of TeamSuiteCreate */
export type TeamSuiteCreateInput = {
  accessLevel?: InputMaybe<SuiteAccessLevels>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  suiteID: Scalars['ID']['input'];
  teamID: Scalars['ID']['input'];
};

/** Autogenerated return type of TeamSuiteCreate. */
export type TeamSuiteCreatePayload = {
  __typename?: 'TeamSuiteCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  suite?: Maybe<Suite>;
  team?: Maybe<Team>;
  teamSuite?: Maybe<TeamSuite>;
  teamSuiteEdge?: Maybe<TeamSuiteEdge>;
};

/** Autogenerated input type of TeamSuiteDelete */
export type TeamSuiteDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of TeamSuiteDelete. */
export type TeamSuiteDeletePayload = {
  __typename?: 'TeamSuiteDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTeamSuiteID: Scalars['ID']['output'];
  team?: Maybe<Team>;
};

/** Autogenerated input type of TeamSuiteUpdate */
export type TeamSuiteUpdateInput = {
  accessLevel: SuiteAccessLevels;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of TeamSuiteUpdate. */
export type TeamSuiteUpdatePayload = {
  __typename?: 'TeamSuiteUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  teamSuite: TeamSuite;
};

/** Autogenerated input type of TeamUpdate */
export type TeamUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** New organization members will be granted this role on this team */
  defaultMemberRole: TeamMemberRole;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** Add new organization members to this team by default */
  isDefaultTeam: Scalars['Boolean']['input'];
  /** If members in this team can create pipelines in it */
  membersCanCreatePipelines?: InputMaybe<Scalars['Boolean']['input']>;
  /** Deprecated: If members in this team can delete pipelines assigned to it */
  membersCanDeletePipelines?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  /** The privacy setting for this team */
  privacy?: InputMaybe<TeamPrivacy>;
};

/** Autogenerated return type of TeamUpdate. */
export type TeamUpdatePayload = {
  __typename?: 'TeamUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  team: Team;
};

/** Autogenerated input type of TOTPActivate */
export type TotpActivateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** The current one-time password associated with this TOTP configuration. */
  token: Scalars['String']['input'];
};

/** Autogenerated return type of TOTPActivate. */
export type TotpActivatePayload = {
  __typename?: 'TOTPActivatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  totp: Totp;
  viewer: Viewer;
};

/** Autogenerated input type of TOTPCreate */
export type TotpCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of TOTPCreate. */
export type TotpCreatePayload = {
  __typename?: 'TOTPCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The URI to enter into your one-time password generator. Usually presented to the user as a QR Code */
  provisioningUri: Scalars['String']['output'];
  totp: Totp;
};

/** Autogenerated input type of TOTPDelete */
export type TotpDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of TOTPDelete. */
export type TotpDeletePayload = {
  __typename?: 'TOTPDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  viewer: Viewer;
};

/** Autogenerated input type of TOTPRecoveryCodesRegenerate */
export type TotpRecoveryCodesRegenerateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the TOTP to generate the Recovery Codes for */
  totpId: Scalars['ID']['input'];
};

/** Autogenerated return type of TOTPRecoveryCodesRegenerate. */
export type TotpRecoveryCodesRegeneratePayload = {
  __typename?: 'TOTPRecoveryCodesRegeneratePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  recoveryCodes: RecoveryCodeBatch;
  totp: Totp;
};

/** A GitHub app authorized with a Buildkite account */
export type AuthorizationGitHubApp = Authorization & Node & {
  __typename?: 'AuthorizationGitHubApp';
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

/** A Google account authorized with a Buildkite account */
export type AuthorizationGoogle = Authorization & Node & {
  __typename?: 'AuthorizationGoogle';
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

/** A SAML account authorized with a Buildkite account */
export type AuthorizationSaml = Authorization & Node & {
  __typename?: 'AuthorizationSAML';
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

/** A build was triggered via an API */
export type BuildSourceApi = BuildSource & {
  __typename?: 'BuildSourceAPI';
  name: Scalars['String']['output'];
};

/** A build was triggered manually via the frontend */
export type BuildSourceFrontend = BuildSource & {
  __typename?: 'BuildSourceFrontend';
  name: Scalars['String']['output'];
};

/** A build was triggered via a schedule */
export type BuildSourceSchedule = BuildSource & {
  __typename?: 'BuildSourceSchedule';
  name: Scalars['String']['output'];
  /** The associated schedule that created this build. Will be `null` if the associated schedule has been deleted. */
  pipelineSchedule?: Maybe<PipelineSchedule>;
};

/** A build was triggered via a trigger job */
export type BuildSourceTriggerJob = BuildSource & {
  __typename?: 'BuildSourceTriggerJob';
  name: Scalars['String']['output'];
};

/** A build was triggered via a Webhook */
export type BuildSourceWebhook = BuildSource & {
  __typename?: 'BuildSourceWebhook';
  /** Provider specific headers sent along with the webhook. This will return null if the webhook has been purged by Buildkite. */
  headers?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  /**
   * The body of the webhook. Buildkite only webhook data for a short period of
   * time, so if this returns null - then the webhook data has been purged by Buildkite
   */
  payload?: Maybe<Scalars['JSON']['output']>;
  /** The UUID for this webhook. This will return null if the webhook has been purged by Buildkite */
  uuid?: Maybe<Scalars['String']['output']>;
};

/** The results of a `buildkite-agent pipeline upload` */
export type BuildStepUpload = {
  __typename?: 'BuildStepUpload';
  /** The uploaded step definition */
  definition: BuildStepUploadDefinition;
  id: Scalars['ID']['output'];
  /** The UUID for this build step upload */
  uuid: Scalars['ID']['output'];
};

/** The pipeline definition for a step upload */
export type BuildStepUploadDefinition = {
  __typename?: 'BuildStepUploadDefinition';
  /** The uploaded step definition rendered as JSON */
  json: Scalars['String']['output'];
  /** The uploaded step definition rendered as YAML */
  yaml: Scalars['String']['output'];
};

/** An event created when the dispatcher assigns the job to an agent */
export type JobEventAssigned = JobEvent & Node & {
  __typename?: 'JobEventAssigned';
  /** The actor that caused this event to occur */
  actor: JobEventActor;
  /** The agent the job was assigned to */
  assignedAgent: Agent;
  id: Scalars['ID']['output'];
  /** The job that this event belongs to */
  job: JobTypeCommand;
  /** The time when the event occurred */
  timestamp: Scalars['DateTime']['output'];
  /** The type of event */
  type: JobEventType;
  /** The public UUID for this job event */
  uuid: Scalars['ID']['output'];
};

/** An event created when the job creates new build steps via pipeline upload */
export type JobEventBuildStepUploadCreated = JobEvent & Node & {
  __typename?: 'JobEventBuildStepUploadCreated';
  /** The actor that caused this event to occur */
  actor: JobEventActor;
  buildStepUpload: BuildStepUpload;
  id: Scalars['ID']['output'];
  /** The job that this event belongs to */
  job: JobTypeCommand;
  /** The time when the event occurred */
  timestamp: Scalars['DateTime']['output'];
  /** The type of event */
  type: JobEventType;
  /** The public UUID for this job event */
  uuid: Scalars['ID']['output'];
};

/** An event created when the job is canceled */
export type JobEventCanceled = JobEvent & Node & {
  __typename?: 'JobEventCanceled';
  /** The actor that caused this event to occur */
  actor: JobEventActor;
  exitStatus: Scalars['JSInt']['output'];
  id: Scalars['ID']['output'];
  /** The job that this event belongs to */
  job: JobTypeCommand;
  /** The termination signal which killed the command, if the command was killed */
  signal?: Maybe<Scalars['String']['output']>;
  /**
   * If the termination signal was sent by the agent, the reason the agent took
   * that action. If this field is null, and the `signal` field is not null, the
   * command was killed by another process or by the operating system.
   */
  signalReason?: Maybe<JobEventSignalReason>;
  /** The time when the event occurred */
  timestamp: Scalars['DateTime']['output'];
  /** The type of event */
  type: JobEventType;
  /** The public UUID for this job event */
  uuid: Scalars['ID']['output'];
};

/** An event created when the job is finished */
export type JobEventFinished = JobEvent & Node & {
  __typename?: 'JobEventFinished';
  /** The actor that caused this event to occur */
  actor: JobEventActor;
  /**
   * The exit status returned by the command on the agent. A value of `-1`
   * indicates either that the agent was lost or the process was killed. If the
   * process was killed, the `signal` field will be non-null.
   */
  exitStatus: Scalars['JSInt']['output'];
  id: Scalars['ID']['output'];
  /** The job that this event belongs to */
  job: JobTypeCommand;
  /** The termination signal which killed the command, if the command was killed */
  signal?: Maybe<Scalars['String']['output']>;
  /**
   * If the termination signal was sent by the agent, the reason the agent took
   * that action. If this field is null, and the `signal` field is not null, the
   * command was killed by another process or by the operating system.
   */
  signalReason?: Maybe<JobEventSignalReason>;
  /** The time when the event occurred */
  timestamp: Scalars['DateTime']['output'];
  /** The type of event */
  type: JobEventType;
  /** The public UUID for this job event */
  uuid: Scalars['ID']['output'];
};

/** A generic event type that doesn't have any additional meta-information associated with the event */
export type JobEventGeneric = JobEvent & Node & {
  __typename?: 'JobEventGeneric';
  /** The actor that caused this event to occur */
  actor: JobEventActor;
  id: Scalars['ID']['output'];
  /** The job that this event belongs to */
  job: JobTypeCommand;
  /** The time when the event occurred */
  timestamp: Scalars['DateTime']['output'];
  /** The type of event */
  type: JobEventType;
  /** The public UUID for this job event */
  uuid: Scalars['ID']['output'];
};

/** An event created when the job is retried */
export type JobEventRetried = JobEvent & Node & {
  __typename?: 'JobEventRetried';
  /** The actor that caused this event to occur */
  actor: JobEventActor;
  automaticRule?: Maybe<JobRetryRuleAutomatic>;
  id: Scalars['ID']['output'];
  /** The job that this event belongs to */
  job: JobTypeCommand;
  retriedInJob?: Maybe<JobTypeCommand>;
  /** The time when the event occurred */
  timestamp: Scalars['DateTime']['output'];
  /** The type of event */
  type: JobEventType;
  /** The public UUID for this job event */
  uuid: Scalars['ID']['output'];
};

/** An event created when the job is timed out */
export type JobEventTimedOut = JobEvent & Node & {
  __typename?: 'JobEventTimedOut';
  /** The actor that caused this event to occur */
  actor: JobEventActor;
  exitStatus: Scalars['JSInt']['output'];
  id: Scalars['ID']['output'];
  /** The job that this event belongs to */
  job: JobTypeCommand;
  /** The termination signal which killed the command, if the command was killed */
  signal?: Maybe<Scalars['String']['output']>;
  /**
   * If the termination signal was sent by the agent, the reason the agent took
   * that action. If this field is null, and the `signal` field is not null, the
   * command was killed by another process or by the operating system.
   */
  signalReason?: Maybe<JobEventSignalReason>;
  /** The time when the event occurred */
  timestamp: Scalars['DateTime']['output'];
  /** The type of event */
  type: JobEventType;
  /** The public UUID for this job event */
  uuid: Scalars['ID']['output'];
};

/** A pipeline's repository is being provided by Beanstalk */
export type RepositoryProviderBeanstalk = RepositoryProvider & {
  __typename?: 'RepositoryProviderBeanstalk';
  /** The name of the provider */
  name: Scalars['String']['output'];
  /** This URL to the provider’s web interface */
  url?: Maybe<Scalars['String']['output']>;
  /** The URL to use when setting up webhooks from the provider to trigger Buildkite builds */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** A pipeline's repository is being provided by Bitbucket */
export type RepositoryProviderBitbucket = RepositoryProvider & {
  __typename?: 'RepositoryProviderBitbucket';
  /** The name of the provider */
  name: Scalars['String']['output'];
  /** This URL to the provider’s web interface */
  url?: Maybe<Scalars['String']['output']>;
  /** The URL to use when setting up webhooks from the provider to trigger Buildkite builds */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** A pipeline's repository is being provided by Bitbucket Server */
export type RepositoryProviderBitbucketServer = RepositoryProvider & {
  __typename?: 'RepositoryProviderBitbucketServer';
  /** The name of the provider */
  name: Scalars['String']['output'];
  /** This URL to the provider’s web interface */
  url?: Maybe<Scalars['String']['output']>;
  /** The URL to use when setting up webhooks from the provider to trigger Buildkite builds */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** A pipeline's repository is being provided by Codebase */
export type RepositoryProviderCodebase = RepositoryProvider & {
  __typename?: 'RepositoryProviderCodebase';
  /** The name of the provider */
  name: Scalars['String']['output'];
  /** This URL to the provider’s web interface */
  url?: Maybe<Scalars['String']['output']>;
  /** The URL to use when setting up webhooks from the provider to trigger Buildkite builds */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** A pipeline's repository is being provided by GitHub */
export type RepositoryProviderGithub = RepositoryProvider & {
  __typename?: 'RepositoryProviderGithub';
  /** The name of the provider */
  name: Scalars['String']['output'];
  /** This URL to the provider’s web interface */
  url?: Maybe<Scalars['String']['output']>;
  /** The URL to use when setting up webhooks from the provider to trigger Buildkite builds */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** A pipeline's repository is being provided by GitHub Enterprise */
export type RepositoryProviderGithubEnterprise = RepositoryProvider & {
  __typename?: 'RepositoryProviderGithubEnterprise';
  /** The name of the provider */
  name: Scalars['String']['output'];
  /** This URL to the provider’s web interface */
  url?: Maybe<Scalars['String']['output']>;
  /** The URL to use when setting up webhooks from the provider to trigger Buildkite builds */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** A pipeline's repository is being provided by GitLab */
export type RepositoryProviderGitlab = RepositoryProvider & {
  __typename?: 'RepositoryProviderGitlab';
  /** The name of the provider */
  name: Scalars['String']['output'];
  /** This URL to the provider’s web interface */
  url?: Maybe<Scalars['String']['output']>;
  /** The URL to use when setting up webhooks from the provider to trigger Buildkite builds */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** A pipeline's repository is being provided by GitLab Community Edition */
export type RepositoryProviderGitlabCommunity = RepositoryProvider & {
  __typename?: 'RepositoryProviderGitlabCommunity';
  /** The name of the provider */
  name: Scalars['String']['output'];
  /** This URL to the provider’s web interface */
  url?: Maybe<Scalars['String']['output']>;
  /** The URL to use when setting up webhooks from the provider to trigger Buildkite builds */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** A pipeline's repository is being provided by GitLab Enterprise Edition */
export type RepositoryProviderGitlabEnterprise = RepositoryProvider & {
  __typename?: 'RepositoryProviderGitlabEnterprise';
  /** The name of the provider */
  name: Scalars['String']['output'];
  /** This URL to the provider’s web interface */
  url?: Maybe<Scalars['String']['output']>;
  /** The URL to use when setting up webhooks from the provider to trigger Buildkite builds */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

/** A pipeline's repository is being provided by a service unknown to Buildkite */
export type RepositoryProviderUnknown = RepositoryProvider & {
  __typename?: 'RepositoryProviderUnknown';
  /** The name of the provider */
  name: Scalars['String']['output'];
  /** This URL to the provider’s web interface */
  url?: Maybe<Scalars['String']['output']>;
  /** The URL to use when setting up webhooks from the provider to trigger Buildkite builds */
  webhookUrl?: Maybe<Scalars['String']['output']>;
};

export type UserBuildsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserBuildsQuery = { __typename?: 'Query', viewer?: { __typename?: 'Viewer', user?: { __typename?: 'User', avatar: { __typename?: 'Avatar', url: string }, builds?: { __typename?: 'BuildConnection', edges?: Array<{ __typename?: 'BuildEdge', node?: { __typename?: 'Build', number: number, message?: string | null, startedAt?: any | null, url: string, branch: string, state: BuildStates, commit: string, pipeline: { __typename?: 'Pipeline', name: string, url: string, repository?: { __typename?: 'Repository', url: string } | null }, pullRequest?: { __typename?: 'PullRequest', id: string } | null, createdBy?: { __typename?: 'UnregisteredUser', unregisteredName?: string | null, unregisteredEmail?: string | null } | { __typename?: 'User', name: string, email: string, avatar: { __typename?: 'Avatar', url: string } } | null } | null } | null> | null } | null } | null } | null };

export type OrganizationsQueryVariables = Exact<{ [key: string]: never; }>;


export type OrganizationsQuery = { __typename?: 'Query', viewer?: { __typename?: 'Viewer', organizations?: { __typename?: 'OrganizationConnection', edges?: Array<{ __typename?: 'OrganizationEdge', node?: { __typename?: 'Organization', name: string, slug: string } | null } | null> | null } | null } | null };

export type BuildFragment = { __typename?: 'Build', number: number, message?: string | null, startedAt?: any | null, url: string, branch: string, state: BuildStates, commit: string, pipeline: { __typename?: 'Pipeline', url: string, name: string, repository?: { __typename?: 'Repository', url: string } | null }, pullRequest?: { __typename?: 'PullRequest', id: string } | null, createdBy?: { __typename?: 'UnregisteredUser', unregisteredName?: string | null, unregisteredEmail?: string | null } | { __typename?: 'User', name: string, email: string, avatar: { __typename?: 'Avatar', url: string } } | null };

export type OrganizationPipelinesQueryVariables = Exact<{
  organization: Scalars['ID']['input'];
}>;


export type OrganizationPipelinesQuery = { __typename?: 'Query', organization?: { __typename?: 'Organization', pipelines?: { __typename?: 'PipelineConnection', edges?: Array<{ __typename?: 'PipelineEdge', node?: { __typename?: 'Pipeline', name: string, slug: string, builds?: { __typename?: 'BuildConnection', edges?: Array<{ __typename?: 'BuildEdge', node?: { __typename?: 'Build', startedAt?: any | null } | null } | null> | null } | null } | null } | null> | null } | null } | null };

export type OrganizationFragment = { __typename?: 'Organization', name: string, slug: string };

export type PipelineBuildsQueryVariables = Exact<{
  pipeline: Scalars['ID']['input'];
}>;


export type PipelineBuildsQuery = { __typename?: 'Query', pipeline?: { __typename?: 'Pipeline', builds?: { __typename?: 'BuildConnection', edges?: Array<{ __typename?: 'BuildEdge', node?: { __typename?: 'Build', number: number, message?: string | null, startedAt?: any | null, url: string, branch: string, state: BuildStates, commit: string, pipeline: { __typename?: 'Pipeline', url: string, name: string, repository?: { __typename?: 'Repository', url: string } | null }, pullRequest?: { __typename?: 'PullRequest', id: string } | null, createdBy?: { __typename?: 'UnregisteredUser', unregisteredName?: string | null, unregisteredEmail?: string | null } | { __typename?: 'User', name: string, email: string, avatar: { __typename?: 'Avatar', url: string } } | null } | null } | null> | null } | null } | null };

export type PipelineFragment = { __typename?: 'Pipeline', name: string, slug: string, builds?: { __typename?: 'BuildConnection', edges?: Array<{ __typename?: 'BuildEdge', node?: { __typename?: 'Build', startedAt?: any | null } | null } | null> | null } | null };

export const BuildFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Build"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Build"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"commit"}},{"kind":"Field","name":{"kind":"Name","value":"pipeline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pullRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnregisteredUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"unregisteredName"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"unregisteredEmail"},"name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<BuildFragment, unknown>;
export const OrganizationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Organization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<OrganizationFragment, unknown>;
export const PipelineFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pipeline"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pipeline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"builds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PipelineFragment, unknown>;
export const UserBuildsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserBuilds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"builds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Build"}},{"kind":"Field","name":{"kind":"Name","value":"pipeline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Build"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Build"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"commit"}},{"kind":"Field","name":{"kind":"Name","value":"pipeline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pullRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnregisteredUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"unregisteredName"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"unregisteredEmail"},"name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<UserBuildsQuery, UserBuildsQueryVariables>;
export const OrganizationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Organization"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Organization"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<OrganizationsQuery, OrganizationsQueryVariables>;
export const OrganizationPipelinesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OrganizationPipelines"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organization"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organization"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pipelines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"RELEVANCE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pipeline"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pipeline"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pipeline"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"builds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OrganizationPipelinesQuery, OrganizationPipelinesQueryVariables>;
export const PipelineBuildsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PipelineBuilds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pipeline"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pipeline"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pipeline"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"builds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Build"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Build"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Build"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"commit"}},{"kind":"Field","name":{"kind":"Name","value":"pipeline"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pullRequest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnregisteredUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"unregisteredName"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"unregisteredEmail"},"name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<PipelineBuildsQuery, PipelineBuildsQueryVariables>;