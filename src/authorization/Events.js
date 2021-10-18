/* eslint-disable max-classes-per-file */
import { AuthorizationEventTypes } from './AuthorizationEventTypes.js';

/** @typedef {import('../../').Authorization.OAuth2Authorization} OAuth2Authorization */
/** @typedef {import('../../').Authorization.TokenRemoveOptions} TokenRemoveOptions */
/** @typedef {import('../../').Authorization.TokenInfo} TokenInfo */
/** @typedef {import('../../').Authorization.TokenError} TokenError */
/** @typedef {import('../../').Authorization.OidcTokenInfo} OidcTokenInfo */
/** @typedef {import('../../').Authorization.OidcTokenError} OidcTokenError */

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
 * An event dispatched to request OIDC authorization.
 */
export class OidcAuthorizeEvent extends CustomEvent {
  /**
   * @param {OAuth2Authorization} detail Authorization options.
   */
  constructor(detail) {
    super(AuthorizationEventTypes.Oidc.authorize, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail,
    });
  }
}

/**
 * An event dispatched to remove cached OIDC tokens.
 */
export class OidcRemoveTokensEvent extends CustomEvent {
  /**
   * @param {TokenRemoveOptions} detail Token remove options.
   */
  constructor(detail) {
    super(AuthorizationEventTypes.Oidc.removeTokens, {
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
export async function authorizeOauth2Action(target, config) {
  const e = new OAuth2AuthorizeEvent(config);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {TokenRemoveOptions} config Authorization options.
 * @return {Promise<void>} Promise resolved when the token is removed
 */
export async function removeOauth2TokenAction(target, config) {
  const e = new OAuth2RemoveTokenEvent(config);
  target.dispatchEvent(e);
  await e.detail.result;
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {OAuth2Authorization} config Authorization options.
 * @return {Promise<(OidcTokenInfo|OidcTokenError)[]>} Promise resolved with authorization result
 * @throws {TokenError}
 */
export async function authorizeOidcAction(target, config) {
  const e = new OidcAuthorizeEvent(config);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {TokenRemoveOptions} config Authorization options.
 * @return {Promise<void>} Promise resolved when the token is removed
 */
export async function removeOidcTokensAction(target, config) {
  const e = new OidcRemoveTokensEvent(config);
  target.dispatchEvent(e);
  await e.detail.result;
}
