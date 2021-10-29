import * as Events from './Events.js';
import { EventTypes } from '../EventTypes.js';

export const GoogleDriveEvents = {
  save: Events.storeAction,
  listAppFolders: Events.listAppFoldersAction,
  read: Events.readAction,
  /** 
   * Notifies application's main process that a Google Drive file has been picked
   * by the user. The application should take action when needed.
   * 
   * @param {EventTarget} target The node on which to dispatch the event.
   * @param {string} id The Google Drive file id
   * @returns {void}
   */
  notifyFilePicked: (target, id) => {
    const e = new CustomEvent(EventTypes.Google.Drive.notifyFilePicked, {
      composed: true,
      cancelable: true,
      bubbles: true,
      detail: {
        id,
      }
    });
    target.dispatchEvent(e);
  },
};
