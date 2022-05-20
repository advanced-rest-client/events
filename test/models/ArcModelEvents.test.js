import { assert } from '@open-wc/testing';
import sinon from 'sinon';
import { ArcModelEvents, ArcModelEventTypes } from '../../index.js';

/** @typedef {import('../../').Project.IProject} IProject */

describe('ArcModelEvents', () => {
  describe('destroy()', () => {
    const stores = ['a', 'b'];
    
    it('dispatches the event', async () => {
      const spy = sinon.spy();
      window.addEventListener(ArcModelEventTypes.destroy, spy);
      await ArcModelEvents.destroy(document.body, stores);
      window.removeEventListener(ArcModelEventTypes.destroy, spy);
      assert.isTrue(spy.calledOnce);
    });

    it('has the stores property', async () => {
      const spy = sinon.spy();
      window.addEventListener(ArcModelEventTypes.destroy, spy);
      await ArcModelEvents.destroy(document.body, stores);
      window.removeEventListener(ArcModelEventTypes.destroy, spy);
      assert.deepEqual(spy.args[0][0].stores, stores);
    });
  });

  describe('destroyed()', () => {
    const store = 'a';
    
    it('dispatches the event', () => {
      const spy = sinon.spy();
      window.addEventListener(ArcModelEventTypes.destroyed, spy);
      ArcModelEvents.destroyed(document.body, store);
      window.removeEventListener(ArcModelEventTypes.destroyed, spy);
      assert.isTrue(spy.calledOnce);
    });

    it('has the store property', () => {
      const spy = sinon.spy();
      window.addEventListener(ArcModelEventTypes.destroyed, spy);
      ArcModelEvents.destroyed(document.body, store);
      window.removeEventListener(ArcModelEventTypes.destroyed, spy);
      assert.deepEqual(spy.args[0][0].store, store);
    });
  });

  describe('Project', () => {
    describe('Project.read()', () => {
      const id = 'a';
      const rev = 'b';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.read, spy);
        ArcModelEvents.Project.read(document.body, id);
        window.removeEventListener(ArcModelEventTypes.Project.read, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the id property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.read, spy);
        ArcModelEvents.Project.read(document.body, id);
        window.removeEventListener(ArcModelEventTypes.Project.read, spy);
        assert.deepEqual(spy.args[0][0].id, id);
      });
  
      it('has the rev property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.read, spy);
        ArcModelEvents.Project.read(document.body, id, rev);
        window.removeEventListener(ArcModelEventTypes.Project.read, spy);
        assert.deepEqual(spy.args[0][0].rev, rev);
      });
    });

    describe('Project.readBulk()', () => {
      const ids = ['a', 'b'];

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.readBulk, spy);
        ArcModelEvents.Project.readBulk(document.body, ids);
        window.removeEventListener(ArcModelEventTypes.Project.readBulk, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the ids property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.readBulk, spy);
        ArcModelEvents.Project.readBulk(document.body, ids);
        window.removeEventListener(ArcModelEventTypes.Project.readBulk, spy);
        assert.deepEqual(spy.args[0][0].ids, ids);
      });
    });

    describe('Project.update()', () => {
      const object = /** @type IProject */ ({ name: 'test', definitions: {}, kind: 'ARC#Project', items: [] });

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.update, spy);
        ArcModelEvents.Project.update(document.body, object);
        window.removeEventListener(ArcModelEventTypes.Project.update, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the project property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.update, spy);
        ArcModelEvents.Project.update(document.body, object);
        window.removeEventListener(ArcModelEventTypes.Project.update, spy);
        assert.deepEqual(spy.args[0][0].project, object);
      });
    });

    describe('Project.updateBulk()', () => {
      const objects = [/** @type IProject */ ({ name: 'test', definitions: {}, kind: 'ARC#Project', items: [] })];

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.updateBulk, spy);
        ArcModelEvents.Project.updateBulk(document.body, objects);
        window.removeEventListener(ArcModelEventTypes.Project.updateBulk, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the projects property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.updateBulk, spy);
        ArcModelEvents.Project.updateBulk(document.body, objects);
        window.removeEventListener(ArcModelEventTypes.Project.updateBulk, spy);
        assert.deepEqual(spy.args[0][0].projects, objects);
      });
    });

    describe('Project.delete()', () => {
      const id = 'a';
      const rev = 'b';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.delete, spy);
        ArcModelEvents.Project.delete(document.body, id);
        window.removeEventListener(ArcModelEventTypes.Project.delete, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the id property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.delete, spy);
        ArcModelEvents.Project.delete(document.body, id);
        window.removeEventListener(ArcModelEventTypes.Project.delete, spy);
        assert.deepEqual(spy.args[0][0].id, id);
      });
  
      it('has the rev property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.delete, spy);
        ArcModelEvents.Project.delete(document.body, id, rev);
        window.removeEventListener(ArcModelEventTypes.Project.delete, spy);
        assert.deepEqual(spy.args[0][0].rev, rev);
      });
    });

    describe('Project.list()', () => {
      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.list, spy);
        ArcModelEvents.Project.list(document.body);
        window.removeEventListener(ArcModelEventTypes.Project.list, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the limit property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.list, spy);
        ArcModelEvents.Project.list(document.body, { limit: 20 });
        window.removeEventListener(ArcModelEventTypes.Project.list, spy);
        assert.equal(spy.args[0][0].limit, 20);
      });
  
      it('has the nextPageToken property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.list, spy);
        ArcModelEvents.Project.list(document.body, { nextPageToken: 'test' });
        window.removeEventListener(ArcModelEventTypes.Project.list, spy);
        assert.deepEqual(spy.args[0][0].nextPageToken, 'test');
      });
    });

    describe('Project.listAll()', () => {
      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.listAll, spy);
        ArcModelEvents.Project.listAll(document.body);
        window.removeEventListener(ArcModelEventTypes.Project.listAll, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the keys property', () => {
        const keys = ['a', 'b'];
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.listAll, spy);
        ArcModelEvents.Project.listAll(document.body, keys);
        window.removeEventListener(ArcModelEventTypes.Project.listAll, spy);
        assert.equal(spy.args[0][0].keys, keys);
      });
    });

    describe('Project.State.update()', () => {
      const changeRecord = { id: 'i1', rev: 'r2' };

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.State.update, spy);
        ArcModelEvents.Project.State.update(document.body, changeRecord);
        window.removeEventListener(ArcModelEventTypes.Project.State.update, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the changeRecord property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.State.update, spy);
        ArcModelEvents.Project.State.update(document.body, changeRecord);
        window.removeEventListener(ArcModelEventTypes.Project.State.update, spy);
        assert.deepEqual(spy.args[0][0].changeRecord, changeRecord);
      });
    });

    describe('Project.State.delete()', () => {
      const id = 't1';
      const rev = 'r1';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.State.delete, spy);
        ArcModelEvents.Project.State.delete(document.body, id, rev);
        window.removeEventListener(ArcModelEventTypes.Project.State.delete, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the id property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.State.delete, spy);
        ArcModelEvents.Project.State.delete(document.body, id, rev);
        window.removeEventListener(ArcModelEventTypes.Project.State.delete, spy);
        assert.deepEqual(spy.args[0][0].id, id);
      });
  
      it('has the rev property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Project.State.delete, spy);
        ArcModelEvents.Project.State.delete(document.body, id, rev);
        window.removeEventListener(ArcModelEventTypes.Project.State.delete, spy);
        assert.deepEqual(spy.args[0][0].rev, rev);
      });
    });
  });

  describe('Request', () => {
    describe('Request.read()', () => {
      const id = 'a';
      const rev = 'b';
      const requestType = 'saved';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.read, spy);
        ArcModelEvents.Request.read(document.body, requestType, id);
        window.removeEventListener(ArcModelEventTypes.Request.read, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the id property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.read, spy);
        ArcModelEvents.Request.read(document.body, requestType, id);
        window.removeEventListener(ArcModelEventTypes.Request.read, spy);
        assert.deepEqual(spy.args[0][0].id, id);
      });
  
      it('has the requestType property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.read, spy);
        ArcModelEvents.Request.read(document.body, requestType, id);
        window.removeEventListener(ArcModelEventTypes.Request.read, spy);
        assert.deepEqual(spy.args[0][0].requestType, requestType);
      });
  
      it('has the opts property', () => {
        const opts = { rev };
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.read, spy);
        ArcModelEvents.Request.read(document.body, requestType, id, opts);
        window.removeEventListener(ArcModelEventTypes.Request.read, spy);
        assert.deepEqual(spy.args[0][0].opts, opts);
      });
    });

    describe('Request.readBulk()', () => {
      const ids = ['a', 'b'];
      const requestType = 'saved';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.readBulk, spy);
        ArcModelEvents.Request.readBulk(document.body, requestType, ids);
        window.removeEventListener(ArcModelEventTypes.Request.readBulk, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the ids property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.readBulk, spy);
        ArcModelEvents.Request.readBulk(document.body, requestType, ids);
        window.removeEventListener(ArcModelEventTypes.Request.readBulk, spy);
        assert.deepEqual(spy.args[0][0].ids, ids);
      });

      it('has the requestType property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.readBulk, spy);
        ArcModelEvents.Request.readBulk(document.body, requestType, ids);
        window.removeEventListener(ArcModelEventTypes.Request.readBulk, spy);
        assert.deepEqual(spy.args[0][0].requestType, requestType);
      });
  
      it('has the opts property', () => {
        const opts = { };
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.readBulk, spy);
        ArcModelEvents.Request.readBulk(document.body, requestType, ids, opts);
        window.removeEventListener(ArcModelEventTypes.Request.readBulk, spy);
        assert.deepEqual(spy.args[0][0].opts, opts);
      });
    });

    describe('Request.list()', () => {
      const opts = {};
      const requestType = 'saved';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.list, spy);
        ArcModelEvents.Request.list(document.body, requestType, opts);
        window.removeEventListener(ArcModelEventTypes.Request.list, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the requestType property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.list, spy);
        ArcModelEvents.Request.list(document.body, requestType, opts);
        window.removeEventListener(ArcModelEventTypes.Request.list, spy);
        assert.deepEqual(spy.args[0][0].requestType, requestType);
      });

      it('throws when requestType is missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.list(document.body, undefined, opts);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The request type is missing.', 'has the message');
      });
    });

    describe('Request.update()', () => {
      const object = { url: 'https://', method: 'GET', };
      const requestType = 'saved';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.update, spy);
        ArcModelEvents.Request.update(document.body, requestType, object);
        window.removeEventListener(ArcModelEventTypes.Request.update, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the request property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.update, spy);
        ArcModelEvents.Request.update(document.body, requestType, object);
        window.removeEventListener(ArcModelEventTypes.Request.update, spy);
        assert.deepEqual(spy.args[0][0].request, object);
      });

      it('throws when requestType is missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.update(document.body, undefined, object);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The requestType is missing.', 'has the message');
      });

      it('throws when record is missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.update(document.body, requestType, undefined);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The request is missing.', 'has the message');
      });
    });

    describe('Request.updateBulk()', () => {
      const objects = [{ url: 'https://', method: 'GET', }];
      const requestType = 'saved';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.updateBulk, spy);
        ArcModelEvents.Request.updateBulk(document.body, requestType, objects);
        window.removeEventListener(ArcModelEventTypes.Request.updateBulk, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the requests property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.updateBulk, spy);
        ArcModelEvents.Request.updateBulk(document.body, requestType, objects);
        window.removeEventListener(ArcModelEventTypes.Request.updateBulk, spy);
        assert.deepEqual(spy.args[0][0].requests, objects);
      });
  
      it('has the requestType property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.updateBulk, spy);
        ArcModelEvents.Request.updateBulk(document.body, requestType, objects);
        window.removeEventListener(ArcModelEventTypes.Request.updateBulk, spy);
        assert.equal(spy.args[0][0].requestType, requestType);
      });

      it('throws when requestType is missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.updateBulk(document.body, undefined, objects);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The requestType is missing.', 'has the message');
      });

      it('throws when requests is missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.updateBulk(document.body, requestType, undefined);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The request is missing.', 'has the message');
      });
    });

    describe('Request.store()', () => {
      const object = { url: 'https://', method: 'GET', };
      const requestType = 'saved';
      const projects = ['id'];

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.store, spy);
        ArcModelEvents.Request.store(document.body, requestType, object);
        window.removeEventListener(ArcModelEventTypes.Request.store, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the request property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.store, spy);
        ArcModelEvents.Request.store(document.body, requestType, object);
        window.removeEventListener(ArcModelEventTypes.Request.store, spy);
        assert.deepEqual(spy.args[0][0].request, object);
      });
  
      it('has the requestType property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.store, spy);
        ArcModelEvents.Request.store(document.body, requestType, object);
        window.removeEventListener(ArcModelEventTypes.Request.store, spy);
        assert.deepEqual(spy.args[0][0].requestType, requestType);
      });
  
      it('has the projects property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.store, spy);
        ArcModelEvents.Request.store(document.body, requestType, object, projects);
        window.removeEventListener(ArcModelEventTypes.Request.store, spy);
        assert.deepEqual(spy.args[0][0].projects, projects);
      });

      it('throws when requestType is missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.store(document.body, undefined, object);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The requestType is missing.', 'has the message');
      });

      it('throws when request is missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.store(document.body, requestType, undefined);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The request is missing.', 'has the message');
      });
    });

    describe('Request.delete()', () => {
      const id = 'a';
      const rev = 'b';
      const requestType = 'saved';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.delete, spy);
        ArcModelEvents.Request.delete(document.body, requestType, id);
        window.removeEventListener(ArcModelEventTypes.Request.delete, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the id property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.delete, spy);
        ArcModelEvents.Request.delete(document.body, requestType, id);
        window.removeEventListener(ArcModelEventTypes.Request.delete, spy);
        assert.deepEqual(spy.args[0][0].id, id);
      });
  
      it('has the rev property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.delete, spy);
        ArcModelEvents.Request.delete(document.body, requestType, id, rev);
        window.removeEventListener(ArcModelEventTypes.Request.delete, spy);
        assert.deepEqual(spy.args[0][0].rev, rev);
      });

      it('throws when requestType is missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.delete(document.body, undefined, id, rev);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The requestType is missing.', 'has the message');
      });
    });

    describe('Request.deleteBulk()', () => {
      const ids = ['a'];
      const requestType = 'saved';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.deleteBulk, spy);
        ArcModelEvents.Request.deleteBulk(document.body, requestType, ids);
        window.removeEventListener(ArcModelEventTypes.Request.deleteBulk, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the ids property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.deleteBulk, spy);
        ArcModelEvents.Request.deleteBulk(document.body, requestType, ids);
        window.removeEventListener(ArcModelEventTypes.Request.deleteBulk, spy);
        assert.deepEqual(spy.args[0][0].ids, ids);
      });
  
      it('has requestType rev property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.deleteBulk, spy);
        ArcModelEvents.Request.deleteBulk(document.body, requestType, ids);
        window.removeEventListener(ArcModelEventTypes.Request.deleteBulk, spy);
        assert.deepEqual(spy.args[0][0].requestType, requestType);
      });

      it('throws when requestType is missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.deleteBulk(document.body, undefined, ids);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The requests type is missing.', 'has the message');
      });

      it('throws when ids are missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.deleteBulk(document.body, requestType, undefined);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The list of ids is missing.', 'has the message');
      });
    });

    describe('Request.undeleteBulk()', () => {
      const requests = [{id: 'a', rev: 'b'}];
      const requestType = 'saved';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.undeleteBulk, spy);
        ArcModelEvents.Request.undeleteBulk(document.body, requestType, requests);
        window.removeEventListener(ArcModelEventTypes.Request.undeleteBulk, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the requests property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.undeleteBulk, spy);
        ArcModelEvents.Request.undeleteBulk(document.body, requestType, requests);
        window.removeEventListener(ArcModelEventTypes.Request.undeleteBulk, spy);
        assert.deepEqual(spy.args[0][0].requests, requests);
      });
  
      it('has requestType rev property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.undeleteBulk, spy);
        ArcModelEvents.Request.undeleteBulk(document.body, requestType, requests);
        window.removeEventListener(ArcModelEventTypes.Request.undeleteBulk, spy);
        assert.deepEqual(spy.args[0][0].requestType, requestType);
      });

      it('throws when requestType is missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.undeleteBulk(document.body, undefined, requests);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The requests type is missing.', 'has the message');
      });

      it('throws when requests are missing', async () => {
        let error;
        try {
          await ArcModelEvents.Request.undeleteBulk(document.body, requestType, undefined);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The requests list is missing.', 'has the message');
      });
    });

    describe('Request.State.update()', () => {
      const changeRecord = { id: 'i1', rev: 'r2' };
      const requestType = 'saved';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.State.update, spy);
        ArcModelEvents.Request.State.update(document.body, requestType, changeRecord);
        window.removeEventListener(ArcModelEventTypes.Request.State.update, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the changeRecord property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.State.update, spy);
        ArcModelEvents.Request.State.update(document.body, requestType, changeRecord);
        window.removeEventListener(ArcModelEventTypes.Request.State.update, spy);
        assert.deepEqual(spy.args[0][0].changeRecord, changeRecord);
      });
  
      it('has the requestType property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.State.update, spy);
        ArcModelEvents.Request.State.update(document.body, requestType, changeRecord);
        window.removeEventListener(ArcModelEventTypes.Request.State.update, spy);
        assert.deepEqual(spy.args[0][0].requestType, requestType);
      });

      it('throws when requestType is missing', () => {
        let error;
        try {
          ArcModelEvents.Request.State.update(document.body, undefined, changeRecord);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The requestType is missing.', 'has the message');
      });

      it('throws when record is missing', () => {
        let error;
        try {
          ArcModelEvents.Request.State.update(document.body, requestType, undefined);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The record is missing.', 'has the message');
      });
    });

    describe('Request.State.delete()', () => {
      const id = 't1';
      const rev = 'r1';
      const requestType = 'saved';

      it('dispatches the event', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.State.delete, spy);
        ArcModelEvents.Request.State.delete(document.body, requestType, id, rev);
        window.removeEventListener(ArcModelEventTypes.Request.State.delete, spy);
        assert.isTrue(spy.calledOnce);
      });
  
      it('has the id property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.State.delete, spy);
        ArcModelEvents.Request.State.delete(document.body, requestType, id, rev);
        window.removeEventListener(ArcModelEventTypes.Request.State.delete, spy);
        assert.deepEqual(spy.args[0][0].id, id);
      });
  
      it('has the rev property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.State.delete, spy);
        ArcModelEvents.Request.State.delete(document.body, requestType, id, rev);
        window.removeEventListener(ArcModelEventTypes.Request.State.delete, spy);
        assert.deepEqual(spy.args[0][0].rev, rev);
      });
  
      it('has the requestType property', () => {
        const spy = sinon.spy();
        window.addEventListener(ArcModelEventTypes.Request.State.delete, spy);
        ArcModelEvents.Request.State.delete(document.body, requestType, id, rev);
        window.removeEventListener(ArcModelEventTypes.Request.State.delete, spy);
        assert.deepEqual(spy.args[0][0].requestType, requestType);
      });

      it('throws when requestType is missing', () => {
        let error;
        try {
          ArcModelEvents.Request.State.delete(document.body, undefined, id, rev);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The requestType is missing.', 'has the message');
      });

      it('throws when id is missing', () => {
        let error;
        try {
          ArcModelEvents.Request.State.delete(document.body, requestType, undefined, rev);
        } catch (e) {
          error = e;
        }
        assert.ok(error, 'throws an error');
        assert.equal(error.message, 'The request ID is missing.', 'has the message');
      });
    });
  });
});
