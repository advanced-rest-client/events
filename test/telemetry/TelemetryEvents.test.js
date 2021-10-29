import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { Events, EventTypes } from '../../index.js';

describe('Telemetry', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('Events.Telemetry', () => {
    describe('view()', () => {
      const screenName = 'test-screen';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Telemetry.view, spy);
        Events.Telemetry.view(et, screenName);
        assert.isTrue(spy.calledOnce);
      });

      it('the event has screen name on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Telemetry.view, spy);
        Events.Telemetry.view(et, screenName);
        const { detail } = spy.args[0][0];
        assert.equal(detail.screenName, screenName);
      });

      it('the event has custom configuration', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        const custom = {
          customMetrics: [{ index: 1, value: 1 }],
          customDimensions: [{ index: 1, value: 'test' }],
        };
        et.addEventListener(EventTypes.Telemetry.view, spy);
        Events.Telemetry.view(et, screenName, custom);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail.customMetrics, custom.customMetrics, 'has customMetrics');
        assert.deepEqual(detail.customDimensions, custom.customDimensions, 'has customDimensions');
      });
    });

    describe('event()', () => {
      const init = { 
        category: 'e-cat',
        action: 'e-act',
        label: 'e-label',
        value: 1,
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Telemetry.event, spy);
        Events.Telemetry.event(et, init);
        assert.isTrue(spy.calledOnce);
      });

      it('the event has the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Telemetry.event, spy);
        Events.Telemetry.event(et, init);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail, init);
      });
    });

    describe('exception()', () => {
      const description = 'event-exception';
      const fatal = true;

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Telemetry.exception, spy);
        Events.Telemetry.exception(et, description);
        assert.isTrue(spy.calledOnce);
      });

      it('the event has the description property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Telemetry.exception, spy);
        Events.Telemetry.exception(et, description);
        const { detail } = spy.args[0][0];
        assert.equal(detail.description, description);
      });

      it('the event has the fatal property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Telemetry.exception, spy);
        Events.Telemetry.exception(et, description, fatal);
        const { detail } = spy.args[0][0];
        assert.equal(detail.fatal, true);
      });

      it('the event has custom configuration', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        const custom = {
          customMetrics: [{ index: 1, value: 1 }],
          customDimensions: [{ index: 1, value: 'test' }],
        };
        et.addEventListener(EventTypes.Telemetry.exception, spy);
        Events.Telemetry.exception(et, description, false, custom);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail.customMetrics, custom.customMetrics, 'has customMetrics');
        assert.deepEqual(detail.customDimensions, custom.customDimensions, 'has customDimensions');
      });
    });

    describe('social()', () => {
      const init = { 
        network: 'e-network',
        action: 'e-action',
        target: 'e-target',
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Telemetry.social, spy);
        Events.Telemetry.social(et, init.network, init.action, init.target);
        assert.isTrue(spy.calledOnce);
      });

      it('the event has the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Telemetry.social, spy);
        Events.Telemetry.social(et, init.network, init.action, init.target);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail, init);
      });

      it('the event has custom configuration', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        const custom = {
          customMetrics: [{ index: 1, value: 1 }],
          customDimensions: [{ index: 1, value: 'test' }],
        };
        et.addEventListener(EventTypes.Telemetry.social, spy);
        Events.Telemetry.social(et, init.network, init.action, init.target, custom);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail, { ...init, ...custom });
      });
    });

    describe('timing()', () => {
      const init = { 
        category: 'e-category',
        variable: 'e-variable',
        value: 100,
        label: 'e-label',
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Telemetry.timing, spy);
        Events.Telemetry.timing(et, init.category, init.variable, init.value, init.label);
        assert.isTrue(spy.calledOnce);
      });

      it('the event has the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Telemetry.timing, spy);
        Events.Telemetry.timing(et, init.category, init.variable, init.value, init.label);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail, init);
      });

      it('the event has custom configuration', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        const custom = {
          customMetrics: [{ index: 1, value: 1 }],
          customDimensions: [{ index: 1, value: 'test' }],
        };
        et.addEventListener(EventTypes.Telemetry.timing, spy);
        Events.Telemetry.timing(et, init.category, init.variable, init.value, init.label, custom);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail, { ...init, ...custom });
      });
    });

    describe('State', () => {
      describe('notifyFilePicked()', () => {
        it('dispatches the event', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(EventTypes.Telemetry.State.set, spy);
          Events.Telemetry.State.set(et);
          assert.isTrue(spy.calledOnce);
        });
      });
    });
  });
});
