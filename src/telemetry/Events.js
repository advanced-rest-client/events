/* eslint-disable max-classes-per-file */
import { TelemetryEventTypes } from './TelemetryEventTypes.js';

/** @typedef {import('./Events').TelemetryDetail } TelemetryDetail */
/** @typedef {import('./Events').TelemetryScreenViewDetail } TelemetryScreenViewDetail */
/** @typedef {import('./Events').TelemetryEventDetail } TelemetryEventDetail */
/** @typedef {import('./Events').TelemetryExceptionDetail } TelemetryExceptionDetail */
/** @typedef {import('./Events').TelemetrySocialDetail } TelemetrySocialDetail */
/** @typedef {import('./Events').TelemetryTimingDetail } TelemetryTimingDetail */

/**
 * Base class event for the telemetry events.
 */
export class TelemetryEvent extends CustomEvent {
  /**
   * @param {string} type The event type
   * @param {TelemetryDetail} detail Any telemetry configuration.
   */
  constructor(type, detail) {
    super(type, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail,
    });
  };
}

/**
 * An event to track application screen view
 */
export class TelemetryScreenEvent extends TelemetryEvent {
  /**
   * @param {TelemetryScreenViewDetail} detail Screen view details
   */
  constructor(detail) {
    super(TelemetryEventTypes.view, detail);
  }
}

/**
 * An event to track application tracking events
 */
export class TelemetryEventEvent extends TelemetryEvent {
  /**
   * @param {TelemetryEventDetail} detail Analytics event details
   */
  constructor(detail) {
    super(TelemetryEventTypes.event, detail);
  }
}

/**
 * An event to track application exceptions
 */
export class TelemetryExceptionEvent extends TelemetryEvent {
  /**
   * @param {TelemetryExceptionDetail} detail Exception details
   */
  constructor(detail) {
    super(TelemetryEventTypes.exception, detail);
  }
}

/**
 * An event to track application social events
 */
export class TelemetrySocialEvent extends TelemetryEvent {
  /**
   * @param {TelemetrySocialDetail} detail Social action details
   */
  constructor(detail) {
    super(TelemetryEventTypes.social, detail);
  }
}

/**
 * An event to track application social events
 */
export class TelemetryTimingEvent extends TelemetryEvent {
  /**
   * @param {TelemetryTimingDetail} detail Timing details
   */
  constructor(detail) {
    super(TelemetryEventTypes.timing, detail);
  }
}

/**
 * Sends application screen view event
 * @param {EventTarget} target A node on which to dispatch the event
 * @param {string} screenName The screen name
 * @param {TelemetryDetail=} detail Analytics base configuration
 */
export function screenViewAction(target, screenName, detail={}) {
  const init = { ...detail, screenName };
  const e = new TelemetryScreenEvent(init);
  target.dispatchEvent(e);
}

/**
 * Sends a Google Analytics event information
 * @param {EventTarget} target A node on which to dispatch the event
 * @param {TelemetryEventDetail} detail The event configuration
 */
export function eventAction(target, detail) {
  const e = new TelemetryEventEvent(detail);
  target.dispatchEvent(e);
}

/**
 * Sends a Google Analytics exception information
 * @param {EventTarget} target A node on which to dispatch the event
 * @param {string} description The exception description
 * @param {boolean=} fatal Whether the exception was fatal to the application
 * @param {TelemetryDetail=} detail Analytics base configuration
 */
export function exceptionAction(target, description, fatal=false, detail={}) {
  const init = { ...detail, description, fatal };
  const e = new TelemetryExceptionEvent(init);
  target.dispatchEvent(e);
}

/**
 * Sends a Google Analytics social share information
 * @param {EventTarget} target A node on which to dispatch the event
 * @param {string} network The network where the shared content is shared
 * @param {string} action The share action, eg. 'Share'
 * @param {string} url The share url
 * @param {TelemetryDetail=} detail Analytics base configuration
 */
export function socialAction(target, network, action, url, detail={}) {
  const init = { ...detail, network, action, target: url };
  const e = new TelemetrySocialEvent(init);
  target.dispatchEvent(e);
}

/**
 * Sends a Google Analytics application timing information
 * @param {EventTarget} target A node on which to dispatch the event
 * @param {string} category The timing category
 * @param {string} variable The timing variable
 * @param {number} value The timing value
 * @param {string} label The timing label
 * @param {TelemetryDetail=} detail Analytics base configuration
 */
export function timingAction(target, category, variable, value, label, detail={}) {
  const init = { ...detail, category, variable, value, label };
  const e = new TelemetryTimingEvent(init);
  target.dispatchEvent(e);
}
