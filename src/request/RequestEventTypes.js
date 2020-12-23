/**
 * Event types for ARC request object.
 * These only represent the events dispatched globally (events that bubble).
 * They do not have events that are specific to any part of the request editor.
 */
export const RequestEventTypes = {
  send: 'arcrequestsend',
  /** 
   * Informs to make a connection. Used by web sockets.
   */
  connect: 'arcrequestconnect',
  /** 
   * Informs to close the current connection. Used by web sockets.
   */
  disconnect: 'arcrequestdisconnect',
  State: {
    urlChange: 'arcrequeststateurlchange',
    contentTypeChange: 'arcrequeststatecontenttypechange',
  },
};
Object.freeze(RequestEventTypes);
Object.freeze(RequestEventTypes.State);
