/* eslint-disable max-classes-per-file */
import { ArcModelEventTypes } from './ArcModelEventTypes.js';

export const requestsValue = Symbol('requestsValue');
export const typeValue = Symbol('typeValue');
export const detailedValue = Symbol('detailedValue');
export const termValue = Symbol('termValue');

/** @typedef {import('@advanced-rest-client/arc-types').Indexer.IndexableRequest} IndexableRequest */
/** @typedef {import('@advanced-rest-client/arc-types').Indexer.IndexQueryResult} IndexQueryResult */

/**
 * An event dispatched to the store to update an URL index data
 */
export class ARCUrlIndexUpdateEvent extends CustomEvent {
  /**
   * @param {IndexableRequest[]} requests List of requests to index.
   */
  constructor(requests) {
    if (!Array.isArray(requests)) {
      throw new Error('The requests expected to be an array.');
    }
    super(ArcModelEventTypes.UrlIndexer.update, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[requestsValue] = requests;
  }

  /**
   * @return {IndexableRequest[]} List of requests to index.
   */
  get requests() {
    return /** @type IndexableRequest[] */ (this[requestsValue]);
  }
}


/**
 * An event dispatched by the UI when querying the requests URL index data.
 */
export class ARCUrlIndexQueryEvent extends CustomEvent {
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
    super(ArcModelEventTypes.UrlIndexer.query, {
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
 * Dispatches an event handled by the data store to update indexed data.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {IndexableRequest[]} requests List of requests to index.
 * @return {Promise<void>} Promise resolved when indexes were updated
 */
export async function updateAction(target, requests) {
  const e = new ARCUrlIndexUpdateEvent(requests);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to query for ARC request URL indexed data
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} term The search term for the query function
 * @param {string=} requestType The type of the requests to search for.
 * By default it returns all data.
 * @param {boolean=} detailed If set it uses slower algorithm but performs full
 * search on the index. When false it only uses filer like query + '*'.
 * @return {Promise<IndexQueryResult>} Promise resolved to list of results
 */
export async function queryAction(target, term, requestType, detailed) {
  const e = new ARCUrlIndexQueryEvent(term, requestType, detailed);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event informing that the indexer has finished the indexing task
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 */
export async function finishedState(target) {
  const e = new Event(ArcModelEventTypes.UrlIndexer.State.finished, {
    bubbles: true,
    composed: true,
  });
  target.dispatchEvent(e);
}
