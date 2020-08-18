import { assert } from '@open-wc/testing';
import { ProcessEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('Process', () => {
  describe('ProcessEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(ProcessEventTypes, 'object');
    });

    [
      ['loadingstart', 'arcprocessloadingstart'],
      ['loadingstop', 'arcprocessloadingstop'],
      ['loadingerror', 'arcprocessloadingerror'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(ProcessEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('ProcessEventTypes', ProcessEventTypes);
    });
  });
});
