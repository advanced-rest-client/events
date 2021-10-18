import { assert } from '@open-wc/testing';
import { generateEditorRequest, generateTransportRequest } from './Utils.js';
import { 
  TransportEventTypes, 
  ApiRequestEvent, 
  ApiResponseEvent, 
  ApiTransportEvent, 
  ApiAbortEvent, 
  WebsocketRequestEvent,
  HttpTransportEvent,
} from  '../../index.js';

/** @typedef {import('../../').WebSocket.WebsocketRequest} WebsocketRequest */
/** @typedef {import('../../').ArcRequest.ArcBaseRequest} ArcBaseRequest */
/** @typedef {import('../../').ArcResponse.Response} Response */

describe('Transport', () => {
  describe('Events', () => {
    describe('ApiRequestEvent', () => {
      const request = generateEditorRequest();

      it('has the correct type', () => {
        const e = new ApiRequestEvent(request);
        assert.equal(e.type, TransportEventTypes.request);
      });

      it('has the detail property', () => {
        const e = new ApiRequestEvent(request);
        assert.deepEqual(e.detail, request);
      });

      it('bubbles', () => {
        const e = new ApiRequestEvent(request);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ApiRequestEvent(request);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new ApiRequestEvent(request);
        assert.isTrue(e.cancelable);
      });
    });

    describe('ApiResponseEvent', () => {
      const source = /** @type ArcBaseRequest */ ({ url: 'https://', method: 'GET', });
      const response = /** @type Response */ ({ loadingTime: 0, status: 200,  });
      const request = generateTransportRequest();
      const id = '1234';
      const type = TransportEventTypes.response;

      it('has the correct type', () => {
        const e = new ApiResponseEvent(type, id, source, request, response);
        assert.equal(e.type, type);
      });

      it('has the detail property', () => {
        const e = new ApiResponseEvent(type, id, source, request, response);
        assert.deepEqual(e.detail.request, request, 'has the transport request');
        assert.deepEqual(e.detail.response, response, 'has the response');
        assert.deepEqual(e.detail.id, id, 'has the id');
        assert.deepEqual(e.detail.source, source, 'has the source request');
      });

      it('bubbles', () => {
        const e = new ApiResponseEvent(type, id, source, request, response);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ApiResponseEvent(type, id, source, request, response);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new ApiResponseEvent(type, id, source, request, response);
        assert.isTrue(e.cancelable);
      });
    });

    describe('ApiTransportEvent', () => {
      const request = /** @type ArcBaseRequest */ ({ url: 'https://', method: 'GET', });
      const id = '1234';
      const config = { enabled: false };

      it('has the correct type', () => {
        const e = new ApiTransportEvent(id, request);
        assert.equal(e.type, TransportEventTypes.transport);
      });

      it('has the detail property', () => {
        const e = new ApiTransportEvent(id, request, config);
        assert.deepEqual(e.detail.request, request);
        assert.deepEqual(e.detail.config, config);
        assert.deepEqual(e.detail.id, id);
      });

      it('bubbles', () => {
        const e = new ApiTransportEvent(id, request);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ApiTransportEvent(id, request);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new ApiTransportEvent(id, request);
        assert.isTrue(e.cancelable);
      });
    });

    describe('ApiAbortEvent', () => {
      const id = '1234';

      it('has the correct type', () => {
        const e = new ApiAbortEvent(id);
        assert.equal(e.type, TransportEventTypes.abort);
      });

      it('has the detail property', () => {
        const e = new ApiAbortEvent(id);
        assert.equal(e.detail.id, id);
      });

      it('bubbles', () => {
        const e = new ApiAbortEvent(id);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ApiAbortEvent(id);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new ApiAbortEvent(id);
        assert.isTrue(e.cancelable);
      });
    });

    describe('WebsocketRequestEvent', () => {
      const type = 'a';
      const editorRequest = {
        id: 'test1',
        request: /** @type WebsocketRequest */ ({
          kind: "ARC#WebsocketRequest",
        }),
      };

      it('has the passed type', () => {
        const e = new WebsocketRequestEvent(type, editorRequest);
        assert.equal(e.type, type);
      });

      it('has the passed request', () => {
        const e = new WebsocketRequestEvent(type, editorRequest);
        assert.deepEqual(e.detail, editorRequest);
      });

      it('bubbles', () => {
        const e = new WebsocketRequestEvent(type, editorRequest);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new WebsocketRequestEvent(type, editorRequest);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new WebsocketRequestEvent(type, editorRequest);
        assert.isTrue(e.cancelable);
      });
    });

    describe('HttpTransportEvent', () => {
      const request = /** @type ArcBaseRequest */ ({
        url: 'https://api.domain.com',
        method: 'GET',
      });

      it('has the type', () => {
        const e = new HttpTransportEvent(request);
        assert.equal(e.type, TransportEventTypes.httpTransport);
      });

      it('has the passed request', () => {
        const e = new HttpTransportEvent(request);
        assert.deepEqual(e.detail.request, request);
      });

      it('bubbles', () => {
        const e = new HttpTransportEvent(request);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new HttpTransportEvent(request);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new HttpTransportEvent(request);
        assert.isTrue(e.cancelable);
      });
    });
  });
});
