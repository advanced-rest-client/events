import { assert, fixture, html } from '@open-wc/testing';
import * as sinon from 'sinon';
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

    describe('authorize()', () => {
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
});