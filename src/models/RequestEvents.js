/* eslint-disable max-classes-per-file */
import { ArcModelEventTypes } from './ArcModelEventTypes.js';
import { ARCEntityDeletedEvent, ARCEntityListEvent } from './BaseEvents.js';

/** @typedef {import('./RequestEvents').ARCRequestEventRequestOptions} ARCRequestEventRequestOptions */
/** @typedef {import('@advanced-rest-client/arc-types').ArcRequest.ARCSavedRequest} ARCSavedRequest */
/** @typedef {import('@advanced-rest-client/arc-types').ArcRequest.ARCHistoryRequest} ARCHistoryRequest */
/** @typedef {import('@advanced-rest-client/arc-types').ArcRequest.ARCRequestRestoreOptions} ARCRequestRestoreOptions */
/** @typedef {import('@advanced-rest-client/arc-types').Model.ARCEntityChangeRecord} ARCEntityChangeRecord */
/** @typedef {import('@advanced-rest-client/arc-types').Model.DeletedEntity} DeletedEntity */
/** @typedef {import('@advanced-rest-client/arc-types').Model.ARCModelListOptions} ARCModelListOptions */
/** @typedef {import('@advanced-rest-client/arc-types').Model.ARCModelListResult} ARCModelListResult */

export const requestValue = Symbol('requestValue');
export const requestsValue = Symbol('requestsValue');
export const requestIdValue = Symbol('requestIdValue');
export const revisionValue = Symbol('revisionValue');
export const optionsValue = Symbol('optionsValue');
export const typeValue = Symbol('typeValue');
export const changeRecordValue = Symbol('changeRecordValue');
export const projectsValue = Symbol('projectsValue');
export const detailedValue = Symbol('detailedValue');
export const termValue = Symbol('termValue');

/**
 * An event to be dispatched to read an ARC request object from the data store.
 */
export class ARCRequestReadEvent extends CustomEvent {
  /**
   * @param {string} requestType Request type. Either `saved` or `history`.
   * @param {string} id Request id
   * @param {ARCRequestEventRequestOptions=} opts ARC request read options.
   */
  constructor(requestType, id, opts) {
    if (!id) {
      throw new Error('The request ID is missing.');
    }
    super(ArcModelEventTypes.Request.read, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[requestIdValue] = id;
    this[typeValue] = requestType;
    this[optionsValue] = opts;
  }

  /**
   * Requested ARC request ID.
   * @return {string} ARC request ID used to initialize the event.
   */
  get id() {
    return this[requestIdValue];
  }

  /**
   * @return {ARCRequestEventRequestOptions|undefined} ARC request read options.
   */
  get opts() {
    return this[optionsValue];
  }

  /**
   * @return {string} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }
}

/**
 * An event to be dispatched to read in bulk ARC request objects from the data store.
 */
export class ARCRequestReadBulkEvent extends CustomEvent {
  /**
   * @param {string} requestType Request type. Either `saved` or `history`.
   * @param {string[]} ids List of ids to read.
   * @param {ARCRequestEventRequestOptions=} opts ARC request read options.
   */
  constructor(requestType, ids, opts) {
    if (!Array.isArray(ids)) {
      throw new Error('The request lists is missing.');
    }
    if (!requestType) {
      throw new Error('The requestType is missing.');
    }
    super(ArcModelEventTypes.Request.readBulk, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[requestIdValue] = ids;
    this[typeValue] = requestType;
    this[optionsValue] = opts;
  }

  /**
   * @return {string[]} The list of ids used to initialize this event.
   */
  get ids() {
    return this[requestIdValue];
  }

  /**
   * @return {ARCRequestEventRequestOptions|undefined} ARC request read options.
   */
  get opts() {
    return this[optionsValue];
  }

  /**
   * @return {string} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }
}

/**
 * An event dispatched to the store to update an ARC request entity.
 */
export class ARCRequestUpdateEvent extends CustomEvent {
  /**
   * @param {string} requestType Request type. Either `saved` or `history`.
   * @param {ARCHistoryRequest|ARCSavedRequest} request An ARC request to update.
   */
  constructor(requestType, request) {
    if (!requestType) {
      throw new Error('The requestType is missing.');
    }
    if (!request) {
      throw new Error('The request is missing.');
    }
    super(ArcModelEventTypes.Request.update, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[requestValue] = request;
    this[typeValue] = requestType;
  }

  /**
   * @return {ARCHistoryRequest|ARCSavedRequest} A request entity that is being updated.
   */
  get request() {
    return this[requestValue];
  }

  /**
   * @return {string} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }
}

/**
 * An event dispatched to store a request with the corresponding related data.
 * This event is used by the UI to update / create request with projects
 * when a "save" action is triggered.
 */
export class ARCRequestStoreEvent extends CustomEvent {
  /**
   * @param {string} requestType Request type. Either `saved` or `history`.
   * @param {ARCHistoryRequest|ARCSavedRequest} request An ARC request to update.
   * @param {string[]=} projects List of project names to create with this request
   * and attach it to the request object. Only relevant for `saved` type.
   */
  constructor(requestType, request, projects) {
    if (!requestType) {
      throw new Error('The requestType is missing.');
    }
    if (!request) {
      throw new Error('The request is missing.');
    }
    super(ArcModelEventTypes.Request.store, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[requestValue] = request;
    this[typeValue] = requestType;
    this[projectsValue] = projects;
  }

  /**
   * @return {ARCHistoryRequest|ARCSavedRequest} A request entity that is being updated.
   */
  get request() {
    return this[requestValue];
  }

  /**
   * @return {string} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }

  /**
   * @return {string[]|undefined} List of project names to create with this request
   * and attach it to the request object. Only relevant for `saved` type.
   */
  get projects() {
    return this[projectsValue];
  }
}

/**
 * An event dispatched to the store to update a list of ARC requests in a single transaction.
 */
export class ARCRequestUpdateBulkEvent extends CustomEvent {
  /**
   * @param {string} requestType Request type. Either `saved` or `history`.
   * @param {(ARCHistoryRequest|ARCSavedRequest)[]} requests A list of ARC request to update.
   */
  constructor(requestType, requests) {
    if (!requestType) {
      throw new Error('The requestType is missing.');
    }
    if (!requests) {
      throw new Error('The request is missing.');
    }
    super(ArcModelEventTypes.Request.updateBulk, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[requestValue] = requests;
    this[typeValue] = requestType;
  }

  /**
   * @return {(ARCHistoryRequest|ARCSavedRequest)[]} A list of ARC request to update.
   */
  get requests() {
    return this[requestValue];
  }

  /**
   * @return {string} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }
}

/**
 * An event dispatched from the store after updating an ARC request.
 */
export class ARCRequestUpdatedEvent extends CustomEvent {
  /**
   * @param {string} requestType ARC request type
   * @param {ARCEntityChangeRecord} record ARC request change record.
   */
  constructor(requestType, record) {
    if (!requestType) {
      throw new Error('The requestType is missing.');
    }
    if (!record) {
      throw new Error('The record is missing.');
    }
    super(ArcModelEventTypes.Request.State.update, {
      bubbles: true,
      composed: true,
    });
    this[changeRecordValue] = record;
    this[typeValue] = requestType;
  }

  /**
   * @return {ARCEntityChangeRecord} Change record
   */
  get changeRecord() {
    return this[changeRecordValue];
  }

  /**
   * @return {string} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }
}

/**
 * An event to be dispatched to delete an ARC request object from the data store.
 */
export class ARCRequestDeleteEvent extends CustomEvent {
  /**
   * @param {string} requestType Request type. Either `saved` or `history`.
   * @param {string} id Request id
   * @param {string=} rev A revision ID to delete
   */
  constructor(requestType, id, rev) {
    if (!requestType) {
      throw new Error('The requestType is missing.');
    }
    if (!id) {
      throw new Error('The request ID is missing.');
    }
    super(ArcModelEventTypes.Request.delete, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[requestIdValue] = id;
    this[typeValue] = requestType;
    this[revisionValue] = rev;
  }

  /**
   * Requested ARC request ID.
   * @return {string} ARC request ID used to initialize the event.
   */
  get id() {
    return this[requestIdValue];
  }

  /**
   * @return {string|undefined} A revision ID to delete
   */
  get rev() {
    return this[revisionValue];
  }

  /**
   * @return {string} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }
}

/**
 * An event to be dispatched to delete a list of ARC request objects from the data store.
 */
export class ARCRequestDeleteBulkEvent extends CustomEvent {
  /**
   * @param {string} requestType Request type. Either `saved` or `history`.
   * @param {string[]} ids List of requests to delete
   */
  constructor(requestType, ids) {
    if (!requestType) {
      throw new Error('The requests type is missing.');
    }
    if (!ids) {
      throw new Error('The list of ids is missing.');
    }
    super(ArcModelEventTypes.Request.deleteBulk, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[requestIdValue] = ids;
    this[typeValue] = requestType;
  }

  /**
   * @return {string[]} List of requests to delete used to initialize the event.
   */
  get ids() {
    return this[requestIdValue];
  }

  /**
   * @return {string} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }
}

/**
 * An event to be dispatched to undelete a list of ARC request objects from the data store.
 */
export class ARCRequestUndeleteBulkEvent extends CustomEvent {
  /**
   * @param {string} requestType Request type. Either `saved` or `history`.
   * @param {DeletedEntity[]} requests List of requests to restore
   */
  constructor(requestType, requests) {
    if (!requestType) {
      throw new Error('The requests type is missing.');
    }
    if (!requests) {
      throw new Error('The requests list is missing.');
    }
    super(ArcModelEventTypes.Request.undeleteBulk, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[requestsValue] = requests;
    this[typeValue] = requestType;
  }

  /**
   * @return {DeletedEntity[]} List of requests to restore used to initialize the event.
   */
  get requests() {
    return this[requestsValue];
  }

  /**
   * @return {string} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }
}

/**
 * An event dispatched by the data store when a request object was deleted.
 */
export class ARCRequestDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * @param {string} requestType Request type. Either `saved` or `history`.
   * @param {string} id Request id
   * @param {string} rev An updated revision ID of the delete object.
   */
  constructor(requestType, id, rev) {
    if (!id) {
      throw new Error('The request ID is missing.');
    }
    if (!requestType) {
      throw new Error('The requestType is missing.');
    }
    super(ArcModelEventTypes.Request.State.delete, id, rev);
    this[typeValue] = requestType;
  }

  /**
   * @return {string} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }
}

/**
 * An event dispatched by the UI when requesting a list of requests
 */
export class ARCRequestListEvent extends ARCEntityListEvent {
  /**
   * @param {string} requestType Request type. Either `saved` or `history`.
   * @param {ARCModelListOptions=} [opts={}] Query options.
   */
  constructor(requestType, opts={}) {
    if (!requestType) {
      throw new Error('The request type is missing.');
    }
    super(ArcModelEventTypes.Request.list, opts);
    this[typeValue] = requestType;
  }

  /**
   * @return {string} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }
}

/**
 * An event dispatched by the UI when querying the request models for specific data.
 */
export class ARCRequestQueryEvent extends CustomEvent {
  /**
   * @param {string} term The search term for the query function
   * @param {string=} requestType The type of the requests to search for.
   * By default it returns all data.
   * @param {boolean=} detailed If set it uses slower algorithm but performs full
   * search on the index. When false it only uses filer like query + '*'.
   */
  constructor(term, requestType, detailed) {
    if (!term) {
      throw new Error('The term is missing.');
    }
    super(ArcModelEventTypes.Request.query, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[typeValue] = requestType;
    this[termValue] = term;
    this[detailedValue] = detailed;
  }

  /**
   * @return {string|undefined} The request type. Either `saved` or `history`.
   */
  get requestType() {
    return this[typeValue];
  }

  /**
   * @return {string} The search term for the query function used to initialize the event
   */
  get term() {
    return this[termValue];
  }

  /**
   * @return {boolean} If set it uses slower algorithm but performs full
   * search on the index.
   */
  get detailed() {
    return this[detailedValue] || false;
  }
}

/**
 * An event dispatched by the UI to query for the list of requests in a project.
 */
export class ARCRequestListProjectRequestsEvent extends CustomEvent {
  /**
   * @param {string} id The project id
   * @param {ARCRequestRestoreOptions=} opts Request restore options.
   */
  constructor(id, opts) {
    if (!id) {
      throw new Error('The project id is missing.');
    }
    super(ArcModelEventTypes.Request.projectlist, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[requestIdValue] = id;
    this[optionsValue] = opts;
  }

  /**
   * The project id
   * @return {string} The project id used to initialize the event.
   */
  get id() {
    return this[requestIdValue];
  }

  /**
   * @return {ARCRequestRestoreOptions|undefined} ARC request read options.
   */
  get opts() {
    return this[optionsValue];
  }
}

/**
 * Dispatches an event handled by the data store to read an ARC request metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType Request type. Either `saved` or `history`.
 * @param {string} id Request id
 * @param {ARCRequestEventRequestOptions=} opts ARC request read options.
 * @return {Promise<ARCHistoryRequest|ARCSavedRequest>} Promise resolved to an ARC request model.
 */
export async function readAction(target, requestType, id, opts) {
  const e = new ARCRequestReadEvent(requestType, id, opts);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to read a list of ARC requests metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType Request type. Either `saved` or `history`.
 * @param {string[]} ids List of ids to read
 * @param {ARCRequestEventRequestOptions=} opts ARC request read options.
 * @return {Promise<(ARCHistoryRequest|ARCSavedRequest)[]>} Promise resolved to a list of ARC requests.
 */
export async function readBulkAction(target, requestType, ids, opts) {
  const e = new ARCRequestReadBulkEvent(requestType, ids, opts);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to read an ARC request metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType Request type. Either `saved` or `history`.
 * @param {ARCModelListOptions=} opts List options.
 * @return {Promise<ARCModelListResult>} Promise resolved to list of results
 */
export async function listAction(target, requestType, opts) {
  const e = new ARCRequestListEvent(requestType, opts);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to query for ARC request data
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} term The search term for the query function
 * @param {string=} requestType The type of the requests to search for.
 * By default it returns all data.
 * @param {boolean=} detailed If set it uses slower algorithm but performs full
 * search on the index. When false it only uses filer like query + '*'.
 * @return {Promise<(ARCHistoryRequest|ARCSavedRequest)[]>} Promise resolved to list of results
 */
export async function queryAction(target, term, requestType, detailed) {
  const e = new ARCRequestQueryEvent(term, requestType, detailed);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to update an ARC request metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType Request type. Either `saved` or `history`.
 * @param {ARCHistoryRequest|ARCSavedRequest} request An ARC request to update.
 * @return {Promise<ARCEntityChangeRecord>} Promise resolved to a change record
 */
export async function updateAction(target, requestType, request) {
  const e = new ARCRequestUpdateEvent(requestType, request);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to save an ARC request object with metadata`.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType Request type. Either `saved` or `history`.
 * @param {ARCHistoryRequest|ARCSavedRequest} request An ARC request to update.
 * @param {string[]=} projects List of project names to create with this request
 * and attach it to the request object. Only relevant for `saved` type.
 * @return {Promise<ARCEntityChangeRecord>} Promise resolved to a change record
 */
export async function storeAction(target, requestType, request, projects) {
  const e = new ARCRequestStoreEvent(requestType, request, projects);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to read an ARC request metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType Request type. Either `saved` or `history`.
 * @param {(ARCHistoryRequest|ARCSavedRequest)[]} requests List of ARC request objects to update.
 * @return {Promise<ARCEntityChangeRecord[]>} Promise resolved to a list of change record for each object
 */
export async function updateBulkAction(target, requestType, requests) {
  const e = new ARCRequestUpdateBulkEvent(requestType, requests);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to delete an ARC request from the store.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType Request type. Either `saved` or `history`.
 * @param {string} id Request id
 * @param {string=} rev A revision ID to delete
 * @return {Promise<DeletedEntity>} Promise resolved to a new revision after delete.
 */
export async function deleteAction(target, requestType, id, rev) {
  const e = new ARCRequestDeleteEvent(requestType, id, rev);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to delete an ARC request from the store.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType Request type. Either `saved` or `history`.
 * @param {string[]} ids List of ids to delete.
 * @return {Promise<DeletedEntity[]>} Promise resolved to a a list of deleted revisions
 */
export async function deleteBulkAction(target, requestType, ids) {
  const e = new ARCRequestDeleteBulkEvent(requestType, ids);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to delete an ARC request from the store.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType Request type. Either `saved` or `history`.
 * @param {DeletedEntity[]} requests List of requests to restore
 * @return {Promise<ARCEntityChangeRecord[]>} Promise resolved to a a list of change records
 */
export async function undeleteBulkAction(target, requestType, requests) {
  const e = new ARCRequestUndeleteBulkEvent(requestType, requests);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to list all requests that are association with a project.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The project id
 * @param {ARCRequestRestoreOptions=} opts ARC request read options.
 * @return {Promise<(ARCHistoryRequest|ARCSavedRequest)[]>} Promise resolved to a a list of requests
 */
export async function listProjectAction(target, id, opts) {
  const e = new ARCRequestListProjectRequestsEvent(id, opts);
  target.dispatchEvent(e);
  return e.detail.result;
}


//
// State events
//

/**
 * Dispatches an event after a request object was updated
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType ARC request type
 * @param {ARCEntityChangeRecord} record Change record
 */
export function updatedState(target, requestType, record) {
  const e = new ARCRequestUpdatedEvent(requestType, record);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event after a request was deleted
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} requestType ARC request type
 * @param {string} id Deleted ARC request ID.
 * @param {string} rev Updated revision of the deleted ARC request entity.
 */
export function deletedState(target, requestType, id, rev) {
  const e = new ARCRequestDeletedEvent(requestType, id, rev);
  target.dispatchEvent(e);
}
