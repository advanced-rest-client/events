import { EventTypes } from '../EventTypes.js';
import { ArcContextEvent } from '../BaseEvents.js';

/** @typedef {import('./Application').AppVersionInfo } AppVersionInfo */

export const ApplicationEvents = {
  /** 
   * Reads application version information.
   * @param {EventTarget} target The node on which to dispatch the event.
   * @returns {Promise<AppVersionInfo>} The info about application version
   */
  versionInfo: async (target) => {
    const e = new ArcContextEvent(EventTypes.App.versionInfo, {});
    target.dispatchEvent(e);
    return e.detail.result;
  },
};
