import { OAuth2Authorization } from '@advanced-rest-client/arc-types/src/authorization/Authorization';
import { TokenInfo, TokenRemoveOptions } from '@advanced-rest-client/arc-types/src/oauth2/OAuth2';

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

declare interface AuthorizationEvents {
  OAuth2: OAuth2Events
}

export declare const AuthorizationEvents: Readonly<AuthorizationEvents>;