import { assert } from '@open-wc/testing';
import { ArcMock } from '@advanced-rest-client/arc-data-generator';
import {
  ARCHostRuleUpdateEvent,
  ARCHostRuleUpdateBulkEvent,
  ARCHostRuleUpdatedEvent,
  ARCHostRuleDeleteEvent,
  ARCHostRuleDeletedEvent,
  ARCHostRulesListEvent,
} from '../../src/models/HostRuleEvents.js';
import { ArcModelEventTypes } from '../../src/models/ArcModelEventTypes.js';

/** @typedef {import('../../').HostRule.ARCHostRule} ARCHostRule */

describe('HostRuleEvents', () => {
  const generator = new ArcMock();

  describe('ARCHostRuleUpdateEvent', () => {
    it('has readonly rule property', () => {
      const rule = /** @type ARCHostRule */ (generator.hostRules.rule());
      const e = new ARCHostRuleUpdateEvent(rule);
      assert.deepEqual(e.rule, rule, 'has the rule');
      assert.throws(() => {
        // @ts-ignore
        e.rule = 'test';
      });
    });

    it('throws when no argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCHostRuleUpdateEvent(undefined);
      });
      assert.isUndefined(e);
    });

    it('has the correct type', () => {
      const rule = /** @type ARCHostRule */ (generator.hostRules.rule());
      const e = new ARCHostRuleUpdateEvent(rule);
      assert.equal(e.type, ArcModelEventTypes.HostRules.update);
    });
  });

  describe('ARCHostRuleUpdateBulkEvent', () => {
    it('has readonly rules property', () => {
      const rule = /** @type ARCHostRule */ (generator.hostRules.rule());
      const e = new ARCHostRuleUpdateBulkEvent([rule]);
      assert.deepEqual(e.rules, [rule], 'has the rules');
      assert.throws(() => {
        // @ts-ignore
        e.rules = 'test';
      });
    });

    it('throws when no argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCHostRuleUpdateBulkEvent(undefined);
      });
      assert.isUndefined(e);
    });

    it('has the correct type', () => {
      const rule = /** @type ARCHostRule */ (generator.hostRules.rule());
      const e = new ARCHostRuleUpdateBulkEvent([rule]);
      assert.equal(e.type, ArcModelEventTypes.HostRules.updateBulk);
    });
  });

  describe('ARCHostRuleUpdatedEvent', () => {
    const record = {
      id: 'cc-id',
      rev: 'cc-rev',
      item: /** @type ARCHostRule */ (generator.hostRules.rule()),
    };

    it('has readonly changeRecord property', () => {
      const e = new ARCHostRuleUpdatedEvent(record);
      assert.deepEqual(e.changeRecord, record, 'has the rules');
      assert.throws(() => {
        // @ts-ignore
        e.changeRecord = 'test';
      });
    });

    it('throws when no argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCHostRuleUpdatedEvent(undefined);
      });
      assert.isUndefined(e);
    });

    it('has the correct type', () => {
      const e = new ARCHostRuleUpdatedEvent(record);
      assert.equal(e.type, ArcModelEventTypes.HostRules.State.update);
    });
  });

  describe('ARCHostRuleDeleteEvent', () => {
    const id = 'test-cc-id';
    const rev = 'test-cc-rev-id';

    it('has readonly id property', () => {
      const e = new ARCHostRuleDeleteEvent(id);
      assert.equal(e.id, id, 'has the id');
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCHostRuleDeleteEvent(id, rev);
      assert.equal(e.rev, rev, 'has the rev');
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('throws when no argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCHostRuleDeleteEvent(undefined);
      });
      assert.isUndefined(e);
    });

    it('has the correct type', () => {
      const e = new ARCHostRuleDeleteEvent(id, rev);
      assert.equal(e.type, ArcModelEventTypes.HostRules.delete);
    });
  });

  describe('ARCHostRuleDeletedEvent', () => {
    const id = 'test-cc-id';
    const rev = 'test-cc-rev-id';

    it('has readonly id property', () => {
      const e = new ARCHostRuleDeletedEvent(id, rev);
      assert.equal(e.id, id, 'has the id');
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCHostRuleDeletedEvent(id, rev);
      assert.equal(e.rev, rev, 'has the rev');
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('throws when no argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCHostRuleDeletedEvent(undefined, undefined);
      });
      assert.isUndefined(e);
    });

    it('has the correct type', () => {
      const e = new ARCHostRuleDeletedEvent(id, rev);
      assert.equal(e.type, ArcModelEventTypes.HostRules.State.delete);
    });
  });

  describe('ARCHostRulesListEvent', () => {
    const opts = { limit: 5, nextPageToken: 'test-page-token' };

    it('has readonly limit property', () => {
      const e = new ARCHostRulesListEvent(opts);
      assert.deepEqual(e.limit, opts.limit);
      assert.throws(() => {
        // @ts-ignore
        e.limit = 'test';
      });
    });

    it('has readonly nextPageToken property', () => {
      const e = new ARCHostRulesListEvent(opts);
      assert.deepEqual(e.nextPageToken, opts.nextPageToken);
      assert.throws(() => {
        // @ts-ignore
        e.nextPageToken = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCHostRulesListEvent(opts);
      assert.equal(e.type, ArcModelEventTypes.HostRules.list);
    });
  });
});
