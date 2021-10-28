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

  describe('Updater', () => {
    describe('checkForUpdate()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.checkForUpdate, spy);
        await Events.Updater.checkForUpdate(et);
        assert.isTrue(spy.calledOnce);
      });

      it('returns the result', async () => {
        const info = { test: true };
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Updater.checkForUpdate, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(info);
        }
        et.addEventListener(EventTypes.Updater.checkForUpdate, handler);
        const result = await Events.Updater.checkForUpdate(et);
        assert.equal(result, info);
      });
    });

    describe('installUpdate()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.installUpdate, spy);
        await Events.Updater.installUpdate(et);
        assert.isTrue(spy.calledOnce);
      });

      it('returns the result', async () => {
        let called = false;
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Updater.installUpdate, handler);
          e.preventDefault();
          e.detail.result = new Promise((resolve) => {
            setTimeout(() => {
              called = true;
              resolve();
            }, 1);
          });
        }
        et.addEventListener(EventTypes.Updater.installUpdate, handler);
        await Events.Updater.installUpdate(et);
        assert.isTrue(called);
      });
    });

    describe('State.checkingForUpdate()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.State.checkingForUpdate, spy);
        Events.Updater.State.checkingForUpdate(et);
        assert.isTrue(spy.calledOnce);
      });
    });

    describe('State.updateAvailable()', () => {
      const info = { test: true };
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.State.updateAvailable, spy);
        Events.Updater.State.updateAvailable(et);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the argument as the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.State.updateAvailable, spy);
        Events.Updater.State.updateAvailable(et, info);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail, info);
      });
    });

    describe('State.updateNotAvailable()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.State.updateNotAvailable, spy);
        Events.Updater.State.updateNotAvailable(et);
        assert.isTrue(spy.calledOnce);
      });
    });

    describe('State.autoUpdateError()', () => {
      const info = { test: true };
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.State.autoUpdateError, spy);
        Events.Updater.State.autoUpdateError(et);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the argument as the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.State.autoUpdateError, spy);
        Events.Updater.State.autoUpdateError(et, info);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail, info);
      });
    });

    describe('State.downloadProgress()', () => {
      const info = { test: true };
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.State.downloadProgress, spy);
        Events.Updater.State.downloadProgress(et);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the argument as the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.State.downloadProgress, spy);
        Events.Updater.State.downloadProgress(et, info);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail, info);
      });
    });

    describe('State.updateDownloaded()', () => {
      const info = { test: true };
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.State.updateDownloaded, spy);
        Events.Updater.State.updateDownloaded(et);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the argument as the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Updater.State.updateDownloaded, spy);
        Events.Updater.State.updateDownloaded(et, info);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail, info);
      });
    });
  });
});
