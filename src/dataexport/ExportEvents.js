import * as Events from './Events.js';

export const ExportEvents = {
  customData: Events.customDataExportAction,
  nativeData: Events.nativeExportAction,
  fileSave: Events.storeFilesystemAction,
}

export const ImportEvents = {
  normalize: Events.normalizeAction,
  dataImport: Events.importAction,
  processFile: Events.importFileAction,
  processData: Events.importDataAction,
  inspect: Events.importInspectAction,
  dataImported: Events.stateActionImported,
}
