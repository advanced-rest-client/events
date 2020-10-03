import { assert } from '@open-wc/testing';
import {
  TelemetryScreenEvent,
  TelemetryEventEvent,
  TelemetryExceptionEvent,
  TelemetrySocialEvent,
  TelemetryTimingEvent,
  TelemetryEventTypes,
} from  '../../index.js';

describe('Telemetry', () => {
  describe('Events', () => {
    describe('TelemetryScreenEvent', () => {
      const init = { 
        screenName: 'e-screenName',
      };

      it('has the passed type', () => {
        const e = new TelemetryScreenEvent(init);
        assert.equal(e.type, TelemetryEventTypes.view);
      });

      it('has the detail object', () => {
        const e = new TelemetryScreenEvent(init);
        assert.deepEqual(e.detail, init);
      });

      it('bubbles', () => {
        const e = new TelemetryScreenEvent(init);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new TelemetryScreenEvent(init);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new TelemetryScreenEvent(init);
        assert.isTrue(e.cancelable);
      });
    });

    describe('TelemetryEventEvent', () => {
      const init = { 
        category: 'e-cat',
        action: 'e-act',
        label: 'e-label',
        value: 1,
      };

      it('has the passed type', () => {
        const e = new TelemetryEventEvent(init);
        assert.equal(e.type, TelemetryEventTypes.event);
      });

      it('has the detail object', () => {
        const e = new TelemetryEventEvent(init);
        assert.deepEqual(e.detail, init);
      });

      it('bubbles', () => {
        const e = new TelemetryEventEvent(init);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new TelemetryEventEvent(init);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new TelemetryEventEvent(init);
        assert.isTrue(e.cancelable);
      });
    });

    describe('TelemetryExceptionEvent', () => {
      const init = { 
        description: 'e-description',
        fatal: true,
      };

      it('has the passed type', () => {
        const e = new TelemetryExceptionEvent(init);
        assert.equal(e.type, TelemetryEventTypes.exception);
      });

      it('has the detail object', () => {
        const e = new TelemetryExceptionEvent(init);
        assert.deepEqual(e.detail, init);
      });

      it('bubbles', () => {
        const e = new TelemetryExceptionEvent(init);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new TelemetryExceptionEvent(init);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new TelemetryExceptionEvent(init);
        assert.isTrue(e.cancelable);
      });
    });

    describe('TelemetrySocialEvent', () => {
      const init = { 
        network: 'e-network',
        action: 'e-action',
        target: 'e-target',
      };

      it('has the passed type', () => {
        const e = new TelemetrySocialEvent(init);
        assert.equal(e.type, TelemetryEventTypes.social);
      });

      it('has the detail object', () => {
        const e = new TelemetrySocialEvent(init);
        assert.deepEqual(e.detail, init);
      });

      it('bubbles', () => {
        const e = new TelemetrySocialEvent(init);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new TelemetrySocialEvent(init);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new TelemetrySocialEvent(init);
        assert.isTrue(e.cancelable);
      });
    });

    describe('TelemetryTimingEvent', () => {
      const init = { 
        category: 'e-category',
        variable: 'e-variable',
        value: 100,
        label: 'e-label',
      };

      it('has the passed type', () => {
        const e = new TelemetryTimingEvent(init);
        assert.equal(e.type, TelemetryEventTypes.timing);
      });

      it('has the detail object', () => {
        const e = new TelemetryTimingEvent(init);
        assert.deepEqual(e.detail, init);
      });

      it('bubbles', () => {
        const e = new TelemetryTimingEvent(init);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new TelemetryTimingEvent(init);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new TelemetryTimingEvent(init);
        assert.isTrue(e.cancelable);
      });
    });
  });
});
