import { assert } from '@open-wc/testing';
import {
  SessionCookieEventTypes,
  SessionCookiesListEvent,
  SessionCookiesListDomainEvent,
  SessionCookiesListUrlEvent,
  SessionCookiesRemoveEvent,
  SessionCookieUpdateEvent,
  SessionCookieUpdatedEvent,
  SessionCookieDeletedEvent,
  SessionCookiesRemoveDomainEvent,
} from  '../../index.js';

describe('Cookies', () => {
  describe('Events', () => {
    describe('SessionCookiesListEvent', () => {
      it('has the correct type', () => {
        const e = new SessionCookiesListEvent();
        assert.equal(e.type, SessionCookieEventTypes.listAll);
      });
    });

    describe('SessionCookiesListDomainEvent', () => {
      const domain = 'domain.com';
      it('has the correct type', () => {
        const e = new SessionCookiesListDomainEvent(domain);
        assert.equal(e.type, SessionCookieEventTypes.listDomain);
      });

      it('has readonly domain property', () => {
        const e = new SessionCookiesListDomainEvent(domain);
        assert.equal(e.domain, domain);
        assert.throws(() => {
          // @ts-ignore
          e.domain = 'test';
        });
      });
    });

    describe('SessionCookiesListUrlEvent', () => {
      const url = 'https://domain.com/path';

      it('has the correct type', () => {
        const e = new SessionCookiesListUrlEvent(url);
        assert.equal(e.type, SessionCookieEventTypes.listUrl);
      });

      it('has readonly domain property', () => {
        const e = new SessionCookiesListUrlEvent(url);
        assert.equal(e.url, url);
        assert.throws(() => {
          // @ts-ignore
          e.url = 'test';
        });
      });
    });

    describe('SessionCookiesRemoveEvent', () => {
      const cookie = { name: 'cname', value: 'cvalue', domain: 'cdomain', path: 'cpath' };
      it('has the correct type', () => {
        const e = new SessionCookiesRemoveEvent([cookie]);
        assert.equal(e.type, SessionCookieEventTypes.delete);
      });

      it('has readonly cookies property', () => {
        const e = new SessionCookiesRemoveEvent([cookie]);
        assert.deepEqual(e.cookies, [cookie]);
        assert.throws(() => {
          // @ts-ignore
          e.cookies = 'test';
        });
      });
    });

    describe('SessionCookiesRemoveDomainEvent', () => {
      const url = 'https://api.domain.com';
      const name = 'cName';

      it('has the correct type', () => {
        const e = new SessionCookiesRemoveDomainEvent(url);
        assert.equal(e.type, SessionCookieEventTypes.deleteUrl);
      });

      it('has readonly url property', () => {
        const e = new SessionCookiesRemoveDomainEvent(url);
        assert.equal(e.url, url);
        assert.throws(() => {
          // @ts-ignore
          e.url = 'test';
        });
      });

      it('has readonly name property', () => {
        const e = new SessionCookiesRemoveDomainEvent(url, name);
        assert.equal(e.name, name);
        assert.throws(() => {
          // @ts-ignore
          e.name = 'test';
        });
      });
    });

    describe('SessionCookieUpdateEvent', () => {
      const cookie = { name: 'cname', value: 'cvalue', domain: 'cdomain', path: 'cpath' };
      it('has the correct type', () => {
        const e = new SessionCookieUpdateEvent(cookie);
        assert.equal(e.type, SessionCookieEventTypes.update);
      });

      it('has readonly cookies property', () => {
        const e = new SessionCookieUpdateEvent(cookie);
        assert.deepEqual(e.cookie, cookie);
        assert.throws(() => {
          // @ts-ignore
          e.cookie = 'test';
        });
      });
    });

    describe('SessionCookieUpdatedEvent', () => {
      const cookie = { name: 'cname', value: 'cvalue', domain: 'cdomain', path: 'cpath' };
      it('has the correct type', () => {
        const e = new SessionCookieUpdatedEvent(cookie);
        assert.equal(e.type, SessionCookieEventTypes.State.update);
      });

      it('has the cookie on the detail', () => {
        const e = new SessionCookieUpdatedEvent(cookie);
        assert.deepEqual(e.detail, cookie);
      });
    });

    describe('SessionCookieDeletedEvent', () => {
      const cookie = { name: 'cname', value: 'cvalue', domain: 'cdomain', path: 'cpath' };
      it('has the correct type', () => {
        const e = new SessionCookieDeletedEvent(cookie);
        assert.equal(e.type, SessionCookieEventTypes.State.delete);
      });

      it('has the cookie on the detail', () => {
        const e = new SessionCookieDeletedEvent(cookie);
        assert.deepEqual(e.detail, cookie);
      });
    });
  });
});
