import { Cookies } from '@advanced-rest-client/arc-types';

declare interface SessionStateEvents {
  /**
   * @param target A node on which to dispatch the event.
   * @param cookie The deleted cookie
   */
  delete(target: EventTarget, cookie: Cookies.ARCCookie): void;
  /**
   * @param target A node on which to dispatch the event.
   * @param cookie The updated cookie
   */
  update(target: EventTarget, cookie: Cookies.ARCCookie): void;
}

declare interface SessionCookieEvents {
  /**
   * @param target A node on which to dispatch the event.
   * @returns Promise resolved to the export result
   */
  listAll(target: EventTarget): Promise<Cookies.ARCCookie[]>;
  /**
   * @param target A node on which to dispatch the event.
   * @param domain The cookie domain
   * @returns Promise resolved to the export result
   */
  listDomain(target: EventTarget, domain: string): Promise<Cookies.ARCCookie[]>;
  /**
   * @param target A node on which to dispatch the event.
   * @param cookies The list of cookies to remove
   * @returns Promise resolved when the cookies has been removed
   */
  delete(target: EventTarget, cookies: Cookies.ARCCookie[]): Promise<void>;
  /**
   * @param target A node on which to dispatch the event.
   * @param url The url associated with the cookie. Depending on the session mechanism the URL or the domain and the path is used.
   * @param name The name of the cookie to remove. When not set all cookies are removed for the given URL.
   * @returns Promise resolved when the cookies has been removed
   */
  deleteUrl(target: EventTarget, url: string, name?: string): Promise<void>;
  /**
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {Cookie} cookie A cookie to update
   * @return {Promise<void>} Promise resolved when the cookies is updated.
   */
  update(target: EventTarget, cookie: Cookies.ARCCookie): Promise<void>;
  State: SessionStateEvents;
}

export const SessionCookieEvents: SessionCookieEvents;
