declare interface SessionCookieStateEventTypes {
  delete: string;
  update: string;
}
/**
 * The event names in the ARC cookie module.
 */
declare interface SessionCookieEventTypes {
  listAll: string;
  listDomain: string;
  listUrl: string;
  delete: string;
  deleteUrl: string;
  update: string;
  State: SessionCookieStateEventTypes;
}

export declare const SessionCookieEventTypes: Readonly<SessionCookieEventTypes>;
