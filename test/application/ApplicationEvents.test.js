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

    describe('command()', () => {
      const action = 'term'; 
      const arg1 = { forward: true };
      const arg2 = 'test';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.App.command, spy);
        Events.App.command(et, action);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.App.command, spy);
        Events.App.command(et, action, arg1, arg2);
        const { detail } = spy.args[0][0];
        assert.equal(detail.action, action, 'action is set');
        assert.deepEqual(detail.args, [arg1, arg2], 'args is set');
      });
    });

    describe('requestAction()', () => {
      const action = 'term'; 
      const arg1 = { forward: true };
      const arg2 = 'test';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.App.requestAction, spy);
        Events.App.requestAction(et, action);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.App.requestAction, spy);
        Events.App.requestAction(et, action, arg1, arg2);
        const { detail } = spy.args[0][0];
        assert.equal(detail.action, action, 'action is set');
        assert.deepEqual(detail.args, [arg1, arg2], 'args is set');
      });
    });

    describe('readState()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.App.readState, spy);
        Events.App.readState(et);
        assert.isTrue(spy.calledOnce);
      });

      it('returns the result', async () => {
        const info = { kind: '', };
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.App.readState, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(info);
        }
        et.addEventListener(EventTypes.App.readState, handler);
        const result = await Events.App.readState(et);
        assert.equal(result, info);
      });
    });

    describe('updateStateProperty()', () => {
      const name = 'prop'; 
      const value = true;

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.App.updateStateProperty, spy);
        Events.App.updateStateProperty(et, name);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.App.updateStateProperty, spy);
        Events.App.updateStateProperty(et, name, value);
        const { detail } = spy.args[0][0];
        assert.equal(detail.name, name, 'action is set');
        assert.equal(detail.value, value, 'value is set');
      });

      it('awaits until finished', async () => {
        let called = false;
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.App.updateStateProperty, handler);
          e.preventDefault();
          e.detail.result = new Promise((resolve) => {
            setTimeout(() => {
              called = true;
              resolve();
            }, 1);
          });
        }
        et.addEventListener(EventTypes.App.updateStateProperty, handler);
        await Events.App.updateStateProperty(et, name, value);
        assert.isTrue(called);
      });
    });
  });
});
