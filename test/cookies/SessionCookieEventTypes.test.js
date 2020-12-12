import { assert } from '@open-wc/testing';
import { SessionCookieEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('Cookies', () => {
  describe('SessionCookieEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(SessionCookieEventTypes, 'object');
    });

    [
      ['listAll', 'sessioncookielistall'],
      ['listDomain', 'sessioncookielistdomain'],
      ['listUrl', 'sessioncookielisturl'],
      ['delete', 'sessioncookiedelete'],
      ['deleteUrl', 'sessioncookiedeleteurl'],
      ['update', 'sessioncookieupdate'],
      ['updateBulk', 'sessioncookieupdatebulk'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(SessionCookieEventTypes[prop], value);
      });
    });

    it('has State namespace', () => {
      assert.typeOf(SessionCookieEventTypes.State, 'object');
    });

    it('has frozen State namespace', () => {
      assert.throws(() => {
        // @ts-ignore
        SessionCookieEventTypes.State = { read: '' };
      });
    });

    [
      ['update', 'sessioncookiestateupdate'],
      ['delete', 'sessioncookiestatedelete'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(SessionCookieEventTypes.State[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('SessionCookieEventTypes', SessionCookieEventTypes);
    });

    it('has unique events for State namespace', () => {
      ensureUnique('SessionCookieEventTypes.State', SessionCookieEventTypes.State);
    });
  });
});
