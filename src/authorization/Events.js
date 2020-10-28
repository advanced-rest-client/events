/* eslint-disable max-classes-per-file */
import { AuthorizationEventTypes } from './AuthorizationEventTypes.js';

/** @typedef {import('@advanced-rest-client/arc-types').Authorization.OAuth2Authorization} OAuth2Authorization */
/** @typedef {import('@advanced-rest-client/arc-types').OAuth2.TokenRemoveOptions} TokenRemoveOptions */
/** @typedef {import('@advanced-rest-client/arc-types').OAuth2.TokenInfo} TokenInfo */
/** @typedef {import('@advanced-rest-client/arc-types').OAuth2.TokenError} TokenError */

/**
 * An event dispatched to request OAuth2 authorization.
 */
export class OAuth2AuthorizeEvent extends CustomEvent {
  /**
   * @param {OAuth2Authorization} detail Authorization options.
   */
  constructor(detail) {
    super(AuthorizationEventTypes.OAuth2.authorize, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail,
    });
  }
}

/**
 * An event dispatched to request OAuth2 authorization.
 */
export class OAuth2RemoveTokenEvent extends CustomEvent {
  /**
   * @param {TokenRemoveOptions} detail Token remove options.
   */
  constructor(detail) {
    super(AuthorizationEventTypes.OAuth2.removeToken, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail,
    });
  }
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {OAuth2Authorization} config Authorization options.
 * @return {Promise<TokenInfo>} Promise resolved with authorization result
 * @throws {TokenError}
 */
export async function authorizeAction(target, config) {
  const e = new OAuth2AuthorizeEvent(config);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {TokenRemoveOptions} config Authorization options.
 * @return {Promise<void>} Promise resolved when the token is removed
 */
export async function removeTokenAction(target, config) {
  const e = new OAuth2RemoveTokenEvent(config);
  target.dispatchEvent(e);
  await e.detail.result;
}