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

declare interface AuthorizationEventTypes {
  OAuth2: OAuth2EventTypes;
  Oidc: OidcEventTypes;
}

export declare const AuthorizationEventTypes: Readonly<AuthorizationEventTypes>;
