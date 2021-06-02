import { ArcRequest, Model } from '@advanced-rest-client/arc-types';
import {
  ARCModelReadEventDetail,
  ARCModelReadBulkEventDetail,
  ARCModelUpdateEventDetail,
  ARCModelDeleteEventDetail,
  ARCModelDeleteBulkEventDetail,
  ARCEntityDeletedEvent,
  ARCModelUpdateBulkEventDetail,
  ARCEntityListEvent,
} from './BaseEvents';

export declare interface ARCRequestEventRequestOptions extends ArcRequest.ARCRequestRestoreOptions {
  /**
   * Requested ARC request revision ID.
   */
  rev?: string;
}

/**
 * An event to be dispatched to read an ARC request object from the data store.
 */
export declare class ARCRequestReadEvent extends CustomEvent<ARCModelReadEventDetail<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>> {
  /**
   * Requested ARC request ID.
   */
  readonly id: string;
  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType: string;
  /**
   * ARC request read options.
   */
  readonly opts?: ARCRequestEventRequestOptions;
  /**
   * @param type Request type. Either `saved` or `history`.
   * @param id ARC request id
   * @param opts ARC request read options.
   */
  constructor(requestType: string, id: string, opts?: ARCRequestEventRequestOptions);
}

/**
 * An event to be dispatched to read in bulk ARC request objects from the data store.
 */
export class ARCRequestReadBulkEvent extends CustomEvent<ARCModelReadBulkEventDetail<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>> {
  /**
   * The list of ids used to initialize this event.
   */
  readonly ids: string[];
  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType: string;
  /**
   * ARC request read options.
   */
  readonly opts?: ARCRequestEventRequestOptions;
  /**
   * @param type Request type. Either `saved` or `history`.
   * @param ids List of ids to read.
   * @param opts ARC request read options.
   */
  constructor(requestType: string, ids: string[], opts?: ARCRequestEventRequestOptions);
}

/**
 * An event dispatched to the store to update an ARC request entity.
 */
export declare class ARCRequestUpdateEvent extends CustomEvent<ARCModelUpdateEventDetail<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>> {
  /**
   * A request that is being updated.
   */
  readonly request: ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest;
  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType: string;
  constructor(requestType: string, request: ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest);
}

/**
 * An event dispatched to store a request with the corresponding related data.
 * This event is used by the UI to update / create request with projects
 * when a "save" action is triggered.
 */
export class ARCRequestStoreEvent extends CustomEvent<ARCModelUpdateEventDetail<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>> {
  /**
   * A request that is being updated.
   */
  readonly request: ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest;

  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType: string;

  /**
   * List of project names to create with this request
   * and attach it to the request object. Only relevant for `saved` type.
   */
  readonly projects?: string[];

  /**
   * @param requestType Request type. Either `saved` or `history`.
   * @param request An ARC request to update.
   * @param projects List of project names to create with this request
   * and attach it to the request object. Only relevant for `saved` type.
   * @param opts Save request options.  Only relevant for `saved` type.
   */
  constructor(requestType: string, request: ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest, projects?: string[]);
}

/**
 * An event dispatched to the store to update a list of ARC requests in a single transaction.
 */
export declare class ARCRequestUpdateBulkEvent extends CustomEvent<ARCModelUpdateBulkEventDetail<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>> {
  /**
   * A project that is being updated.
   */
  readonly requests: (ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest)[];
  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType: string;

  /**
   * @param requestType Request type. Either `saved` or `history`.
   * @param requests A list of ARC request to update.
   */
  constructor(requestType: string, requests: (ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest)[]);
}

/**
 * An event dispatched from the store after updating an ARC request.
 */
export declare class ARCRequestUpdatedEvent extends CustomEvent<Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>> {
  readonly changeRecord: Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>;
  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType: string;

  /**
   * @param requestType ARC request type
   * @param record ARC request change record.
   */
  constructor(requestType: string, record: Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>);
}

/**
 * An event to be dispatched to delete an ARC request object from the data store.
 */
export declare class ARCRequestDeleteEvent extends CustomEvent<ARCModelDeleteEventDetail> {
  /**
   * Requested ARC request ID.
   */
  readonly id: string;
  /**
   * RA revision ID to delete
   */
  readonly rev?: string;
  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType: string;
  /**
   * @param requestType Request type. Either `saved` or `history`.
   * @param id Request id
   * @param rev A revision ID to delete
   */
  constructor(requestType: string, id: string, rev?: string);
}

/**
 * An event to be dispatched to delete a list of ARC request objects from the data store.
 */
export declare class ARCRequestDeleteBulkEvent extends CustomEvent<ARCModelDeleteBulkEventDetail> {
  /**
   * List of requests to delete used to initialize the event.
   */
  readonly ids: string[];
  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType: string;
  /**
   * @param requestType Request type. Either `saved` or `history`.
   * @param ids List of requests to delete
   */
  constructor(requestType: string, id: string[]);
}

/**
 * An event to be dispatched to undelete a list of ARC request objects from the data store.
 */
export class ARCRequestUndeleteBulkEvent extends CustomEvent<ARCModelUpdateBulkEventDetail<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>> {
  /**
   * List of requests to restore used to initialize the event.
   */
  readonly requests: Model.DeletedEntity[];
  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType: string;

  /**
   * @param requestType Request type. Either `saved` or `history`.
   * @param {DeletedEntity[]} requests List of requests to restore
   */
  constructor(requestType: string, requests: Model.DeletedEntity[]);
}

/**
 * An event dispatched by the data store when a request object was deleted.
 */
export class ARCRequestDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * Deleted ARC request ID.
   */
  readonly id: string;
  /**
   * An updated revision ID of the delete object.
   */
  readonly rev: string;
  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType: string;
  /**
   * @param requestType Request type. Either `saved` or `history`.
   * @param id Request id
   * @param rev An updated revision ID of the delete object.
   */
  constructor(requestType: string, id: string, rev: string);
}

/**
 * An event dispatched by the UI when requesting a list of requests
 */
export class ARCRequestListEvent extends ARCEntityListEvent<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest> {
  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType: string;
  /**
   * @param requestType Request type. Either `saved` or `history`.
   * @param opts Query options.
   */
  constructor(requestType: string, opts?: Model.ARCModelListOptions);
}

/**
 * An event dispatched by the UI when querying the request models for specific data.
 */
export class ARCRequestQueryEvent extends CustomEvent<ARCModelReadBulkEventDetail<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>> {
  /**
   * @param term The search term for the query function
   * @param requestType The type of the requests to search for. By default it returns all data.
   * @param detailed If set it uses slower algorithm but performs full search on the index. When false it only uses filer like query + '*'.
   */
  constructor(term: string, requestType?: string, detailed?: boolean);

  /**
   * The request type. Either `saved` or `history`.
   */
  readonly requestType?: string;

  /**
   * The search term for the query function used to initialize the event
   */
  readonly term: string;

  /**
   * If set it uses slower algorithm but performs full search on the index.
   */
  readonly detailed: boolean;
}

/**
 * An event dispatched by the UI to query for the list of requests in a project.
 */
export class ARCRequestListProjectRequestsEvent extends CustomEvent<ARCModelReadBulkEventDetail<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>> {
  /**
   * @param id The project id
   * @param opts Request restore options.
   */
  constructor(id: string, opts?: ArcRequest.ARCRequestRestoreOptions);

  /**
   * The project id
   */
  readonly id: string;

  /**
   * ARC request read options.
   */
  readonly opts?: ArcRequest.ARCRequestRestoreOptions;
}

/**
 * Dispatches an event handled by the data store to read an ARC request metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param requestType Request type. Either `saved` or `history`.
 * @param id Request id
 * @param opts ARC request read options.
 * @returns Promise resolved to an ARC request model.
 */
export declare function readAction(target: EventTarget, requestType: string, id: string, opts?: ARCRequestEventRequestOptions): Promise<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>;

/**
 * Dispatches an event handled by the data store to read a list of ARC requests metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param requestType Request type. Either `saved` or `history`.
 * @param ids List of ids to read
 * @param opts ARC request read options.
 * @return Promise resolved to a list of ARC requests.
 */
export declare function readBulkAction(target: EventTarget, requestType: string, ids: string[], opts?: ARCRequestEventRequestOptions): Promise<(ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest)[]>;

/**
 * Dispatches an event handled by the data store to read an ARC request metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param requestType Request type. Either `saved` or `history`.
 * @param opts List options.
 * @returns Promise resolved to list of results
 */
export declare function listAction(target: EventTarget, requestType: string, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>>;

/**
 * Dispatches an event handled by the data store to query for ARC request data
 *
 * @param target A node on which to dispatch the event.
 * @param term The search term for the query function
 * @param requestType The type of the requests to search for. By default it returns all data.
 * @param detailed If set it uses slower algorithm but performs full search on the index. When false it only uses filer like query + '*'.
 * @returns Promise resolved to list of results
 */
export declare function queryAction(target: EventTarget, term: string, requestType?: string, detailed?: boolean): Promise<(ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest)[]>;

/**
 * Dispatches an event handled by the data store to read an ARC request metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param requestType Request type. Either `saved` or `history`.
 * @param request An ARC request to update.
 * @returns Promise resolved to a change record
 */
export declare function updateAction(target: EventTarget, requestType: string, request: ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest): Promise<Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>>;

/**
 * Dispatches an event handled by the data store to save an ARC request object with metadata`.
 *
 * @param target A node on which to dispatch the event.
 * @param requestType Request type. Either `saved` or `history`.
 * @param request An ARC request to update.
 * @param projects List of project names to create with this request
 * and attach it to the request object. Only relevant for `saved` type.
 * @param opts Save request options.  Only relevant for `saved` type.
 * @returns Promise resolved to a change record
 */
export declare function storeAction(target: EventTarget, requestType: string, request: ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest, projects?: string[]): Promise<Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>>;

/**
 * Dispatches an event handled by the data store to read an ARC request metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param requestType Request type. Either `saved` or `history`.
 * @param requests List of ARC request objects to update.
 * @returns Promise resolved to a list of change record for each object
 */
export declare function updateBulkAction(target: EventTarget, requestType: string, requests: (ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest)[]): Promise<Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>[]>;

/**
 * Dispatches an event handled by the data store to delete an ARC request from the store.
 *
 * @param target A node on which to dispatch the event.
 * @param requestType Request type. Either `saved` or `history`.
 * @param id Request id
 * @param rev A revision ID to delete
 * @returns Promise resolved to a new revision after delete.
 */
export declare function deleteAction(target: EventTarget, requestType: string, id: string, rev?: string): Promise<Model.DeletedEntity>;
/**
 * Dispatches an event handled by the data store to delete an ARC request from the store.
 *
 * @param target A node on which to dispatch the event.
 * @param requestType Request type. Either `saved` or `history`.
 * @param ids List of ids to delete.
 * @returns Promise resolved to a a list of deleted revisions
 */
export declare function deleteBulkAction(target: EventTarget, requestType: string, ids: string[]): Promise<Model.DeletedEntity[]>;

/**
 * Dispatches an event handled by the data store to delete an ARC request from the store.
 *
 * @param target A node on which to dispatch the event.
 * @param requestType Request type. Either `saved` or `history`.
 * @param requests List of requests to restore
 * @returns Promise resolved to a a list of change records
 */
export declare function undeleteBulkAction(target: EventTarget, requestType: string, requests: Model.DeletedEntity[]): Promise<Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>[]>;

/**
 * Dispatches an event handled by the data store to list all requests that are association with a project.
 *
 * @param target A node on which to dispatch the event.
 * @param id The project id
 * @param opts ARC request read options.
 * @returns Promise resolved to a a list of requests
 */
export declare function listProjectAction(target: EventTarget, id: string, opts?: ArcRequest.ARCRequestRestoreOptions): Promise<(ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest)[]>;

/**
 * Dispatches an event after a request object was updated
 *
 * @param target A node on which to dispatch the event.
 * @param requestType ARC request type
 * @param record Change record
 */
export declare function updatedState(target: EventTarget, requestType: string, record: Model.ARCEntityChangeRecord<ArcRequest.ARCHistoryRequest|ArcRequest.ARCSavedRequest>): void;

/**
 * Dispatches an event after a request was deleted
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType ARC request type
 * @param {string} id Deleted ARC request ID.
 * @param {string} rev Updated revision of the ARC request entity.
 */
export declare function deletedState(target: EventTarget, requestType: string, id: string, rev: string): void;
