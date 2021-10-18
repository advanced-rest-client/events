/* eslint-disable max-classes-per-file */
import { AuthData, Model } from '../../';
import { ARCModelReadEventDetail, ARCModelUpdateEventDetail } from './BaseEvents';

/**
 * An event dispatched to the store to update an authorization data object.
 */
export declare class ARCAuthDataUpdateEvent extends CustomEvent<ARCModelUpdateEventDetail<AuthData.ARCAuthData>> {
  /**
   * The URL of the request associated with the authorization method
   */
  readonly url: string;

  /**
   * The name of the authorization method
   */
  readonly method: string;

  /**
   * The authorization data to store.
   */
  readonly authData: AuthData.ARCAuthData;

  /**
   * @param url The URL of the request associated with the authorization method
   * @param method The name of the authorization method
   * @param authData The authorization data to store.
   */
  constructor(url: string, method: string, authData: AuthData.ARCAuthData);
}

/**
 * An event dispatched to the store to query for the authorization data
 */
export declare class ARCAuthDataQueryEvent extends CustomEvent<ARCModelReadEventDetail<AuthData.ARCAuthData>> {
  /**
   * The URL of the request associated with the authorization method
   */
  readonly url: string;

  /**
   * The name of the authorization method
   */
  readonly method: string;

  /**
   * @param url The URL of the request associated with the authorization method
   * @param method The name of the authorization method
   */
  constructor(url: string, method: string);
}

/**
 * An event dispatched from the store after updating an authorization data
 */
export declare class ARCAuthDataUpdatedEvent extends Event {
  /**
   * The change record
   */
  readonly changeRecord: Model.ARCEntityChangeRecord<AuthData.ARCAuthData>;

  /**
   * @param record AuthData change record.
   */
  constructor(record: Model.ARCEntityChangeRecord<AuthData.ARCAuthData>);
}


/**
 * Dispatches an event handled by the data store to update an authorization data.
 *
 * @param target A node on which to dispatch the event.
 * @param url The URL of the request associated with the authorization method
 * @param method The name of the authorization method
 * @param authData The authorization data to store.
 * @returns Promise resolved to a the auth change record
 */
export declare function updateAction(target: EventTarget, url: string, method: string, authData: AuthData.ARCAuthData): Promise<Model.ARCEntityChangeRecord<AuthData.ARCAuthData>>;

/**
 * Dispatches an event handled by the data store to query for ARC authorization data
 *
 * @param target A node on which to dispatch the event.
 * @param url The URL of the request associated with the authorization method
 * @param method The name of the authorization method
 * @returns A promise resolved to n auth data model.
 */
export declare function queryAction(target: EventTarget, url: string, method: string): Promise<AuthData.ARCAuthData>;

/**
 * Dispatches an event informing about a change in the auth data model.
 *
 * @param target A node on which to dispatch the event.
 * @param record AuthData change record.
 */
export declare function updatedState(target: EventTarget, record: Model.ARCEntityChangeRecord<AuthData.ARCAuthData>): void;
