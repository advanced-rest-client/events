/* eslint-disable max-classes-per-file */
import { ConfigEventTypes } from './ConfigEventTypes.js';

/** @typedef {import('../../').Config.ARCConfig} ARCConfig */

/**
 * An event dispatched to read the application config.
 */
export class ConfigReadEvent extends CustomEvent {
  constructor() {
    super(ConfigEventTypes.readAll, {
      bubbles: true,
      composed: true,
      detail: {},
    });
  }
}

/**
 * An event dispatched to read a single value of the configuration
 */
export class ConfigPropertyReadEvent extends CustomEvent {
  /**
   * @param {string} key The key path where the value is stored.
   */
  constructor(key) {
    super(ConfigEventTypes.read, {
      bubbles: true,
      composed: true,
      detail: {
        key,
      },
    });
  }
}

/**
 * An event dispatched when a configuration has been changed by the user and should be stored
 * and propagated in the application.
 */
export class ConfigUpdateEvent extends CustomEvent {
  /**
   * @param {string} key The key path where to store the value.
   * @param {any} value The value to store.
   */
  constructor(key, value) {
    super(ConfigEventTypes.update, {
      bubbles: true,
      composed: true,
      detail: {
        key, value,
      },
    });
  }
}

/**
 * An event dispatched when a configuration property has been stored by the application.
 * Each listener should take an action on the changed configuration property.
 */
export class ConfigStateUpdateEvent extends CustomEvent {
  /**
   * @param {string} key The key path where to store the value.
   * @param {any} value The value to store.
   */
  constructor(key, value) {
    super(ConfigEventTypes.State.update, {
      bubbles: true,
      composed: true,
      detail: {
        key, value,
      },
    });
  }
}

/**
 * Reads a single config value.
 * @param {EventTarget} target The target on which to dispatch the event
 * @param {string} key The key path where the value is stored.
 * @returns {Promise<any>} Promise resolved to the configuration value
 */
export async function readAction(target, key) {
  const e = new ConfigPropertyReadEvent(key);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Reads the entire application configuration
 * @param {EventTarget} target The target on which to dispatch the event
 * @returns {Promise<ARCConfig>} Promise resolved to the configuration value
 */
export async function readConfigAction(target) {
  const e = new ConfigReadEvent();
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Updates a single property in the application configuration object.
 * @param {EventTarget} target The target on which to dispatch the event
 * @param {string} key The key path where to store the value.
 * @param {any} value The value to store.
 * @returns {Promise<void>} Promise resolved when the transaction commits.
 */
export async function updateAction(target, key, value) {
  const e = new ConfigUpdateEvent(key, value);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Propagates configuration change information.
 * @param {EventTarget} target The target on which to dispatch the event
 * @param {string} key The key path where to store the value.
 * @param {any} value The value to store.
 * @returns {void} This has no side effects
 */
export function updatedAction(target, key, value) {
  const e = new ConfigStateUpdateEvent(key, value);
  target.dispatchEvent(e)
}
