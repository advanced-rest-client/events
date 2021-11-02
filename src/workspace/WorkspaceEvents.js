import { EventTypes } from '../EventTypes.js';
import { ArcContextVoidEvent, ArcContextEvent } from '../BaseEvents.js';

/** @typedef {import('../../').DataExport.ArcExportObject} ArcExportObject */
/** @typedef {import('../../').ArcRequest.ARCSavedRequest} ARCSavedRequest */
/** @typedef {import('../../').ArcRequest.ARCHistoryRequest} ARCHistoryRequest */
/** @typedef {import('../../').Workspace.DomainWorkspace} DomainWorkspace */

export const WorkspaceEvents = {
  /**
   * @param {EventTarget} target
   * @param {ArcExportObject} data The export object to append the requests from
   */
  appendExport: (target, data) => {
    const e = new CustomEvent(EventTypes.Workspace.appendExport, {
      bubbles: true,
      composed: true,
      detail: { data },
    });
    target.dispatchEvent(e);
  },
  /**
   * Appends a request to the current workspace.
   * @param {EventTarget} target
   * @param {ARCSavedRequest|ARCHistoryRequest} request The request to append
   */
  appendRequest: (target, request) => {
    const e = new CustomEvent(EventTypes.Workspace.appendRequest, {
      bubbles: true,
      composed: true,
      detail: { request },
    });
    target.dispatchEvent(e);
  },
  /**
   * Reads the workspace data from the store
   * 
   * @param {EventTarget} target
   * @returns {Promise<DomainWorkspace>}
   */
  read: async (target) => {
    const e = new ArcContextEvent(EventTypes.Workspace.read, {});
    target.dispatchEvent(e);
    return e.detail.result;
  },
  /**
   * @param {EventTarget} target
   * @param {DomainWorkspace} contents The workspace contents.
   * @returns {Promise<void>}
   */
  write: async (target, contents) => {
    const e = new ArcContextVoidEvent(EventTypes.Workspace.write, { contents });
    target.dispatchEvent(e);
    await e.detail.result;
  },

  /**
   * Informs the workspace processor that the workspace id has changed.
   * Used when initializing the application. The app has no access to the platform bindings.
   * 
   * @param {EventTarget} target
   * @param {string} id The id of the workspace identifier.
   * @returns {void}
   */
  setId: (target, id) => {
    const e = new CustomEvent(EventTypes.Workspace.setId, {
      bubbles: true,
      composed: true,
      detail: { id },
    });
    target.dispatchEvent(e);
  },

  /**
   * Triggers workspace save action remotely. This is handled by the workspace itself.
   * @param {EventTarget} target 
   */
  triggerWrite: (target) => {
    const e = new Event(EventTypes.Workspace.triggerWrite, {
      bubbles: true,
      composed: true,
    });
    target.dispatchEvent(e);
  },

  State: {
    /**
     * Informs the application that the workspace identifier has changed.
     * This, most likely, was triggered by the user saving the workspace in a new location.
     * 
     * @param {EventTarget} target
     * @param {string} id The id of the workspace file.
     * @returns {void}
     */
    idChange: (target, id) => {
      const e = new CustomEvent(EventTypes.Workspace.State.idChange, {
        bubbles: true,
        composed: true,
        detail: { id },
      });
      target.dispatchEvent(e);
    },
    /**
     * Informs the application that the workspace state is now committed to the store.
     * 
     * @param {EventTarget} target
     * @returns {void}
     */
    write: (target) => {
      const e = new CustomEvent(EventTypes.Workspace.State.write, {
        bubbles: true,
        composed: true,
      });
      target.dispatchEvent(e);
    },
  },
}
