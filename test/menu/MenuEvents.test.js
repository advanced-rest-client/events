import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { Events, EventTypes } from '../../index.js'

describe('Events', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('MenuEvents', () => {
    describe('popup()', () => {
      const menu = 'request'; 
      const sizing = { height: 100, width: 80 };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Menu.popup, spy);
        await Events.Menu.popup(et, menu, sizing);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Menu.popup, spy);
        await Events.Menu.popup(et, menu, sizing);
        const { detail } = spy.args[0][0];
        assert.equal(detail.menu, menu, 'menu is set');
        assert.deepEqual(detail.sizing, sizing, 'sizing is set');
      });

      it('awaits until finished', async () => {
        let called = false;
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Menu.popup, handler);
          e.preventDefault();
          e.detail.result = new Promise((resolve) => {
            setTimeout(() => {
              called = true;
              resolve();
            }, 1);
          });
        }
        et.addEventListener(EventTypes.Menu.popup, handler);
        await Events.Menu.popup(et, menu, sizing);
        assert.isTrue(called);
      });
    });

    describe('navigate()', () => {
      const menu = 'request'; 
      const id = 'test id';
      const type = 'history';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Menu.navigate, spy);
        await Events.Menu.navigate(et, menu);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Menu.navigate, spy);
        await Events.Menu.navigate(et, menu, id, type);
        const { detail } = spy.args[0][0];
        assert.equal(detail.menu, menu, 'menu is set');
        assert.deepEqual(detail.args, [id, type], 'args is set');
      });

      it('awaits until finished', async () => {
        let called = false;
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Menu.navigate, handler);
          e.preventDefault();
          e.detail.result = new Promise((resolve) => {
            setTimeout(() => {
              called = true;
              resolve();
            }, 1);
          });
        }
        et.addEventListener(EventTypes.Menu.navigate, handler);
        await Events.Menu.navigate(et, menu);
        assert.isTrue(called);
      });
    });

    describe('State', () => {
      describe('open()', () => {
        const menu = 'history';
  
        it('dispatches the event', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(EventTypes.Menu.State.open, spy);
          Events.Menu.State.open(et, menu);
          assert.isTrue(spy.calledOnce);
        });
  
        it('sets the arguments on the detail object', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(EventTypes.Menu.State.open, spy);
          Events.Menu.State.open(et, menu);
          const { detail } = spy.args[0][0];
          assert.equal(detail.menu, menu, 'menu is set');
        });
      });

      describe('close()', () => {
        const menu = 'history';
  
        it('dispatches the event', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(EventTypes.Menu.State.close, spy);
          Events.Menu.State.close(et, menu);
          assert.isTrue(spy.calledOnce);
        });
  
        it('sets the arguments on the detail object', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(EventTypes.Menu.State.close, spy);
          Events.Menu.State.close(et, menu);
          const { detail } = spy.args[0][0];
          assert.equal(detail.menu, menu, 'menu is set');
        });
      });
    })
  });
});
