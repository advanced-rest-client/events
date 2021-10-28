import { EventTypes } from '../EventTypes.js';
import { ArcContextEvent, ArcContextVoidEvent } from '../BaseEvents.js';

export const UpdaterEvents = {
  /** 
   * Checks for an application update.
   * @param {EventTarget} target The node on which to dispatch the event.
   * @returns {Promise<unknown>} The update information object. This depends on the platform.
   */
  checkForUpdate: async (target) => {
    const e = new ArcContextEvent(EventTypes.Updater.checkForUpdate, {});
    target.dispatchEvent(e);
    return e.detail.result;
  },
  /** 
   * Quits the application and installs the update.
   * @param {EventTarget} target The node on which to dispatch the event.
   * @returns {Promise<void>}
   */
   installUpdate: async (target) => {
    const e = new ArcContextVoidEvent(EventTypes.Updater.installUpdate, {});
    target.dispatchEvent(e);
    return e.detail.result;
  },
  State: {
    /**
     * @param {EventTarget} target 
     * @returns {void}
     */
    checkingForUpdate: (target) => {
      const e = new Event(EventTypes.Updater.State.checkingForUpdate, {
        bubbles: true,
        composed: true,
      });
      target.dispatchEvent(e);
    },
    /**
     * @param {EventTarget} target 
     * @param {unknown} info The update information object. This depends on the platform.
     * @returns {void}
     */
    updateAvailable: (target, info) => {
      const e = new CustomEvent(EventTypes.Updater.State.updateAvailable, {
        bubbles: true,
        composed: true,
        detail: info,
      });
      target.dispatchEvent(e);
    },
    /**
     * @param {EventTarget} target 
     * @returns {void}
     */
    updateNotAvailable: (target) => {
      const e = new Event(EventTypes.Updater.State.updateNotAvailable, {
        bubbles: true,
        composed: true,
      });
      target.dispatchEvent(e);
    },
    /**
     * @param {EventTarget} target 
     * @param {unknown} info The error information object. This depends on the platform.
     * @returns {void}
     */
    autoUpdateError: (target, info) => {
      const e = new CustomEvent(EventTypes.Updater.State.autoUpdateError, {
        bubbles: true,
        composed: true,
        detail: info,
      });
      target.dispatchEvent(e);
    },
    /**
     * @param {EventTarget} target 
     * @param {unknown} info The download information object. This depends on the platform.
     * @returns {void}
     */
    downloadProgress: (target, info) => {
      const e = new CustomEvent(EventTypes.Updater.State.downloadProgress, {
        bubbles: true,
        composed: true,
        detail: info,
      });
      target.dispatchEvent(e);
    },
    /**
     * @param {EventTarget} target 
     * @param {unknown} info The update information object. This depends on the platform.
     * @returns {void}
     */
    updateDownloaded: (target, info) => {
      const e = new CustomEvent(EventTypes.Updater.State.updateDownloaded, {
        bubbles: true,
        composed: true,
        detail: info,
      });
      target.dispatchEvent(e);
    },
  }  
};
