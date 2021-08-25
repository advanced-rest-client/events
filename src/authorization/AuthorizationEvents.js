import * as Events from './Events.js';

export const AuthorizationEvents = {
  OAuth2: {
    authorize: Events.authorizeOauth2Action,
    removeToken: Events.removeOauth2TokenAction,
  },
  Oidc: {
    authorize: Events.authorizeOidcAction,
    removeTokens: Events.removeOidcTokensAction,
  },
};

Object.freeze(AuthorizationEvents);
Object.freeze(AuthorizationEvents.OAuth2);
