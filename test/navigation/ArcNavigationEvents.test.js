import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import {
  EventTypes,
  Events,
  REQUESTROUTE,
  RESTAPIROUTE,
  PROJECTROUTE,
  ProjectActions,
  RequestActions,
} from  '../../index.js';

describe('Events.Navigation', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('navigate()', () => {
    const route = 'test-route';
    const opts = { id: 'test-id' };

    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        Events.Navigation.navigate = 'test';
      });
    });

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigate, spy);
      Events.Navigation.navigate(et, route);
      assert.isTrue(spy.calledOnce);
    });

    it('has the route on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigate, spy);
      Events.Navigation.navigate(et, route);
      const e = spy.args[0][0];
      assert.equal(e.route, route);
    });

    it('has the opts on the detail', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigate, spy);
      Events.Navigation.navigate(et, route, opts);
      const e = spy.args[0][0];
      assert.deepEqual(e.detail, opts);
    });
  });

  describe('popupMenu()', () => {
    const menu = 'test-menu';

    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        Events.Navigation.popupMenu = 'test';
      });
    });

    it('dispatches popupmenu event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.popupMenu, spy);
      Events.Navigation.popupMenu(et, menu);
      assert.isTrue(spy.calledOnce);
    });

    it('has the menu on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.popupMenu, spy);
      Events.Navigation.popupMenu(et, menu);
      const e = spy.args[0][0];
      assert.equal(e.menu, menu);
    });
  });

  describe('navigateRequest()', () => {
    const rid = 'request-id';
    const tr = 'saved';

    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        Events.Navigation.navigateRequest = 'test';
      });
    });

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateRequest, spy);
      Events.Navigation.navigateRequest(et, rid, tr);
      assert.isTrue(spy.calledOnce);
    });

    it('has the route on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateRequest, spy);
      Events.Navigation.navigateRequest(et, rid, tr);
      const e = spy.args[0][0];
      assert.equal(e.route, REQUESTROUTE);
    });

    it('has the requestId on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateRequest, spy);
      Events.Navigation.navigateRequest(et, rid, tr);
      const e = spy.args[0][0];
      assert.equal(e.requestId, rid);
    });

    it('has the requestType on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateRequest, spy);
      Events.Navigation.navigateRequest(et, rid, tr);
      const e = spy.args[0][0];
      assert.equal(e.requestType, tr);
    });

    it('has the action property on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateRequest, spy);
      // @ts-ignore
      Events.Navigation.navigateRequest(et, rid, tr, RequestActions.edit);
      const e = spy.args[0][0];
      assert.equal(e.action, RequestActions.edit);
    });

    it('has the default action', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateRequest, spy);
      Events.Navigation.navigateRequest(et, rid, tr);
      const e = spy.args[0][0];
      assert.equal(e.action, RequestActions.open);
    });
  });

  describe('navigateRestApi()', () => {
    const api = 'api-id';
    const version = '1.0.0';
    const action = 'view';

    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        Events.Navigation.navigateRestApi = 'test';
      });
    });

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateRestApi, spy);
      Events.Navigation.navigateRestApi(et, api, version, action);
      assert.isTrue(spy.calledOnce);
    });

    it('has the route on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateRestApi, spy);
      Events.Navigation.navigateRestApi(et, api, version, action);
      const e = spy.args[0][0];
      assert.equal(e.route, RESTAPIROUTE);
    });

    it('has the api on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateRestApi, spy);
      Events.Navigation.navigateRestApi(et, api, version, action);
      const e = spy.args[0][0];
      assert.deepEqual(e.api, api);
    });

    it('has the action on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateRestApi, spy);
      Events.Navigation.navigateRestApi(et, api, version, action);
      const e = spy.args[0][0];
      assert.deepEqual(e.action, action);
    });

    it('has the version on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateRestApi, spy);
      Events.Navigation.navigateRestApi(et, api, version, action);
      const e = spy.args[0][0];
      assert.deepEqual(e.version, version);
    });
  });

  describe('navigateProject()', () => {
    const id = 'project-id';

    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        Events.Navigation.navigateRestApi = 'test';
      });
    });

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateProject, spy);
      Events.Navigation.navigateProject(et, id);
      assert.isTrue(spy.calledOnce);
    });

    it('has the route on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateProject, spy);
      Events.Navigation.navigateProject(et, id);
      const e = spy.args[0][0];
      assert.equal(e.route, PROJECTROUTE);
    });

    it('has the id on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateProject, spy);
      Events.Navigation.navigateProject(et, id);
      const e = spy.args[0][0];
      assert.deepEqual(e.id, id);
    });

    it('has the action on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateProject, spy);
      // @ts-ignore
      Events.Navigation.navigateProject(et, id, ProjectActions.edit);
      const e = spy.args[0][0];
      assert.deepEqual(e.action, ProjectActions.edit);
    });

    it('has the default action', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateProject, spy);
      Events.Navigation.navigateProject(et, id);
      const e = spy.args[0][0];
      assert.deepEqual(e.action, ProjectActions.open);
    });
  });

  describe('navigateExternal()', () => {
    const url = 'test-url';

    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        Events.Navigation.navigateExternal = 'test';
      });
    });

    it('dispatches the navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateExternal, spy);
      Events.Navigation.navigateExternal(et, url);
      assert.isTrue(spy.calledOnce);
    });

    it('has the url property on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateExternal, spy);
      Events.Navigation.navigateExternal(et, url);
      const e = spy.args[0][0];
      assert.equal(e.url, url);
    });

    it('has the default detail object', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateExternal, spy);
      Events.Navigation.navigateExternal(et, url);
      const e = spy.args[0][0];
      assert.deepEqual(e.detail, {});
    });

    it('has the passed detail object', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.navigateExternal, spy);
      const cnf = { purpose: 'test' };
      Events.Navigation.navigateExternal(et, url, cnf);
      const e = spy.args[0][0];
      assert.deepEqual(e.detail, cnf);
    });
  });

  describe('helpTopic()', () => {
    const topic = 'test-topic';

    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        Events.Navigation.helpTopic = 'test';
      });
    });

    it('dispatches the help navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.helpTopic, spy);
      Events.Navigation.helpTopic(et, topic);
      assert.isTrue(spy.calledOnce);
    });

    it('has the topic property on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.helpTopic, spy);
      Events.Navigation.helpTopic(et, topic);
      const e = spy.args[0][0];
      assert.equal(e.topic, topic);
    });
  });

  describe('openWebUrl()', () => {
    const url = 'test-url';
    const purpose = 'a purpose';

    it('dispatches the help navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.openWebUrl, spy);
      Events.Navigation.openWebUrl(et, url, purpose);
      assert.isTrue(spy.calledOnce);
    });

    it('has the topic property on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.openWebUrl, spy);
      Events.Navigation.openWebUrl(et, url, purpose);
      const e = spy.args[0][0];
      assert.equal(e.detail.url, url);
    });

    it('has the purpose property on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Navigation.openWebUrl, spy);
      Events.Navigation.openWebUrl(et, url, purpose);
      const e = spy.args[0][0];
      assert.equal(e.detail.purpose, purpose);
    });
  });
});
