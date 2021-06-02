import { assert } from '@open-wc/testing';
import { DataGenerator } from '@advanced-rest-client/arc-data-generator';
import {
  ARCWSUrlInsertEvent,
  ARCWSUrlUpdatedEvent,
  ARCWSUrlListEvent,
  ARCWSUrlQueryEvent,
} from '../../src/models/WSUrlHistoryEvents.js';
import { ArcModelEventTypes } from '../../src/models/ArcModelEventTypes.js';

describe('WSUrlHistoryEvents', () => {
  const generator = new DataGenerator();

  describe('ARCWSUrlInsertEvent', () => {
    const url = 'https://test.com';

    it('has readonly rev property', () => {
      const e = new ARCWSUrlInsertEvent(url);
      assert.equal(e.url, url, 'has the url');
      assert.throws(() => {
        // @ts-ignore
        e.url = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCWSUrlInsertEvent(url);
      assert.equal(e.type, ArcModelEventTypes.WSUrlHistory.insert);
    });
  });

  describe('ARCWSUrlUpdatedEvent', () => {
    const record = {
      id: 'cc-id',
      rev: 'cc-rev',
      item: /** @type any */ (generator.generateUrlObject()),
    };

    it('has readonly changeRecord property', () => {
      const e = new ARCWSUrlUpdatedEvent(record);
      assert.deepEqual(e.changeRecord, record);
      assert.throws(() => {
        // @ts-ignore
        e.changeRecord = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCWSUrlUpdatedEvent(record);
      assert.equal(e.type, ArcModelEventTypes.WSUrlHistory.State.update);
    });
  });

  describe('ARCWSUrlListEvent', () => {
    const opts = { limit: 5, nextPageToken: 'test-page-token' };

    it('has readonly limit property', () => {
      const e = new ARCWSUrlListEvent(opts);
      assert.deepEqual(e.limit, opts.limit);
      assert.throws(() => {
        // @ts-ignore
        e.limit = 'test';
      });
    });

    it('has readonly nextPageToken property', () => {
      const e = new ARCWSUrlListEvent(opts);
      assert.deepEqual(e.nextPageToken, opts.nextPageToken);
      assert.throws(() => {
        // @ts-ignore
        e.nextPageToken = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCWSUrlListEvent(opts);
      assert.equal(e.type, ArcModelEventTypes.WSUrlHistory.list);
    });
  });

  describe('ARCWSUrlQueryEvent', () => {
    const term = 'test-query';

    it('has readonly term property', () => {
      const e = new ARCWSUrlQueryEvent(term);
      assert.deepEqual(e.term, term);
      assert.throws(() => {
        // @ts-ignore
        e.term = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCWSUrlQueryEvent(term);
      assert.equal(e.type, ArcModelEventTypes.WSUrlHistory.query);
    });
  });
});
