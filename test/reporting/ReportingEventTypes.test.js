import { assert } from '@open-wc/testing';
import { ReportingEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('Reporting', () => {
  describe('ReportingEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(ReportingEventTypes, 'object');
    });

    [
      ['error', 'reporterror'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(ReportingEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('ReportingEventTypes', ReportingEventTypes);
    });
  });
});
