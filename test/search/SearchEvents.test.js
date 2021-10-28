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

  describe('SearchEvents', () => {
    describe('find()', () => {
      const query = 'term'; 
      const options = { forward: true };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Search.find, spy);
        await Events.Search.find(et, query);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Search.find, spy);
        await Events.Search.find(et, query, options);
        const { detail } = spy.args[0][0];
        assert.equal(detail.query, query, 'query is set');
        assert.deepEqual(detail.options, options, 'options is set');
      });

      it('awaits until finished', async () => {
        let called = false;
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Search.find, handler);
          e.preventDefault();
          e.detail.result = new Promise((resolve) => {
            setTimeout(() => {
              called = true;
              resolve();
            }, 1);
          });
        }
        et.addEventListener(EventTypes.Search.find, handler);
        await Events.Search.find(et, query);
        assert.isTrue(called);
      });
    });

    describe('clear()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Search.clear, spy);
        await Events.Search.clear(et);
        assert.isTrue(spy.calledOnce);
      });

      it('awaits until finished', async () => {
        let called = false;
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Search.clear, handler);
          e.preventDefault();
          e.detail.result = new Promise((resolve) => {
            setTimeout(() => {
              called = true;
              resolve();
            }, 1);
          });
        }
        et.addEventListener(EventTypes.Search.clear, handler);
        await Events.Search.clear(et);
        assert.isTrue(called);
      });
    });

    describe('State', () => {
      describe('foundInPage()', () => {
        const matches = 2; 
        const activeMatchOrdinal = 1;
  
        it('dispatches the event', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(EventTypes.Search.State.foundInPage, spy);
          Events.Search.State.foundInPage(et, matches, activeMatchOrdinal);
          assert.isTrue(spy.calledOnce);
        });
  
        it('sets the arguments on the detail object', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(EventTypes.Search.State.foundInPage, spy);
          Events.Search.State.foundInPage(et, matches, activeMatchOrdinal);
          const { detail } = spy.args[0][0];
          assert.equal(detail.matches, matches, 'matches is set');
          assert.deepEqual(detail.activeMatchOrdinal, activeMatchOrdinal, 'activeMatchOrdinal is set');
        });
      });
    })
  });
});
