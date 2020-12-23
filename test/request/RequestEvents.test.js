import { assert, fixture, html } from '@open-wc/testing';
import * as sinon from 'sinon';
import { RequestEvents, RequestEventTypes } from  '../../index.js';

/** @typedef {import('@advanced-rest-client/arc-types').WebSocket.WebsocketRequest} WebsocketRequest */

describe('Request', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('RequestEvents', () => {
    describe('send()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.send, spy);
        RequestEvents.send(et);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.send, spy);
        RequestEvents.send(et);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.send, spy);
        RequestEvents.send(et);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
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
        et.addEventListener(RequestEventTypes.connect, spy);
        RequestEvents.connect(et, editorRequest);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.connect, spy);
        RequestEvents.connect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.connect, spy);
        RequestEvents.connect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });

      it('the event has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.connect, spy);
        RequestEvents.connect(et, editorRequest);
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
        et.addEventListener(RequestEventTypes.disconnect, spy);
        RequestEvents.disconnect(et, editorRequest);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.disconnect, spy);
        RequestEvents.disconnect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.disconnect, spy);
        RequestEvents.disconnect(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });

      it('the event has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.disconnect, spy);
        RequestEvents.disconnect(et, editorRequest);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail, editorRequest);
      });
    });

    describe('sendWebSocket()', () => {
      const editorRequest = {
        id: 'test1',
        request: /** @type WebsocketRequest */ ({
          kind: "ARC#WebsocketRequest",
        }),
      };

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.send, spy);
        RequestEvents.sendWebSocket(et, editorRequest);
        assert.isTrue(spy.calledOnce);
      });

      it('the event bubbles', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.send, spy);
        RequestEvents.sendWebSocket(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('the event is cancelable', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.send, spy);
        RequestEvents.sendWebSocket(et, editorRequest);
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });

      it('the event has the detail', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.send, spy);
        RequestEvents.sendWebSocket(et, editorRequest);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail, editorRequest);
      });
    });

    describe('State.urlChange()', () => {
      const url = 'test-url';
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.State.urlChange, spy);
        RequestEvents.State.urlChange(et, url);
        assert.isTrue(spy.calledOnce);
      });

      it('has the "changedProperty" property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.State.urlChange, spy);
        RequestEvents.State.urlChange(et, url);
        assert.equal(spy.args[0][0].changedProperty, 'url');
      });

      it('has the "changedValue" property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.State.urlChange, spy);
        RequestEvents.State.urlChange(et, url);
        assert.equal(spy.args[0][0].changedValue, url);
      });
    });

    describe('State.contentTypeChange()', () => {
      const ct = 'test-content-type';
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.State.contentTypeChange, spy);
        RequestEvents.State.contentTypeChange(et, ct);
        assert.isTrue(spy.calledOnce);
      });

      it('has the "changedProperty" property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.State.contentTypeChange, spy);
        RequestEvents.State.contentTypeChange(et, ct);
        assert.equal(spy.args[0][0].changedProperty, 'content-type');
      });

      it('has the "changedValue" property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(RequestEventTypes.State.contentTypeChange, spy);
        RequestEvents.State.contentTypeChange(et, ct);
        assert.equal(spy.args[0][0].changedValue, ct);
      });
    });
  });
});
