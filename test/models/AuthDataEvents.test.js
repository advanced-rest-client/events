import { assert } from '@open-wc/testing';
import {
  ARCAuthDataUpdateEvent,
  ARCAuthDataQueryEvent,
  ARCAuthDataUpdatedEvent,
} from '../../src/models/AuthDataEvents.js';

describe('AuthDataEvents', () => {
  describe('ARCAuthDataUpdateEvent', () => {
    const url = 'http://domain.com/auth';
    const method = 'x-ntlm';
    const authData = { username: 'uname', password: 'other' };

    it('throws when no url argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCAuthDataUpdateEvent(undefined, method, authData);
      });
      assert.isUndefined(e);
    });

    it('throws when no method argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCAuthDataUpdateEvent(url, undefined, authData);
      });
      assert.isUndefined(e);
    });

    it('throws when no authData argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCAuthDataUpdateEvent(url, method, undefined);
      });
      assert.isUndefined(e);
    });

    it('has readonly url property', () => {
      const e = new ARCAuthDataUpdateEvent(url, method, authData);
      assert.equal(e.url, url, 'has the URL');
      assert.throws(() => {
        // @ts-ignore
        e.url = 'test';
      });
    });

    it('has readonly method property', () => {
      const e = new ARCAuthDataUpdateEvent(url, method, authData);
      assert.equal(e.method, method, 'has the method');
      assert.throws(() => {
        // @ts-ignore
        e.method = 'test';
      });
    });

    it('has readonly authData property', () => {
      const e = new ARCAuthDataUpdateEvent(url, method, authData);
      assert.deepEqual(e.authData, authData, 'has the URL');
      assert.throws(() => {
        // @ts-ignore
        e.authData = 'test';
      });
    });
  });

  describe('ARCAuthDataQueryEvent', () => {
    const url = 'http://domain.com/auth';
    const method = 'x-ntlm';

    it('throws when no url argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCAuthDataQueryEvent(undefined, method);
      });
      assert.isUndefined(e);
    });

    it('throws when no method argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCAuthDataQueryEvent(url, undefined);
      });
      assert.isUndefined(e);
    });

    it('has readonly url property', () => {
      const e = new ARCAuthDataQueryEvent(url, method);
      assert.equal(e.url, url, 'has the URL');
      assert.throws(() => {
        // @ts-ignore
        e.url = 'test';
      });
    });

    it('has readonly method property', () => {
      const e = new ARCAuthDataQueryEvent(url, method);
      assert.equal(e.method, method, 'has the method');
      assert.throws(() => {
        // @ts-ignore
        e.method = 'test';
      });
    });
  });

  describe('ARCAuthDataUpdatedEvent', () => {
    const record = {
      id: 'test-id',
      rev: 'test-rev',
      oldRev: 'test-old-rev',
      item: {},
    };

    it('throws when no url argument', () => {
      let e;
      assert.throws(() => {
        e = new ARCAuthDataUpdatedEvent(undefined);
      });
      assert.isUndefined(e);
    });

    it('has changeRecord url property', () => {
      const e = new ARCAuthDataUpdatedEvent(record);
      assert.deepEqual(e.changeRecord, record, 'has the changeRecord');
      assert.throws(() => {
        // @ts-ignore
        e.changeRecord = 'test';
      });
    });

  });
});
