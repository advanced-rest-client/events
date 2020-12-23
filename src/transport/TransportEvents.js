import * as Events from './Events.js';

export const TransportEvents = {
  request: Events.sendAction,
  response: Events.responseAction,
  transport: Events.transportAction,
  processResponse: Events.processResponseAction,
  abort: Events.abortAction,

  connect: Events.informConnectAction,
  disconnect: Events.informDisconnectAction,
  connectionSend: Events.informWebSocketSendAction,
}
