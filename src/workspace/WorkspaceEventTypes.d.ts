/**
 * @deprecated Use `EventTypes` instead.
 */
declare interface WorkspaceEventTypes {
  appendExport: string;
  appendRequest: string;
  read: string;
  write: string;
}

export const WorkspaceEventTypes: Readonly<WorkspaceEventTypes>;
