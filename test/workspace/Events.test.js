import { assert } from '@open-wc/testing';
import {
  WorkspaceAppendExportEvent,
  WorkspaceAppendRequestEvent,
  WorkspaceEventTypes,
} from  '../../index.js';

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
        assert.equal(e.type, WorkspaceEventTypes.appendexport);
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
        assert.equal(e.type, WorkspaceEventTypes.appendrequest);
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
  });
});
