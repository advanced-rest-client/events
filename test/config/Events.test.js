import { assert } from '@open-wc/testing';
import {
  ConfigReadEvent,
  ConfigPropertyReadEvent,
  ConfigUpdateEvent,
  ConfigStateUpdateEvent,
  ConfigEventTypes,
} from  '../../index.js';

describe('Config', () => {
  describe('Events', () => {
    describe('ConfigReadEvent', () => {
      it('has the correct type', () => {
        const e = new ConfigReadEvent();
        assert.equal(e.type, ConfigEventTypes.readAll);
      });

      it('has the detail object', () => {
        const e = new ConfigReadEvent();
        assert.deepEqual(e.detail, {});
      });

      it('bubbles', () => {
        const e = new ConfigReadEvent();
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ConfigReadEvent();
        assert.isTrue(e.composed);
      });
    });

    describe('ConfigReadEvent', () => {
      const key = 'test-key';
      it('has the correct type', () => {
        const e = new ConfigPropertyReadEvent(key);
        assert.equal(e.type, ConfigEventTypes.read);
      });

      it('has the key property', () => {
        const e = new ConfigPropertyReadEvent(key);
        assert.equal(e.detail.key, key);
      });

      it('bubbles', () => {
        const e = new ConfigPropertyReadEvent(key);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ConfigPropertyReadEvent(key);
        assert.isTrue(e.composed);
      });
    });

    describe('ConfigUpdateEvent', () => {
      const key = 'test-key';
      const value = 'test-value';

      it('has the correct type', () => {
        const e = new ConfigUpdateEvent(key, value);
        assert.equal(e.type, ConfigEventTypes.update);
      });

      it('has the key property', () => {
        const e = new ConfigUpdateEvent(key, value);
        assert.equal(e.detail.key, key);
      });

      it('has the value property', () => {
        const e = new ConfigUpdateEvent(key, value);
        assert.equal(e.detail.value, value);
      });

      it('bubbles', () => {
        const e = new ConfigUpdateEvent(key, value);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ConfigUpdateEvent(key, value);
        assert.isTrue(e.composed);
      });
    });

    describe('ConfigStateUpdateEvent', () => {
      const key = 'test-key';
      const value = 'test-value';

      it('has the correct type', () => {
        const e = new ConfigStateUpdateEvent(key, value);
        assert.equal(e.type, ConfigEventTypes.State.update);
      });

      it('has the key property', () => {
        const e = new ConfigStateUpdateEvent(key, value);
        assert.equal(e.detail.key, key);
      });

      it('has the value property', () => {
        const e = new ConfigStateUpdateEvent(key, value);
        assert.equal(e.detail.value, value);
      });

      it('bubbles', () => {
        const e = new ConfigStateUpdateEvent(key, value);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ConfigStateUpdateEvent(key, value);
        assert.isTrue(e.composed);
      });
    });
  });
});
