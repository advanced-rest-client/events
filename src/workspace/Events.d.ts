import { DataExport, ArcRequest } from '../../';
import { DomainWorkspace } from '../domain/Workspace';
import { ResultEventDetail, VoidEventDetail } from '../BaseEvents';


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
  request: ArcRequest.ARCSavedRequest|ArcRequest.ARCHistoryRequest|ArcRequest.ArcBaseRequest;
}

export declare interface WorkspaceReadEventDetail extends ResultEventDetail<DomainWorkspace> {
  /**
   * TOptional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
   */
  id?: string;
}

export declare interface WorkspaceWriteEventDetail extends VoidEventDetail {
  /**
   * TOptional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
   */
  id?: string;
  /**
   * The workspace contents.
   */
  contents: DomainWorkspace;
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

/**
 * An event to be dispatched to read current workspace contents.
 * The front-end application does not know anything about the source format (file/data store/app server). When the application window is created 
 * the back-end (Electron's main process or a server) knows which workspace to serve. The `id` parameter is optional and only used
 * to hold a session with the backed (assuming the back-end keeps in memory association of the ID with a file or DB reference to the data).
 */
export declare class WorkspaceReadEvent extends CustomEvent<WorkspaceReadEventDetail> {
  /**
   * @param id Optional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
   */
  constructor(id?: string);
}

/**
 * An event to be dispatched to store the current workspace contents.
 */
export class WorkspaceWriteEvent extends CustomEvent<WorkspaceWriteEventDetail> {
  /**
   * @param contents The workspace contents.
   * @param id Optional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
   */
  constructor(contents: DomainWorkspace, id?: string);
}

export declare function appendExportAction(target: EventTarget, data: DataExport.ArcExportObject): void;

export declare function appendRequestAction(target: EventTarget, request: ArcRequest.ARCSavedRequest|ArcRequest.ARCHistoryRequest): void;

/**
 * @param target A node on which to dispatch the event
 * @param id Optional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
 */
export declare function readAction(target: EventTarget, id?: string): Promise<DomainWorkspace>;

/**
 * @param target A node on which to dispatch the event
 * @param contents The workspace contents.
 * @param id Optional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
 */
export declare function writeAction(target: EventTarget, contents: DomainWorkspace, id?: string): Promise<void>;
