/**
 * @deprecated Use `EventTypes` instead.
 */
export const TransportEventTypes = {
  beforeRequest: 'arcbeforerequest',
  beforeRedirect: 'arcbeforeredirect',
  headersReceived: 'archeadersreceived',
  firstByte: 'arcfirstbytereceived',
  // used by the UI to initiate the request transport
  request: 'arcrequest',
  // used by the UI to report a response
  response: 'arcresponse',
  // used by the application logic, dispatched when the request has been
  // pre-processed by any listeners (variables, actions) and can be transported.
  // The HTTP transport library is listening to this event
  transport: 'arctransport',
  resendAuth: 'arcresendauth',
  // used by the application logic, dispatched when the HTTP transport library 
  // has finished processing the request. This is handled by the logic that
  // performs operations before the request is reported back to the UI
  // like authorization and actions.
  processResponse: 'arcprocessresponse',
  abort: 'arcabort',

  /** 
   * Informs to make a connection. Used by web sockets.
   */
  connect: 'transportconnect',
  /** 
   * Informs to close the current connection. Used by web sockets.
   */
  disconnect: 'transportdisconnect',
  /** 
   * Informs to send a data on the current connection. Used by web sockets.
   */
  connectionSend: 'transportconnectionsend',
  /** 
   * When a component / module requests a CORS free HTTP request
   * outside the ARC's HTTP engine.
   */
  httpTransport: 'httptransport',
};
Object.freeze(TransportEventTypes);
