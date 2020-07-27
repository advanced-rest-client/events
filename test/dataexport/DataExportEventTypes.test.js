import { assert } from '@open-wc/testing';
import { DataExportEventTypes } from  '../../index.js';
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
      ['googleDiveSave', 'googledrivedatasave'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(DataExportEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('DataExportEventTypes', DataExportEventTypes);
    });
  });
});
