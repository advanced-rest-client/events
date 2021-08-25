import { assert } from '@open-wc/testing';
import {
  OAuth2AuthorizeEvent,
  OAuth2RemoveTokenEvent,
  AuthorizationEventTypes,
  OidcAuthorizeEvent,
  OidcRemoveTokensEvent,
} from  '../../index.js';

describe('authorization', () => {
  describe('Events', () => {
    describe('OAuth2AuthorizeEvent', () => {
      const config = { responseType: 'implicit' };
      it('has the correct type', () => {
        const e = new OAuth2AuthorizeEvent(config);
        assert.equal(e.type, AuthorizationEventTypes.OAuth2.authorize);
      });

      it('has the detail property set', () => {
        const e = new OAuth2AuthorizeEvent(config);
        assert.deepEqual(e.detail, config);
      });

      it('is composed', () => {
        const e = new OAuth2AuthorizeEvent(config);
        assert.isTrue(e.composed);
      });

      it('is bubbling', () => {
        const e = new OAuth2AuthorizeEvent(config);
        assert.isTrue(e.bubbles);
      });

      it('is cancelable', () => {
        const e = new OAuth2AuthorizeEvent(config);
        assert.isTrue(e.cancelable);
      });
    });

    describe('OAuth2RemoveTokenEvent', () => {
      const config = { clientId: 'id', authorizationUri: 'test' };
      it('has the correct type', () => {
        const e = new OAuth2RemoveTokenEvent(config);
        assert.equal(e.type, AuthorizationEventTypes.OAuth2.removeToken);
      });

      it('has the detail property set', () => {
        const e = new OAuth2RemoveTokenEvent(config);
        assert.deepEqual(e.detail, config);
      });

      it('is composed', () => {
        const e = new OAuth2RemoveTokenEvent(config);
        assert.isTrue(e.composed);
      });

      it('is bubbling', () => {
        const e = new OAuth2RemoveTokenEvent(config);
        assert.isTrue(e.bubbles);
      });

      it('is cancelable', () => {
        const e = new OAuth2RemoveTokenEvent(config);
        assert.isTrue(e.cancelable);
      });
    });

    describe('OidcAuthorizeEvent', () => {
      const config = { responseType: 'implicit' };
      it('has the correct type', () => {
        const e = new OidcAuthorizeEvent(config);
        assert.equal(e.type, AuthorizationEventTypes.Oidc.authorize);
      });

      it('has the detail property set', () => {
        const e = new OidcAuthorizeEvent(config);
        assert.deepEqual(e.detail, config);
      });

      it('is composed', () => {
        const e = new OidcAuthorizeEvent(config);
        assert.isTrue(e.composed);
      });

      it('is bubbling', () => {
        const e = new OidcAuthorizeEvent(config);
        assert.isTrue(e.bubbles);
      });

      it('is cancelable', () => {
        const e = new OidcAuthorizeEvent(config);
        assert.isTrue(e.cancelable);
      });
    });

    describe('OidcRemoveTokensEvent', () => {
      const config = { clientId: 'id', authorizationUri: 'test' };
      it('has the correct type', () => {
        const e = new OidcRemoveTokensEvent(config);
        assert.equal(e.type, AuthorizationEventTypes.Oidc.removeTokens);
      });

      it('has the detail property set', () => {
        const e = new OidcRemoveTokensEvent(config);
        assert.deepEqual(e.detail, config);
      });

      it('is composed', () => {
        const e = new OidcRemoveTokensEvent(config);
        assert.isTrue(e.composed);
      });

      it('is bubbling', () => {
        const e = new OidcRemoveTokensEvent(config);
        assert.isTrue(e.bubbles);
      });

      it('is cancelable', () => {
        const e = new OidcRemoveTokensEvent(config);
        assert.isTrue(e.cancelable);
      });
    });
  });
});
