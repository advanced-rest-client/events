import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { ReportingEvents, ReportingEventTypes } from  '../../index.js';

describe('Reporting', () => {
  /**
   * @return {Promise<HTMLDivElement>}
   */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('ReportingEvents', () => {
    describe('error()', () => {
      const err = new Error();
      const desc = 'test error';
      const cmp = 'test component';

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ReportingEventTypes.error, spy);
        ReportingEvents.error(et, err, desc);
        assert.isTrue(spy.calledOnce);
      });

      it('the event has the error property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ReportingEventTypes.error, spy);
        ReportingEvents.error(et, err, desc);
        const e = spy.args[0][0];
        assert.isTrue(e.detail.error === err);
      });

      it('the event has the description property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ReportingEventTypes.error, spy);
        ReportingEvents.error(et, err, desc);
        const e = spy.args[0][0];
        assert.equal(e.detail.description, desc);
      });

      it('the event has the component property', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(ReportingEventTypes.error, spy);
        ReportingEvents.error(et, err, desc, cmp);
        const e = spy.args[0][0];
        assert.equal(e.detail.component, cmp);
      });
    });
  });
});
