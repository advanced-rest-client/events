import { EventTypes } from '../EventTypes.js';

/** @typedef {import('./Events').ContextMenuActionDetail} ContextMenuActionDetail */

/**
 * @param {EventTarget} target A target on which to dispatch the event
 * @param {ContextMenuActionDetail} detail The context menu action init.
 */
export function contextMenuAction(target, detail) {
  const e = new CustomEvent(EventTypes.Ui.contextMenu, {
    bubbles: true,
    composed: true,
    cancelable: true,
    detail,
  });
  target.dispatchEvent(e);
}
