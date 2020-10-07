import { DataExport, ArcRequest } from '@advanced-rest-client/arc-types';

declare interface WorkspaceEvents {
  appendExport(target: EventTarget, data: DataExport.ArcExportObject): void;
  appendRequest(target: EventTarget, request: ArcRequest.ARCSavedRequest|ArcRequest.ARCHistoryRequest): void;
}

export const WorkspaceEvents: WorkspaceEvents;
