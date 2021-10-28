/* eslint-disable max-classes-per-file */
import { EventTypes } from '../EventTypes.js';

/**
 * An event to be dispatched when the application is stating a long running process
 * in the background. The side effect of the event is the UI showing a process
 * indicator.
 */
export class ProcessStartEvent extends CustomEvent {
  /**
   * @param {string} pid The id of the process. The same id has to be passed to the stop event.
   * @param {string=} message Optional message rendered in the UI.
   */
  constructor(pid, message) {
    super(EventTypes.Process.loadingStart, {
      bubbles: true,
      composed: true,
      detail: {
        pid,
        message,
      },
    });
  }
}

/**
 * An event to be dispatched when the application has finished a long running process
 * in the background.
 */
export class ProcessStopEvent extends CustomEvent {
  /**
   * @param {string} pid The id of the process used to start it.
   */
  constructor(pid) {
    super(EventTypes.Process.loadingStop, {
      bubbles: true,
      composed: true,
      detail: {
        pid,
      },
    });
  }
}

/**
 * An event to be dispatched when the application has finished a long running process
 * in the background with an error.
 */
export class ProcessErrorEvent extends CustomEvent {
  /**
   * @param {string} pid The id of the process used to start it.
   * @param {Error} error The error object caused the event
   */
  constructor(pid, error) {
    super(EventTypes.Process.loadingError, {
      bubbles: true,
      composed: true,
      detail: {
        pid,
        error,
      },
    });
  }
}

export function startAction(target, pid, message) {
  const e = new ProcessStartEvent(pid, message);
  target.dispatchEvent(e);
}

export function stopAction(target, pid) {
  const e = new ProcessStopEvent(pid);
  target.dispatchEvent(e);
}

export function errorAction(target, pid, error) {
  const e = new ProcessErrorEvent(pid, error);
  target.dispatchEvent(e);
}
