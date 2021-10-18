import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { GoogleDriveEvents, GoogleDriveEventTypes } from  '../../index.js';

describe('Google Drive', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('save()', () => {
    const data = 'export data';
    const options = { file: 'test' };

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(GoogleDriveEventTypes.save, spy);
      GoogleDriveEvents.save(et, data, options);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(GoogleDriveEventTypes.save, spy);
      GoogleDriveEvents.save(et, data, options);
      const e = spy.args[0][0];
      assert.equal(e.data, data);
    });

    it('has the passphrase on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(GoogleDriveEventTypes.save, spy);
      GoogleDriveEvents.save(et, data, options);
      const e = spy.args[0][0];
      assert.deepEqual(e.providerOptions, options);
    });
  });

  describe('read()', () => {
    const id = 'file id';

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(GoogleDriveEventTypes.read, spy);
      GoogleDriveEvents.read(et, id);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(GoogleDriveEventTypes.read, spy);
      GoogleDriveEvents.read(et, id);
      const e = spy.args[0][0];
      assert.equal(e.id, id);
    });
  });

  describe('listAppFolders()', () => {
    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(GoogleDriveEventTypes.listAppFolders, spy);
      GoogleDriveEvents.listAppFolders(et);
      assert.isTrue(spy.calledOnce);
    });
  });
});
