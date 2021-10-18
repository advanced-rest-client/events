/**
 * A model of a cookie object used by the Advanced REST Client.
 */
export interface ARCCookie {
  /**
   * Cookie name
   */
  name: string;
  /**
   * Cookie value
   */
  value?: string;
  /**
   * A string representing the domain the cookie belongs to
   * (e.g. "www.google.com", "example.com")
   */
  domain: string;
  /**
   * Cookie path
   */
  path: string;
  /**
   * A boolean, `true` if the cookie is a `host-only` cookie
   * (i.e. the request's host must exactly match the domain of the cookie),
   * or `false` otherwise.
   */
  hostOnly?: boolean;
  /**
   * A boolean, `true` if the cookie is marked as HttpOnly
   * (i.e. the cookie is inaccessible to client-side scripts),
   * or `false` otherwise.
   */
  httpOnly?: boolean;
  /**
   * A boolean, `true` if the cookie is marked as secure
   * (i.e. its scope is limited to secure channels, typically HTTPS),
   * or `false` otherwise.
   */
  secure?: boolean;
  /**
   * Whether or not a cookie is a session cookie this means the cookie is
   * deleted when the session ends.
   *
   * Session cookies are not used in the data export.
   */
  session?: boolean;
  /**
   * A timestamp when the cookie expires
   */
  expires?: number;
}

export interface ElectronCookie {
  // Docs: http://electronjs.org/docs/api/structures/cookie

  /**
   * The domain of the cookie; this will be normalized with a preceding dot so that
   * it's also valid for subdomains.
   */
  domain?: string;
  /**
   * The expiration date of the cookie as the number of seconds since the UNIX epoch.
   * Not provided for session cookies.
   */
  expirationDate?: number;
  /**
   * Whether the cookie is a host-only cookie; this will only be `true` if no domain
   * was passed.
   */
  hostOnly?: boolean;
  /**
   * Whether the cookie is marked as HTTP only.
   */
  httpOnly?: boolean;
  /**
   * The name of the cookie.
   */
  name: string;
  /**
   * The path of the cookie.
   */
  path?: string;
  /**
   * Whether the cookie is marked as secure.
   */
  secure?: boolean;
  /**
   * Whether the cookie is a session cookie or a persistent cookie with an expiration
   * date.
   */
  session?: boolean;
  /**
   * The value of the cookie.
   */
  value: string;
}

export interface ElectronCookieChangeRecord {
  /**
   * The cookie that was changed.
   */
  cookie: ElectronCookie;
  /**
   * The cause of the change with one of the following values:
   * - `explicit` - The cookie was changed directly by a consumer's action.
   * - `overwrite` - The cookie was automatically removed due to an insert operation that overwrote it.
   * - `expired` - The cookie was automatically removed as it expired.
   * - `evicted` - The cookie was automatically evicted during garbage collection.
   * - `expired-overwrite` - The cookie was overwritten with an already-expired expiration date.
   */
  cause: string;
  /**
   * `true` if the cookie was removed, `false` otherwise.
   */
  removed: boolean;
}
