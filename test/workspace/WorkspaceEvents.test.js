import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { WorkspaceEvents, WorkspaceEventTypes } from  '../../index.js';

/** @typedef {import('../../').Workspace.DomainWorkspace} DomainWorkspace */

describe('Workspace', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('WorkspaceEvents', () => {
    describe('appendExport()', () => {
      const data = {
        createdAt: new Date().toISOString(),
        version: 'test',
        kind: 'ARC#dataexport',
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.appendExport, spy);
        WorkspaceEvents.appendExport(et, data);
        assert.isTrue(spy.calledOnce);
      });

      it('has the pid on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.appendExport, spy);
        WorkspaceEvents.appendExport(et, data);
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
        et.addEventListener(WorkspaceEventTypes.appendRequest, spy);
        WorkspaceEvents.appendRequest(et, request);
        assert.isTrue(spy.calledOnce);
      });

      it('has the pid on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.appendRequest, spy);
        WorkspaceEvents.appendRequest(et, request);
        const e = spy.args[0][0];
        assert.equal(e.detail.request, request);
      });
    });

    describe('read()', () => {
      const id = 'test-id';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.read, spy);
        WorkspaceEvents.read(et);
        assert.isTrue(spy.calledOnce);
      });

      it('has the optional id on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.read, spy);
        WorkspaceEvents.read(et, id);
        const e = spy.args[0][0];
        assert.equal(e.detail.id, id);
      });
    });

    describe('write()', () => {
      const id = 'test-id';
      const workspace = /** @type DomainWorkspace */ ({
        kind: 'ARC#DomainWorkspace',
        id: 'test-workspace',
      });

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.write, spy);
        WorkspaceEvents.write(et, workspace);
        assert.isTrue(spy.calledOnce);
      });

      it('has the contents on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.write, spy);
        WorkspaceEvents.write(et, workspace, id);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.contents, workspace);
      });

      it('has the optional id on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.write, spy);
        WorkspaceEvents.write(et, workspace, id);
        const e = spy.args[0][0];
        assert.equal(e.detail.id, id);
      });
    });
  });
});
