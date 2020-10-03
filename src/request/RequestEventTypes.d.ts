declare interface RequestStateEventTypes {
  urlChange: string;
  contentTypeChange: string;
}
/**
 * The event names in the ARC cookie module.
 */
declare interface RequestEventTypes {
  send: string;
  State: RequestStateEventTypes;
}

export declare const RequestEventTypes: RequestEventTypes;
