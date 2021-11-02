import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { EventTypes, Events } from  '../../index.js';

/** @typedef {import('../../').Workspace.DomainWorkspace} DomainWorkspace */

describe('Events', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('Workspace', () => {
    describe('appendExport()', () => {
      const data = {
        createdAt: new Date().toISOString(),
        version: 'test',
        kind: 'ARC#dataexport',
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Workspace.appendExport, spy);
        Events.Workspace.appendExport(et, data);
        assert.isTrue(spy.calledOnce);
      });

      it('has the pid on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Workspace.appendExport, spy);
        Events.Workspace.appendExport(et, data);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.data, data);
      });
    });

    describe('appendRequest()', () => {
      const request = {
        type: 'saved',
        url: 'https://api.domain.com',
        method: 'GET',
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Workspace.appendRequest, spy);
        Events.Workspace.appendRequest(et, request);
        assert.isTrue(spy.calledOnce);
      });

      it('has the pid on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Workspace.appendRequest, spy);
        Events.Workspace.appendRequest(et, request);
        const e = spy.args[0][0];
        assert.equal(e.detail.request, request);
      });
    });

    describe('read()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Workspace.read, spy);
        Events.Workspace.read(et);
        assert.isTrue(spy.calledOnce);
      });
    });

    describe('write()', () => {
      const workspace = /** @type DomainWorkspace */ ({
        kind: 'ARC#DomainWorkspace',
        id: 'test-workspace',
      });

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Workspace.write, spy);
        Events.Workspace.write(et, workspace);
        assert.isTrue(spy.calledOnce);
      });

      it('has the contents on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Workspace.write, spy);
        Events.Workspace.write(et, workspace);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.contents, workspace);
      });
    });

    describe('setId()', () => {
      const id = 'test-id';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Workspace.setId, spy);
        Events.Workspace.setId(et, id);
        assert.isTrue(spy.calledOnce);
      });

      it('has the id on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Workspace.setId, spy);
        Events.Workspace.setId(et, id);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.id, id);
      });
    });

    describe('triggerWrite()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Workspace.triggerWrite, spy);
        Events.Workspace.triggerWrite(et);
        assert.isTrue(spy.calledOnce);
      });
    });

    describe('State', () => {
      describe('setId()', () => {
        const id = 'test-id';
  
        it('dispatches the event', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(EventTypes.Workspace.State.idChange, spy);
          Events.Workspace.State.idChange(et, id);
          assert.isTrue(spy.calledOnce);
        });
  
        it('has the id on the detail', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(EventTypes.Workspace.State.idChange, spy);
          Events.Workspace.State.idChange(et, id);
          const e = spy.args[0][0];
          assert.deepEqual(e.detail.id, id);
        });
      });

      describe('write()', () => {
        it('dispatches the event', async () => {
          const et = await etFixture();
          const spy = sinon.spy();
          et.addEventListener(EventTypes.Workspace.State.write, spy);
          Events.Workspace.State.write(et);
          assert.isTrue(spy.calledOnce);
        });
      });
    });
  });
});
