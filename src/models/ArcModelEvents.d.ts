import { Model, ArcRequest, Indexer, AuthData, HostRule, ClientCertificate, UrlHistory, Variable, RestApi, Project } from "@advanced-rest-client/arc-types";
import { ARCRequestEventRequestOptions } from './RequestEvents';
import { ARCVariablesListOptions, EnvironmentStateDetail } from './VariableEvents';

export declare interface ProjectStateFunctions {
  /**
   * Dispatches an event after a project was updated
   *
   * @param target A node on which to dispatch the event.
   * @param record Change record
   */
  update(target: EventTarget, record: Model.ARCEntityChangeRecord<Project.ARCProject>): void;
  /**
   * Dispatches an event after a project was deleted
   *
   * @param target A node on which to dispatch the event.
   * @param id Deleted project ID.
   * @param rev Updated revision of the project.
   */
  delete(target: EventTarget, id: string, rev: string): void;
}

export declare interface ProjectFunctions {
  /**
   * Dispatches an event handled by the data store to read the project metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param id The ID of the project
   * @param rev The revision of the project. If not set then the latest revision is used.
   * @returns Promise resolved to a Project model.
   */
  read(target: EventTarget, id: string, rev?: string): Promise<Project.ARCProject>;

  /**
   * Dispatches an event handled by the data store to read multiple projects metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param ids The ids of projects to read
   * @returns Promise resolved to the list of projects.
   */
  readBulk(target: EventTarget, ids: string[]): Promise<Project.ARCProject[]>;

  /**
   * Dispatches an event handled by the data store to update a project metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param item The project object to update.
   * @returns Promise resolved to a Project model.
   */
  update(target: EventTarget, item: Project.ARCProject): Promise<Model.ARCEntityChangeRecord<Project.ARCProject>>;

  /**
   * Dispatches an event handled by the data store to update a list of project metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param projects The list of project objects to update.
   * @return Promise resolved to a list of change records
   */
  updateBulk(target: EventTarget, projects: Project.ARCProject[]): Promise<Model.ARCEntityChangeRecord<Project.ARCProject>[]>;
  /**
   * Dispatches an event handled by the data store to delete a project metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param id The id of the project to delete.
   * @param rev The revision of the project. If not set then the latest revision is used.
   * @returns Promise resolved to the delete record
   */
  delete(target: EventTarget, id: string, rev?: string): Promise<Model.DeletedEntity>;

  /**
   * Dispatches an event to list the project data.
   *
   * @param target A node on which to dispatch the event.
   * @param opts Query options.
   * @returns Project list result.
   */
  list(target: EventTarget, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<Project.ARCProject>>;

  /**
   * Dispatches an event to list all project data.
   *
   * @param target A node on which to dispatch the event.
   * @param keys Project keys to read. When not set it reads all projects
   * @return List of projects.
   */
  listAll(target: EventTarget, keys?: string[]): Promise<Project.ARCProject[]>;

  /**
   * Moves a request to a project and removes the request from other projects.
   *
   * @param target A node on which to dispatch the event.
   * @param projectId The target project id
   * @param requestId The request that is being moved/copied
   * @param requestType The request type
   * @param position The index at which to add the request. When not set it add the request to the end of the list.
   * @returns Promise resolved when the operation commits.
   */
  moveTo(target: EventTarget, projectId: string, requestId: string, requestType: string, position?: number): Promise<void>;

  /**
   * Adds a request to a project.
   *
   * @param target A node on which to dispatch the event.
   * @param projectId The target project id
   * @param requestId The request that is being moved/copied
   * @param requestType The request type
   * @param position The index at which to add the request. When not set it add the request to the end of the list.
   * @returns Promise resolved when the operation commits.
   */
  addTo(target: EventTarget, projectId: string, requestId: string, requestType: string, position?: number): Promise<void>;

  /**
   * Removes a request from a project.
   *
   * @param target A node on which to dispatch the event.
   * @param projectId The target project id
   * @param requestId The request that is being moved/copied
   * @returns Promise resolved when the operation commits.
   */
  removeFrom(target: EventTarget, projectId: string, requestId: string): Promise<void>;

  State: ProjectStateFunctions;
}

export declare interface RequestStateFunctions {
  /**
   * Dispatches an event after a request object was updated
   *
   * @param target A node on which to dispatch the event.
   * @param type ARC request type
   * @param record Change record
   */
  update(target: EventTarget, type: string, record: Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>): void;
  /**
   * Dispatches an event after a request was deleted
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} type ARC request type
   * @param {string} id Deleted ARC request ID.
   * @param {string} rev Updated revision of the ARC request entity.
   */
  delete(target: EventTarget, type: string, id: string, rev: string): void;
}

export declare interface RequestFunctions {
  /**
   * Dispatches an event handled by the data store to read an ARC request metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param type Request type. Either `saved` or `history`.
   * @param id Request id
   * @param opts ARC request read options.
   * @returns Promise resolved to an ARC request model.
   */
  read(target: EventTarget, type: string, id: string, opts?: ARCRequestEventRequestOptions): Promise<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>;
  /**
   * Dispatches an event handled by the data store to read a list of ARC requests metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param requestType Request type. Either `saved` or `history`.
   * @param ids List of ids to read
   * @param opts ARC request read options.
   * @return Promise resolved to a list of ARC requests.
   */
  readBulk(target: EventTarget, requestType: string, ids: string[], opts?: ARCRequestEventRequestOptions): Promise<(ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest)[]>;
  /**
   * Dispatches an event handled by the data store to read an ARC request metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param requestType Request type. Either `saved` or `history`.
   * @param opts List options.
   * @returns Promise resolved to list of results
   */
  list(target: EventTarget, requestType: string, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>>;

  /**
   * Dispatches an event handled by the data store to query for ARC request data
   *
   * @param target A node on which to dispatch the event.
   * @param term The search term for the query function
   * @param requestType The type of the requests to search for. By default it returns all data.
   * @param detailed If set it uses slower algorithm but performs full search on the index. When false it only uses filer like query + '*'.
   * @returns Promise resolved to list of results
   */
  query(target: EventTarget, term: string, requestType?: string, detailed?: boolean): Promise<(ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest)[]>;

  /**
   * Dispatches an event handled by the data store to read an ARC request metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param type Request type. Either `saved` or `history`.
   * @param request An ARC request to update.
   * @returns Promise resolved to a change record
   */
  update(target: EventTarget, type: string, request: ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest): Promise<Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>>;

  /**
   * Dispatches an event handled by the data store to read an ARC request metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param type Request type. Either `saved` or `history`.
   * @param requests List of ARC request objects to update.
   * @returns Promise resolved to a list of change record for each object
   */
  updateBulk(target: EventTarget, type: string, requests: (ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest)[]): Promise<Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>[]>;

  /**
   * Dispatches an event handled by the data store to save an ARC request object with metadata`.
   *
   * @param target A node on which to dispatch the event.
   * @param type Request type. Either `saved` or `history`.
   * @param request An ARC request to update.
   * @param projects List of project names to create with this request
   * and attach it to the request object. Only relevant for `saved` type.
   * @param opts Save request options.  Only relevant for `saved` type.
   * @returns Promise resolved to a change record
   */
  store(target: EventTarget, type: string, request: ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest, projects?: string[]): Promise<Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>>;

  /**
   * Dispatches an event handled by the data store to delete an ARC request from the store.
   *
   * @param target A node on which to dispatch the event.
   * @param type Request type. Either `saved` or `history`.
   * @param id Request id
   * @param rev A revision ID to delete
   * @returns Promise resolved to a new revision after delete.
   */
  delete(target: EventTarget, type: string, id: string, rev?: string): Promise<Model.DeletedEntity>;
  /**
   * Dispatches an event handled by the data store to delete an ARC request from the store.
   *
   * @param target A node on which to dispatch the event.
   * @param requestType Request type. Either `saved` or `history`.
   * @param ids List of ids to delete.
   * @returns Promise resolved to a a list of deleted revisions
   */
  deleteBulk(target: EventTarget, requestType: string, ids: string[]): Promise<Model.DeletedEntity[]>;
  /**
   * Dispatches an event handled by the data store to delete an ARC request from the store.
   *
   * @param target A node on which to dispatch the event.
   * @param requestType Request type. Either `saved` or `history`.
   * @param requests List of requests to restore
   * @returns Promise resolved to a a list of change records
   */
  undeleteBulk(target: EventTarget, requestType: string, requests: Model.DeletedEntity[]): Promise<Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>[]>;

  /**
   * Dispatches an event handled by the data store to list all requests that are association with a project.
   *
   * @param target A node on which to dispatch the event.
   * @param id The project id
   * @param opts ARC request read options.
   * @returns Promise resolved to a a list of requests
   */
  projectlist(target: EventTarget, id: string, opts?: ArcRequest.ARCRequestRestoreOptions): Promise<(ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest)[]>;
  State: RequestStateFunctions;
}

export  declare interface UrlIndexerStateFunctions {
  /**
   * Dispatches an event informing that the indexer has finished the indexing task
   *
   * @param target A node on which to dispatch the event.
   */
  finished(target: EventTarget): void;
}

export declare interface UrlIndexerFunctions {
  /**
   * Dispatches an event handled by the data store to update indexed data.
   *
   * @param target A node on which to dispatch the event.
   * @param requests List of requests to index.
   * @returns Promise resolved when indexes were updated
   */
  update(target: EventTarget, requests: Indexer.IndexableRequest[]): Promise<void>;
  /**
   * Dispatches an event handled by the data store to query for ARC request URL indexed data
   *
   * @param target A node on which to dispatch the event.
   * @param term The search term for the query function
   * @param requestType The type of the requests to search for.
   * By default it returns all data.
   * @param detailed If set it uses slower algorithm but performs full
   * search on the index. When false it only uses filer like query + '*'.
   * @returns Promise resolved to list of results
   */
  query(target: EventTarget, term: string, requestType?: string, detailed?: boolean): Promise<Indexer.IndexQueryResult>;
  State: UrlIndexerStateFunctions;
}

export declare interface AuthDataStateFunctions {
  /**
   * Dispatches an event informing about a change in the auth data model.
   *
   * @param target A node on which to dispatch the event.
   * @param record AuthData change record.
   */
  update(target: EventTarget, record: Model.ARCEntityChangeRecord<AuthData.ARCAuthData>): void;
}

export declare interface AuthDataFunctions {
  /**
   * Dispatches an event handled by the data store to update an authorization data.
   *
   * @param target A node on which to dispatch the event.
   * @param url The URL of the request associated with the authorization method
   * @param method The name of the authorization method
   * @param authData The authorization data to store.
   * @returns Promise resolved to a the auth change record
   */
  update(target: EventTarget, url: string, method: string, authData: AuthData.ARCAuthData): Promise<Model.ARCEntityChangeRecord<AuthData.ARCAuthData>>;
  /**
   * Dispatches an event handled by the data store to query for ARC authorization data
   *
   * @param target A node on which to dispatch the event.
   * @param url The URL of the request associated with the authorization method
   * @param method The name of the authorization method
   * @returns A promise resolved to n auth data model.
   */
  query(target: EventTarget, url: string, method: string): Promise<AuthData.ARCAuthData>;
  State: AuthDataStateFunctions;
}

export declare interface HostRulesStateFunctions {
  /**
   * Dispatches an event informing about a change in the host rules model.
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {ARCEntityChangeRecord} record Host rules change record.
   */
  update(target: EventTarget, record: Model.ARCEntityChangeRecord<HostRule.ARCHostRule>): void;
  /**
   * Dispatches an event after a host rule was deleted
   *
   * @param target A node on which to dispatch the event.
   * @param id Deleted host rule id.
   * @param rev Updated revision of the deleted entity.
   */
  delete(target: EventTarget, id: string, rev: string): void;
}

export declare interface HostRulesFunctions {
  /**
   * Dispatches an event handled by the data store to update a host rule entity
   *
   * @param target A node on which to dispatch the event.
   * @param rule The rule object to save / update
   * @returns Promise resolved to a the change record
   */
  update(target: EventTarget, rule: HostRule.ARCHostRule): Promise<Model.ARCEntityChangeRecord<HostRule.ARCHostRule>>;

  /**
   * Dispatches an event handled by the data store to update host rule entities in bulk
   *
   * @param target A node on which to dispatch the event.
   * @param rules The rules to save / update
   * @returns Promise resolved to a the list of a change record
   */
  updateBulk(target: EventTarget, rules: HostRule.ARCHostRule[]): Promise<Model.ARCEntityChangeRecord<HostRule.ARCHostRule>[]>;

  /**
   * Dispatches an event handled by the data store to delete an ARC request from the store.
   *
   * @param target A node on which to dispatch the event.
   * @param id The host rule id
   * @param rev A revision ID to delete
   * @returns Delete record
   */
  delete(target: EventTarget, id: string, rev?: string): Promise<Model.DeletedEntity>;

  /**
   * Dispatches an event handled by the data store to read a host rules data.
   *
   * @param target A node on which to dispatch the event.
   * @param opts List options.
   * @returns Promise resolved to list of results
   */
  list(target: EventTarget, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<HostRule.ARCHostRule>>;
  State: HostRulesStateFunctions;
}

export declare interface ClientCertificateStateFunctions {
  /**
   * Dispatches an event after a client certificate was updated
   *
   * @param target A node on which to dispatch the event.
   * @param record Change record
   */
  update(target: EventTarget, record: Model.ARCEntityChangeRecord<ClientCertificate.ARCCertificateIndex>): void;
  /**
   * Dispatches an event after a client certificate was deleted
   *
   * @param target A node on which to dispatch the event.
   * @param id Deleted client certificate id.
   * @param rev Updated revision of the client certificate.
   */
  delete(target: EventTarget, id: string, rev: string): void;
}

export declare interface ClientCertificateFunctions {
  /**
   * Dispatches an event handled by the data store to read the client certificate.
   *
   * @param target A node on which to dispatch the event.
   * @param id The id of the client certificate
   * @param rev The revision of the client certificate. If not set then the latest revision is used.
   * @returns Promise resolved to a client certificate model.
   */
  read(target: EventTarget, id: string, rev?: string): Promise<ClientCertificate.ARCClientCertificate>;
  /**
   * Dispatches an event to list the client certificates data.
   *
   * @param target A node on which to dispatch the event.
   * @param opts Query options.
   * @returns The list result.
   */
  list(target: EventTarget, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<ClientCertificate.ARCClientCertificate>>;
  /**
   * Dispatches an event handled by the data store to delete a client certificate
   *
   * @param target A node on which to dispatch the event.
   * @param id The id of the project to delete.
   * @param rev The revision of the project. If not set then the latest revision is used.
   * @returns Promise resolved to a new revision after delete.
   */
  delete(target: EventTarget, id: string, rev?: string): Promise<Model.DeletedEntity>;
  /**
   * Dispatches an event handled by the data store to insert a new client certificate.
   *
   * @param target A node on which to dispatch the event.
   * @param item The certificate object.
   * @returns Promise resolved to the change record
   */
  insert(target: EventTarget, item: ClientCertificate.ARCClientCertificate): Promise<Model.ARCEntityChangeRecord<ClientCertificate.ARCClientCertificate>>;


  State: ClientCertificateStateFunctions;
}

export declare interface WSUrlHistoryStateFunctions {
  /**
   * Dispatches an event after an URL entity was updated
   *
   * @param target A node on which to dispatch the event.
   * @param record The change record
   */
  update(target: EventTarget, record: Model.ARCEntityChangeRecord<UrlHistory.ARCWebsocketUrlHistory>): void;
}

export declare interface WSUrlHistoryFunctions {
  /**
   * Dispatches an event handled by the data store to list a page of the results
   *
   * @param target A node on which to dispatch the event.
   * @param opts List options.
   * @returns Promise resolved to the change record for the URL
   */
  list(target: EventTarget, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<UrlHistory.ARCWebsocketUrlHistory>>;
  /**
   * Dispatches an event handled by the data store to add a WS URL to the history
   *
   * @param target A node on which to dispatch the event.
   * @param url The URL to insert
   * @returns Promise resolved to the change record for the URL
   */
  insert(target: EventTarget, url: string): Promise<Model.ARCEntityChangeRecord<UrlHistory.ARCWebsocketUrlHistory>>;
  /**
   * Dispatches an event handled by the data store to list a page of the results
   *
   * @param target A node on which to dispatch the event.
   * @param term THe query term
   * @returns Promise resolved to the change record for the URL
   */
  query(target: EventTarget, term: string): Promise<UrlHistory.ARCWebsocketUrlHistory[]>;

  State: WSUrlHistoryStateFunctions;
}

export declare interface UrlHistoryStateFunctions {
  /**
   * Dispatches an event after an URL entity was updated
   *
   * @param target A node on which to dispatch the event.
   * @param record The change record
   */
  update(target: EventTarget, record: Model.ARCEntityChangeRecord<UrlHistory.ARCUrlHistory>): void;
}

export declare interface UrlHistoryFunctions {
  /**
   * Dispatches an event handled by the data store to list a page of the results
   *
   * @param target A node on which to dispatch the event.
   * @param opts List options.
   * @returns Promise resolved to the change record for the URL
   */
  list(target: EventTarget, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<UrlHistory.ARCUrlHistory>>;
  /**
   * Dispatches an event handled by the data store to add an URL to the history
   *
   * @param target A node on which to dispatch the event.
   * @param url The URL to insert
   * @returns Promise resolved to the change record for the URL
   */
  insert(target: EventTarget, url: string): Promise<Model.ARCEntityChangeRecord<UrlHistory.ARCUrlHistory>>;
  /**
   * Dispatches an event handled by the data store to list a page of the results
   *
   * @param target A node on which to dispatch the event.
   * @param term THe query term
   * @returns Promise resolved to the change record for the URL
   */
  query(target: EventTarget, term: string): Promise<UrlHistory.ARCUrlHistory[]>;

  State: UrlHistoryStateFunctions;
}

export declare interface EnvironmentStateFunctions {
  /**
   * Dispatches an event after an environment was updated
   *
   * @param target A node on which to dispatch the event.
   * @param record Change record
   */
  update(target: EventTarget, record: Model.ARCEntityChangeRecord<Variable.ARCEnvironment>): void;
  /**
   * Dispatches an event after an environment was deleted
   *
   * @param target A node on which to dispatch the event.
   * @param id Deleted record id.
   * @param rev Updated revision.
   */
  delete(target: EventTarget, id: string, rev: string): void;
  /**
   * Dispatches an event to read current environment information.
   *
   * @param target A node on which to dispatch the event.
   * @param state Current environment state definition.
   * @returns This has no side effects.
   */
  select(target: EventTarget, state: EnvironmentStateDetail): void;
}

export declare interface EnvironmentFunctions {
  /**
   * Dispatches an event handled by the data store to read the environment metadata
   *
   * @param target A node on which to dispatch the event.
   * @param name The name of the environment
   * @returns Promise resolved to an environment model.
   */
  read(target: EventTarget, name: string): Promise<Variable.ARCEnvironment>;
  /**
   * Dispatches an event handled by the data store to update an environment metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param item The environment object to update.
   * @returns Promise resolved to the change record
   */
  update(target: EventTarget, item: Variable.ARCEnvironment): Promise<Model.ARCEntityChangeRecord<Variable.ARCEnvironment>>;
  /**
   * Dispatches an event handled by the data store to delete an environment and its variables.
   *
   * @param target A node on which to dispatch the event.
   * @param id The id of the environment to delete.
   * @returns Promise resolved to the delete record
   */
  delete(target: EventTarget, id: string): Promise<Model.DeletedEntity>;
  /**
   * Dispatches an event to list the environments data.
   *
   * @param target A node on which to dispatch the event.
   * @param opts Query options.
   * @returns Model query result.
   */
  list(target: EventTarget, opts?: ARCVariablesListOptions): Promise<Model.ARCModelListResult<Variable.ARCEnvironment>>;
  /**
   * Dispatches an event to read the current environment information.
   *
   * @param target A node on which to dispatch the event.
   * @returns Promise resolved to the current environment definition.
   */
  current(target: EventTarget): Promise<EnvironmentStateDetail>;
  /**
   * Dispatches an event to read current environment information.
   *
   * @param target A node on which to dispatch the event.
   * @param id The id of the environment to select. Falsy value if should select the default environment.
   * @returns This has no side effects.
   */
  select(target: EventTarget, id: string): void;
  State: EnvironmentStateFunctions;
}

export declare interface VariableStateFunctions {
  /**
   * Dispatches an event after a variable was updated
   *
   * @param target A node on which to dispatch the event.
   * @param record Change record
   */
  update(target: EventTarget, record: Model.ARCEntityChangeRecord<Variable.ARCVariable>): void;
  /**
   * Dispatches an event after an variable was deleted
   *
   * @param target A node on which to dispatch the event.
   * @param id Deleted record id.
   * @param rev Updated revision.
   */
  delete(target: EventTarget, id: string, rev: string): void;
}

export declare interface VariableFunctions {
  /**
   * Dispatches an event handled by the data store to update a variable metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param item The variable object to update.
   * @returns Promise resolved to the change record
   */
  update(target: EventTarget, item: Variable.ARCVariable): Promise<Model.ARCEntityChangeRecord<Variable.ARCVariable>>;
  /**
   * Dispatches an event handled by the data store to delete a variable.
   *
   * @param target A node on which to dispatch the event.
   * @param id The id of the variable to delete.
   * @returns Promise resolved to the delete record
   */
  delete(target: EventTarget, id: string): Promise<Model.DeletedEntity>;
  /**
   * Dispatches an event to list the variables data.
   *
   * @param target A node on which to dispatch the event.
   * @param name The name of the environment
   * @param opts Query options.
   * @returns Model query result.
   */
  list(target: EventTarget, name: string, opts?: ARCVariablesListOptions): Promise<Model.ARCModelListResult<Variable.ARCVariable>>;
  /**
   * Dispatches an event handled by the data store to set a variable for the current environment.
   *
   * @param target A node on which to dispatch the event.
   * @param name The name of the variable. Case sensitive.
   * @param value The value to set on the variable.
   * @returns Promise resolved to the change record
   */
  set(target: EventTarget, name: string, value: string): Promise<Model.ARCEntityChangeRecord<Variable.ARCVariable>>;
  
  State: VariableStateFunctions;
}

export declare interface RestApiStateFunctions {
  /**
   * Dispatches an event after a REST API index entity was updated
   *
   * @param target A node on which to dispatch the event.
   * @param record Change record
   */
  update(target: EventTarget, record: Model.ARCEntityChangeRecord<RestApi.ARCRestApiIndex>): void;
  /**
   * Dispatches an event after a REST API was deleted
   *
   * @param target A node on which to dispatch the event.
   * @param id Deleted entity id
   * @param rev Updated revision of the entity.
   */
  dataUpdate(target: EventTarget, record: Model.ARCEntityChangeRecord<RestApi.ARCRestApi>): void;
  /**
   * Dispatches an event after a REST API data entity was updated
   *
   * @param target A node on which to dispatch the event.
   * @param record Change record
   */
  delete(target: EventTarget, id: string, rev: string): void;
  /**
   * Dispatches an event after a REST API version was deleted
   *
   * @param target A node on which to dispatch the event.
   * @param id Deleted entity id
   * @param rev Updated revision of the entity.
   * @param indexId Index id of the removed item
   * @param version Removed version name
   */
  versionDelete(target: EventTarget, id: string, rev: string, indexId: string, version: string): void;
}

export declare interface RestApiFunctions {
  /**
   * Dispatches an event to list the REST API index data.
   *
   * @param target A node on which to dispatch the event.
   * @param opts Query options.
   * @returns List query result.
   */
  list(target: EventTarget, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<RestApi.ARCRestApiIndex>>;
  /**
   * Dispatches an event handled by the data store to read the REST API index metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param id The entity id
   * @param rev The optional revision
   * @returns Promise resolved to the entity
   */
  read(target: EventTarget, id: string, rev?: string): Promise<RestApi.ARCRestApiIndex>;
  /**
   * Dispatches an event handled by the data store to read the REST API data metadata.
   *
   * @param target A node on which to dispatch the event.
   * @param id The entity id
   * @param rev The optional revision
   * @returns Promise resolved to the entity
   */
  dataRead(target: EventTarget, id: string, rev?: string): Promise<RestApi.ARCRestApi>;
  /**
   * Dispatches an event handled by the data store to update an API Index entity
   *
   * @param target A node on which to dispatch the event.
   * @param entity The entity to update.
   * @returns Promise resolved to a the change record
   */
  update(target: EventTarget, entity: RestApi.ARCRestApiIndex): Promise<Model.ARCEntityChangeRecord<RestApi.ARCRestApiIndex>>;
  /**
   * Dispatches an event handled by the data store to update a REST API data entity
   *
   * @param target A node on which to dispatch the event.
   * @param entity The entity to update.
   * @returns Promise resolved to a the change record
   */
  dataUpdate(target: EventTarget, entity: RestApi.ARCRestApi): Promise<Model.ARCEntityChangeRecord<RestApi.ARCRestApi>>;
  /**
   * Dispatches an event handled by the data store to update a list of REST API index entities.
   *
   * @param target A node on which to dispatch the event.
   * @param entities The list of entities to update.
   * @returns Promise resolved to a list of change records
   */
  updateBulk(target: EventTarget, entities: RestApi.ARCRestApiIndex[]): Promise<Model.ARCEntityChangeRecord<RestApi.ARCRestApiIndex>[]>;
  /**
   * Dispatches an event handled by the data store to delete a RETS API.
   *
   * @param target A node on which to dispatch the event.
   * @param id The id of the entity to delete.
   * @param rev The revision of the entity.
   * @returns Promise resolved to the delete record
   */
  delete(target: EventTarget, id: string, rev?: string): Promise<Model.DeletedEntity>;
  /**
   * Dispatches an event handled by the data store to delete a version of a RETS API.
   *
   * @param target A node on which to dispatch the event.
   * @param id The id of the entity to delete.
   * @param version The version of the API to delete
   * @returns Promise resolved to the delete record
   */
  versionDelete(target: EventTarget, id: string, version: string): Promise<Model.DeletedEntity>;
  State: RestApiStateFunctions;
}

declare interface ArcModelEvents {
  /**
   * Dispatches an event handled by the data store to destroy a data store.
   *
   * @param target A node on which to dispatch the event.
   * @param stores A list of store names to affect
   * @returns A promise resolved when all requested stores are deleted
   */
  destroy(target: EventTarget, stores: string[]): Promise<void>;
  /**
   * Dispatches an event information the app that a store has been destroyed.
   *
   * @param target A node on which to dispatch the event.
   * @param store The name of the deleted store
   */
  destroyed(target: EventTarget, store: string): void;
  Project: ProjectFunctions;
  Request: RequestFunctions;
  UrlIndexer: UrlIndexerFunctions;
  AuthData: AuthDataFunctions;
  HostRules: HostRulesFunctions;
  ClientCertificate: ClientCertificateFunctions;
  WSUrlHistory: WSUrlHistoryFunctions;
  UrlHistory: UrlHistoryFunctions;
  Environment: EnvironmentFunctions;
  Variable: VariableFunctions;
  RestApi: RestApiFunctions;
}

declare const events: ArcModelEvents;
export { events as  ArcModelEvents };
