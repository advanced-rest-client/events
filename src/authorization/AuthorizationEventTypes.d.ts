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

declare interface AuthorizationEventTypes {
  OAuth2: OAuth2EventTypes;
}

export declare const AuthorizationEventTypes: Readonly<AuthorizationEventTypes>;