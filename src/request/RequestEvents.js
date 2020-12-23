import * as Events from './Events.js';

export const RequestEvents = {
  send: Events.informSendAction,
  State: {
    urlChange: Events.stateUrlChangeAction,
    contentTypeChange: Events.stateContentTypeAction,
  },
}
