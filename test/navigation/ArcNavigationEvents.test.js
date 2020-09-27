import { assert, fixture, html } from '@open-wc/testing';
import * as sinon from 'sinon';
import {
  ArcNavigationEventTypes,
  ArcNavigationEvents,
  REQUESTROUTE,
  RESTAPIROUTE,
  PROJECTROUTE,
  ProjectActions,
  RequestActions,
} from  '../../index.js';

describe('ArcNavigationEvents', () => {
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
        ArcNavigationEvents.navigate = 'test';
      });
    });

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigate, spy);
      ArcNavigationEvents.navigate(et, route);
      assert.isTrue(spy.calledOnce);
    });

    it('has the route on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigate, spy);
      ArcNavigationEvents.navigate(et, route);
      const e = spy.args[0][0];
      assert.equal(e.route, route);
    });

    it('has the opts on the detail', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigate, spy);
      ArcNavigationEvents.navigate(et, route, opts);
      const e = spy.args[0][0];
      assert.deepEqual(e.detail, opts);
    });
  });

  describe('popupMenu()', () => {
    const menu = 'test-menu';

    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        ArcNavigationEvents.popupMenu = 'test';
      });
    });

    it('dispatches popupmenu event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.popupMenu, spy);
      ArcNavigationEvents.popupMenu(et, menu);
      assert.isTrue(spy.calledOnce);
    });

    it('has the menu on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.popupMenu, spy);
      ArcNavigationEvents.popupMenu(et, menu);
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
        ArcNavigationEvents.navigateRequest = 'test';
      });
    });

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateRequest, spy);
      ArcNavigationEvents.navigateRequest(et, rid, tr);
      assert.isTrue(spy.calledOnce);
    });

    it('has the route on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateRequest, spy);
      ArcNavigationEvents.navigateRequest(et, rid, tr);
      const e = spy.args[0][0];
      assert.equal(e.route, REQUESTROUTE);
    });

    it('has the requestId on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateRequest, spy);
      ArcNavigationEvents.navigateRequest(et, rid, tr);
      const e = spy.args[0][0];
      assert.equal(e.requestId, rid);
    });

    it('has the requestType on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateRequest, spy);
      ArcNavigationEvents.navigateRequest(et, rid, tr);
      const e = spy.args[0][0];
      assert.equal(e.requestType, tr);
    });

    it('has the action property on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateRequest, spy);
      ArcNavigationEvents.navigateRequest(et, rid, tr, RequestActions.edit);
      const e = spy.args[0][0];
      assert.equal(e.action, RequestActions.edit);
    });

    it('has the default action', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateRequest, spy);
      ArcNavigationEvents.navigateRequest(et, rid, tr);
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
        ArcNavigationEvents.navigateRestApi = 'test';
      });
    });

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateRestApi, spy);
      ArcNavigationEvents.navigateRestApi(et, api, version, action);
      assert.isTrue(spy.calledOnce);
    });

    it('has the route on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateRestApi, spy);
      ArcNavigationEvents.navigateRestApi(et, api, version, action);
      const e = spy.args[0][0];
      assert.equal(e.route, RESTAPIROUTE);
    });

    it('has the api on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateRestApi, spy);
      ArcNavigationEvents.navigateRestApi(et, api, version, action);
      const e = spy.args[0][0];
      assert.deepEqual(e.api, api);
    });

    it('has the action on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateRestApi, spy);
      ArcNavigationEvents.navigateRestApi(et, api, version, action);
      const e = spy.args[0][0];
      assert.deepEqual(e.action, action);
    });

    it('has the version on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateRestApi, spy);
      ArcNavigationEvents.navigateRestApi(et, api, version, action);
      const e = spy.args[0][0];
      assert.deepEqual(e.version, version);
    });
  });

  describe('navigateProject()', () => {
    const id = 'project-id';

    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        ArcNavigationEvents.navigateRestApi = 'test';
      });
    });

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateProject, spy);
      ArcNavigationEvents.navigateProject(et, id);
      assert.isTrue(spy.calledOnce);
    });

    it('has the route on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateProject, spy);
      ArcNavigationEvents.navigateProject(et, id);
      const e = spy.args[0][0];
      assert.equal(e.route, PROJECTROUTE);
    });

    it('has the id on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateProject, spy);
      ArcNavigationEvents.navigateProject(et, id);
      const e = spy.args[0][0];
      assert.deepEqual(e.id, id);
    });

    it('has the action on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateProject, spy);
      ArcNavigationEvents.navigateProject(et, id, ProjectActions.edit);
      const e = spy.args[0][0];
      assert.deepEqual(e.action, ProjectActions.edit);
    });

    it('has the default action', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(ArcNavigationEventTypes.navigateProject, spy);
      ArcNavigationEvents.navigateProject(et, id);
      const e = spy.args[0][0];
      assert.deepEqual(e.action, ProjectActions.open);
    });
  });
});
