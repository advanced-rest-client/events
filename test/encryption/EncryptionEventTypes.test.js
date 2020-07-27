import { assert } from '@open-wc/testing';
import { EncryptionEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('Encryption', () => {
  describe('EncryptionEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(EncryptionEventTypes, 'object');
    });

    [
      ['encrypt', 'encryptionencrypt'],
      ['decrypt', 'encryptiondecrypt'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EncryptionEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EncryptionEventTypes', EncryptionEventTypes);
    });
  });
});
