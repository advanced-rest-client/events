import { Cookies } from '@advanced-rest-client/arc-types';

declare interface ResponseDetail<T> {
  /**
   * Property set by the store when handling the event.
   */
  result?: Promise<T>;
}

declare interface VoidResponseDetail extends ResponseDetail<void> {}
declare interface CookieListResponseDetail extends ResponseDetail<Cookies.ARCCookie[]> {}

/**
 * An event to be dispatched when requesting list of session cookies
 */
export declare class SessionCookiesListEvent extends CustomEvent<CookieListResponseDetail> {
  constructor();
}

/**
 * @param target A node on which to dispatch the event.
 * @returns Promise resolved to the export result
 */
export declare function listAllAction(target: EventTarget): Promise<Cookies.ARCCookie[]>;

/**
 * An event to be dispatched when requesting list of session cookies for a specific domain
 */
export declare class SessionCookiesListDomainEvent extends CustomEvent<CookieListResponseDetail> {
  /**
   * The cookies domain
   */
  readonly domain: string;

  /**
   * @param domain The cookies domain
   */
  constructor(domain: string);
}
/**
 * @param target A node on which to dispatch the event.
 * @param domain The cookie domain
 * @returns Promise resolved to the export result
 */
export declare function listDomainAction(target: EventTarget, domain: string): Promise<Cookies.ARCCookie[]>;

/**
 * An event to be dispatched when deleting a list of session cookies
 */
export declare class SessionCookiesRemoveEvent extends CustomEvent<VoidResponseDetail> {
  /**
   * The list of cookies to remove
   */
  readonly cookies: Cookies.ARCCookie[];

  /**
   * @param cookies The list of cookies to remove
   */
  constructor(cookies: Cookies.ARCCookie[]);
}

/**
 * @param target A node on which to dispatch the event.
 * @param cookies The list of cookies to remove
 * @returns Promise resolved when the cookies has been removed
 */
export declare function deleteAction(target: EventTarget, cookies: Cookies.ARCCookie[]): Promise<void>;

/**
 * An event to be dispatched when updating a session cookie
 */
export declare class SessionCookieUpdateEvent extends CustomEvent<VoidResponseDetail> {
  /**
   * The cookie to update
   */
  readonly cookie: Cookies.ARCCookie;

  /**
   * @param cookie The cookie to update
   */
  constructor(cookie: Cookies.ARCCookie);
}
/**
 * @param target A node on which to dispatch the event.
 * @param cookie A cookie to update
 * @returns Promise resolved when the cookies is updated.
 */
export declare function updateAction(target: EventTarget, cookie: Cookies.ARCCookie): Promise<void>;

/**
 * An event dispatched by the store when a session cookie was updated
 */
export declare class SessionCookieUpdatedEvent extends CustomEvent<Cookies.ARCCookie> {
  /**
   * @param cookie The updated cookie
   */
  constructor(cookie: Cookies.ARCCookie);
}

/**
 * An event dispatched by the store when a session cookie was deleted
 */
export declare class SessionCookieDeletedEvent extends CustomEvent<Cookies.ARCCookie> {
  /**
   * @param cookie The deleted cookie
   */
  constructor(cookie: Cookies.ARCCookie);
}

/**
 * @param target A node on which to dispatch the event.
 * @param cookie The deleted cookie
 */
export declare function deleteState(target: EventTarget, cookie: Cookies.ARCCookie): void;

/**
 * @param target A node on which to dispatch the event.
 * @param cookie The updated cookie
 */
export declare function updateState(target: EventTarget, cookie: Cookies.ARCCookie): void;
