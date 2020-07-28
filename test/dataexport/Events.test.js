import { assert } from '@open-wc/testing';

import {
  ArcDataExportEvent,
  ArcExportEvent,
  ArcExportProviderEvent,
  ArcExportFilesystemEvent,
  DataExportEventTypes,
} from  '../../index.js';

describe('DataExport', () => {
  describe('Events', () => {
    describe('ArcDataExportEvent', () => {
      const data = { saved: true };
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
});
