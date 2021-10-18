import { assert } from '@open-wc/testing';
import {
  WorkspaceAppendExportEvent,
  WorkspaceAppendRequestEvent,
  WorkspaceReadEvent,
  WorkspaceWriteEvent,
  WorkspaceEventTypes,
} from  '../../index.js';

/** @typedef {import('../../').Workspace.DomainWorkspace} DomainWorkspace */

describe('Workspace', () => {
  describe('Events', () => {
    describe('WorkspaceAppendExportEvent', () => {
      const data = {
        createdAt: new Date().toISOString(),
        version: 'test',
        kind: 'ARC#dataexport',
      };

      it('has the correct type', () => {
        const e = new WorkspaceAppendExportEvent(data);
        assert.equal(e.type, WorkspaceEventTypes.appendExport);
      });

      it('has the data property', () => {
        const e = new WorkspaceAppendExportEvent(data);
        assert.deepEqual(e.detail.data, data);
      });

      it('bubbles', () => {
        const e = new WorkspaceAppendExportEvent(data);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new WorkspaceAppendExportEvent(data);
        assert.isTrue(e.composed);
      });
    });

    describe('WorkspaceAppendRequestEvent', () => {
      const request = {
        type: 'saved',
        url: 'https://api.domain.com',
        method: 'GET',
      };

      it('has the correct type', () => {
        const e = new WorkspaceAppendRequestEvent(request);
        assert.equal(e.type, WorkspaceEventTypes.appendRequest);
      });

      it('has the request property on the detail', () => {
        const e = new WorkspaceAppendRequestEvent(request);
        assert.deepEqual(e.detail.request, request);
      });

      it('bubbles', () => {
        const e = new WorkspaceAppendRequestEvent(request);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new WorkspaceAppendRequestEvent(request);
        assert.isTrue(e.composed);
      });
    });

    describe('WorkspaceReadEvent', () => {
      const id = 'test-id';

      it('has the correct type', () => {
        const e = new WorkspaceReadEvent();
        assert.equal(e.type, WorkspaceEventTypes.read);
      });

      it('has the optional id property on the detail', () => {
        const e = new WorkspaceReadEvent(id);
        assert.equal(e.detail.id, id);
      });

      it('bubbles', () => {
        const e = new WorkspaceReadEvent();
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new WorkspaceReadEvent();
        assert.isTrue(e.composed);
      });
    });

    describe('WorkspaceWriteEvent', () => {
      const id = 'test-id';
      const workspace = /** @type DomainWorkspace */ ({
        kind: 'ARC#DomainWorkspace',
        id: 'test-workspace',
      });

      it('has the correct type', () => {
        const e = new WorkspaceWriteEvent(workspace);
        assert.equal(e.type, WorkspaceEventTypes.write);
      });

      it('has the contents property on the detail', () => {
        const e = new WorkspaceWriteEvent(workspace);
        assert.deepEqual(e.detail.contents, workspace);
      });

      it('has the optional id property on the detail', () => {
        const e = new WorkspaceWriteEvent(workspace, id);
        assert.equal(e.detail.id, id);
      });

      it('bubbles', () => {
        const e = new WorkspaceWriteEvent(workspace);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new WorkspaceWriteEvent(workspace);
        assert.isTrue(e.composed);
      });
    });
  });
});
