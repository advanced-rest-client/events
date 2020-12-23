import { assert } from '@open-wc/testing';
import {
  RequestChangeEvent,
} from  '../../index.js';

describe('Request', () => {
  describe('Events', () => {
    describe('RequestChangeEvent', () => {
      const type = 'a';
      const prop = 'b';
      const val = 'c';


      it('has the passed type', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.equal(e.type, type);
      });

      it('has the read only "changedProperty" property', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.deepEqual(e.changedProperty, prop);
      });

      it('has the read only "changedValue" property', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.deepEqual(e.changedValue, val);
      });

      it('bubbles', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.isTrue(e.composed);
      });

      it('is not cancelable', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.isFalse(e.cancelable);
      });
    });
  });
});
