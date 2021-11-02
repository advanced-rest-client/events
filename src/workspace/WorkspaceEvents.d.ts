import { DataExport, ArcRequest } from '../../';
import { DomainWorkspace } from '../domain/Workspace';

export interface IWorkspaceStateEvents {
  /**
   * Informs the application that the workspace identifier has changed.
   * This, most likely, was triggered by the user saving the workspace in a new location.
   * 
   * @param id The id of the workspace file.
   */
  idChange(target: EventTarget, id: string): void;
  /**
   * Informs the application that the workspace state is now committed to the store.
   */
  write(target: EventTarget): void;
}

export interface IWorkspaceEvents {
  appendExport(target: EventTarget, data: DataExport.ArcExportObject): void;
  appendRequest(target: EventTarget, request: ArcRequest.ARCSavedRequest|ArcRequest.ARCHistoryRequest): void;
  /**
   * @param target A node on which to dispatch the event
   */
  read(target: EventTarget): Promise<DomainWorkspace>;
  /**
   * @param target A node on which to dispatch the event
   * @param contents The workspace contents.
   */
  write(target: EventTarget, contents: DomainWorkspace): Promise<void>;
  /**
   * Informs the workspace processor that the workspace ID changed.
   * @param id The id of the workspace identifier.
   */
  setId(target: EventTarget, id: string): void;
  /**
   * Triggers workspace save action remotely. This is handled by the workspace itself.
   */
  triggerWrite(target: EventTarget): void;
  State: IWorkspaceStateEvents;
}

export const WorkspaceEvents: IWorkspaceEvents;
