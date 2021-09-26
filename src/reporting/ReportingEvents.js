/* eslint-disable max-classes-per-file */
import { ReportingEventTypes } from './ReportingEventTypes.js';

/**
 * An event to be dispatched when an error occurs in any component.
 * The purpose of this event is to log application errors.
 */
export class ApiErrorEvent extends CustomEvent {
  /**
   * @param {Error} error The error object that caused this event
   * @param {string} description The description to be reported to the logger.
   * @param {string=} component Optional component name that triggered the exception.
   */
  constructor(error, description, component) {
    super(ReportingEventTypes.error, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        error, description, component,
      },
    });
  };
}

export const ReportingEvents = {
  /**
   * Dispatches the general error event for logging purposes.
   * @param {EventTarget} target A node on which to dispatch the event
   * @param {Error} error The error object that caused this event
   * @param {string} description The description to be reported to the logger.
   * @param {string=} component Optional component name that triggered the exception.
   */
  error: (target, error, description, component) => {
    const e = new ApiErrorEvent(error, description, component);
    target.dispatchEvent(e);
  },
};
Object.freeze(ReportingEvents);
