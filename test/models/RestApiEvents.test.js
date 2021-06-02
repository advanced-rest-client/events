import { assert } from '@open-wc/testing';
import { DataGenerator } from '@advanced-rest-client/arc-data-generator';
import {
  ARCRestApiReadEvent,
  ARCRestApiUpdateEvent,
  ARCRestApiUpdateBulkEvent,
  ARCRestApiUpdatedEvent,
  ARCRestApiDeleteEvent,
  ARCRestApiDeletedEvent,
  ARCRestApiListEvent,
  ARCRestApiDataReadEvent,
  ARCRestApiDataUpdateEvent,
  ARCRestApiDataUpdatedEvent,
  ARCRestApiVersionDeleteEvent,
  ARCRestApiVersionDeletedEvent,
} from '../../src/models/RestApiEvents.js';
import { ArcModelEventTypes } from '../../src/models/ArcModelEventTypes.js';

/** @typedef {import('@advanced-rest-client/arc-types').RestApi.ARCRestApiIndex} ARCRestApiIndex */
/** @typedef {import('@advanced-rest-client/arc-types').RestApi.ARCRestApi} ARCRestApi */

describe('RestApiEvents', () => {
  const generator = new DataGenerator();

  describe('ARCRestApiReadEvent', () => {
    const id = 'api-id';
    const rev = 'api-rev';

    it('has readonly id property', () => {
      const e = new ARCRestApiReadEvent(id);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCRestApiReadEvent(id, rev);
      assert.equal(e.rev, rev);
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCRestApiReadEvent(id);
      assert.equal(e.type, ArcModelEventTypes.RestApi.read);
    });
  });

  describe('ARCRestApiUpdateEvent', () => {
    const entity = /** @type ARCRestApiIndex */ (generator.generateApiIndex());

    it('has readonly id property', () => {
      const e = new ARCRestApiUpdateEvent(entity);
      assert.deepEqual(e.entity, entity);
      assert.throws(() => {
        // @ts-ignore
        e.entity = 'test';
      });
    });


    it('has the correct type', () => {
      const e = new ARCRestApiUpdateEvent(entity);
      assert.equal(e.type, ArcModelEventTypes.RestApi.update);
    });
  });

  describe('ARCRestApiUpdateBulkEvent', () => {
    const entity = /** @type ARCRestApiIndex */ (generator.generateApiIndex());

    it('has readonly entities property', () => {
      const e = new ARCRestApiUpdateBulkEvent([entity]);
      assert.deepEqual(e.entities, [entity]);
      assert.throws(() => {
        // @ts-ignore
        e.entities = 'test';
      });
    });


    it('has the correct type', () => {
      const e = new ARCRestApiUpdateBulkEvent([entity]);
      assert.equal(e.type, ArcModelEventTypes.RestApi.updateBulk);
    });
  });

  describe('ARCRestApiUpdatedEvent', () => {
    const record = {
      id: 'cc-id',
      rev: 'cc-rev',
      item: /** @type ARCRestApiIndex */ (generator.generateApiIndex()),
    };

    it('has readonly entities property', () => {
      const e = new ARCRestApiUpdatedEvent(record);
      assert.deepEqual(e.changeRecord, record);
      assert.throws(() => {
        // @ts-ignore
        e.changeRecord = 'test';
      });
    });


    it('has the correct type', () => {
      const e = new ARCRestApiUpdatedEvent(record);
      assert.equal(e.type, ArcModelEventTypes.RestApi.State.update);
    });
  });

  describe('ARCRestApiDeleteEvent', () => {
    const id = 'db-id';
    const rev = 'api-rev';

    it('has readonly id property', () => {
      const e = new ARCRestApiDeleteEvent(id);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCRestApiDeleteEvent(id, rev);
      assert.equal(e.rev, rev);
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCRestApiDeleteEvent(id);
      assert.equal(e.type, ArcModelEventTypes.RestApi.delete);
    });
  });

  describe('ARCRestApiDeletedEvent', () => {
    const id = 'db-id';
    const rev = 'db-rev';

    it('has readonly id property', () => {
      const e = new ARCRestApiDeletedEvent(id, rev);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCRestApiDeletedEvent(id, rev);
      assert.equal(e.rev, rev);
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCRestApiDeletedEvent(id, rev);
      assert.equal(e.type, ArcModelEventTypes.RestApi.State.delete);
    });
  });

  describe('ARCRestApiListEvent', () => {
    const opts = { limit: 5, nextPageToken: 'test-page-token' };

    it('has readonly limit property', () => {
      const e = new ARCRestApiListEvent(opts);
      assert.equal(e.limit, opts.limit);
      assert.throws(() => {
        // @ts-ignore
        e.limit = 'test';
      });
    });

    it('has readonly nextPageToken property', () => {
      const e = new ARCRestApiListEvent(opts);
      assert.equal(e.nextPageToken, opts.nextPageToken);
      assert.throws(() => {
        // @ts-ignore
        e.nextPageToken = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCRestApiListEvent(opts);
      assert.equal(e.type, ArcModelEventTypes.RestApi.list);
    });
  });

  describe('ARCRestApiDataReadEvent', () => {
    const id = 'api-id';
    const rev = 'api-rev';

    it('has readonly id property', () => {
      const e = new ARCRestApiDataReadEvent(id);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCRestApiDataReadEvent(id, rev);
      assert.equal(e.rev, rev);
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCRestApiDataReadEvent(id);
      assert.equal(e.type, ArcModelEventTypes.RestApi.dataRead);
    });
  });

  describe('ARCRestApiDataUpdateEvent', () => {
    const index = /** @type any */ (generator.generateApiIndex());
    const entity = /** @type ARCRestApi */ (generator.generateApiData(index)[0]);

    it('has readonly id property', () => {
      const e = new ARCRestApiDataUpdateEvent(entity);
      assert.deepEqual(e.entity, entity);
      assert.throws(() => {
        // @ts-ignore
        e.entity = 'test';
      });
    });


    it('has the correct type', () => {
      const e = new ARCRestApiDataUpdateEvent(entity);
      assert.equal(e.type, ArcModelEventTypes.RestApi.dataUpdate);
    });
  });

  describe('ARCRestApiDataUpdatedEvent', () => {
    const index = /** @type any */ (generator.generateApiIndex());
    const record = {
      id: 'cc-id',
      rev: 'cc-rev',
      item: /** @type ARCRestApi */ (generator.generateApiData(index)[0]),
    };

    it('has readonly entities property', () => {
      const e = new ARCRestApiDataUpdatedEvent(record);
      assert.deepEqual(e.changeRecord, record);
      assert.throws(() => {
        // @ts-ignore
        e.changeRecord = 'test';
      });
    });


    it('has the correct type', () => {
      const e = new ARCRestApiDataUpdatedEvent(record);
      assert.equal(e.type, ArcModelEventTypes.RestApi.State.dataUpdate);
    });
  });

  describe('ARCRestApiVersionDeleteEvent', () => {
    const id = 'db-id';
    const version = '11.0.0';

    it('has readonly id property', () => {
      const e = new ARCRestApiVersionDeleteEvent(id, version);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly version property', () => {
      const e = new ARCRestApiVersionDeleteEvent(id, version);
      assert.equal(e.version, version);
      assert.throws(() => {
        // @ts-ignore
        e.version = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCRestApiVersionDeleteEvent(id, version);
      assert.equal(e.type, ArcModelEventTypes.RestApi.versionDelete);
    });
  });

  describe('ARCRestApiVersionDeletedEvent', () => {
    const id = 'db-id';
    const rev = 'db-rev';
    const indexId = 'iid';
    const version = '1.0.0';

    it('has readonly id property', () => {
      const e = new ARCRestApiVersionDeletedEvent(id, rev, indexId, version);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCRestApiVersionDeletedEvent(id, rev, indexId, version);
      assert.equal(e.rev, rev);
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has readonly indexId property', () => {
      const e = new ARCRestApiVersionDeletedEvent(id, rev, indexId, version);
      assert.equal(e.indexId, indexId);
      assert.throws(() => {
        // @ts-ignore
        e.indexId = 'test';
      });
    });

    it('has readonly version property', () => {
      const e = new ARCRestApiVersionDeletedEvent(id, rev, indexId, version);
      assert.equal(e.version, version);
      assert.throws(() => {
        // @ts-ignore
        e.version = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCRestApiVersionDeletedEvent(id, rev, indexId, version);
      assert.equal(e.type, ArcModelEventTypes.RestApi.State.versionDelete);
    });
  });
});
