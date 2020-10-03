import * as Events from './Events.js';

export const TelemetryEvents = {
  view: Events.screenViewAction,
  event: Events.eventAction,
  exception: Events.exceptionAction,
  social: Events.socialAction,
  timing: Events.timingAction,
}
