import { assert, fixture, html } from '@open-wc/testing';
import * as sinon from 'sinon';
import { ExportEvents, DataExportEventTypes } from  '../../index.js';

describe('DataExport', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('customData()', () => {
    const data = { saved: true };
    const exportOptions = { provider: 'file' };
    const providerOptions = { file: 'test.json' };

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataExportEventTypes.customData, spy);
      ExportEvents.customData(et, data, exportOptions, providerOptions);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataExportEventTypes.customData, spy);
      ExportEvents.customData(et, data, exportOptions, providerOptions);
      const e = spy.args[0][0];
      assert.equal(e.data, data);
    });

    it('has the exportOptions on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataExportEventTypes.customData, spy);
      ExportEvents.customData(et, data, exportOptions, providerOptions);
      const e = spy.args[0][0];
      assert.deepEqual(e.exportOptions, exportOptions);
    });

    it('has the providerOptions on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataExportEventTypes.customData, spy);
      ExportEvents.customData(et, data, exportOptions, providerOptions);
      const e = spy.args[0][0];
      assert.deepEqual(e.providerOptions, providerOptions);
    });
  });

  describe('nativeData()', () => {
    const data = { saved: true };
    const exportOptions = { provider: 'file' };
    const providerOptions = { file: 'test.json' };

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataExportEventTypes.nativeData, spy);
      ExportEvents.nativeData(et, data, exportOptions, providerOptions);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataExportEventTypes.nativeData, spy);
      ExportEvents.nativeData(et, data, exportOptions, providerOptions);
      const e = spy.args[0][0];
      assert.equal(e.data, data);
    });

    it('has the exportOptions on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataExportEventTypes.nativeData, spy);
      ExportEvents.nativeData(et, data, exportOptions, providerOptions);
      const e = spy.args[0][0];
      assert.deepEqual(e.exportOptions, exportOptions);
    });

    it('has the providerOptions on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataExportEventTypes.nativeData, spy);
      ExportEvents.nativeData(et, data, exportOptions, providerOptions);
      const e = spy.args[0][0];
      assert.deepEqual(e.providerOptions, providerOptions);
    });
  });

  describe('fileSave()', () => {
    const data = 'export data';
    const providerOptions = { file: 'test.json' };

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataExportEventTypes.fileSave, spy);
      ExportEvents.fileSave(et, data, providerOptions);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataExportEventTypes.fileSave, spy);
      ExportEvents.fileSave(et, data, providerOptions);
      const e = spy.args[0][0];
      assert.equal(e.data, data);
    });

    it('has the providerOptions on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataExportEventTypes.fileSave, spy);
      ExportEvents.fileSave(et, data, providerOptions);
      const e = spy.args[0][0];
      assert.deepEqual(e.providerOptions, providerOptions);
    });
  });

});
