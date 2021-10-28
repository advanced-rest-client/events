import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { Events, EventTypes } from '../../index.js'

describe('Events', () => {
  /**
     * @return {Promise<HTMLDivElement>}
     */
  async function etFixture() {
    return fixture(html`<div></div>`);
  }

  describe('ThemeEvents', () => {
    describe('loadApplicationTheme()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.loadApplicationTheme, spy);
        await Events.Theme.loadApplicationTheme(et);
        assert.isTrue(spy.calledOnce);
      });

      it('returns the result', async () => {
        const id = 'test id';
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Theme.loadApplicationTheme, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(id);
        }
        et.addEventListener(EventTypes.Theme.loadApplicationTheme, handler);
        const result = await Events.Theme.loadApplicationTheme(et);
        assert.equal(result, id);
      });
    });

    describe('loadTheme()', () => {
      const themeId = 'some id'; 
      const noFallback = false;

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.loadTheme, spy);
        await Events.Theme.loadTheme(et);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.loadTheme, spy);
        await Events.Theme.loadTheme(et, themeId, noFallback);
        const { detail } = spy.args[0][0];
        assert.equal(detail.themeId, themeId, 'themeId is set');
        assert.equal(detail.noFallback, noFallback, 'noFallback is set');
      });

      it('awaits until finished', async () => {
        let called = false;
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Theme.loadTheme, handler);
          e.preventDefault();
          e.detail.result = new Promise((resolve) => {
            setTimeout(() => {
              called = true;
              resolve();
            }, 1);
          });
        }
        et.addEventListener(EventTypes.Theme.loadTheme, handler);
        await Events.Theme.loadTheme(et);
        assert.isTrue(called);
      });
    });

    describe('readSate()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.readSate, spy);
        await Events.Theme.readSate(et);
        assert.isTrue(spy.calledOnce);
      });

      it('returns the result', async () => {
        const state = { version: '', kind: '', themes: [] };
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Theme.readSate, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(state);
        }
        et.addEventListener(EventTypes.Theme.readSate, handler);
        const result = await Events.Theme.readSate(et);
        assert.deepEqual(result, state);
      });
    });

    describe('readActiveThemeInfo()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.readActiveThemeInfo, spy);
        await Events.Theme.readActiveThemeInfo(et);
        assert.isTrue(spy.calledOnce);
      });

      it('returns the result', async () => {
        const state = { _id: '', name: '', location: '', mainFile: '' };
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Theme.readActiveThemeInfo, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(state);
        }
        et.addEventListener(EventTypes.Theme.readActiveThemeInfo, handler);
        const result = await Events.Theme.readActiveThemeInfo(et);
        assert.deepEqual(result, state);
      });
    });

    describe('activate()', () => {
      const name = 'theme name'; 

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.activate, spy);
        await Events.Theme.activate(et, name);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.activate, spy);
        await Events.Theme.activate(et, name);
        const { detail } = spy.args[0][0];
        assert.equal(detail.name, name, 'name is set');
      });

      it('awaits until finished', async () => {
        let called = false;
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Theme.activate, handler);
          e.preventDefault();
          e.detail.result = new Promise((resolve) => {
            setTimeout(() => {
              called = true;
              resolve();
            }, 1);
          });
        }
        et.addEventListener(EventTypes.Theme.activate, handler);
        await Events.Theme.activate(et, name);
        assert.isTrue(called);
      });
    });

    describe('install()', () => {
      const name = 'theme name'; 

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.install, spy);
        await Events.Theme.install(et, name);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.install, spy);
        await Events.Theme.install(et, name);
        const { detail } = spy.args[0][0];
        assert.equal(detail.name, name, 'name is set');
      });

      it('awaits until finished', async () => {
        let called = false;
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Theme.install, handler);
          e.preventDefault();
          e.detail.result = new Promise((resolve) => {
            setTimeout(() => {
              called = true;
              resolve();
            }, 1);
          });
        }
        et.addEventListener(EventTypes.Theme.install, handler);
        await Events.Theme.install(et, name);
        assert.isTrue(called);
      });
    });

    describe('uninstall()', () => {
      const name = 'theme name'; 

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.uninstall, spy);
        await Events.Theme.uninstall(et, name);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.uninstall, spy);
        await Events.Theme.uninstall(et, name);
        const { detail } = spy.args[0][0];
        assert.equal(detail.name, name, 'name is set');
      });

      it('awaits until finished', async () => {
        let called = false;
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Theme.uninstall, handler);
          e.preventDefault();
          e.detail.result = new Promise((resolve) => {
            setTimeout(() => {
              called = true;
              resolve();
            }, 1);
          });
        }
        et.addEventListener(EventTypes.Theme.uninstall, handler);
        await Events.Theme.uninstall(et, name);
        assert.isTrue(called);
      });
    });

    describe('setSystemPreferred()', () => {
      const state = true; 

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.setSystemPreferred, spy);
        await Events.Theme.setSystemPreferred(et, state);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.setSystemPreferred, spy);
        await Events.Theme.setSystemPreferred(et, state);
        const { detail } = spy.args[0][0];
        assert.equal(detail.status, state, 'status is set');
      });

      it('awaits until finished', async () => {
        let called = false;
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Theme.setSystemPreferred, handler);
          e.preventDefault();
          e.detail.result = new Promise((resolve) => {
            setTimeout(() => {
              called = true;
              resolve();
            }, 1);
          });
        }
        et.addEventListener(EventTypes.Theme.setSystemPreferred, handler);
        await Events.Theme.setSystemPreferred(et, state);
        assert.isTrue(called);
      });
    });

    describe('readSystemThemeInfo()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.readSystemThemeInfo, spy);
        await Events.Theme.readSystemThemeInfo(et);
        assert.isTrue(spy.calledOnce);
      });

      it('returns the result', async () => {
        const state = { shouldUseDarkColors: false, shouldUseHighContrastColors: true, shouldUseInvertedColorScheme: false };
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Theme.readSystemThemeInfo, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(state);
        }
        et.addEventListener(EventTypes.Theme.readSystemThemeInfo, handler);
        const result = await Events.Theme.readSystemThemeInfo(et);
        assert.deepEqual(result, state);
      });
    });

    describe('loadSystemPreferred()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.loadSystemPreferred, spy);
        await Events.Theme.loadSystemPreferred(et);
        assert.isTrue(spy.calledOnce);
      });

      it('returns the result', async () => {
        const id = 'test id';
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Theme.loadSystemPreferred, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(id);
        }
        et.addEventListener(EventTypes.Theme.loadSystemPreferred, handler);
        const result = await Events.Theme.loadSystemPreferred(et);
        assert.deepEqual(result, id);
      });
    });

    describe('loadUserPreferred()', () => {
      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.loadUserPreferred, spy);
        await Events.Theme.loadUserPreferred(et);
        assert.isTrue(spy.calledOnce);
      });

      it('returns the result', async () => {
        const id = 'test id';
        const et = await etFixture();
        /**
         * @param {CustomEvent} e 
         */
        function handler(e) {
          et.removeEventListener(EventTypes.Theme.loadUserPreferred, handler);
          e.preventDefault();
          e.detail.result = Promise.resolve(id);
        }
        et.addEventListener(EventTypes.Theme.loadUserPreferred, handler);
        const result = await Events.Theme.loadUserPreferred(et);
        assert.deepEqual(result, id);
      });
    });

    describe('themeActivated()', () => {
      const id = 'test id'; 

      it('dispatches the event', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.State.activated, spy);
        Events.Theme.themeActivated(et, id);
        assert.isTrue(spy.calledOnce);
      });

      it('sets the arguments on the detail object', async () => {
        const et = await etFixture();
        const spy = sinon.spy();
        et.addEventListener(EventTypes.Theme.State.activated, spy);
        Events.Theme.themeActivated(et, id);
        const { detail } = spy.args[0][0];
        assert.equal(detail.id, id, 'id is set');
      });
    });
  });
});
