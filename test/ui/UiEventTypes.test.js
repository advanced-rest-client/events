import { assert } from '@open-wc/testing';
import { UiEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('UI events', () => {
  describe('UiEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(UiEventTypes, 'object');
    });

    [
      ['contextMenu', 'arccontextmenu'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(UiEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('UiEventTypes', UiEventTypes);
    });
  });
});
