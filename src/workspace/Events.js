/* eslint-disable max-classes-per-file */
import { EventTypes } from '../EventTypes.js';

/** @typedef {import('../../').DataExport.ArcExportObject} ArcExportObject */
/** @typedef {import('../../').ArcRequest.ARCSavedRequest} ARCSavedRequest */
/** @typedef {import('../../').ArcRequest.ARCHistoryRequest} ARCHistoryRequest */
/** @typedef {import('../../').Workspace.DomainWorkspace} DomainWorkspace */

/**
 * An event to be dispatched to inform the requests workspace to append request data
 * from the export object.
 */
export class WorkspaceAppendExportEvent extends CustomEvent {
  /**
   * @param {ArcExportObject} data The ARC export object
   */
  constructor(data) {
    super(EventTypes.Workspace.appendExport, {
      bubbles: true,
      composed: true,
      detail: {
        data,
      },
    });
  }
}

/**
 * An event to be dispatched to inform the requests workspace to append a request object.
 */
export class WorkspaceAppendRequestEvent extends CustomEvent {
  /**
   * @param {ARCSavedRequest|ARCHistoryRequest} request The request to append
   */
  constructor(request) {
    super(EventTypes.Workspace.appendRequest, {
      bubbles: true,
      composed: true,
      detail: {
        request,
      },
    });
  }
}

/**
 * An event to be dispatched to read current workspace contents.
 * The front-end application does not know anything about the source format (file/data store/app server). When the application window is created 
 * the back-end (Electron's main process or a server) knows which workspace to serve. The `id` parameter is optional and only used
 * to hold a session with the backed (assuming the back-end keeps in memory association of the ID with a file or DB reference to the data).
 */
export class WorkspaceReadEvent extends CustomEvent {
  /**
   * @param {string=} id Optional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
   */
  constructor(id) {
    super(EventTypes.Workspace.read, {
      bubbles: true,
      composed: true,
      detail: {
        id,
      },
    });
  }
}

/**
 * An event to be dispatched to store the current workspace contents.
 */
export class WorkspaceWriteEvent extends CustomEvent {
  /**
   * @param {DomainWorkspace} contents The workspace contents.
   * @param {string=} id Optional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
   */
  constructor(contents, id) {
    super(EventTypes.Workspace.write, {
      bubbles: true,
      composed: true,
      detail: {
        contents,
        id,
      },
    });
  }
}

/**
 * @param {EventTarget} target
 * @param {ArcExportObject} data The export object to append the requests from
 */
export function appendExportAction(target, data) {
  const e = new WorkspaceAppendExportEvent(data);
  target.dispatchEvent(e);
}

/**
 * @param {EventTarget} target
 * @param {ARCSavedRequest|ARCHistoryRequest} request The request to append
 */
export function appendRequestAction(target, request) {
  const e = new WorkspaceAppendRequestEvent(request);
  target.dispatchEvent(e);
}

/**
 * @param {EventTarget} target
 * @param {string=} id Optional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
 */
export async function readAction(target, id) {
  const e = new WorkspaceReadEvent(id);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * @param {EventTarget} target
 * @param {DomainWorkspace} contents The workspace contents.
 * @param {string=} id Optional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
 */
export async function writeAction(target, contents, id) {
  const e = new WorkspaceWriteEvent(contents, id);
  target.dispatchEvent(e);
  await e.detail.result;
}
