import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { ExportEvents, DataExportEventTypes, ImportEvents, DataImportEventTypes } from  '../../index.js';

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

    it('dispatches the event', async () => {
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
    const data = { requests: true };
    const exportOptions = { provider: 'file' };
    const providerOptions = { file: 'test.json' };

    it('dispatches the event', async () => {
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

    it('dispatches the event', async () => {
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

  describe('normalize()', () => {
    const data = 'export data';

    it('dispatches the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.normalize, spy);
      ImportEvents.normalize(et, data);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.normalize, spy);
      ImportEvents.normalize(et, data);
      const e = spy.args[0][0];
      assert.equal(e.data, data);
    });
  });

  describe('dataImport()', () => {
    const data = {
      createdAt: new Date().toISOString(),
      version: 'test',
      kind: 'ARC#dataexport',
    };

    it('dispatches the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.dataImport, spy);
      ImportEvents.dataImport(et, data);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.dataImport, spy);
      ImportEvents.dataImport(et, data);
      const e = spy.args[0][0];
      assert.deepEqual(e.data, data);
    });
  });

  describe('processFile()', () => {
    const file = /** @type File */ (new Blob(['test'], { type: 'text/plain' }));
    const options = { driveId: 'test-id' };

    it('dispatches the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.processFile, spy);
      ImportEvents.processFile(et, file);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.processFile, spy);
      ImportEvents.processFile(et, file);
      const e = spy.args[0][0];
      assert.deepEqual(e.file, file);
    });

    it('has the options on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.processFile, spy);
      ImportEvents.processFile(et, file, options);
      const e = spy.args[0][0];
      assert.deepEqual(e.options, options);
    });
  });

  describe('processData()', () => {
    const data = 'test';

    it('dispatches the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.processData, spy);
      ImportEvents.processData(et, data);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.processData, spy);
      ImportEvents.processData(et, data);
      const e = spy.args[0][0];
      assert.deepEqual(e.data, data);
    });
  });

  describe('inspect()', () => {
    const data = {
      createdAt: new Date().toISOString(),
      version: 'test',
      kind: 'ARC#dataexport',
    };

    it('dispatches the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.inspect, spy);
      ImportEvents.inspect(et, data);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.inspect, spy);
      ImportEvents.inspect(et, data);
      const e = spy.args[0][0];
      assert.deepEqual(e.detail.data, data);
    });
  });

  describe('dataImported()', () => {
    it('dispatches the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(DataImportEventTypes.dataImported, spy);
      ImportEvents.dataImported(et);
      assert.isTrue(spy.calledOnce);
    });
  });
});
