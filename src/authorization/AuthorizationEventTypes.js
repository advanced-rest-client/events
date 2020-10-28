export const AuthorizationEventTypes = {
  OAuth2: {
    /** 
     * Authorization with auth configuration on detail
     */
    authorize: 'oauth2authorize',
    /** 
     * Removes cached token for the provider
     */
    removeToken: 'oauth2removetoken',
  }
};

Object.freeze(AuthorizationEventTypes);
Object.freeze(AuthorizationEventTypes.OAuth2);