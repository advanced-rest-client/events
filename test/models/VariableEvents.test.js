import { assert } from '@open-wc/testing';
import { ArcMock } from '@advanced-rest-client/arc-data-generator';
import {
  ARCEnvironmentReadEvent,
  ARCEnvironmentUpdateEvent,
  ARCEnvironmentUpdatedEvent,
  ARCEnvironmentDeleteEvent,
  ARCEnvironmentDeletedEvent,
  ARCEnvironmentListEvent,
  ARCVariableUpdateEvent,
  ARCVariableUpdatedEvent,
  ARCVariableDeleteEvent,
  ARCVariableDeletedEvent,
  ARCVariableListEvent,
  ARCEnvironmentCurrentEvent,
  ARCEnvironmentSelectEvent,
  ARCEnvironmentStateSelectEvent,
  ARCVariableSetEvent,
} from '../../src/models/VariableEvents.js';
import { ArcModelEventTypes } from '../../src/models/ArcModelEventTypes.js';

/** @typedef {import('../../').Variable.ARCVariable} ARCVariable */

describe('VariableEvents', () => {
  const generator = new ArcMock();

  describe('ARCEnvironmentReadEvent', () => {
    const name = 'test name';

    it('has readonly name property', () => {
      const e = new ARCEnvironmentReadEvent(name);
      assert.equal(e.name, name, 'has the name');
      assert.throws(() => {
        // @ts-ignore
        e.name = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCEnvironmentReadEvent(name);
      assert.equal(e.type, ArcModelEventTypes.Environment.read);
    });
  });

  describe('ARCEnvironmentUpdateEvent', () => {
    const env = { name: 'test name' };

    it('has readonly environment property', () => {
      const e = new ARCEnvironmentUpdateEvent(env);
      assert.deepEqual(e.environment, env, 'has the environment');
      assert.throws(() => {
        // @ts-ignore
        e.environment = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCEnvironmentUpdateEvent(env);
      assert.equal(e.type, ArcModelEventTypes.Environment.update);
    });
  });

  describe('ARCEnvironmentUpdatedEvent', () => {
    const record = {
      id: 'cc-id',
      rev: 'cc-rev',
      item: { name: 'test name' },
    };

    it('has readonly changeRecord property', () => {
      const e = new ARCEnvironmentUpdatedEvent(record);
      assert.deepEqual(e.changeRecord, record, 'has the environment');
      assert.throws(() => {
        // @ts-ignore
        e.changeRecord = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCEnvironmentUpdatedEvent(record);
      assert.equal(e.type, ArcModelEventTypes.Environment.State.update);
    });
  });

  describe('ARCEnvironmentDeleteEvent', () => {
    const id = 'db-id';

    it('has readonly id property', () => {
      const e = new ARCEnvironmentDeleteEvent(id);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCEnvironmentDeleteEvent(id);
      assert.equal(e.type, ArcModelEventTypes.Environment.delete);
    });
  });

  describe('ARCEnvironmentDeletedEvent', () => {
    const id = 'db-id';
    const rev = 'db-rev';

    it('has readonly id property', () => {
      const e = new ARCEnvironmentDeletedEvent(id, rev);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCEnvironmentDeletedEvent(id, rev);
      assert.equal(e.rev, rev);
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCEnvironmentDeletedEvent(id, rev);
      assert.equal(e.type, ArcModelEventTypes.Environment.State.delete);
    });
  });

  describe('ARCEnvironmentListEvent', () => {
    const opts = { limit: 5, nextPageToken: 'test-page-token', readall: false };

    it('has readonly limit property', () => {
      const e = new ARCEnvironmentListEvent(opts);
      assert.equal(e.limit, opts.limit);
      assert.throws(() => {
        // @ts-ignore
        e.limit = 'test';
      });
    });

    it('has readonly nextPageToken property', () => {
      const e = new ARCEnvironmentListEvent(opts);
      assert.equal(e.nextPageToken, opts.nextPageToken);
      assert.throws(() => {
        // @ts-ignore
        e.nextPageToken = 'test';
      });
    });

    it('has readonly readall property', () => {
      const e = new ARCEnvironmentListEvent(opts);
      assert.equal(e.readall, false);
      assert.throws(() => {
        // @ts-ignore
        e.readall = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCEnvironmentListEvent(opts);
      assert.equal(e.type, ArcModelEventTypes.Environment.list);
    });
  });

  describe('ARCEnvironmentCurrentEvent', () => {
    it('has the correct type', () => {
      const e = new ARCEnvironmentCurrentEvent();
      assert.equal(e.type, ArcModelEventTypes.Environment.current);
    });

    it('has empty detail', () => {
      const e = new ARCEnvironmentCurrentEvent();
      assert.deepEqual(e.detail, {});
    });
  });

  describe('ARCEnvironmentSelectEvent', () => {
    it('has the correct type', () => {
      const e = new ARCEnvironmentSelectEvent();
      assert.equal(e.type, ArcModelEventTypes.Environment.select);
    });

    it('has the id as the detail', () => {
      const id = 'test-id';
      const e = new ARCEnvironmentSelectEvent(id);
      assert.equal(e.detail, id);
    });
  });

  describe('ARCEnvironmentSelectEvent', () => {
    const init = { environment: null, variables: [] };

    it('has the correct type', () => {
      const e = new ARCEnvironmentStateSelectEvent(init);
      assert.equal(e.type, ArcModelEventTypes.Environment.State.select);
    });

    it('has the state as the detail', () => {
      const e = new ARCEnvironmentStateSelectEvent(init);
      assert.deepEqual(e.detail, init);
    });
  });

  describe('ARCVariableUpdateEvent', () => {
    const entity = /** @type ARCVariable */ (generator.variables.variable());

    it('has readonly environment property', () => {
      const e = new ARCVariableUpdateEvent(entity);
      assert.deepEqual(e.variable, entity);
      assert.throws(() => {
        // @ts-ignore
        e.variable = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCVariableUpdateEvent(entity);
      assert.equal(e.type, ArcModelEventTypes.Variable.update);
    });
  });

  describe('ARCVariableUpdatedEvent', () => {
    const record = {
      id: 'cc-id',
      rev: 'cc-rev',
      item: /** @type ARCVariable */ (generator.variables.variable()),
    };

    it('has readonly changeRecord property', () => {
      const e = new ARCVariableUpdatedEvent(record);
      assert.deepEqual(e.changeRecord, record, 'has the environment');
      assert.throws(() => {
        // @ts-ignore
        e.changeRecord = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCVariableUpdatedEvent(record);
      assert.equal(e.type, ArcModelEventTypes.Variable.State.update);
    });
  });

  describe('ARCVariableSetEvent', () => {
    const name = 'test name';
    const value = 'test value';

    it('has the correct type', () => {
      const e = new ARCVariableSetEvent(name, value);
      assert.equal(e.type, ArcModelEventTypes.Variable.set);
    });

    it('has readonly name property', () => {
      const e = new ARCVariableSetEvent(name, value);
      assert.equal(e.name, name);
      assert.throws(() => {
        // @ts-ignore
        e.name = 'test';
      });
    });

    it('has readonly value property', () => {
      const e = new ARCVariableSetEvent(name, value);
      assert.equal(e.value, value);
      assert.throws(() => {
        // @ts-ignore
        e.value = 'test';
      });
    });
  });

  describe('ARCVariableDeleteEvent', () => {
    const id = 'db-id';

    it('has readonly id property', () => {
      const e = new ARCVariableDeleteEvent(id);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCVariableDeleteEvent(id);
      assert.equal(e.type, ArcModelEventTypes.Variable.delete);
    });
  });

  describe('ARCVariableDeletedEvent', () => {
    const id = 'db-id';
    const rev = 'db-rev';

    it('has readonly id property', () => {
      const e = new ARCVariableDeletedEvent(id, rev);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCVariableDeletedEvent(id, rev);
      assert.equal(e.rev, rev);
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCVariableDeletedEvent(id, rev);
      assert.equal(e.type, ArcModelEventTypes.Variable.State.delete);
    });
  });

  describe('ARCVariableListEvent', () => {
    const opts = { limit: 5, nextPageToken: 'test-page-token', readall: false };
    const name = 'test-name';

    it('has readonly limit property', () => {
      const e = new ARCVariableListEvent(name, opts);
      assert.equal(e.limit, opts.limit);
      assert.throws(() => {
        // @ts-ignore
        e.limit = 'test';
      });
    });

    it('has readonly nextPageToken property', () => {
      const e = new ARCVariableListEvent(name, opts);
      assert.equal(e.nextPageToken, opts.nextPageToken);
      assert.throws(() => {
        // @ts-ignore
        e.nextPageToken = 'test';
      });
    });

    it('has readonly readall property', () => {
      const e = new ARCVariableListEvent(name, opts);
      assert.equal(e.readall, false);
      assert.throws(() => {
        // @ts-ignore
        e.readall = 'test';
      });
    });

    it('has readonly name property', () => {
      const e = new ARCEnvironmentReadEvent(name);
      assert.equal(e.name, name, 'has the name');
      assert.throws(() => {
        // @ts-ignore
        e.name = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCVariableListEvent(name, opts);
      assert.equal(e.type, ArcModelEventTypes.Variable.list);
    });
  });
});
