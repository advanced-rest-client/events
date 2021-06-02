/* eslint-disable max-classes-per-file */
import { ArcModelEventTypes } from './ArcModelEventTypes.js';
import { ARCEntityDeletedEvent, ARCEntityListEvent } from './BaseEvents.js';

/** @typedef {import('@advanced-rest-client/arc-types').HostRule.ARCHostRule} ARCHostRule */
/** @typedef {import('@advanced-rest-client/arc-types').Model.ARCEntityChangeRecord} ARCEntityChangeRecord */
/** @typedef {import('@advanced-rest-client/arc-types').Model.ARCModelListOptions} ARCModelListOptions */
/** @typedef {import('@advanced-rest-client/arc-types').Model.ARCModelListResult} ARCModelListResult */
/** @typedef {import('@advanced-rest-client/arc-types').Model.DeletedEntity} DeletedEntity */

export const ruleValue = Symbol('urlValue');
export const changeRecordValue = Symbol('changeRecordValue');
export const idValue = Symbol('idValue');
export const revisionValue = Symbol('revisionValue');

/**
 * An event dispatched to the store to update a host rule entity.
 */
export class ARCHostRuleUpdateEvent extends CustomEvent {
  /**
   * @return {ARCHostRule} The rule object to save / update
   */
  get rule() {
    return this[ruleValue];
  }

  /**
   * @param {ARCHostRule} rule The rule object to save / update
   */
  constructor(rule) {
    if (!rule) {
      throw new Error('Expected rule argument as object.');
    }
    super(ArcModelEventTypes.HostRules.update, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[ruleValue] = rule;
  }
}

/**
 * An event dispatched to the store to update a host rule entities in a bulk operation
 */
export class ARCHostRuleUpdateBulkEvent extends CustomEvent {
  /**
   * @return {ARCHostRule[]} The rule object to save / update
   */
  get rules() {
    return this[ruleValue];
  }

  /**
   * @param {ARCHostRule[]} rules The rule object to save / update
   */
  constructor(rules) {
    if (!Array.isArray(rules)) {
      throw new Error('Expected rules argument as an array.');
    }
    super(ArcModelEventTypes.HostRules.updateBulk, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[ruleValue] = rules;
  }
}

/**
 * An event dispatched by the store after a host rule has been updated.
 */
export class ARCHostRuleUpdatedEvent extends Event {
  /**
   * @return {ARCEntityChangeRecord} Change record
   */
  get changeRecord() {
    return this[changeRecordValue];
  }

  /**
   * @param {ARCEntityChangeRecord} record The rule change record
   */
  constructor(record) {
    if (!record) {
      throw new Error('Expected record argument to be an object.');
    }
    super(ArcModelEventTypes.HostRules.State.update, {
      bubbles: true,
      composed: true,
    });
    this[changeRecordValue] = record;
  }
}

/**
 * An event dispatched to the store to delete a host rule.
 */
export class ARCHostRuleDeleteEvent extends CustomEvent {
  /**
   * @return {string} Rule id used to initialize the event
   */
  get id() {
    return this[idValue];
  }

  /**
   * @return {string|undefined} A revision ID to delete
   */
  get rev() {
    return this[revisionValue];
  }

  /**
   * @param {string} id Request id
   * @param {string=} rev A revision ID to delete
   */
  constructor(id, rev) {
    if (typeof id !== 'string') {
      throw new Error('Expected id argument to be a string.');
    }
    super(ArcModelEventTypes.HostRules.delete, {
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
 * An event dispatched by the data store when a host rule entity was deleted.
 */
export class ARCHostRuleDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * @param {string} id Host rule id
   * @param {string} rev An updated revision ID of the deleted object.
   */
  constructor(id, rev) {
    if (typeof id !== 'string') {
      throw new Error('Expected id argument to be a string.');
    }
    super(ArcModelEventTypes.HostRules.State.delete, id, rev);
  }
}

/**
 * An event dispatched by the UI when requesting a list of host rules
 */
export class ARCHostRulesListEvent extends ARCEntityListEvent {
  /**
   * @param {ARCModelListOptions=} opts Query options.
   */
  constructor(opts) {
    super(ArcModelEventTypes.HostRules.list, opts);
  }
}

/**
 * Dispatches an event handled by the data store to update a host rule entity
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCHostRule} rule The rule object to save / update
 * @return {Promise<ARCEntityChangeRecord>} Promise resolved to a the change record
 */
export async function updateAction(target, rule) {
  const e = new ARCHostRuleUpdateEvent(rule);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to update host rule entities in bulk
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCHostRule[]} rules The rules to save / update
 * @return {Promise<ARCEntityChangeRecord[]>} Promise resolved to a the list of a change record
 */
export async function updateActionBulk(target, rules) {
  const e = new ARCHostRuleUpdateBulkEvent(rules);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event informing about a change in the host rules model.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCEntityChangeRecord} record Host rules change record.
 */
export async function updatedState(target, record) {
  const e = new ARCHostRuleUpdatedEvent(record);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event handled by the data store to read a host rules data.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCModelListOptions=} opts List options.
 * @return {Promise<ARCModelListResult>} Promise resolved to list of results
 */
export async function listAction(target, opts) {
  const e = new ARCHostRulesListEvent(opts);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to delete an ARC request from the store.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The host rule id
 * @param {string=} rev A revision ID to delete
 * @return {Promise<DeletedEntity>} Delete record
 */
export async function deleteAction(target, id, rev) {
  const e = new ARCHostRuleDeleteEvent(id, rev);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event after a host rule was deleted
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id Deleted host rule id.
 * @param {string} rev Updated revision of the deleted entity.
 */
export function deletedState(target, id, rev) {
  const e = new ARCHostRuleDeletedEvent(id, rev);
  target.dispatchEvent(e);
}
