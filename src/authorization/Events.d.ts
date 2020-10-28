import { OAuth2Authorization } from '@advanced-rest-client/arc-types/src/authorization/Authorization';
import { TokenInfo, TokenRemoveOptions } from '@advanced-rest-client/arc-types/src/oauth2/OAuth2';
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
 * @param target A node on which to dispatch the event.
 * @param config Authorization options.
 * @return Promise resolved with authorization result
 * @throws {TokenError}
 */
export declare function authorizeAction(target: EventTarget, config: OAuth2Authorization): Promise<TokenInfo>;

/**
 * @param target A node on which to dispatch the event.
 * @param config Authorization options.
 * @returns Promise resolved when the token is removed
 */
export declare function removeTokenAction(target: EventTarget, config: TokenRemoveOptions): Promise<void>;