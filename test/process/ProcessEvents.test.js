import { assert, fixture, html } from '@open-wc/testing';
import * as sinon from 'sinon';
import { ProcessEventTypes, ProcessEvents } from  '../../index.js';

describe('Process', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('ProcessEventTypes', () => {
    describe('loadingstart()', () => {
      const pid = 'process-id-1';
      const message = 'test-message';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ProcessEventTypes.loadingstart, spy);
        ProcessEvents.loadingstart(et, pid);
        assert.isTrue(spy.calledOnce);
      });

      it('has the pid on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ProcessEventTypes.loadingstart, spy);
        ProcessEvents.loadingstart(et, pid);
        const e = spy.args[0][0];
        assert.equal(e.detail.pid, pid);
      });

      it('has the message on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ProcessEventTypes.loadingstart, spy);
        ProcessEvents.loadingstart(et, pid, message);
        const e = spy.args[0][0];
        assert.equal(e.detail.message, message);
      });
    });

    describe('loadingstop()', () => {
      const pid = 'process-id-2';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ProcessEventTypes.loadingstop, spy);
        ProcessEvents.loadingstop(et, pid);
        assert.isTrue(spy.calledOnce);
      });

      it('has the pid on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ProcessEventTypes.loadingstop, spy);
        ProcessEvents.loadingstop(et, pid);
        const e = spy.args[0][0];
        assert.equal(e.detail.pid, pid);
      });
    });

    describe('loadingerror()', () => {
      const pid = 'process-id-2';
      const error = new Error('x');

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ProcessEventTypes.loadingerror, spy);
        ProcessEvents.loadingerror(et, pid, error);
        assert.isTrue(spy.calledOnce);
      });

      it('has the pid on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ProcessEventTypes.loadingerror, spy);
        ProcessEvents.loadingerror(et, pid, error);
        const e = spy.args[0][0];
        assert.equal(e.detail.pid, pid);
      });

      it('has the error on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ProcessEventTypes.loadingerror, spy);
        ProcessEvents.loadingerror(et, pid, error);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.error, error);
      });
    });
  });
});
