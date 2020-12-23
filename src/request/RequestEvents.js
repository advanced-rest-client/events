import * as Events from './Events.js';

export const RequestEvents = {
  send: Events.informSendAction,
  connect: Events.informConnectAction,
  disconnect: Events.informDisconnectAction,
  sendWebSocket: Events.informWebSocketSendAction,
  State: {
    urlChange: Events.stateUrlChangeAction,
    contentTypeChange: Events.stateContentTypeAction,
  },
}
