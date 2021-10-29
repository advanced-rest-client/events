import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { Events, EventTypes } from '../../index.js';

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
      et.addEventListener(EventTypes.Google.Drive.save, spy);
      Events.Google.Drive.save(et, data, options);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Google.Drive.save, spy);
      Events.Google.Drive.save(et, data, options);
      const e = spy.args[0][0];
      assert.equal(e.data, data);
    });

    it('has the passphrase on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Google.Drive.save, spy);
      Events.Google.Drive.save(et, data, options);
      const e = spy.args[0][0];
      assert.deepEqual(e.providerOptions, options);
    });
  });

  describe('read()', () => {
    const id = 'file id';

    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Google.Drive.read, spy);
      Events.Google.Drive.read(et, id);
      assert.isTrue(spy.calledOnce);
    });

    it('has the data on the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Google.Drive.read, spy);
      Events.Google.Drive.read(et, id);
      const e = spy.args[0][0];
      assert.equal(e.id, id);
    });
  });

  describe('listAppFolders()', () => {
    it('dispatches navigation event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Google.Drive.listAppFolders, spy);
      Events.Google.Drive.listAppFolders(et);
      assert.isTrue(spy.calledOnce);
    });
  });

  describe('notifyFilePicked()', () => {
    const id = 'test id'; 

    it('dispatches the event', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Google.Drive.notifyFilePicked, spy);
      Events.Google.Drive.notifyFilePicked(et, id);
      assert.isTrue(spy.calledOnce);
    });

    it('sets the arguments on the detail object', async () => {
      const et = await etFixture();
      const spy = sinon.spy();
      et.addEventListener(EventTypes.Google.Drive.notifyFilePicked, spy);
      Events.Google.Drive.notifyFilePicked(et, id);
      const { detail } = spy.args[0][0];
      assert.equal(detail.id, id, 'id is set');
    });
  });
});
