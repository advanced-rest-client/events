import { EventTypes } from '../EventTypes.js';
import { ArcContextVoidEvent } from '../BaseEvents.js';

/** @typedef {import('./Search').FindInPageOptions } FindInPageOptions */

export const SearchEvents = {
  /** 
   * Triggers the search action.
   * @param {EventTarget} target The node on which to dispatch the event.
   * @param {string} query The search term
   * @param {FindInPageOptions=} options Optional query options.
   * @returns {Promise<void>} Resolved when the search command was sent to the backend.
   */
  find: async (target, query, options) => {
    const e = new ArcContextVoidEvent(EventTypes.Search.find, { query, options });
    target.dispatchEvent(e);
    await e.detail.result;
  },
  /** 
   * Clears the search result
   * @param {EventTarget} target The node on which to dispatch the event.
   * @returns {Promise<void>} Resolved when the clear command was sent to the backend.
   */
  clear: async (target) => {
    const e = new ArcContextVoidEvent(EventTypes.Search.clear, {});
    target.dispatchEvent(e);
    await e.detail.result;
  },
  State: {
    /**
     * @param {EventTarget} target 
     * @param {number} matches The number of matches in the search result.
     * @param {number} activeMatchOrdinal The index of the currently highlighted matched item.
     * @returns {void}
     */
    foundInPage: (target, matches, activeMatchOrdinal) => {
      const e = new CustomEvent(EventTypes.Search.State.foundInPage, {
        bubbles: true,
        composed: true,
        detail: {
          matches, activeMatchOrdinal,
        },
      });
      target.dispatchEvent(e);
    },
  },
};
