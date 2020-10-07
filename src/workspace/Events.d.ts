import { DataExport, ArcRequest } from '@advanced-rest-client/arc-types';

export declare interface WorkspaceAppendExportEventDetail {
  /**
   * The ARC export object
   */
  data: DataExport.ArcExportObject;
}

export declare interface WorkspaceAppendRequestEventDetail {
  /**
   * The request to append
   */
  request: ArcRequest.ARCSavedRequest|ArcRequest.ARCHistoryRequest;
}

/**
 * An event to be dispatched to inform the requests workspace to append request data
 * from the export object.
 */
export declare class WorkspaceAppendExportEvent extends CustomEvent<WorkspaceAppendExportEventDetail> {
  /**
   * @param data The ARC export object
   */
  constructor(data: DataExport.ArcExportObject);
}

/**
 * An event to be dispatched to inform the requests workspace to append a request object.
 */
export declare class WorkspaceAppendRequestEvent extends CustomEvent<WorkspaceAppendRequestEventDetail> {
  /**
   * @param request The request to append
   */
  constructor(request: ArcRequest.ARCSavedRequest|ArcRequest.ARCHistoryRequest);
}

export declare function appendExportAction(target: EventTarget, data: DataExport.ArcExportObject): void;

export declare function appendRequestAction(target: EventTarget, request: ArcRequest.ARCSavedRequest|ArcRequest.ARCHistoryRequest): void;
