import { assert } from '@open-wc/testing';
import { RestApiEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('RestAPI', () => {
  describe('RestApiEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(RestApiEventTypes, 'object');
    });

    [
      ['processfile', 'restapiprocessfile'],
      ['dataready', 'restapidataready'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(RestApiEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('RestApiEventTypes', RestApiEventTypes);
    });
  });
});
