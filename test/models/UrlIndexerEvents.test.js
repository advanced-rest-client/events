import { assert } from '@open-wc/testing';
import {
  ARCUrlIndexUpdateEvent,
  ARCUrlIndexQueryEvent,
} from '../../src/models/UrlIndexerEvents.js';

describe('UrlIndexerEvents', () => {
  describe('ARCUrlIndexUpdateEvent', () => {
    it('throws when no requests argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCUrlIndexUpdateEvent(undefined);
      });
      assert.isUndefined(e);
    });

    it('has readonly requests property', () => {
      const e = new ARCUrlIndexUpdateEvent([]);
      assert.deepEqual(e.requests, [], 'has the readonly');
      assert.throws(() => {
        // @ts-ignore
        e.requests = 'test';
      });
    });
  });

  describe('ARCUrlIndexQueryEvent', () => {
    const term = 'test';
    const requestType = 'saved';
    const detailed = true;

    it('throws when no term argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCUrlIndexQueryEvent(undefined);
      });
      assert.isUndefined(e);
    });

    it('has readonly term property', () => {
      const e = new ARCUrlIndexQueryEvent(term);
      assert.equal(e.term, term, 'has the URL');
      assert.throws(() => {
        // @ts-ignore
        e.term = 'test';
      });
    });

    it('has readonly requestType property', () => {
      const e = new ARCUrlIndexQueryEvent(term, requestType);
      assert.equal(e.requestType, requestType, 'has the requestType');
      assert.throws(() => {
        // @ts-ignore
        e.requestType = 'test';
      });
    });

    it('has readonly detailed property', () => {
      const e = new ARCUrlIndexQueryEvent(term, requestType, detailed);
      assert.equal(e.detailed, detailed, 'has the detailed');
      assert.throws(() => {
        // @ts-ignore
        e.detailed = 'test';
      });
    });
  });
});
