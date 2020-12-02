import { DataExport, ArcRequest } from '@advanced-rest-client/arc-types';
import { DomainWorkspace } from '@advanced-rest-client/arc-types/src/domain/Workspace';

declare interface WorkspaceEvents {
  appendExport(target: EventTarget, data: DataExport.ArcExportObject): void;
  appendRequest(target: EventTarget, request: ArcRequest.ARCSavedRequest|ArcRequest.ARCHistoryRequest): void;
  /**
   * @param target A node on which to dispatch the event
   * @param id Optional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
   */
  read(target: EventTarget, id?: string): Promise<DomainWorkspace>;
  /**
   * @param target A node on which to dispatch the event
   * @param contents The workspace contents.
   * @param id Optional identifier of the workspace used with the communication with the back-end. Used only when the back-end issued a workspace identifier.
   */
  write(target: EventTarget, contents: DomainWorkspace, id?: string): Promise<void>;
}

export const WorkspaceEvents: WorkspaceEvents;
