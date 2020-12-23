declare interface RequestStateEventTypes {
  urlChange: string;
  contentTypeChange: string;
}
/**
 * The event names in the ARC cookie module.
 */
declare interface RequestEventTypes {
  send: string;
  connect: string;
  disconnect: string;
  State: RequestStateEventTypes;
}

export declare const RequestEventTypes: Readonly<RequestEventTypes>;
