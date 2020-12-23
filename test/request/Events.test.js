import { assert } from '@open-wc/testing';
import {
  RequestChangeEvent,
  WebsocketRequestEvent,
} from  '../../index.js';

/** @typedef {import('@advanced-rest-client/arc-types').WebSocket.WebsocketRequest} WebsocketRequest */

describe('Request', () => {
  describe('Events', () => {
    describe('RequestChangeEvent', () => {
      const type = 'a';
      const prop = 'b';
      const val = 'c';


      it('has the passed type', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.equal(e.type, type);
      });

      it('has the read only "changedProperty" property', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.deepEqual(e.changedProperty, prop);
      });

      it('has the read only "changedValue" property', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.deepEqual(e.changedValue, val);
      });

      it('bubbles', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.isTrue(e.composed);
      });

      it('is not cancelable', () => {
        const e = new RequestChangeEvent(type, prop, val);
        assert.isFalse(e.cancelable);
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
  });
});
