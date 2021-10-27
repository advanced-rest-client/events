/**
 * @deprecated Use `EventTypes` instead.
 */
declare interface SessionCookieStateEventTypes {
  delete: string;
  update: string;
}
/**
 * @deprecated Use `EventTypes` instead.
 */
declare interface SessionCookieEventTypes {
  listAll: string;
  listDomain: string;
  listUrl: string;
  delete: string;
  deleteUrl: string;
  update: string;
  updateBulk: string;
  State: SessionCookieStateEventTypes;
}
/**
 * @deprecated Use `EventTypes` instead.
 */
export declare const SessionCookieEventTypes: Readonly<SessionCookieEventTypes>;
