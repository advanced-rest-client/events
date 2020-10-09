import { assert, fixture, html } from '@open-wc/testing';
import * as sinon from 'sinon';
import { DataGenerator } from '@advanced-rest-client/arc-data-generator';
import { TransportEvents, TransportEventTypes } from  '../../index.js';
import { generateEditorRequest, generateTransportRequest } from './Utils.js';

describe('Transport', () => {
  const generator = new DataGenerator();

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
      const response = generator.generateResponse();
      const request = generateTransportRequest();
      const id = generator.chance.guid();

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.response, spy);
        TransportEvents.response(et, id, request, response);
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.response, spy);
        TransportEvents.response(et, id, request, response);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.request, request);
        assert.deepEqual(e.detail.response, response);
        assert.deepEqual(e.detail.id, id);
      });
    });

    describe('transport()', () => {
      const request = generator.generateSavedItem();
      const id = generator.chance.guid();
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
      const response = generator.generateResponse();
      const request = generateTransportRequest();
      const id = generator.chance.guid();

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.processResponse, spy);
        TransportEvents.processResponse(et, id, request, response);
        assert.isTrue(spy.calledOnce);
      });

      it('has the detail property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(TransportEventTypes.processResponse, spy);
        TransportEvents.processResponse(et, id, request, response);
        const e = spy.args[0][0];
        assert.deepEqual(e.detail.request, request);
        assert.deepEqual(e.detail.response, response);
        assert.deepEqual(e.detail.id, id);
      });
    });

  });
});