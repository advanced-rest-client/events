/**
 * @deprecated Use `EventTypes` instead.
 */
declare interface OAuth2EventTypes {
  /** 
   * Authorization with auth configuration on detail
   */
  authorize: string;
  /** 
   * Removes cached token for the provider
   */
  removeToken: string;
}
/**
 * @deprecated Use `EventTypes` instead.
 */
declare interface OidcEventTypes {
  /** 
   * Authorization the user with the provided configuration.
   */
  authorize: string;
  /** 
   * Removes cached tokens for the provider
   */
  removeTokens: string;
}
/**
 * @deprecated Use `EventTypes` instead.
 */
declare interface AuthorizationEventTypes {
  OAuth2: OAuth2EventTypes;
  Oidc: OidcEventTypes;
}
/**
 * @deprecated Use `EventTypes` instead.
 */
export declare const AuthorizationEventTypes: Readonly<AuthorizationEventTypes>;
