import { assert } from '@open-wc/testing';

import {
  ArcNavigationEventTypes,
  ARCNavigationEvent,
  ARCMenuPopupEvent,
  ARCRequestNavigationEvent,
  ARCRestApiNavigationEvent,
  ARCProjectNavigationEvent,
  REQUESTROUTE,
  RESTAPIROUTE,
  PROJECTROUTE,
} from  '../../index.js';

describe('NavigationEvents', () => {
  describe('ARCNavigationEvent', () => {
    const route = 'test-route';
    const opts = { id: 'test-id' };

    it('has the correct type', () => {
      const e = new ARCNavigationEvent(route);
      assert.equal(e.type, ArcNavigationEventTypes.navigate);
    });

    it('has readonly route property', () => {
      const e = new ARCNavigationEvent(route);
      assert.equal(e.route, route);
      assert.throws(() => {
        // @ts-ignore
        e.route = 'test';
      });
    });

    it('has opts as the detail', () => {
      const e = new ARCNavigationEvent(route, opts);
      assert.deepEqual(e.detail, opts);
    });
  });

  describe('ARCMenuPopupEvent', () => {
    const menu = 'test-menu';

    it('has the correct type', () => {
      const e = new ARCMenuPopupEvent(menu);
      assert.equal(e.type, ArcNavigationEventTypes.popupMenu);
    });

    it('has readonly menu property', () => {
      const e = new ARCMenuPopupEvent(menu);
      assert.equal(e.menu, menu);
      assert.throws(() => {
        // @ts-ignore
        e.menu = 'test';
      });
    });
  });

  describe('ARCRequestNavigationEvent', () => {
    const requestId = 'request id';
    const requestType = 'saved';

    it('has the correct type', () => {
      const e = new ARCRequestNavigationEvent(requestId, requestType);
      assert.equal(e.type, ArcNavigationEventTypes.navigateRequest);
    });

    it('has readonly route property', () => {
      const e = new ARCRequestNavigationEvent(requestId, requestType);
      assert.equal(e.route, REQUESTROUTE);
      assert.throws(() => {
        // @ts-ignore
        e.route = 'test';
      });
    });

    it('has readonly requestId property', () => {
      const e = new ARCRequestNavigationEvent(requestId, requestType);
      assert.equal(e.requestId, requestId);
      assert.throws(() => {
        // @ts-ignore
        e.requestId = 'test';
      });
    });

    it('has readonly requestType property', () => {
      const e = new ARCRequestNavigationEvent(requestId, requestType);
      assert.equal(e.requestType, requestType);
      assert.throws(() => {
        // @ts-ignore
        e.requestType = 'test';
      });
    });
  });

  describe('ARCRestApiNavigationEvent', () => {
    const api = 'api-id';
    const version = '1.0.0';
    const action = 'view';

    it('has the correct type', () => {
      const e = new ARCRestApiNavigationEvent(api, version, action);
      assert.equal(e.type, ArcNavigationEventTypes.navigateRestApi);
    });

    it('has readonly route property', () => {
      const e = new ARCRestApiNavigationEvent(api, version, action);
      assert.equal(e.route, RESTAPIROUTE);
      assert.throws(() => {
        // @ts-ignore
        e.route = 'test';
      });
    });

    it('has readonly api property', () => {
      const e = new ARCRestApiNavigationEvent(api, version, action);
      assert.equal(e.api, api);
      assert.throws(() => {
        // @ts-ignore
        e.api = 'test';
      });
    });

    it('has readonly version property', () => {
      const e = new ARCRestApiNavigationEvent(api, version, action);
      assert.equal(e.version, version);
      assert.throws(() => {
        // @ts-ignore
        e.version = 'test';
      });
    });

    it('has readonly action property', () => {
      const e = new ARCRestApiNavigationEvent(api, version, action);
      assert.equal(e.action, action);
      assert.throws(() => {
        // @ts-ignore
        e.action = 'test';
      });
    });
  });

  describe('ARCProjectNavigationEvent', () => {
    const id = 'project-id';
    const action = 'detail';

    it('has the correct type', () => {
      const e = new ARCProjectNavigationEvent(id, action);
      assert.equal(e.type, ArcNavigationEventTypes.navigateProject);
    });

    it('has readonly route property', () => {
      const e = new ARCProjectNavigationEvent(id, action);
      assert.equal(e.route, PROJECTROUTE);
      assert.throws(() => {
        // @ts-ignore
        e.route = 'test';
      });
    });

    it('has readonly id property', () => {
      const e = new ARCProjectNavigationEvent(id, action);
      assert.equal(e.id, id);
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly action property', () => {
      const e = new ARCProjectNavigationEvent(id, action);
      assert.equal(e.action, action);
      assert.throws(() => {
        // @ts-ignore
        e.action = 'test';
      });
    });
  });
});
