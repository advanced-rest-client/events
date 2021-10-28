import { EventTypes } from '../EventTypes.js';
import { ArcContextVoidEvent } from '../BaseEvents.js';

/** @typedef {import('./Menu').MenuSizing } MenuSizing */

export const MenuEvents = {
  /** 
   * Pops out a menu item from the application frame to a separate window.
   * Do not confuse this with the Navigation's popup event which is used by the components.
   * This is to be used with the application bindings to send the command to the backend.
   * 
   * @param {EventTarget} target The node on which to dispatch the event.
   * @param {string} menu The name of the menu
   * @param {MenuSizing} sizing The size of the menu to render.
   * @returns {Promise<void>} Resolved when the search command was sent to the backend.
   */
  popup: async (target, menu, sizing) => {
    const e = new ArcContextVoidEvent(EventTypes.Menu.popup, { menu, sizing });
    target.dispatchEvent(e);
    await e.detail.result;
  },
  /** 
   * Triggers the navigation from the menu popup window.
   * Do not confuse this event with the Navigation events. This is to send a command to the application
   * backend.
   * 
   * @param {EventTarget} target The node on which to dispatch the event.
   * @param {string} menu The name of the menu
   * @param {...any} args The route options
   * @returns {Promise<void>} Resolved when the search command was sent to the backend.
   */
  navigate: async (target, menu, ...args) => {
    const e = new ArcContextVoidEvent(EventTypes.Menu.navigate, { menu, args });
    target.dispatchEvent(e);
    await e.detail.result;
  },
  State: {
    /** 
     * Informs the windows a menu has been opened in a popup.
     * 
     * @param {EventTarget} target The node on which to dispatch the event.
     * @param {string} menu The name of the menu
     * @returns {void}
     */
    open: (target, menu) => {
      const e = new CustomEvent(EventTypes.Menu.State.open, {
        bubbles: true,
        composed: true,
        detail: {
          menu,
        },
      });
      target.dispatchEvent(e);
    },
    /** 
     * Informs the windows a menu has been closed in a popup.
     * 
     * @param {EventTarget} target The node on which to dispatch the event.
     * @param {string} menu The name of the menu
     * @returns {void}
     */
    close: (target, menu) => {
      const e = new CustomEvent(EventTypes.Menu.State.close, {
        bubbles: true,
        composed: true,
        detail: {
          menu,
        },
      });
      target.dispatchEvent(e);
    },
  },
};
