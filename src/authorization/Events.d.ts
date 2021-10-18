import { OAuth2Authorization, OidcTokenError, OidcTokenInfo, TokenInfo, TokenRemoveOptions } from '../authorization/Authorization';
import { ResultEventDetail } from '../BaseEvents.js';

/**
 * An event dispatched to request OAuth2 authorization.
 */
export declare class OAuth2AuthorizeEvent extends CustomEvent<OAuth2Authorization & ResultEventDetail<TokenInfo>> {
  /**
   * @param detail Authorization options.
   */
  constructor(detail: OAuth2Authorization);
}

/**
 * An event dispatched to request OAuth2 authorization.
 */
export declare class OAuth2RemoveTokenEvent extends CustomEvent<TokenRemoveOptions & ResultEventDetail<void>> {
  /**
   * @param detail Token remove options.
   */
  constructor(detail: TokenRemoveOptions);
}

/**
 * An event dispatched to request OIDC authorization.
 */
export class OidcAuthorizeEvent extends CustomEvent<OAuth2Authorization & ResultEventDetail<(OidcTokenInfo|OidcTokenError)[]>> {
  /**
   * @param detail Authorization options.
   */
  constructor(detail: OAuth2Authorization);
}

/**
 * An event dispatched to remove cached OIDC tokens.
 */
export class OidcRemoveTokensEvent extends CustomEvent<TokenRemoveOptions & ResultEventDetail<void>> {
  /**
   * @param detail Token remove options.
   */
  constructor(detail: TokenRemoveOptions);
}

/**
 * @param target A node on which to dispatch the event.
 * @param config Authorization options.
 * @return Promise resolved with authorization result
 * @throws {TokenError}
 */
export declare function authorizeOauth2Action(target: EventTarget, config: OAuth2Authorization): Promise<TokenInfo>;

/**
 * @param target A node on which to dispatch the event.
 * @param config Authorization options.
 * @returns Promise resolved when the token is removed
 */
export declare function removeOauth2TokenAction(target: EventTarget, config: TokenRemoveOptions): Promise<void>;

/**
 * @param target A node on which to dispatch the event.
 * @param config Authorization options.
 * @return Promise resolved with authorization result
 * @throws {TokenError}
 */
export declare function authorizeOidcAction(target: EventTarget, config: OAuth2Authorization): Promise<(OidcTokenInfo|OidcTokenError)[]>;

/**
 * @param target A node on which to dispatch the event.
 * @param config Authorization options.
 * @returns Promise resolved when the token is removed
 */
export declare function removeOidcTokensAction(target: EventTarget, config: TokenRemoveOptions): Promise<void>;
