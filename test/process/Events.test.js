import { assert } from '@open-wc/testing';
import {
  ProcessStartEvent,
  ProcessEventTypes,
  ProcessStopEvent,
  ProcessErrorEvent,
} from  '../../index.js';

describe('Process', () => {
  describe('Events', () => {
    describe('ProcessStartEvent', () => {
      const pid = 'process-id-1';
      const message = 'test-message';

      it('has the correct type', () => {
        const e = new ProcessStartEvent(pid);
        assert.equal(e.type, ProcessEventTypes.loadingstart);
      });

      it('has the pid property', () => {
        const e = new ProcessStartEvent(pid);
        assert.equal(e.detail.pid, pid);
      });

      it('has the message property', () => {
        const e = new ProcessStartEvent(pid, message);
        assert.equal(e.detail.message, message);
      });

      it('bubbles', () => {
        const e = new ProcessStartEvent(pid);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ProcessStartEvent(pid);
        assert.isTrue(e.composed);
      });
    });

    describe('ProcessStopEvent', () => {
      const pid = 'process-id-2';

      it('has the correct type', () => {
        const e = new ProcessStopEvent(pid);
        assert.equal(e.type, ProcessEventTypes.loadingstop);
      });

      it('has the pid property', () => {
        const e = new ProcessStopEvent(pid);
        assert.equal(e.detail.pid, pid);
      });

      it('bubbles', () => {
        const e = new ProcessStopEvent(pid);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ProcessStopEvent(pid);
        assert.isTrue(e.composed);
      });
    });

    describe('ProcessErrorEvent', () => {
      const pid = 'process-id-3';
      const error = new Error('x');

      it('has the correct type', () => {
        const e = new ProcessErrorEvent(pid, error);
        assert.equal(e.type, ProcessEventTypes.loadingerror);
      });

      it('has the pid property', () => {
        const e = new ProcessErrorEvent(pid, error);
        assert.equal(e.detail.pid, pid);
      });

      it('has the error property', () => {
        const e = new ProcessErrorEvent(pid, error);
        assert.deepEqual(e.detail.error, error);
      });

      it('bubbles', () => {
        const e = new ProcessErrorEvent(pid, error);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ProcessErrorEvent(pid, error);
        assert.isTrue(e.composed);
      });
    });
  });
});
