import { DataExport } from '@advanced-rest-client/arc-types';
import { ARCSavedRequest, ARCHistoryRequest } from '@advanced-rest-client/arc-models';

declare interface WorkspaceEvents {
  appendexport(target: EventTarget, data: DataExport.ArcExportObject): void;
  appendrequest(target: EventTarget, request: ARCSavedRequest|ARCHistoryRequest): void;
}

export const WorkspaceEvents: WorkspaceEvents;
