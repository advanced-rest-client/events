declare interface TransportEventTypes {
  beforeRequest: string;
  beforeRedirect: string;
  headersReceived: string;
  firstByte: string;
  // used by the UI to initiate the request transport
  request: string;
  // used by the UI to report a response
  response: string;
  // used by the application logic, dispatched when the request has been
  // pre-processed by any listeners (variables, actions) and can be transported.
  // The HTTP transport library is listening to this event
  transport: string;
  resentAuth: string;
  // used by the application logic, dispatched when the HTTP transport library 
  // has finished processing the request. This is handled by the logic that
  // performs operations before the request is reported back to the UI
  // like authorization and actions.
  processResponse: string;
  abort: string;
  /** 
   * Informs to make a connection. Used by web sockets.
   */
  connect: string;
  /** 
   * Informs to close the current connection. Used by web sockets.
   */
  disconnect: string;
  /** 
   * Informs to send a data on the current connection. Used by web sockets.
   */
  connectionSend: string;
}

export declare const TransportEventTypes: Readonly<TransportEventTypes>;
