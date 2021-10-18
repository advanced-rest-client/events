import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { TransportEvents, TransportEventTypes } from  '../../index.js';
import { generateEditorRequest, generateTransportRequest } from './Utils.js';

/** @typedef {import('../../').WebSocket.WebsocketRequest} WebsocketRequest */
/** @typedef {import('../../').ArcRequest.ArcBaseRequest} ArcBaseRequest */
/** @typedef {import('../../').ArcRequest.TransportRequest} TransportRequest */
/** @typedef {import('../../').ArcResponse.Response} Response */

describe('Transport', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('TransportEvents', () => {
    describe('request()', () => {
      const request = generateEditorRequest();

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.request, spy);
        TransportEvents.request(et, request);
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.request, spy);
        TransportEvents.request(et, request);
        assert.deepEqual(spy.args[0][0].detail, request);
      });
    });

    describe('response()', () => {
      const source = /** @type ArcBaseRequest */ ({ url: 'https://', method: 'GET', });
      const response = /** @type Response */ ({ loadingTime: 0, status: 200,  });
      const request = generateTransportRequest();
      const id = '1234';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.response, spy);
        TransportEvents.response(et, id, source, request, response);
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.response, spy);
        TransportEvents.response(et, id, source, request, response);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.request, request);
        assert.deepEqual(e.detail.response, response);
        assert.deepEqual(e.detail.id, id);
      });
    });

    describe('transport()', () => {
      const request = /** @type ArcBaseRequest */ ({ url: 'https://', method: 'GET', });
      const id = '1234';
      const config = { enabled: false };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.transport, spy);
        TransportEvents.transport(et, id, request);
        assert.isTrue(spy.calledOnce);
      });

      it('has the "changedProperty" property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.transport, spy);
        TransportEvents.transport(et, id, request, config);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.request, request);
        assert.deepEqual(e.detail.config, config);
        assert.deepEqual(e.detail.id, id);
      });
    });

    describe('processResponse()', () => {
      const source = /** @type ArcBaseRequest */ ({ url: 'https://', method: 'GET', });
      const response = /** @type Response */ ({ loadingTime: 0, status: 200,  });
      const request = generateTransportRequest();
      const id = '1234';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.processResponse, spy);
        TransportEvents.processResponse(et, id, source, request, response);
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.processResponse, spy);
        TransportEvents.processResponse(et, id, source, request, response);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.request, request);
        assert.deepEqual(e.detail.response, response);
        assert.deepEqual(e.detail.id, id);
      });
    });

    describe('abort()', () => {
      const id = '1234';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.abort, spy);
        TransportEvents.abort(et, id);
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.abort, spy);
        TransportEvents.abort(et, id);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.id, id);
      });
    });

    describe('connect()', () => {
      const editorRequest = {
        id: 'test1',
        request: /** @type WebsocketRequest */ ({
          kind: "ARC#WebsocketRequest",
        }),
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.connect, spy);
        TransportEvents.connect(et, editorRequest);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.connect, spy);
        TransportEvents.connect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.connect, spy);
        TransportEvents.connect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });

      it('the event has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.connect, spy);
        TransportEvents.connect(et, editorRequest);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail, editorRequest);
      });
    });

    describe('disconnect()', () => {
      const editorRequest = {
        id: 'test1',
        request: /** @type WebsocketRequest */ ({
          kind: "ARC#WebsocketRequest",
        }),
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.disconnect, spy);
        TransportEvents.disconnect(et, editorRequest);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.disconnect, spy);
        TransportEvents.disconnect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.disconnect, spy);
        TransportEvents.disconnect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });

      it('the event has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.disconnect, spy);
        TransportEvents.disconnect(et, editorRequest);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail, editorRequest);
      });
    });

    describe('connectionSend()', () => {
      const editorRequest = {
        id: 'test1',
        request: /** @type WebsocketRequest */ ({
          kind: "ARC#WebsocketRequest",
        }),
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.connectionSend, spy);
        TransportEvents.connectionSend(et, editorRequest);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.connectionSend, spy);
        TransportEvents.connectionSend(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.connectionSend, spy);
        TransportEvents.connectionSend(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });

      it('the event has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.connectionSend, spy);
        TransportEvents.connectionSend(et, editorRequest);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail, editorRequest);
      });
    });

    describe('httpTransport()', () => {
      const request = /** @type ArcBaseRequest */ ({
        url: 'https://api.domain.com',
        method: 'GET',
      });

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.httpTransport, spy);
        TransportEvents.httpTransport(et, request);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.httpTransport, spy);
        TransportEvents.httpTransport(et, request);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.httpTransport, spy);
        TransportEvents.httpTransport(et, request);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });

      it('the event has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.httpTransport, spy);
        TransportEvents.httpTransport(et, request);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.request, request);
      });
    });
  });
});
