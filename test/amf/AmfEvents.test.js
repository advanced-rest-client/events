import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { Events, EventTypes } from '../../index.js'

describe('Events', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('AmfEvents', () => {
    describe('processApiLink()', () => {
      const url = 'https://api.com'; 
      const mainFile = 'api.raml'; 
      const md5 = '123qwe'; 
      const packaging = 'zip';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Amf.processApiLink, spy);
        await Events.Amf.processApiLink(et, url);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Amf.processApiLink, spy);
        await Events.Amf.processApiLink(et, url, mainFile, md5, packaging);
        const { detail } = spy.args[0][0];
        assert.equal(detail.url, url, 'url is set');
        assert.equal(detail.mainFile, mainFile, 'mainFile is set');
        assert.equal(detail.md5, md5, 'md5 is set');
        assert.equal(detail.packaging, packaging, 'packaging is set');
      });

      it('returns the result', async () => {
        const parseResult = { model: '', type: { type: 'RAML 1.0' } };
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Amf.processApiLink, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(parseResult);
        }
        et.addEventListener(EventTypes.Amf.processApiLink, handler);
        const result = await Events.Amf.processApiLink(et, url);
        assert.equal(result, parseResult);
      });
    });

    describe('processBuffer()', () => {
      const buffer = /** @type Buffer */ ({}); 
      const opts = {}; 
      
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Amf.processBuffer, spy);
        await Events.Amf.processBuffer(et, buffer);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Amf.processBuffer, spy);
        await Events.Amf.processBuffer(et, buffer, opts);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail.buffer, buffer, 'buffer is set');
        assert.deepEqual(detail.opts, opts, 'opts is set');
      });

      it('returns the result', async () => {
        const parseResult = { model: '', type: { type: 'RAML 1.0' } };
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Amf.processBuffer, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(parseResult);
        }
        et.addEventListener(EventTypes.Amf.processBuffer, handler);
        const result = await Events.Amf.processBuffer(et, buffer);
        assert.equal(result, parseResult);
      });
    });

    describe('processApiFile()', () => {
      const file = /** @type File */ ({});
      
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Amf.processApiFile, spy);
        await Events.Amf.processApiFile(et, file);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Amf.processApiFile, spy);
        await Events.Amf.processApiFile(et, file);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail.file, file, 'file is set');
      });

      it('returns the result', async () => {
        const parseResult = { model: '', type: { type: 'RAML 1.0' } };
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Amf.processApiFile, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(parseResult);
        }
        et.addEventListener(EventTypes.Amf.processApiFile, handler);
        const result = await Events.Amf.processApiFile(et, file);
        assert.equal(result, parseResult);
      });
    });

    describe('selectApiMainFile()', () => {
      const candidates = ['test'];
      
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Amf.selectApiMainFile, spy);
        await Events.Amf.selectApiMainFile(et, candidates);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Amf.selectApiMainFile, spy);
        await Events.Amf.selectApiMainFile(et, candidates);
        const { detail } = spy.args[0][0];
        assert.deepEqual(detail.candidates, candidates, 'candidates is set');
      });

      it('returns the result', async () => {
        const selected = 'test';
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Amf.selectApiMainFile, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(selected);
        }
        et.addEventListener(EventTypes.Amf.selectApiMainFile, handler);
        const result = await Events.Amf.selectApiMainFile(et, candidates);
        assert.equal(result, selected);
      });
    });
  });
});
