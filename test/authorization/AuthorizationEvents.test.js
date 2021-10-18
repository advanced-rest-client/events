import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import {
  AuthorizationEventTypes,
  AuthorizationEvents,
} from  '../../index.js';

describe('authorization', () => {
  describe('AuthorizationEvents', () => {
    /**
     * @return {Promise<HTMLDivElement>}
     */
    async function etFixture() {
      return fixture(html`<div></div>`);
    }

    describe('OAuth2', () => {
      describe('authorize()', () => {
        const config = { responseType: 'implicit' };
  
        it('dispatches the list event', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(AuthorizationEventTypes.OAuth2.authorize, spy);
          AuthorizationEvents.OAuth2.authorize(et, config);
          assert.isTrue(spy.calledOnce);
        });
  
        it('has the configuration on the detail', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(AuthorizationEventTypes.OAuth2.authorize, spy);
          AuthorizationEvents.OAuth2.authorize(et, config);
          const e = spy.args[0][0];
          assert.deepEqual(e.detail, config);
        });
      });
  
      describe('removeToken()', () => {
        const config = { clientId: 'id', authorizationUri: 'test' };
  
        it('dispatches the list event', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(AuthorizationEventTypes.OAuth2.removeToken, spy);
          AuthorizationEvents.OAuth2.removeToken(et, config);
          assert.isTrue(spy.calledOnce);
        });
  
        it('has the configuration on the detail', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(AuthorizationEventTypes.OAuth2.removeToken, spy);
          AuthorizationEvents.OAuth2.removeToken(et, config);
          const e = spy.args[0][0];
          assert.deepEqual(e.detail, config);
        });
      });
    });

    describe('Oidc', () => {
      describe('authorize()', () => {
        const config = { responseType: 'implicit' };
  
        it('dispatches the list event', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(AuthorizationEventTypes.Oidc.authorize, spy);
          AuthorizationEvents.Oidc.authorize(et, config);
          assert.isTrue(spy.calledOnce);
        });
  
        it('has the configuration on the detail', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(AuthorizationEventTypes.Oidc.authorize, spy);
          AuthorizationEvents.Oidc.authorize(et, config);
          const e = spy.args[0][0];
          assert.deepEqual(e.detail, config);
        });
      });
  
      describe('removeTokens()', () => {
        const config = { clientId: 'id', authorizationUri: 'test' };
  
        it('dispatches the list event', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(AuthorizationEventTypes.Oidc.removeTokens, spy);
          AuthorizationEvents.Oidc.removeTokens(et, config);
          assert.isTrue(spy.calledOnce);
        });
  
        it('has the configuration on the detail', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(AuthorizationEventTypes.Oidc.removeTokens, spy);
          AuthorizationEvents.Oidc.removeTokens(et, config);
          const e = spy.args[0][0];
          assert.deepEqual(e.detail, config);
        });
      });
    });

  });
});
