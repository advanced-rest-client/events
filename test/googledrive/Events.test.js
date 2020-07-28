import { assert } from '@open-wc/testing';

import {
  GoogleDriveSaveEvent,
  GoogleDriveListFolderEvent,
  GoogleDriveReadEvent,
  GoogleDriveEventTypes,
} from  '../../index.js';

describe('Google Drive', () => {
  describe('Events', () => {
    describe('GoogleDriveSaveEvent', () => {
      const data = 'export data';
      const options = { file: 'test' };

      it('has the correct type', () => {
        const e = new GoogleDriveSaveEvent(data, options);
        assert.equal(e.type, GoogleDriveEventTypes.save);
      });

      it('has readonly data property', () => {
        const e = new GoogleDriveSaveEvent(data, options);
        assert.deepEqual(e.data, data);
        assert.throws(() => {
          // @ts-ignore
          e.data = 'test';
        });
      });

      it('has readonly passphrase property', () => {
        const e = new GoogleDriveSaveEvent(data, options);
        assert.deepEqual(e.providerOptions, options);
        assert.throws(() => {
          // @ts-ignore
          e.providerOptions = 'test';
        });
      });
    });

    describe('GoogleDriveListFolderEvent', () => {
      it('has the correct type', () => {
        const e = new GoogleDriveListFolderEvent();
        assert.equal(e.type, GoogleDriveEventTypes.listAppFolders);
      });

      it('has the detail object', () => {
        const e = new GoogleDriveListFolderEvent();
        assert.deepEqual(e.detail, {});
      });
    });

    describe('GoogleDriveReadEvent', () => {
      const id = 'file id';

      it('has the correct type', () => {
        const e = new GoogleDriveReadEvent(id);
        assert.equal(e.type, GoogleDriveEventTypes.read);
      });

      it('has the detail object', () => {
        const e = new GoogleDriveReadEvent(id);
        assert.deepEqual(e.detail, {});
      });

      it('has readonly id property', () => {
        const e = new GoogleDriveReadEvent(id);
        assert.equal(e.id, id);
        assert.throws(() => {
          // @ts-ignore
          e.id = 'test';
        });
      });
    });
  });
});
