/* eslint-disable max-classes-per-file */
import { ArcModelEventTypes } from './ArcModelEventTypes.js';
import { ARCEntityDeletedEvent, ARCEntityListEvent } from './BaseEvents.js';

/** @typedef {import('../../').RestApi.ARCRestApiIndex} ARCRestApiIndex */
/** @typedef {import('../../').RestApi.ARCRestApi} ARCRestApi */
/** @typedef {import('../../').Model.DeletedEntity} DeletedEntity */
/** @typedef {import('../../').Model.ARCModelListResult} ARCModelListResult */
/** @typedef {import('../../').Model.ARCModelListOptions} ARCModelListOptions */
/** @typedef {import('../../').Model.ARCEntityChangeRecord} ARCEntityChangeRecord */

export const entityValue = Symbol('entityValue');
export const dataValue = Symbol('dataValue');
export const idValue = Symbol('idValue');
export const revisionValue = Symbol('revisionValue');
export const changeRecordValue = Symbol('changeRecordValue');
export const versionValue = Symbol('versionValue');

/**
 * An event to be dispatched to read a REST API index data.
 */
export class ARCRestApiReadEvent extends CustomEvent {
  /**
   * @return {string|null} Entity revision ID used to initialize the event.
   */
  get rev() {
    return this[revisionValue];
  }

  /**
   * @return {string} Entity id used to initialize the event.
   */
  get id() {
    return this[idValue];
  }

  /**
   * @param {string} id The entity id
   * @param {string=} rev The entity revision
   */
  constructor(id, rev) {
    super(ArcModelEventTypes.RestApi.read, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[idValue] = id;
    this[revisionValue] = rev;
  }
}

/**
 * An event dispatched to update a REST API index data.
 */
export class ARCRestApiUpdateEvent extends CustomEvent {
  /**
   * @return {ARCRestApiIndex} The entity used to initialize this event
   */
  get entity() {
    return this[entityValue];
  }

  /**
   * @param {ARCRestApiIndex} entity The entity to update.
   */
  constructor(entity) {
    super(ArcModelEventTypes.RestApi.update, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[entityValue] = entity;
  }
}

/**
 * An event dispatched to the store to update list of projects in a single transaction.
 */
export class ARCRestApiUpdateBulkEvent extends CustomEvent {
  /**
   * @return {ARCRestApiIndex[]} A list of entities used to initialize the event
   */
  get entities() {
    return this[entityValue];
  }

  /**
   * @param {ARCRestApiIndex[]} entities A list of entities to update.
   */
  constructor(entities) {
    super(ArcModelEventTypes.RestApi.updateBulk, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[entityValue] = entities;
  }
}

/**
 * An event dispatched from the store after a REST API index data has changed
 */
export class ARCRestApiUpdatedEvent extends Event {
  /**
   * @param {ARCEntityChangeRecord} record Change record for the updated entity
   */
  constructor(record) {
    super(ArcModelEventTypes.RestApi.State.update, {
      bubbles: true,
      composed: true,
    });
    this[changeRecordValue] = record;
  }

  /**
   * @return {ARCEntityChangeRecord} Change record for the updated entity used to initialize this event.
   */
  get changeRecord() {
    return this[changeRecordValue];
  }
}

/**
 * An event dispatched to the store to delete a REST API index data
 */
export class ARCRestApiDeleteEvent extends CustomEvent {
  /**
   * @return {string} The id of the entity used to initialize the event.
   */
  get id() {
    return this[idValue];
  }

  /**
   * @return {string|undefined} The optional revision used to initialize the event.
   */
  get rev() {
    return this[revisionValue];
  }

  /**
   * @param {string} id The id of the entity to delete
   * @param {string=} rev The optional revision of the entity
   */
  constructor(id, rev) {
    super(ArcModelEventTypes.RestApi.delete, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[idValue] = id;
    this[revisionValue] = rev;
  }
}

/**
 * An event dispatched by the store after a REST API index data was deleted.
 */
export class ARCRestApiDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * @param {string} id Deleted entity id
   * @param {string} rev Updated revision
   */
  constructor(id, rev) {
    super(ArcModelEventTypes.RestApi.State.delete, id, rev);
  }
}

/**
 * An event to be dispatched to list the REST API index data
 */
export class ARCRestApiListEvent extends ARCEntityListEvent {
  /**
   * @param {ARCModelListOptions=} opts Query options.
   */
  constructor(opts) {
    super(ArcModelEventTypes.RestApi.list, opts);
  }
}

/**
 * An event to be dispatched to read a REST API data model.
 */
export class ARCRestApiDataReadEvent extends CustomEvent {
  /**
   * @return {string|null} Entity revision ID used to initialize the event.
   */
  get rev() {
    return this[revisionValue];
  }

  /**
   * @return {string} Entity id used to initialize the event.
   */
  get id() {
    return this[idValue];
  }

  /**
   * @param {string} id The entity id
   * @param {string=} rev The entity revision
   */
  constructor(id, rev) {
    super(ArcModelEventTypes.RestApi.dataRead, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[idValue] = id;
    this[revisionValue] = rev;
  }
}

/**
 * An event dispatched to update a REST API data model.
 */
export class ARCRestApiDataUpdateEvent extends CustomEvent {
  /**
   * @return {ARCRestApi} The entity used to initialize this event
   */
  get entity() {
    return this[entityValue];
  }

  /**
   * @param {ARCRestApi} entity The entity to update.
   */
  constructor(entity) {
    super(ArcModelEventTypes.RestApi.dataUpdate, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[entityValue] = entity;
  }
}

/**
 * An event dispatched from the store after a REST API data model has changed
 */
export class ARCRestApiDataUpdatedEvent extends Event {
  /**
   * @param {ARCEntityChangeRecord} record Change record for the updated entity
   */
  constructor(record) {
    super(ArcModelEventTypes.RestApi.State.dataUpdate, {
      bubbles: true,
      composed: true,
    });
    this[changeRecordValue] = record;
  }

  /**
   * @return {ARCEntityChangeRecord} Change record for the updated entity used to initialize this event.
   */
  get changeRecord() {
    return this[changeRecordValue];
  }
}

/**
 * An event dispatched to the store to delete a REST API version data
 */
export class ARCRestApiVersionDeleteEvent extends CustomEvent {
  /**
   * @return {string} The id of the entity used to initialize the event.
   */
  get id() {
    return this[idValue];
  }

  /**
   * @return {string} The API version used to initialize the event.
   */
  get version() {
    return this[versionValue];
  }

  /**
   * @param {string} id The id of the entity to delete
   * @param {string} version The version of the API to delete
   */
  constructor(id, version) {
    super(ArcModelEventTypes.RestApi.versionDelete, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[idValue] = id;
    this[versionValue] = version;
  }
}

/**
 * An event dispatched by the store after a REST API version was deleted.
 */
export class ARCRestApiVersionDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * Index id of the removed item
   */
  get indexId() {
    return this[idValue];
  }

  /**
   * Removed version name
   */
  get version() {
    return this[versionValue];
  }

  /**
   * @param {string} id Deleted entity id
   * @param {string} rev Updated revision
   * @param {string} indexId Index id of the removed item
   * @param {string} version Removed version name
   */
  constructor(id, rev, indexId, version) {
    super(ArcModelEventTypes.RestApi.State.versionDelete, id, rev);
    this[idValue] = indexId;
    this[versionValue] = version;
  }
}

/**
 * Dispatches an event handled by the data store to read the REST API index metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The entity id
 * @param {string=} rev The optional revision
 * @return {Promise<ARCRestApiIndex>} Promise resolved to the entity
 */
export async function readAction(target, id, rev) {
  const e = new ARCRestApiReadEvent(id, rev);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to update an API Index entity
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCRestApiIndex} entity The entity to update.
 * @return {Promise<ARCEntityChangeRecord>} Promise resolved to a the change record
 */
export async function updateAction(target, entity) {
  const e = new ARCRestApiUpdateEvent(entity);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to update a list of REST API index entities.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCRestApiIndex[]} entities The list of entities to update.
 * @return {Promise<ARCEntityChangeRecord[]>} Promise resolved to a list of change records
 */
export async function updateBulkAction(target, entities) {
  const e = new ARCRestApiUpdateBulkEvent(entities);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to delete a RETS API.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The id of the entity to delete.
 * @param {string=} rev The revision of the entity.
 * @return {Promise<DeletedEntity>} Promise resolved to the delete record
 */
export async function deleteAction(target, id, rev) {
  const e = new ARCRestApiDeleteEvent(id, rev);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event to list the REST API index data.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCModelListOptions=} opts Query options.
 * @return {Promise<ARCModelListResult>} List query result.
 */
export async function listAction(target, opts) {
  const e = new ARCRestApiListEvent(opts);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to read the REST API data metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The entity id
 * @param {string=} rev The optional revision
 * @return {Promise<ARCRestApi>} Promise resolved to the entity
 */
export async function dataReadAction(target, id, rev) {
  const e = new ARCRestApiDataReadEvent(id, rev);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to update a REST API data entity
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCRestApi} entity The entity to update.
 * @return {Promise<ARCEntityChangeRecord>} Promise resolved to a the change record
 */
export async function dataUpdateAction(target, entity) {
  const e = new ARCRestApiDataUpdateEvent(entity);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to delete a version of a RETS API.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The id of the entity to delete.
 * @param {string} version The version of the API to delete
 * @return {Promise<DeletedEntity>} Promise resolved to the delete record
 */
export async function versionDeleteAction(target, id, version) {
  const e = new ARCRestApiVersionDeleteEvent(id, version);
  target.dispatchEvent(e);
  return e.detail.result;
}

//
// State events
//

/**
 * Dispatches an event after a REST API index entity was updated
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCEntityChangeRecord} record Change record
 */
export function updatedState(target, record) {
  const e = new ARCRestApiUpdatedEvent(record);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event after a REST API was deleted
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id Deleted entity id
 * @param {string} rev Updated revision of the entity.
 */
export function deletedState(target, id, rev) {
  const e = new ARCRestApiDeletedEvent(id, rev);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event after a REST API data entity was updated
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCEntityChangeRecord} record Change record
 */
export function dataUpdatedState(target, record) {
  const e = new ARCRestApiDataUpdatedEvent(record);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event after a REST API version was deleted
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id Deleted entity id
 * @param {string} rev Updated revision of the entity.
 * @param {string} indexId Index id of the removed item
 * @param {string} version Removed version name
 */
export function versionDeletedState(target, id, rev, indexId, version) {
  const e = new ARCRestApiVersionDeletedEvent(id, rev, indexId, version);
  target.dispatchEvent(e);
}
