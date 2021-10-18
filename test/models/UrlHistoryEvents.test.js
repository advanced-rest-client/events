import { assert } from '@open-wc/testing';
import { ArcMock } from '@advanced-rest-client/arc-data-generator';
import {
  ARCHistoryUrlInsertEvent,
  ARCHistoryUrlUpdatedEvent,
  ARCHistoryUrlListEvent,
  ARCHistoryUrlQueryEvent,
  ARCHistoryUrlDeleteEvent,
  ARCHistoryUrlDeletedEvent,
} from '../../src/models/UrlHistoryEvents.js';
import { ArcModelEventTypes } from '../../src/models/ArcModelEventTypes.js';

/** @typedef {import('../../').UrlHistory.ARCUrlHistory} ARCUrlHistory */

describe('UrlHistoryEvents', () => {
  const generator = new ArcMock();

  describe('ARCHistoryUrlInsertEvent', () => {
    const url = 'https://test.com';

    it('has readonly rev property', () => {
      const e = new ARCHistoryUrlInsertEvent(url);
      assert.equal(e.url, url, 'has the url');
      assert.throws(() => {
        // @ts-ignore
        e.url = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCHistoryUrlInsertEvent(url);
      assert.equal(e.type, ArcModelEventTypes.UrlHistory.insert);
    });
  });

  describe('ARCHistoryUrlUpdatedEvent', () => {
    const record = {
      id: 'cc-id',
      rev: 'cc-rev',
      item: /** @type ARCUrlHistory */ (generator.urls.url()),
    };

    it('has readonly rev property', () => {
      const e = new ARCHistoryUrlUpdatedEvent(record);
      assert.deepEqual(e.changeRecord, record);
      assert.throws(() => {
        // @ts-ignore
        e.changeRecord = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCHistoryUrlUpdatedEvent(record);
      assert.equal(e.type, ArcModelEventTypes.UrlHistory.State.update);
    });
  });

  describe('ARCHistoryUrlListEvent', () => {
    const opts = { limit: 5, nextPageToken: 'test-page-token' };

    it('has readonly limit property', () => {
      const e = new ARCHistoryUrlListEvent(opts);
      assert.deepEqual(e.limit, opts.limit);
      assert.throws(() => {
        // @ts-ignore
        e.limit = 'test';
      });
    });

    it('has readonly nextPageToken property', () => {
      const e = new ARCHistoryUrlListEvent(opts);
      assert.deepEqual(e.nextPageToken, opts.nextPageToken);
      assert.throws(() => {
        // @ts-ignore
        e.nextPageToken = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCHistoryUrlListEvent(opts);
      assert.equal(e.type, ArcModelEventTypes.UrlHistory.list);
    });
  });

  describe('ARCHistoryUrlQueryEvent', () => {
    const term = 'test-query';

    it('has readonly term property', () => {
      const e = new ARCHistoryUrlQueryEvent(term);
      assert.deepEqual(e.term, term);
      assert.throws(() => {
        // @ts-ignore
        e.term = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCHistoryUrlQueryEvent(term);
      assert.equal(e.type, ArcModelEventTypes.UrlHistory.query);
    });
  });

  describe('ARCHistoryUrlDeleteEvent', () => {
    const id = 'test-id';

    it('has readonly term property', () => {
      const e = new ARCHistoryUrlDeleteEvent(id);
      assert.deepEqual(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCHistoryUrlDeleteEvent(id);
      assert.equal(e.type, ArcModelEventTypes.UrlHistory.delete);
    });
  });

  describe('ARCHistoryUrlDeletedEvent', () => {
    const id = 'db-id';
    const rev = 'db-rev';

    it('has readonly id property', () => {
      const e = new ARCHistoryUrlDeletedEvent(id, rev);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCHistoryUrlDeletedEvent(id, rev);
      assert.equal(e.rev, rev);
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCHistoryUrlDeletedEvent(id, rev);
      assert.equal(e.type, ArcModelEventTypes.UrlHistory.State.delete);
    });
  });
});
