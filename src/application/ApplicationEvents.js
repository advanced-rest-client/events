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
  /** 
   * Asks the application to run one of the predefined commands.
   * This is initialized in the IO thread and proxied in the renderer process.
   * 
   * @param {EventTarget} target The node on which to dispatch the event.
   * @param {string} action The command name to execute
   * @param {...any} args The arguments to pass to the application.
   * @returns {void}
   */
  command: (target, action, ...args) => {
    const e = new ArcContextEvent(EventTypes.App.command, {
      action, args,
    });
    target.dispatchEvent(e);
  },
  /** 
   * Asks the application to run one of the predefined request actions.
   * This is initialized in the IO thread and proxied in the renderer process.
   * 
   * @param {EventTarget} target The node on which to dispatch the event.
   * @param {string} action The command name to execute
   * @param {...any} args The arguments to pass to the application.
   * @returns {void}
   */
  requestAction: (target, action, ...args) => {
    const e = new ArcContextEvent(EventTypes.App.requestAction, {
      action, args,
    });
    target.dispatchEvent(e);
  },
};
