import { assert, fixture, html } from '@open-wc/testing';
import * as sinon from 'sinon';
import { RestApiEvents, RestApiEventTypes } from  '../../index.js';

describe('RestAPI', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('RestApiEvents', () => {
    describe('processFile()', () => {
      const file = /** @type File */ (new Blob(['test'], { type: 'text/plain' }));

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RestApiEventTypes.processFile, spy);
        RestApiEvents.processFile(et, file);
        assert.isTrue(spy.calledOnce);
      });

      it('has the file on the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RestApiEventTypes.processFile, spy);
        RestApiEvents.processFile(et, file);
        const e = spy.args[0][0];
        assert.deepEqual(e.file, file);
      });
    });

    describe('dataReady()', () => {
      const model = { '@type': ['test'] };
      const type = 'RAML 1.0';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RestApiEventTypes.dataReady, spy);
        RestApiEvents.dataReady(et, model, type);
        assert.isTrue(spy.calledOnce);
      });

      it('has the model on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RestApiEventTypes.dataReady, spy);
        RestApiEvents.dataReady(et, model, type);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.model, model);
      });

      it('has the type on the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RestApiEventTypes.dataReady, spy);
        RestApiEvents.dataReady(et, model, type);
        const e = spy.args[0][0];
        assert.equal(e.detail.type, type);
      });
    });
  });
});
