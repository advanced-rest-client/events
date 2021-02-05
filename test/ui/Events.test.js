import { assert } from '@open-wc/testing';
import sinon from 'sinon';
import { UiEventTypes } from  '../../index.js';
import { contextMenuAction } from '../../src/ui/Events.js';

describe('UI events', () => {
  describe('Events', () => {
    describe('contextMenuAction()', () => {
      const selector = 'test-selector';
      const mouseEvent = new MouseEvent('contextmenu');
      let target = /** @type EventTarget */ (null);
      beforeEach(() => {
        target = document.createElement('span');
      });

      it('has the correct type', () => {
        const spy = sinon.spy();
        target.addEventListener(UiEventTypes.contextMenu, spy);
        contextMenuAction(target, {
          selector,
          mouseEvent,
        });
        assert.equal(spy.args[0][0].type, UiEventTypes.contextMenu);
      });

      it('has the "selector" property', () => {
        const spy = sinon.spy();
        target.addEventListener(UiEventTypes.contextMenu, spy);
        contextMenuAction(target, {
          selector,
          mouseEvent,
        });
        assert.equal(spy.args[0][0].detail.selector, selector);
      });

      it('has the "mouseEvent" property', () => {
        const spy = sinon.spy();
        target.addEventListener(UiEventTypes.contextMenu, spy);
        contextMenuAction(target, {
          selector,
          mouseEvent,
        });
        assert.isTrue(spy.args[0][0].detail.mouseEvent === mouseEvent);
      });

      it('bubbles', () => {
        const spy = sinon.spy();
        target.addEventListener(UiEventTypes.contextMenu, spy);
        contextMenuAction(target, {
          selector,
          mouseEvent,
        });
        const e = spy.args[0][0];
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const spy = sinon.spy();
        target.addEventListener(UiEventTypes.contextMenu, spy);
        contextMenuAction(target, {
          selector,
          mouseEvent,
        });
        const e = spy.args[0][0];
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const spy = sinon.spy();
        target.addEventListener(UiEventTypes.contextMenu, spy);
        contextMenuAction(target, {
          selector,
          mouseEvent,
        });
        const e = spy.args[0][0];
        assert.isTrue(e.cancelable);
      });
    });
  });
});
