import * as Events from './Events.js';

export const ExportEvents = {
  customData: Events.customDataExportAction,
  nativeData: Events.nativeExportAction,
  fileSave: Events.storeFilesystemAction,
  googleDiveSave: Events.storeGoogleDriveAction,
}
