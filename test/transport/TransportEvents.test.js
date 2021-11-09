import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { Events, EventTypes } from  '../../index.js';
import { generateEditorRequest, generateTransportRequest } from './Utils.js';

/** @typedef {import('../../').WebSocket.WebsocketRequest} WebsocketRequest */
/** @typedef {import('../../').ArcRequest.ArcBaseRequest} ArcBaseRequest */
/** @typedef {import('../../').ArcRequest.TransportRequest} TransportRequest */
/** @typedef {import('../../').ArcResponse.Response} Response */

describe('Events', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('Transport', () => {
    describe('request()', () => {
      const request = generateEditorRequest();

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.request, spy);
        Events.Transport.request(et, request);
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.request, spy);
        Events.Transport.request(et, request);
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
        et.addEventListener(EventTypes.Transport.response, spy);
        Events.Transport.response(et, id, source, request, response);
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.response, spy);
        Events.Transport.response(et, id, source, request, response);
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
      const source = 'api-console';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.transport, spy);
        Events.Transport.transport(et, id, request);
        assert.isTrue(spy.calledOnce);
      });

      it('has the "detail" property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.transport, spy);
        Events.Transport.transport(et, id, request, config);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.request, request);
        assert.deepEqual(e.detail.config, config);
        assert.equal(e.detail.id, id);
        assert.equal(e.detail.source, 'arc', 'has the default source');
      });

      it('has the "detail.source" property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.transport, spy);
        Events.Transport.transport(et, id, request, config, source);
        const e = spy.args[0][0];
        assert.equal(e.detail.source, source);
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
        et.addEventListener(EventTypes.Transport.processResponse, spy);
        Events.Transport.processResponse(et, id, source, request, response);
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.processResponse, spy);
        Events.Transport.processResponse(et, id, source, request, response);
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
        et.addEventListener(EventTypes.Transport.abort, spy);
        Events.Transport.abort(et, id);
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.abort, spy);
        Events.Transport.abort(et, id);
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
        et.addEventListener(EventTypes.Transport.connect, spy);
        Events.Transport.connect(et, editorRequest);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.connect, spy);
        Events.Transport.connect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.connect, spy);
        Events.Transport.connect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });

      it('the event has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.connect, spy);
        Events.Transport.connect(et, editorRequest);
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
        et.addEventListener(EventTypes.Transport.disconnect, spy);
        Events.Transport.disconnect(et, editorRequest);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.disconnect, spy);
        Events.Transport.disconnect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.disconnect, spy);
        Events.Transport.disconnect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });

      it('the event has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.disconnect, spy);
        Events.Transport.disconnect(et, editorRequest);
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
        et.addEventListener(EventTypes.Transport.connectionSend, spy);
        Events.Transport.connectionSend(et, editorRequest);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.connectionSend, spy);
        Events.Transport.connectionSend(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.connectionSend, spy);
        Events.Transport.connectionSend(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });

      it('the event has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.connectionSend, spy);
        Events.Transport.connectionSend(et, editorRequest);
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
        et.addEventListener(EventTypes.Transport.httpTransport, spy);
        Events.Transport.httpTransport(et, request);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.httpTransport, spy);
        Events.Transport.httpTransport(et, request);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.httpTransport, spy);
        Events.Transport.httpTransport(et, request);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });

      it('the event has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Transport.httpTransport, spy);
        Events.Transport.httpTransport(et, request);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.request, request);
      });
    });
  });
});
