/* eslint-disable max-classes-per-file */
import { SessionCookieEventTypes } from './SessionCookieEventTypes.js';

/** @typedef {import('@advanced-rest-client/arc-types').Cookies.ARCCookie} ARCCookie */

export const domainValue = Symbol('domainValue');
export const cookieValue = Symbol('cookieValue');
export const cookiesValue = Symbol('cookiesValue');
export const urlValue = Symbol('urlValue');
export const nameValue = Symbol('nameValue');

/**
 * An event to be dispatched when requesting list of session cookies
 */
export class SessionCookiesListEvent extends CustomEvent {
  constructor() {
    super(SessionCookieEventTypes.listAll, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
  }
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @return {Promise<ARCCookie[]>} Promise resolved to the export result
 */
export async function listAllAction(target) {
  const e = new SessionCookiesListEvent();
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * An event to be dispatched when requesting list of session cookies for a specific domain
 */
export class SessionCookiesListDomainEvent extends CustomEvent {
  /**
   * @returns {string} The cookie domain
   */
  get domain() {
    return this[domainValue];
  }

  /**
   * @param {string} domain The cookies domain
   */
  constructor(domain) {
    super(SessionCookieEventTypes.listDomain, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[domainValue] = domain;
  }
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} domain The cookie domain
 * @return {Promise<ARCCookie[]>} Promise resolved to the export result
 */
export async function listDomainAction(target, domain) {
  const e = new SessionCookiesListDomainEvent(domain);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * An event to be dispatched when requesting list of session cookies for a specific URL
 */
export class SessionCookiesListUrlEvent extends CustomEvent {
  /**
   * @returns {string} The cookie URL used to initialize this event.
   */
  get url() {
    return this[urlValue];
  }

  /**
   * @param {string} domain The cookies domain
   */
  constructor(domain) {
    super(SessionCookieEventTypes.listUrl, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[urlValue] = domain;
  }
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} url The cookie URL
 * @return {Promise<ARCCookie[]>} Promise resolved to the export result
 */
export async function listUrlAction(target, url) {
  const e = new SessionCookiesListUrlEvent(url);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * An event to be dispatched when deleting a list of session cookies
 */
export class SessionCookiesRemoveEvent extends CustomEvent {
  /**
   * @return {ARCCookie[]} The list of cookies to remove
   */
  get cookies() {
    return this[cookiesValue];
  }

  /**
   * @param {ARCCookie[]} cookies The list of cookies to remove
   */
  constructor(cookies) {
    super(SessionCookieEventTypes.delete, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[cookiesValue] = cookies;
  }
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCCookie[]} cookies The list of cookies to remove
 * @return {Promise<void>} Promise resolved when the cookies has been removed
 */
export async function deleteAction(target, cookies) {
  const e = new SessionCookiesRemoveEvent(cookies);
  target.dispatchEvent(e);
  return e.detail.result;
}


/**
 * An event to be dispatched when deleting cookies by the domain and path
 */
export class SessionCookiesRemoveDomainEvent extends CustomEvent {
  /**
   * @returns {string} The URL value used to initialize this event
   */
  get url() {
    return this[urlValue];
  }

  /**
   * @returns {string|undefined} The name value used to initialize this event
   */
  get name() {
    return this[nameValue];
  }

  /**
   * @param {string} url The url associated with the cookie. Depending on the session mechanism the URL or the domain and the path is used.
   * @param {string=} name The name of the cookie to remove. When not set all cookies are removed for the given URL.
   */
  constructor(url, name) {
    super(SessionCookieEventTypes.deleteUrl, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[urlValue] = url;
    this[nameValue] = name;
  }
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} url The url associated with the cookie. Depending on the session mechanism the URL or the domain and the path is used.
 * @param {string=} name The name of the cookie to remove. When not set all cookies are removed for the given URL.
 * @return {Promise<void>} Promise resolved when the cookies has been removed
 */
export async function deleteUrlAction(target, url, name) {
  const e = new SessionCookiesRemoveDomainEvent(url, name);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * An event to be dispatched when updating a session cookie
 */
export class SessionCookieUpdateEvent extends CustomEvent {
  /**
   * @return {ARCCookie} The cookie to update
   */
  get cookie() {
    return this[cookieValue];
  }

  /**
   * @param {ARCCookie} cookie The cookie to update
   */
  constructor(cookie) {
    super(SessionCookieEventTypes.update, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[cookieValue] = cookie;
  }
}
/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCCookie} cookie A cookie to update
 * @return {Promise<void>} Promise resolved when the cookies is updated.
 */
export async function updateAction(target, cookie) {
  const e = new SessionCookieUpdateEvent(cookie);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * An event dispatched by the store when a session cookie was updated
 */
export class SessionCookieUpdatedEvent extends CustomEvent {
  /**
   * @param {ARCCookie} cookie The updated cookie
   */
  constructor(cookie) {
    super(SessionCookieEventTypes.State.update, {
      bubbles: true,
      composed: true,
      detail: cookie,
    });
  }
}

/**
 * An event dispatched by the store when a session cookie was deleted
 */
export class SessionCookieDeletedEvent extends CustomEvent {
  /**
   * @param {ARCCookie} cookie The deleted cookie
   */
  constructor(cookie) {
    super(SessionCookieEventTypes.State.delete, {
      bubbles: true,
      composed: true,
      detail: cookie,
    });
  }
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCCookie} cookie The deleted cookie
 */
export async function deleteState(target, cookie) {
  const e = new SessionCookieDeletedEvent(cookie);
  target.dispatchEvent(e);
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCCookie} cookie The updated cookie
 */
export async function updateState(target, cookie) {
  const e = new SessionCookieUpdatedEvent(cookie);
  target.dispatchEvent(e);
}
