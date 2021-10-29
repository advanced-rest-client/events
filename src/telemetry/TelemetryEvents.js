import * as Events from './Events.js';
import { EventTypes } from '../EventTypes.js';

export const TelemetryEvents = {
  view: Events.screenViewAction,
  event: Events.eventAction,
  exception: Events.exceptionAction,
  social: Events.socialAction,
  timing: Events.timingAction,
  State: {
    /** 
     * Dispatched by the renderer process when the user made the initial telemetry settings.
     * 
     * @param {EventTarget} target The node on which to dispatch the event.
     * @returns {void}
     */
    set: (target) => {
      const e = new Event(EventTypes.Telemetry.State.set, {
        composed: true,
        cancelable: true,
        bubbles: true,
      });
      target.dispatchEvent(e);
    },
  },
}
