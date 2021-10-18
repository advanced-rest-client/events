/* eslint-disable max-classes-per-file */
import { ArcModelEventTypes } from './ArcModelEventTypes.js';
import { ARCEntityListEvent } from './BaseEvents.js';

/** @typedef {import('../../').UrlHistory.ARCWebsocketUrlHistory} ARCWebsocketUrlHistory */
/** @typedef {import('../../').Model.ARCModelListResult} ARCModelListResult */
/** @typedef {import('../../').Model.ARCModelListOptions} ARCModelListOptions */
/** @typedef {import('../../').Model.ARCEntityChangeRecord} ARCEntityChangeRecord */

export const urlValue = Symbol('urlValue');
export const changeRecordValue = Symbol('changeRecordValue');
export const termValue = Symbol('termValue');

/**
 * An event dispatched to the store WS url in the history
 */
export class ARCWSUrlInsertEvent extends CustomEvent {
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
    super(ArcModelEventTypes.WSUrlHistory.insert, {
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
export class ARCWSUrlUpdatedEvent extends Event {
  /**
   * @param {ARCEntityChangeRecord} record URL change record.
   */
  constructor(record) {
    super(ArcModelEventTypes.WSUrlHistory.State.update, {
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
export class ARCWSUrlListEvent extends ARCEntityListEvent {
  /**
   * @param {ARCModelListOptions=} opts Query options.
   */
  constructor(opts) {
    super(ArcModelEventTypes.WSUrlHistory.list, opts);
  }
}

/**
 * An event dispatched by the UI when querying for a list of history URLs
 */
export class ARCWSUrlQueryEvent extends CustomEvent {
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
    super(ArcModelEventTypes.WSUrlHistory.query, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[termValue] = term;
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
  const e = new ARCWSUrlInsertEvent(url);
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
  const e = new ARCWSUrlListEvent(opts);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to list a page of the results
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} term THe query term
 * @return {Promise<ARCWebsocketUrlHistory[]>} Promise resolved to the change record for the URL
 */
export async function queryAction(target, term) {
  const e = new ARCWSUrlQueryEvent(term);
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
  const e = new ARCWSUrlUpdatedEvent(record);
  target.dispatchEvent(e);
}
