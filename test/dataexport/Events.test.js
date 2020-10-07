import { assert } from '@open-wc/testing';

import {
  ArcDataExportEvent,
  ArcExportEvent,
  ArcExportProviderEvent,
  ArcExportFilesystemEvent,
  DataExportEventTypes,
  DataImportEventTypes,
  ArcImportNormalizeEvent,
  ArcImportEvent,
  ArcImportFileEvent,
  ArcImportDataEvent,
  ArcImportInspectEvent,
} from  '../../index.js';

describe('DataExport', () => {
  describe('Export Events', () => {
    describe('ArcDataExportEvent', () => {
      const data = { requests: true };
      const exportOptions = { provider: 'file' };
      const providerOptions = { file: 'test.json' };

      it('has the correct type', () => {
        const e = new ArcDataExportEvent(data, exportOptions, providerOptions);
        assert.equal(e.type, DataExportEventTypes.nativeData);
      });

      it('has readonly data property', () => {
        const e = new ArcDataExportEvent(data, exportOptions, providerOptions);
        assert.deepEqual(e.data, data);
        assert.throws(() => {
          // @ts-ignore
          e.data = 'test';
        });
      });

      it('has readonly exportOptions property', () => {
        const e = new ArcDataExportEvent(data, exportOptions, providerOptions);
        assert.deepEqual(e.exportOptions, exportOptions);
        assert.throws(() => {
          // @ts-ignore
          e.exportOptions = 'test';
        });
      });

      it('has readonly providerOptions property', () => {
        const e = new ArcDataExportEvent(data, exportOptions, providerOptions);
        assert.deepEqual(e.providerOptions, providerOptions);
        assert.throws(() => {
          // @ts-ignore
          e.providerOptions = 'test';
        });
      });
    });

    describe('ArcExportEvent', () => {
      const data = 'export value';
      const exportOptions = { provider: 'file' };
      const providerOptions = { file: 'test.json' };

      it('has the correct type', () => {
        const e = new ArcExportEvent(data, exportOptions, providerOptions);
        assert.equal(e.type, DataExportEventTypes.customData);
      });

      it('has readonly data property', () => {
        const e = new ArcExportEvent(data, exportOptions, providerOptions);
        assert.deepEqual(e.data, data);
        assert.throws(() => {
          // @ts-ignore
          e.data = 'test';
        });
      });

      it('has readonly exportOptions property', () => {
        const e = new ArcExportEvent(data, exportOptions, providerOptions);
        assert.deepEqual(e.exportOptions, exportOptions);
        assert.throws(() => {
          // @ts-ignore
          e.exportOptions = 'test';
        });
      });

      it('has readonly providerOptions property', () => {
        const e = new ArcExportEvent(data, exportOptions, providerOptions);
        assert.deepEqual(e.providerOptions, providerOptions);
        assert.throws(() => {
          // @ts-ignore
          e.providerOptions = 'test';
        });
      });
    });

    describe('ArcExportProviderEvent', () => {
      const type = 'export-type';
      const data = 'export data';
      const providerOptions = { file: 'test.json' };

      it('has the passed type', () => {
        const e = new ArcExportProviderEvent(type, data, providerOptions);
        assert.equal(e.type, type);
      });

      it('has readonly data property', () => {
        const e = new ArcExportProviderEvent(type, data, providerOptions);
        assert.deepEqual(e.data, data);
        assert.throws(() => {
          // @ts-ignore
          e.data = 'test';
        });
      });

      it('has readonly providerOptions property', () => {
        const e = new ArcExportProviderEvent(type, data, providerOptions);
        assert.deepEqual(e.providerOptions, providerOptions);
        assert.throws(() => {
          // @ts-ignore
          e.providerOptions = 'test';
        });
      });
    });

    describe('ArcExportFilesystemEvent', () => {
      const data = 'export data';
      const providerOptions = { file: 'test.json' };

      it('has the correct type', () => {
        const e = new ArcExportFilesystemEvent(data, providerOptions);
        assert.equal(e.type, DataExportEventTypes.fileSave);
      });

      it('has readonly data property', () => {
        const e = new ArcExportFilesystemEvent(data, providerOptions);
        assert.deepEqual(e.data, data);
        assert.throws(() => {
          // @ts-ignore
          e.data = 'test';
        });
      });

      it('has readonly providerOptions property', () => {
        const e = new ArcExportFilesystemEvent(data, providerOptions);
        assert.deepEqual(e.providerOptions, providerOptions);
        assert.throws(() => {
          // @ts-ignore
          e.providerOptions = 'test';
        });
      });
    });
  });

  describe('Import Events', () => {
    describe('ArcImportNormalizeEvent', () => {
      const data = 'export data';

      it('has the correct type', () => {
        const e = new ArcImportNormalizeEvent(data);
        assert.equal(e.type, DataImportEventTypes.normalize);
      });

      it('has readonly data property', () => {
        const e = new ArcImportNormalizeEvent(data);
        assert.equal(e.data, data);
        assert.throws(() => {
          // @ts-ignore
          e.data = 'test';
        });
      });

      it('bubbles', () => {
        const e = new ArcImportNormalizeEvent(data);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ArcImportNormalizeEvent(data);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new ArcImportNormalizeEvent(data);
        assert.isTrue(e.cancelable);
      });
    });

    describe('ArcImportEvent', () => {
      const data = {
        createdAt: new Date().toISOString(),
        version: 'test',
        kind: 'ARC#dataexport',
      };

      it('has the correct type', () => {
        const e = new ArcImportEvent(data);
        assert.equal(e.type, DataImportEventTypes.dataImport);
      });

      it('has readonly data property', () => {
        const e = new ArcImportEvent(data);
        assert.deepEqual(e.data, data);
        assert.throws(() => {
          // @ts-ignore
          e.data = 'test';
        });
      });

      it('bubbles', () => {
        const e = new ArcImportEvent(data);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ArcImportEvent(data);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new ArcImportEvent(data);
        assert.isTrue(e.cancelable);
      });
    });

    describe('ArcImportFileEvent', () => {
      const file = /** @type File */ (new Blob(['test'], { type: 'text/plain' }));
      const options = { driveId: 'test-id' };

      it('has the correct type', () => {
        const e = new ArcImportFileEvent(file);
        assert.equal(e.type, DataImportEventTypes.processFile);
      });

      it('has readonly data property', () => {
        const e = new ArcImportFileEvent(file);
        assert.deepEqual(e.file, file);
        assert.throws(() => {
          // @ts-ignore
          e.file = 'test';
        });
      });

      it('has readonly options property', () => {
        const e = new ArcImportFileEvent(file, options);
        assert.deepEqual(e.options, options);
        assert.throws(() => {
          // @ts-ignore
          e.options = 'test';
        });
      });

      it('bubbles', () => {
        const e = new ArcImportFileEvent(file);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ArcImportFileEvent(file);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new ArcImportFileEvent(file);
        assert.isTrue(e.cancelable);
      });
    });

    describe('ArcImportDataEvent', () => {
      const data = 'test';

      it('has the correct type', () => {
        const e = new ArcImportDataEvent(data);
        assert.equal(e.type, DataImportEventTypes.processData);
      });

      it('has readonly data property', () => {
        const e = new ArcImportDataEvent(data);
        assert.equal(e.data, data);
        assert.throws(() => {
          // @ts-ignore
          e.data = 'test';
        });
      });

      it('bubbles', () => {
        const e = new ArcImportDataEvent(data);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ArcImportDataEvent(data);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new ArcImportDataEvent(data);
        assert.isTrue(e.cancelable);
      });
    });

    describe('ArcImportInspectEvent', () => {
      const data = {
        createdAt: new Date().toISOString(),
        version: 'test',
        kind: 'ARC#dataexport',
      };

      it('has the correct type', () => {
        const e = new ArcImportInspectEvent(data);
        assert.equal(e.type, DataImportEventTypes.inspect);
      });

      it('has the data property on the detail', () => {
        const e = new ArcImportInspectEvent(data);
        assert.equal(e.detail.data, data);
      });

      it('bubbles', () => {
        const e = new ArcImportInspectEvent(data);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new ArcImportInspectEvent(data);
        assert.isTrue(e.composed);
      });

      it('is not cancelable', () => {
        const e = new ArcImportInspectEvent(data);
        assert.isFalse(e.cancelable);
      });
    });
  });
});
