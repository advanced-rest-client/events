/* eslint-disable max-classes-per-file */
import { ArcModelEventTypes } from './ArcModelEventTypes.js';
import { ARCEntityDeletedEvent, ARCEntityListEvent } from './BaseEvents.js';

/** @typedef {import('@advanced-rest-client/arc-types').ClientCertificate.ARCClientCertificate} ARCClientCertificate */
/** @typedef {import('@advanced-rest-client/arc-types').Model.ARCEntityChangeRecord} ARCEntityChangeRecord */
/** @typedef {import('@advanced-rest-client/arc-types').Model.ARCModelListOptions} ARCModelListOptions */
/** @typedef {import('@advanced-rest-client/arc-types').Model.ARCModelListResult} ARCModelListResult */
/** @typedef {import('@advanced-rest-client/arc-types').Model.DeletedEntity} DeletedEntity */

export const certificateValue = Symbol('projectValue');
export const idValue = Symbol('idValue');
export const revisionValue = Symbol('revisionValue');
export const changeRecordValue = Symbol('changeRecordValue');

/**
 * An event to be dispatched to read an client certificate from the data store.
 */
export class ARCClientCertificateReadEvent extends CustomEvent {
  /**
   * @return {string|null} Client certificate revision ID used to initialize the event.
   */
  get rev() {
    return this[revisionValue];
  }

  /**
   * @return {string} Client certificate id used to initialize the event.
   */
  get id() {
    return this[idValue];
  }

  /**
   * @param {string} id The client certificate ID
   * @param {string=} rev The client certificate revision
   */
  constructor(id, rev) {
    super(ArcModelEventTypes.ClientCertificate.read, {
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
 * An event dispatched to insert a new client certificate
 */
export class ARCClientCertificateInsertEvent extends CustomEvent {
  /**
   * @param {ARCClientCertificate} certificate The certificate to create.
   */
  constructor(certificate) {
    super(ArcModelEventTypes.ClientCertificate.insert, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[certificateValue] = certificate;
  }

  /**
   * @return {ARCClientCertificate} The certificate to update.
   */
  get certificate() {
    return this[certificateValue];
  }
}

/**
 * An event dispatched to update a certificate metadata
 */
export class ARCClientCertificateUpdateEvent extends CustomEvent {
  /**
   * @param {ARCClientCertificate} certificate The certificate to update.
   */
  constructor(certificate) {
    super(ArcModelEventTypes.ClientCertificate.update, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[certificateValue] = certificate;
  }

  /**
   * @return {ARCClientCertificate} The certificate to update.
   */
  get certificate() {
    return this[certificateValue];
  }
}

/**
 * An event dispatched from the store after a certificate model has changed
 */
export class ARCClientCertificateUpdatedEvent extends Event {
  /**
   * @param {ARCEntityChangeRecord} record Client certificate change record.
   */
  constructor(record) {
    super(ArcModelEventTypes.ClientCertificate.State.update, {
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
 * An event dispatched to the store to delete a client certificate.
 */
export class ARCClientCertificateDeleteEvent extends CustomEvent {
  /**
   * @param {string} id The client certificate id
   * @param {string=} rev The client certificate's revision
   */
  constructor(id, rev) {
    super(ArcModelEventTypes.ClientCertificate.delete, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[idValue] = id;
    this[revisionValue] = rev;
  }

  /**
   * @return {string} The client certificate id used to initialize the event.
   */
  get id() {
    return this[idValue];
  }

  /**
   * @return {string|undefined} The client certificate's revision used to initialize the event.
   */
  get rev() {
    return this[revisionValue];
  }
}

/**
 * An event dispatched by the store after a client certificate was deleted.
 */
export class ARCClientCertificateDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * @param {string} id Deleted client certificate id
   * @param {string} rev Updated revision
   */
  constructor(id, rev) {
    super(ArcModelEventTypes.ClientCertificate.State.delete, id, rev);
  }
}

/**
 * An event to be dispatched to list client certificate data in the data store.
 */
export class ARCClientCertificateListEvent extends ARCEntityListEvent {
  /**
   * @param {ARCModelListOptions=} opts Query options.
   */
  constructor(opts) {
    super(ArcModelEventTypes.ClientCertificate.list, opts);
  }
}

/**
 * Dispatches an event handled by the data store to read the client certificate.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The id of the client certificate
 * @param {string=} rev The revision of the client certificate. If not set then the latest revision is used.
 * @return {Promise<ARCClientCertificate>} Promise resolved to a client certificate model.
 */
export async function readAction(target, id, rev) {
  const e = new ARCClientCertificateReadEvent(id, rev);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to insert a new client certificate.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCClientCertificate} item The certificate object.
 * @return {Promise<ARCEntityChangeRecord>} Promise resolved to the change record
 */
export async function insertAction(target, item) {
  const e = new ARCClientCertificateInsertEvent(item);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to update a client certificate metadata
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCClientCertificate} item The certificate object.
 * @return {Promise<ARCEntityChangeRecord>} Promise resolved to the change record
 */
export async function updateAction(target, item) {
  const e = new ARCClientCertificateUpdateEvent(item);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to delete a client certificate
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The id of the project to delete.
 * @param {string=} rev The revision of the project. If not set then the latest revision is used.
 * @return {Promise<DeletedEntity>} Promise resolved to a new revision after delete.
 */
export async function deleteAction(target, id, rev) {
  const e = new ARCClientCertificateDeleteEvent(id, rev);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event to list the client certificates data.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCModelListOptions=} opts Query options.
 * @return {Promise<ARCModelListResult>} The list result.
 */
export async function listAction(target, opts) {
  const e = new ARCClientCertificateListEvent(opts);
  target.dispatchEvent(e);
  return e.detail.result;
}

//
// State events
//

/**
 * Dispatches an event after a client certificate was updated
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCEntityChangeRecord} record Change record
 */
export function updatedState(target, record) {
  const e = new ARCClientCertificateUpdatedEvent(record);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event after a client certificate was deleted
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id Deleted client certificate id.
 * @param {string} rev Updated revision of the client certificate.
 */
export function deletedState(target, id, rev) {
  const e = new ARCClientCertificateDeletedEvent(id, rev);
  target.dispatchEvent(e);
}
