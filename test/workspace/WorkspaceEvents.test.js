import { assert, fixture, html } from '@open-wc/testing';
import * as sinon from 'sinon';
import { WorkspaceEvents, WorkspaceEventTypes } from  '../../index.js';

describe('Workspace', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('WorkspaceEvents', () => {
    describe('appendexport()', () => {
      const data = {
        createdAt: new Date().toISOString(),
        version: 'test',
        kind: 'ARC#dataexport',
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.appendexport, spy);
        WorkspaceEvents.appendexport(et, data);
        assert.isTrue(spy.calledOnce);
      });

      it('has the pid on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.appendexport, spy);
        WorkspaceEvents.appendexport(et, data);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.data, data);
      });
    });

    describe('appendrequest()', () => {
      const request = {
        type: 'saved',
        url: 'https://api.domain.com',
        method: 'GET',
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.appendrequest, spy);
        WorkspaceEvents.appendrequest(et, request);
        assert.isTrue(spy.calledOnce);
      });

      it('has the pid on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(WorkspaceEventTypes.appendrequest, spy);
        WorkspaceEvents.appendrequest(et, request);
        const e = spy.args[0][0];
        assert.equal(e.detail.request, request);
      });
    });
  });
});
