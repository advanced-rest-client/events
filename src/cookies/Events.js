/* eslint-disable max-classes-per-file */
import { SessionCookieEventTypes } from './SessionCookieEventTypes.js';

/** @typedef {import('@advanced-rest-client/arc-types').Cookies.ARCCookie} ARCCookie */

export const domainValue = Symbol('domainValue');
export const cookieValue = Symbol('cookieValue');
export const cookiesValue = Symbol('cookiesValue');

/**
 * An event to be dispatched when requesting list of session cookies
 */
export class SessionCookiesListEvent extends CustomEvent {
  /**
   */
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
   * @return {string} The cookies domain
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
