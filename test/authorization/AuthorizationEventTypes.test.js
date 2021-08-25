import { assert } from '@open-wc/testing';
import { AuthorizationEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('authorization', () => {
  describe('AuthorizationEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(AuthorizationEventTypes, 'object');
    });

    it('has OAuth2 namespace', () => {
      assert.typeOf(AuthorizationEventTypes.OAuth2, 'object');
    });

    it('has frozen OAuth2 namespace', () => {
      assert.throws(() => {
        // @ts-ignore
        AuthorizationEventTypes.OAuth2 = { read: '' };
      });
    });

    [
      ['authorize', 'oauth2authorize'],
      ['removeToken', 'oauth2removetoken'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(AuthorizationEventTypes.OAuth2[prop], value);
      });
    });

    it('has unique events for OAuth2 namespace', () => {
      ensureUnique('AuthorizationEventTypes.OAuth2', AuthorizationEventTypes.OAuth2);
    });

    it('has frozen Oidc namespace', () => {
      assert.throws(() => {
        // @ts-ignore
        AuthorizationEventTypes.Oidc = { read: '' };
      });
    });

    [
      ['authorize', 'oidcauthorize'],
      ['removeTokens', 'oidcremovetokens'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(AuthorizationEventTypes.Oidc[prop], value);
      });
    });

    it('has unique events for Oidc namespace', () => {
      ensureUnique('AuthorizationEventTypes.Oidc', AuthorizationEventTypes.Oidc);
    });
  });
});
