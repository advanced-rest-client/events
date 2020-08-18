import { assert } from '@open-wc/testing';
import {
  DataExportEventTypes,
  DataImportEventTypes,
} from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('DataExport', () => {
  describe('DataExportEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(DataExportEventTypes, 'object');
    });

    [
      ['customData', 'arccustomdataexport'],
      ['nativeData', 'arcnativeexport'],
      ['fileSave', 'filedatasave'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(DataExportEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('DataExportEventTypes', DataExportEventTypes);
    });
  });

  describe('DataImportEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(DataImportEventTypes, 'object');
    });

    [
      ['normalize', 'arcdataimportnormalize'],
      ['dataimport', 'arcdataimport'],
      ['processfile', 'arcdataimportprocessfile'],
      ['processdata', 'arcdataimportprocessdata'],
      ['inspect', 'arcdataimportinspect'],
      ['dataimported', 'arcdataimported'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(DataImportEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('DataImportEventTypes', DataImportEventTypes);
    });
  });
});
