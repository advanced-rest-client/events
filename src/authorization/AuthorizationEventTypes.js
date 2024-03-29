/**
 * @deprecated Use `EventTypes` instead.
 */
export const AuthorizationEventTypes = {
  /**
   * @deprecated Use `EventTypes` instead.
   */
  OAuth2: {
    /** 
     * Authorization with auth configuration on detail
     */
    authorize: 'oauth2authorize',
    /** 
     * Removes cached token for the provider
     */
    removeToken: 'oauth2removetoken',
  },
  /**
   * @deprecated Use `EventTypes` instead.
   */
  Oidc: {
    /** 
     * Authorization the user with the provided configuration.
     */
    authorize: 'oidcauthorize',
    /** 
     * Removes cached tokens for the provider
     */
    removeTokens: 'oidcremovetokens',
  },
};

Object.freeze(AuthorizationEventTypes);
Object.freeze(AuthorizationEventTypes.OAuth2);
Object.freeze(AuthorizationEventTypes.Oidc);
