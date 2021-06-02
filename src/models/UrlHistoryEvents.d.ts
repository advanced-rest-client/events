import { UrlHistory, Model } from '@advanced-rest-client/arc-types';
import {
  ARCModelReadBulkEventDetail,
  ARCModelUpdateEventDetail,
  ARCEntityListEvent,
} from './BaseEvents';

export declare const urlValue: symbol;
export declare const changeRecordValue: symbol;
export declare const termValue: symbol;

/**
 * An event dispatched to the store an url in the history
 */
export declare class ARCHistoryUrlInsertEvent extends CustomEvent<ARCModelUpdateEventDetail<UrlHistory.ARCUrlHistory>> {
  /**
   * The URL to store used to initialize this event
   */
  readonly url: string;

  /**
   * @param url The URL to store
   */
  constructor(url: string);
}

/**
 * An event dispatched from the store after an URL is updated
 */
export declare class ARCHistoryUrlUpdatedEvent extends Event {
  /**
   * The change record used to initialize this event
   */
  readonly changeRecord: Model.ARCEntityChangeRecord<UrlHistory.ARCUrlHistory>;

  /**
   * @param record URL change record.
   */
  constructor(record: Model.ARCEntityChangeRecord<UrlHistory.ARCUrlHistory>);
}

/**
 * An event to be dispatched to list the URL history
 */
export declare class ARCHistoryUrlListEvent extends ARCEntityListEvent<UrlHistory.ARCUrlHistory> {
  /**
   * @param opts Query options.
   */
  constructor(opts?: Model.ARCModelListOptions);
}

/**
 * An event dispatched by the UI when querying for a list of history URLs
 */
export declare class ARCHistoryUrlQueryEvent extends CustomEvent<ARCModelReadBulkEventDetail<UrlHistory.ARCUrlHistory>> {
  /**
   * The search term for the query function used to initialize the event
   */
  readonly term: string;

  /**
   * @param {string} term The search term for the query function
   */
  constructor(term: string);
}

/**
 * Dispatches an event handled by the data store to add an URL to the history
 *
 * @param target A node on which to dispatch the event.
 * @param url The URL to insert
 * @returns Promise resolved to the change record for the URL
 */
export declare function insertAction(target: EventTarget, url: string): Promise<Model.ARCEntityChangeRecord<UrlHistory.ARCUrlHistory>>;

/**
 * Dispatches an event handled by the data store to list a page of the results
 *
 * @param target A node on which to dispatch the event.
 * @param opts List options.
 * @returns Promise resolved to the change record for the URL
 */
export declare function listAction(target: EventTarget, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<UrlHistory.ARCUrlHistory>>;

/**
 * Dispatches an event handled by the data store to list a page of the results
 *
 * @param target A node on which to dispatch the event.
 * @param term THe query term
 * @returns Promise resolved to the change record for the URL
 */
export declare function queryAction(target: EventTarget, term: string): Promise<UrlHistory.ARCUrlHistory[]>;

//
// State events
//

/**
 * Dispatches an event after an URL entity was updated
 *
 * @param target A node on which to dispatch the event.
 * @param record The change record
 */
export declare function updatedState(target: EventTarget, record: Model.ARCEntityChangeRecord<UrlHistory.ARCUrlHistory>): void;
