/* eslint-disable max-classes-per-file */
import { ArcModelEventTypes } from './ArcModelEventTypes.js';
import { ARCEntityDeletedEvent, ARCEntityListEvent } from './BaseEvents.js';

/** @typedef {import('../../').UrlHistory.ARCUrlHistory} ARCUrlHistory */
/** @typedef {import('../../').Model.ARCEntityChangeRecord} ARCEntityChangeRecord */
/** @typedef {import('../../').Model.ARCModelListOptions} ARCModelListOptions */
/** @typedef {import('../../').Model.ARCModelListResult} ARCModelListResult */
/** @typedef {import('../../').Model.DeletedEntity} DeletedEntity */

export const urlValue = Symbol('urlValue');
export const changeRecordValue = Symbol('changeRecordValue');
export const termValue = Symbol('termValue');
export const idValue = Symbol('idValue');

/**
 * An event dispatched to the store an url in the history
 */
export class ARCHistoryUrlInsertEvent extends CustomEvent {
  /**
   * @return {string} The URL to store used to initialize this event
   */
  get url() {
    return this[urlValue];
  }

  /**
   * @param {string} url The URL to store
   */
  constructor(url) {
    super(ArcModelEventTypes.UrlHistory.insert, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[urlValue] = url;
  }
}

/**
 * An event dispatched from the store after an URL is updated
 */
export class ARCHistoryUrlUpdatedEvent extends Event {
  /**
   * @param {ARCEntityChangeRecord} record URL change record.
   */
  constructor(record) {
    super(ArcModelEventTypes.UrlHistory.State.update, {
      bubbles: true,
      composed: true,
    });
    this[changeRecordValue] = record;
  }

  /**
   * @return {ARCEntityChangeRecord} Change record
   */
  get changeRecord() {
    return this[changeRecordValue];
  }
}

/**
 * An event to be dispatched to list WS URL history
 */
export class ARCHistoryUrlListEvent extends ARCEntityListEvent {
  /**
   * @param {ARCModelListOptions=} opts Query options.
   */
  constructor(opts) {
    super(ArcModelEventTypes.UrlHistory.list, opts);
  }
}

/**
 * An event dispatched by the UI when querying for a list of history URLs
 */
export class ARCHistoryUrlQueryEvent extends CustomEvent {
  /**
   * @return {string} The search term for the query function used to initialize the event
   */
  get term() {
    return this[termValue];
  }

  /**
   * @param {string} term The search term for the query function
   */
  constructor(term) {
    super(ArcModelEventTypes.UrlHistory.query, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[termValue] = term;
  }
}

/**
 * An event dispatched by the UI to remove an object from the history URLs
 */
export class ARCHistoryUrlDeleteEvent extends CustomEvent {
  /**
   * @return {string} The URL to store used to initialize this event
   */
  get id() {
    return this[idValue];
  }

  /**
   * @param {string} id The store object id to remove.
   */
  constructor(id) {
    if (typeof id !== 'string') {
      throw new Error('Expected id argument to be a string.');
    }
    super(ArcModelEventTypes.UrlHistory.delete, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[idValue] = id;
  }
}

/**
 * An event dispatched by the data store when a host rule entity was deleted.
 */
export class ARCHistoryUrlDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * @param {string} id The id of the deleted object
   * @param {string} rev An updated revision ID of the deleted object.
   */
  constructor(id, rev) {
    if (typeof id !== 'string') {
      throw new Error('Expected id argument to be a string.');
    }
    super(ArcModelEventTypes.UrlHistory.State.delete, id, rev);
  }
}

/**
 * Dispatches an event handled by the data store to add a WS URL to the history
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} url The URL to insert
 * @return {Promise<ARCEntityChangeRecord>} Promise resolved to the change record for the URL
 */
export async function insertAction(target, url) {
  const e = new ARCHistoryUrlInsertEvent(url);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to list a page of the results
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCModelListOptions=} opts List options.
 * @return {Promise<ARCModelListResult>} Promise resolved to the change record for the URL
 */
export async function listAction(target, opts) {
  const e = new ARCHistoryUrlListEvent(opts);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to list a page of the results
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} term The query term
 * @return {Promise<ARCUrlHistory[]>} Promise resolved to the change record for the URL
 */
export async function queryAction(target, term) {
  const e = new ARCHistoryUrlQueryEvent(term);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to list a page of the results
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The store object id to remove.
 * @return {Promise<DeletedEntity>} Delete record
 */
export async function deleteAction(target, id) {
  const e = new ARCHistoryUrlDeleteEvent(id);
  target.dispatchEvent(e);
  return e.detail.result;
}

//
// State events
//

/**
 * Dispatches an event after an URL entity was updated
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCEntityChangeRecord} record The change record
 */
export function updatedState(target, record) {
  const e = new ARCHistoryUrlUpdatedEvent(record);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event after a host rule was deleted
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id Deleted host rule id.
 * @param {string} rev Updated revision of the deleted entity.
 */
export function deletedState(target, id, rev) {
  const e = new ARCHistoryUrlDeletedEvent(id, rev);
  target.dispatchEvent(e);
}
