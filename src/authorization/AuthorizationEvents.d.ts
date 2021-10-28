import { OAuth2Authorization, TokenInfo, TokenRemoveOptions, OidcTokenError, OidcTokenInfo } from '../authorization/Authorization';

declare interface OAuth2Events {
  /**
   * @param target A node on which to dispatch the event.
   * @param config Authorization options.
   * @return Promise resolved with authorization result
   */
  authorize(target: EventTarget, config: OAuth2Authorization): Promise<TokenInfo>;
  /**
   * @param target A node on which to dispatch the event.
   * @param config Authorization options.
   * @returns Promise resolved when the token is removed
   */
  removeToken(target: EventTarget, config: TokenRemoveOptions): Promise<void>;
}

declare interface OidcEvents {
  /**
   * @param target A node on which to dispatch the event.
   * @param config Authorization options.
   * @return Promise resolved with authorization result
   */
  authorize(target: EventTarget, config: OAuth2Authorization): Promise<(OidcTokenInfo|OidcTokenError)[]>;
  /**
   * @param target A node on which to dispatch the event.
   * @param config Authorization options.
   * @returns Promise resolved when the token is removed
   */
  removeTokens(target: EventTarget, config: TokenRemoveOptions): Promise<void>;
}

export declare interface IAuthorizationEvents {
  OAuth2: OAuth2Events;
  Oidc: OidcEvents;
}

export declare const AuthorizationEvents: Readonly<IAuthorizationEvents>;
