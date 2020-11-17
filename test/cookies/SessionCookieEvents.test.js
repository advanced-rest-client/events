import { assert, fixture, html } from '@open-wc/testing';
import * as sinon from 'sinon';
import {
  SessionCookieEventTypes,
  SessionCookieEvents,
} from  '../../index.js';

describe('Cookies', () => {
  describe('SessionCookieEvents', () => {
    /**
     * @return {Promise<HTMLDivElement>}
     */
    async function etFixture() {
      return fixture(html`<div></div>`);
    }

    describe('listAll()', () => {
      it('dispatches the list event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.listAll, spy);
        SessionCookieEvents.listAll(et);
        assert.isTrue(spy.calledOnce);
      });
    });

    describe('listDomain()', () => {
      const domain = 'domain.com';

      it('dispatches the list event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.listDomain, spy);
        SessionCookieEvents.listDomain(et, domain);
        assert.isTrue(spy.calledOnce);
      });

      it('has the domain on the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.listDomain, spy);
        SessionCookieEvents.listDomain(et, domain);
        const e = spy.args[0][0];
        assert.deepEqual(e.domain, domain);
      });
    });

    describe('delete()', () => {
      const cookie = { name: 'cname', value: 'cvalue', domain: 'cdomain', path: 'cpath' };

      it('dispatches the list event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.delete, spy);
        SessionCookieEvents.delete(et, [cookie]);
        assert.isTrue(spy.calledOnce);
      });

      it('has the cookies on the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.delete, spy);
        SessionCookieEvents.delete(et, [cookie]);
        const e = spy.args[0][0];
        assert.deepEqual(e.cookies, [cookie]);
      });
    });

    describe('deleteUrl()', () => {
      const url = 'https://api.domain.com';
      const name = 'cName';

      it('dispatches the delete event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.deleteUrl, spy);
        SessionCookieEvents.deleteUrl(et, url);
        assert.isTrue(spy.calledOnce);
      });

      it('has the url on the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.deleteUrl, spy);
        SessionCookieEvents.deleteUrl(et, url);
        const e = spy.args[0][0];
        assert.equal(e.url, url);
      });

      it('has the name on the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.deleteUrl, spy);
        SessionCookieEvents.deleteUrl(et, url, name);
        const e = spy.args[0][0];
        assert.equal(e.name, name);
      });
    });

    describe('update()', () => {
      const cookie = { name: 'cname', value: 'cvalue', domain: 'cdomain', path: 'cpath' };

      it('dispatches the list event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.update, spy);
        SessionCookieEvents.update(et, cookie);
        assert.isTrue(spy.calledOnce);
      });

      it('has the cookies on the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.update, spy);
        SessionCookieEvents.update(et, cookie);
        const e = spy.args[0][0];
        assert.deepEqual(e.cookie, cookie);
      });
    });

    describe('State.update()', () => {
      const cookie = { name: 'cname', value: 'cvalue', domain: 'cdomain', path: 'cpath' };

      it('dispatches the list event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.State.update, spy);
        SessionCookieEvents.State.update(et, cookie);
        assert.isTrue(spy.calledOnce);
      });

      it('has the cookies on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.State.update, spy);
        SessionCookieEvents.State.update(et, cookie);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail, cookie);
      });
    });

    describe('State.delete()', () => {
      const cookie = { name: 'cname', value: 'cvalue', domain: 'cdomain', path: 'cpath' };

      it('dispatches the list event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.State.delete, spy);
        SessionCookieEvents.State.delete(et, cookie);
        assert.isTrue(spy.calledOnce);
      });

      it('has the cookies on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(SessionCookieEventTypes.State.delete, spy);
        SessionCookieEvents.State.delete(et, cookie);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail, cookie);
      });
    });

  });
});
