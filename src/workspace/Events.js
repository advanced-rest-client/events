/* eslint-disable max-classes-per-file */
import { WorkspaceEventTypes } from './WorkspaceEventTypes.js';
/** @typedef {import('@advanced-rest-client/arc-types').DataExport.ArcExportObject} ArcExportObject */
/** @typedef {import('@advanced-rest-client/arc-models').ARCSavedRequest} ARCSavedRequest */
/** @typedef {import('@advanced-rest-client/arc-models').ARCHistoryRequest} ARCHistoryRequest */

/**
 * An event to be dispatched to inform the requests workspace to append request data
 * fron the export object.
 */
export class WorkspaceAppendExportEvent extends CustomEvent {
  /**
   * @param {ArcExportObject} data The ARC export object
   */
  constructor(data) {
    super(WorkspaceEventTypes.appendexport, {
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
    super(WorkspaceEventTypes.appendrequest, {
      bubbles: true,
      composed: true,
      detail: {
        request,
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
