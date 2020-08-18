/* eslint-disable max-classes-per-file */
import { RestApiEventTypes } from './RestApiEventTypes.js';
/** @typedef {import('./Events').RestApiFileProcessingResult} RestApiFileProcessingResult */

export const fileValue = Symbol('fileValue');
/**
 * An event to be dispatched to run AMF parser to process API data.
 */
export class RestApiProcessFileEvent extends CustomEvent {
  /**
   * @return {File} The file to process
   */
  get file() {
    return this[fileValue];
  }

  /**
   * @param {File} file The file to process
   */
  constructor(file) {
    super(RestApiEventTypes.processfile, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[fileValue] = file;
  }
}

/**
 * An event to be dispatched to inform the application that API data is ready to be rendered.
 */
export class RestApiReadyEvent extends CustomEvent {
  /**
   * @param {any} model The processed data model
   * @param {string} type API type (RAML 1.0, OAS 3.0, etc)
   */
  constructor(model, type) {
    super(RestApiEventTypes.dataready, {
      bubbles: true,
      composed: true,
      detail: {
        model,
        type,
      },
    });
  }
}

/**
 * @param {EventTarget} target
 * @param {File} file The file to process
 * @returns {Promise<RestApiFileProcessingResult>}
 */
export function processFileAction(target, file) {
  const e = new RestApiProcessFileEvent(file);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * @param {EventTarget} target
 * @param {any} model The processed data model
 * @param {string} type API type (RAML 1.0, OAS 3.0, etc)
 */
export function stateReadyAction(target, model, type) {
  const e = new RestApiReadyEvent(model, type);
  target.dispatchEvent(e);
}
