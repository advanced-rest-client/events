import { assert } from '@open-wc/testing';
import { RequestEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('Request', () => {
  describe('RequestEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(RequestEventTypes, 'object');
    });

    [
      ['send', 'arcrequestsend'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {``
        assert.equal(RequestEventTypes[prop], value);
      });
    });

    [
      ['urlChange', 'arcrequeststateurlchange'],
      ['contentTypeChange', 'arcrequeststatecontenttypechange'],
    ].forEach(([prop, value]) => {
      it(`has State.${prop} property`, () => {
        assert.equal(RequestEventTypes.State[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('RequestEventTypes', RequestEventTypes);
      ensureUnique('RequestEventTypes.State', RequestEventTypes.State);
    });
  });
});
