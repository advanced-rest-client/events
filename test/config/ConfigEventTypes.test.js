import { assert } from '@open-wc/testing';
import { ConfigEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('Config', () => {
  describe('ConfigEventTypes', () => {
    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        ConfigEventTypes = { read: '' };
      });
    });
  
    [
      ['read', 'arcconfigread'],
      ['readAll', 'arcconfigreadall'],
      ['update', 'arcconfigupdate'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(ConfigEventTypes[prop], value);
      });
    });
  
    it('has the readonly State namespace', () => {
      assert.throws(() => {
        // @ts-ignore
        ConfigEventTypes.State = { read: '' };
      });
    });
  
    [
      ['update', 'arcconfigstateupdate'],
    ].forEach(([prop, value]) => {
      it(`has State.${prop} property`, () => {
        assert.equal(ConfigEventTypes.State[prop], value);
      });
    });
  
    describe('unique events', () => {
      it('has unique events for the root properties', () => {
        ensureUnique('ConfigEventTypes', ConfigEventTypes);
      });
  
      it('has unique events for the state properties', () => {
        ensureUnique('ConfigEventTypes.State', ConfigEventTypes.State);
      });
    });
  });
});
