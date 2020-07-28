import { assert } from '@open-wc/testing';
import { GoogleDriveEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('Google Drive', () => {
  describe('GoogleDriveEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(GoogleDriveEventTypes, 'object');
    });

    [
      ['save', 'googledrivesave'],
      ['listAppFolders', 'googledrivelistappfolders'],
      ['read', 'googledriveread'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(GoogleDriveEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('GoogleDriveEventTypes', GoogleDriveEventTypes);
    });
  });
});
