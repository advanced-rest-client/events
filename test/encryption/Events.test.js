import { assert } from '@open-wc/testing';

import {
  ArcEncryptEvent,
  ArcDecryptEvent,
  EncryptionEventTypes,
} from  '../../index.js';

describe('Encryption', () => {
  describe('Events', () => {
    describe('ArcEncryptEvent', () => {
      const data = 'export data';
      const passphrase = 'passphrase data';
      const method = 'aes';

      it('has the correct type', () => {
        const e = new ArcEncryptEvent(data, passphrase, method);
        assert.equal(e.type, EncryptionEventTypes.encrypt);
      });

      it('has readonly data property', () => {
        const e = new ArcEncryptEvent(data, passphrase, method);
        assert.deepEqual(e.data, data);
        assert.throws(() => {
          // @ts-ignore
          e.data = 'test';
        });
      });

      it('has readonly passphrase property', () => {
        const e = new ArcEncryptEvent(data, passphrase, method);
        assert.deepEqual(e.passphrase, passphrase);
        assert.throws(() => {
          // @ts-ignore
          e.passphrase = 'test';
        });
      });

      it('has readonly method property', () => {
        const e = new ArcEncryptEvent(data, passphrase, method);
        assert.deepEqual(e.method, method);
        assert.throws(() => {
          // @ts-ignore
          e.method = 'test';
        });
      });
    });

    describe('ArcDecryptEvent', () => {
      const data = 'export data';
      const passphrase = 'passphrase data';
      const method = 'aes';

      it('has the correct type', () => {
        const e = new ArcDecryptEvent(data, passphrase, method);
        assert.equal(e.type, EncryptionEventTypes.decrypt);
      });

      it('has readonly data property', () => {
        const e = new ArcDecryptEvent(data, passphrase, method);
        assert.deepEqual(e.data, data);
        assert.throws(() => {
          // @ts-ignore
          e.data = 'test';
        });
      });

      it('has readonly passphrase property', () => {
        const e = new ArcDecryptEvent(data, passphrase, method);
        assert.deepEqual(e.passphrase, passphrase);
        assert.throws(() => {
          // @ts-ignore
          e.passphrase = 'test';
        });
      });

      it('has readonly method property', () => {
        const e = new ArcDecryptEvent(data, passphrase, method);
        assert.deepEqual(e.method, method);
        assert.throws(() => {
          // @ts-ignore
          e.method = 'test';
        });
      });
    });
  });
});
