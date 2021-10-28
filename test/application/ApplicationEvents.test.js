import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { Events, EventTypes } from '../../index.js';

describe('Events', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('App', () => {
    describe('versionInfo()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.App.versionInfo, spy);
        await Events.App.versionInfo(et);
        assert.isTrue(spy.calledOnce);
      });

      it('returns the result', async () => {
        const info = { chrome: '1', appVersion: '2' };
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.App.versionInfo, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(info);
        }
        et.addEventListener(EventTypes.App.versionInfo, handler);
        const result = await Events.App.versionInfo(et);
        assert.equal(result, info);
      });
    });
  });
});
