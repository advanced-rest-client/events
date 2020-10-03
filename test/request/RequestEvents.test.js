import { assert, fixture, html } from '@open-wc/testing';
import * as sinon from 'sinon';
import { RequestEvents, RequestEventTypes } from  '../../index.js';

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