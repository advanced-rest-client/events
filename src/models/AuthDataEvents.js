/* eslint-disable max-classes-per-file */
import { ArcModelEventTypes } from './ArcModelEventTypes.js';

/** @typedef {import('@advanced-rest-client/arc-types').AuthData.ARCAuthData} ARCAuthData */
/** @typedef {import('@advanced-rest-client/arc-types').Model.ARCEntityChangeRecord} ARCEntityChangeRecord */

export const urlValue = Symbol('urlValue');
export const methodValue = Symbol('methodValue');
export const authDataValue = Symbol('authDataValue');
export const changeRecordValue = Symbol('changeRecordValue');

/**
 * An event dispatched to the store to update an authorization data object.
 */
export class ARCAuthDataUpdateEvent extends CustomEvent {
  /**
   * @return {string} The URL of the request associated with the authorization method
   */
  get url() {
    return this[urlValue];
  }

  /**
   * @return {string} The name of the authorization method
   */
  get method() {
    return this[methodValue];
  }

  /**
   * @return {ARCAuthData} The authorization data to store.
   */
  get authData() {
    return this[authDataValue];
  }

  /**
   * @param {string} url The URL of the request associated with the authorization method
   * @param {string} method The name of the authorization method
   * @param {ARCAuthData} authData The authorization data to store.
   */
  constructor(url, method, authData) {
    if (typeof url !== 'string') {
      throw new Error('Expected url argument as string.');
    }
    if (typeof method !== 'string') {
      throw new Error('Expected method argument as string.');
    }
    if (!authData) {
      throw new Error('Expected authData argument as an object.');
    }
    super(ArcModelEventTypes.AuthData.update, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[urlValue] = url;
    this[methodValue] = method;
    this[authDataValue] = authData;
  }
}

/**
 * An event dispatched to the store to query for the authorization data
 */
export class ARCAuthDataQueryEvent extends CustomEvent {
  /**
   * @return {string} The URL of the request associated with the authorization method
   */
  get url() {
    return this[urlValue];
  }

  /**
   * @return {string} The name of the authorization method
   */
  get method() {
    return this[methodValue];
  }

  /**
   * @param {string} url The URL of the request associated with the authorization method
   * @param {string} method The name of the authorization method
   */
  constructor(url, method) {
    if (typeof url !== 'string') {
      throw new Error('Expected url argument as string.');
    }
    if (typeof method !== 'string') {
      throw new Error('Expected method argument as string.');
    }
    super(ArcModelEventTypes.AuthData.query, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[urlValue] = url;
    this[methodValue] = method;
  }
}

/**
 * An event dispatched from the store after updating an authorization data
 */
export class ARCAuthDataUpdatedEvent extends Event {
  /**
   * @return {ARCEntityChangeRecord} Change record
   */
  get changeRecord() {
    return this[changeRecordValue];
  }

  /**
   * @param {ARCEntityChangeRecord} record AuthData change record.
   */
  constructor(record) {
    if (!record) {
      throw new Error('Expected record argument as object.');
    }
    super(ArcModelEventTypes.AuthData.State.update, {
      bubbles: true,
      composed: true,
    });
    this[changeRecordValue] = record;
  }
}


/**
 * Dispatches an event handled by the data store to update an authorization data.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} url The URL of the request associated with the authorization method
 * @param {string} method The name of the authorization method
 * @param {ARCAuthData} authData The authorization data to store.
 * @return {Promise<ARCEntityChangeRecord>} Promise resolved to a the auth change record
 */
export async function updateAction(target, url, method, authData) {
  const e = new ARCAuthDataUpdateEvent(url, method, authData);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to query for ARC authorization data
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} url The URL of the request associated with the authorization method
 * @param {string} method The name of the authorization method
 * @return {Promise<ARCAuthData>} Promise resolved to a Project model.
 */
export async function queryAction(target, url, method) {
  const e = new ARCAuthDataQueryEvent(url, method);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event informing about a change in the auth data model.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCEntityChangeRecord} record AuthData change record.
 */
export async function updatedState(target, record) {
  const e = new ARCAuthDataUpdatedEvent(record);
  target.dispatchEvent(e);
}
