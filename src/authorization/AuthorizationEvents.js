import * as Events from './Events.js';

export const AuthorizationEvents = {
  OAuth2: {
    authorize: Events.authorizeAction,
    removeToken: Events.removeTokenAction,
  }
};

Object.freeze(AuthorizationEvents);
Object.freeze(AuthorizationEvents.OAuth2);