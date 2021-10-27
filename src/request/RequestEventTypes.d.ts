/**
 * @deprecated Use `EventTypes` instead.
 */
declare interface RequestStateEventTypes {
  urlChange: string;
  contentTypeChange: string;
}
/**
 * The event names in the ARC cookie module.
 * @deprecated Use `EventTypes` instead.
 */
declare interface RequestEventTypes {
  send: string;
  State: RequestStateEventTypes;
}

/**
 * @deprecated Use `EventTypes` instead.
 */
export declare const RequestEventTypes: Readonly<RequestEventTypes>;
