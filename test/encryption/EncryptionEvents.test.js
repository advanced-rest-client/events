import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { EncryptionEvents, EncryptionEventTypes } from  '../../index.js';

describe('Encryption', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('encrypt()', () => {
    const data = 'export data';
    const passphrase = 'passphrase data';
    const method = 'aes';

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EncryptionEventTypes.encrypt, spy);
      EncryptionEvents.encrypt(et, data, passphrase, method);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EncryptionEventTypes.encrypt, spy);
      EncryptionEvents.encrypt(et, data, passphrase, method);
      const e = spy.args[0][0];
      assert.equal(e.data, data);
    });

    it('has the passphrase on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EncryptionEventTypes.encrypt, spy);
      EncryptionEvents.encrypt(et, data, passphrase, method);
      const e = spy.args[0][0];
      assert.equal(e.passphrase, passphrase);
    });

    it('has the method on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EncryptionEventTypes.encrypt, spy);
      EncryptionEvents.encrypt(et, data, passphrase, method);
      const e = spy.args[0][0];
      assert.equal(e.method, method);
    });
  });

  describe('decrypt()', () => {
    const data = 'export data';
    const passphrase = 'passphrase data';
    const method = 'aes';

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EncryptionEventTypes.decrypt, spy);
      EncryptionEvents.decrypt(et, data, passphrase, method);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EncryptionEventTypes.decrypt, spy);
      EncryptionEvents.decrypt(et, data, passphrase, method);
      const e = spy.args[0][0];
      assert.equal(e.data, data);
    });

    it('has the passphrase on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EncryptionEventTypes.decrypt, spy);
      EncryptionEvents.decrypt(et, data, passphrase, method);
      const e = spy.args[0][0];
      assert.equal(e.passphrase, passphrase);
    });

    it('has the method on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EncryptionEventTypes.decrypt, spy);
      EncryptionEvents.decrypt(et, data, passphrase, method);
      const e = spy.args[0][0];
      assert.equal(e.method, method);
    });
  });
});
