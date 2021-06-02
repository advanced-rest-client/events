/* eslint-disable max-classes-per-file */

import { ArcModelEventTypes } from './ArcModelEventTypes.js';

export const idValue = Symbol('idValue');
export const revisionValue = Symbol('revisionValue');
export const limitValue = Symbol('limitValue');
export const nextPageTokenValue = Symbol('nextPageTokenValue');
export const storesValue = Symbol('storesValue');

/** @typedef {import('@advanced-rest-client/arc-types').Model.ARCModelListOptions} ARCModelListOptions */

/**
 * An event dispatched by the store after deleting an entity.
 * Check the event type to learn which type of an entity was deleted.
 */
export class ARCEntityDeletedEvent extends Event {
  /**
   * @param {string} type The event type
   * @param {string} id Entity id
   * @param {string} rev Entity updated revision id
   */
  constructor(type, id, rev) {
    if (typeof type !== 'string') {
      throw new Error('The type argument expected to be a string.');
    }
    if (typeof id !== 'string') {
      throw new Error('The id argument expected to be a string.');
    }
    if (typeof rev !== 'string') {
      throw new Error('The rev argument expected to be a string.');
    }
    super(type, {
      bubbles: true,
      composed: true,
    });
    this[idValue] = id;
    this[revisionValue] = rev;
  }

  /**
   * @return {string} The id of the deleted entity
   */
  get id() {
    return this[idValue];
  }

  /**
   * @return {string} New revision id.
   */
  get rev() {
    return this[revisionValue];
  }
}

/**
 * A base class for data store query events.
 */
export class ARCEntityListEvent extends CustomEvent {
  /**
   * @return {number|null} The number of results per the page.
   */
  get limit() {
    return this[limitValue];
  }

  /**
   * @return {string|null} A string that should be used with pagination.
   */
  get nextPageToken() {
    return this[nextPageTokenValue];
  }

  /**
   * @param {string} type The event type
   * @param {ARCModelListOptions=} [opts={}] Query options.
   */
  constructor(type, opts={}) {
    if (typeof type !== 'string') {
      throw new Error('The type argument expected to be a string.');
    }
    super(type, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });

    this[limitValue] = opts.limit;
    this[nextPageTokenValue] = opts.nextPageToken;
  }
}

/**
 * An event to be dispatched by the UI to destroy all data in a data
 * store.
 */
export class ARCModelDeleteEvent extends CustomEvent {
  /**
   * @param {string[]} stores A list of store names to delete the data from
   */
  constructor(stores) {
    if (!Array.isArray(stores)) {
      throw new Error('The stores expected to be an array.');
    }
    super(ArcModelEventTypes.destroy, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[storesValue] = stores;
  }

  /**
   * @return {string[]} The list of stores used to initialize the event.
   */
  get stores() {
    return this[storesValue];
  }
}

/**
 * An event dispatched by the data store to inform the application that a data model
 * has been destroyed.
 */
export class ARCModelStateDeleteEvent extends Event {
  /**
   * @param {string} store The name of the deleted store
   */
  constructor(store) {
    if (typeof store !== 'string') {
      throw new Error('The store expected to be a string.');
    }
    super(ArcModelEventTypes.destroyed, {
      bubbles: true,
      composed: true,
    });
    this[storesValue] = store;
  }

  /**
   * @return {string} The name of the deleted store used to initialize the event.
   */
  get store() {
    return this[storesValue];
  }
}
