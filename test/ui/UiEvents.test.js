import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { UiEvents, UiEventTypes } from  '../../index.js';

/** @typedef {import('../../').WebSocket.WebsocketRequest} WebsocketRequest */

describe('UI events', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('UiEvents', () => {
    describe('contextMenu()', () => {
      const selector = 'test-selector';
      const mouseEvent = new MouseEvent('contextmenu');

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(UiEventTypes.contextMenu, spy);
        UiEvents.contextMenu(et, {
          selector,
          mouseEvent,
        });
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(UiEventTypes.contextMenu, spy);
        UiEvents.contextMenu(et, {
          selector,
          mouseEvent,
        });
        assert.deepEqual(spy.args[0][0].detail, {
          selector,
          mouseEvent,
        });
      });
    });
  });
});
