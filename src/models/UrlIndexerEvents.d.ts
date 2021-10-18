import { Indexer } from '../../';
import {
  ARCModelVoidResultEventDetail,
  ARCModelReadEventDetail,
} from './BaseEvents';

export const requestsValue: symbol;
export const typeValue: symbol;
export const detailedValue: symbol;
export const termValue: symbol;

/**
 * An event dispatched to the store to update an URL index data
 */
export declare class ARCUrlIndexUpdateEvent extends CustomEvent<ARCModelVoidResultEventDetail> {
  /**
   * @param requests List of requests to index.
   */
  constructor(requests: Indexer.IndexableRequest[]);

  /**
   * List of requests to index.
   */
  readonly requests: Indexer.IndexableRequest[];
}


/**
 * An event dispatched by the UI when querying the requests URL index data.
 */
export declare class ARCUrlIndexQueryEvent extends CustomEvent<ARCModelReadEventDetail<Indexer.IndexQueryResult>> {
  /**
   * @param term The search term for the query function
   * @param requestType The type of the requests to search for.
   * By default it returns all data.
   * @param detailed If set it uses slower algorithm but performs full
   * search on the index. When false it only uses filer like query + '*'.
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
  readonly detailed?: boolean;
}

/**
 * Dispatches an event handled by the data store to update indexed data.
 *
 * @param target A node on which to dispatch the event.
 * @param requests List of requests to index.
 * @returns Promise resolved when indexes were updated
 */
export declare function updateAction(target: EventTarget, requests: Indexer.IndexableRequest[]): Promise<void>;

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
export declare function queryAction(target: EventTarget, term: string, requestType?: string, detailed?: boolean): Promise<Indexer.IndexQueryResult>


/**
 * Dispatches an event informing that the indexer has finished the indexing task
 *
 * @param target A node on which to dispatch the event.
 */
export declare function finishedState(target: EventTarget): void;
