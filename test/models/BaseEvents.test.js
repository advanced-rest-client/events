import { assert } from '@open-wc/testing';
import {
  ARCEntityDeletedEvent,
  ARCEntityListEvent,
  ARCModelDeleteEvent,
  ARCModelStateDeleteEvent,
} from '../../src/models/BaseEvents.js';

describe('BaseEvents', () => {
  describe('ARCEntityDeletedEvent', () => {
    const type = 'eventtype';
    const id = 'saved-id';
    const rev = 'saved-rev';

    it('throws when no type argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCEntityDeletedEvent(undefined, id, rev);
      });
      assert.isUndefined(e);
    });

    it('throws when no id argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCEntityDeletedEvent(type, undefined, rev);
      });
      assert.isUndefined(e);
    });

    it('throws when no rev argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCEntityDeletedEvent(type, id, undefined);
      });
      assert.isUndefined(e);
    });

    it('has readonly id property', () => {
      const e = new ARCEntityDeletedEvent(type, id, rev);
      assert.equal(e.id, id, 'has the id property');
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCEntityDeletedEvent(type, id, rev);
      assert.equal(e.rev, rev, 'has the rev property');
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has the type property', () => {
      const e = new ARCEntityDeletedEvent(type, id, rev);
      assert.equal(e.type, type);
    });
  });

  describe('ARCEntityListEvent', () => {
    const type = 'eventtype';
    const opts = { limit: 5, nextPageToken: 'token' };

    it('throws when no type argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCEntityListEvent(undefined);
      });
      assert.isUndefined(e);
    });

    it('has readonly limit property', () => {
      const e = new ARCEntityListEvent(type, opts);
      assert.equal(e.limit, opts.limit, 'has the id property');
      assert.throws(() => {
        // @ts-ignore
        e.limit = 100;
      });
    });

    it('has readonly nextPageToken property', () => {
      const e = new ARCEntityListEvent(type, opts);
      assert.equal(e.nextPageToken, opts.nextPageToken, 'has the id property');
      assert.throws(() => {
        // @ts-ignore
        e.nextPageToken = 'test';
      });
    });

    it('has the type property', () => {
      const e = new ARCEntityListEvent(type);
      assert.equal(e.type, type);
    });
  });

  describe('ARCModelDeleteEvent', () => {
    const stores = ['test'];

    it('throws when no type argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCModelDeleteEvent(undefined);
      });
      assert.isUndefined(e);
    });

    it('has readonly stores property', () => {
      const e = new ARCModelDeleteEvent(stores);
      assert.deepEqual(e.stores, stores, 'has the id property');
      assert.throws(() => {
        // @ts-ignore
        e.stores = [];
      });
    });
  });

  describe('ARCModelStateDeleteEvent', () => {
    const store = 'test';

    it('throws when no type argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCModelStateDeleteEvent(undefined);
      });
      assert.isUndefined(e);
    });

    it('has readonly store property', () => {
      const e = new ARCModelStateDeleteEvent(store);
      assert.deepEqual(e.store, store, 'has the id property');
      assert.throws(() => {
        // @ts-ignore
        e.store = 'other';
      });
    });
  });
});
