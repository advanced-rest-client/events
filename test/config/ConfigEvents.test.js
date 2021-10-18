import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { ConfigEvents, ConfigEventTypes } from  '../../index.js';

describe('Config', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('ConfigEvents', () => {
    describe('readAll()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ConfigEventTypes.readAll, spy);
        ConfigEvents.readAll(et);
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ConfigEventTypes.readAll, spy);
        ConfigEvents.readAll(et);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail, {});
      });
    });

    describe('read()', () => {
      const key = 'test-key';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ConfigEventTypes.read, spy);
        ConfigEvents.read(et, key);
        assert.isTrue(spy.calledOnce);
      });

      it('has the key on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ConfigEventTypes.read, spy);
        ConfigEvents.read(et, key);
        const e = spy.args[0][0];
        assert.equal(e.detail.key, key);
      });
    });

    describe('update()', () => {
      const key = 'test-key';
      const value = 'test-value';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ConfigEventTypes.update, spy);
        ConfigEvents.update(et, key, value);
        assert.isTrue(spy.calledOnce);
      });

      it('has the key on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ConfigEventTypes.update, spy);
        ConfigEvents.update(et, key, value);
        const e = spy.args[0][0];
        assert.equal(e.detail.key, key);
      });

      it('has the value on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ConfigEventTypes.update, spy);
        ConfigEvents.update(et, key, value);
        const e = spy.args[0][0];
        assert.equal(e.detail.value, value);
      });
    });

    describe('State.update()', () => {
      const key = 'test-key';
      const value = 'test-value';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ConfigEventTypes.State.update, spy);
        ConfigEvents.State.update(et, key, value);
        assert.isTrue(spy.calledOnce);
      });

      it('has the key on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ConfigEventTypes.State.update, spy);
        ConfigEvents.State.update(et, key, value);
        const e = spy.args[0][0];
        assert.equal(e.detail.key, key);
      });

      it('has the value on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ConfigEventTypes.State.update, spy);
        ConfigEvents.State.update(et, key, value);
        const e = spy.args[0][0];
        assert.equal(e.detail.value, value);
      });
    });
  });
});
