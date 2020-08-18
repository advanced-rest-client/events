import * as Events from './Events.js';

export const ExportEvents = {
  customData: Events.customDataExportAction,
  nativeData: Events.nativeExportAction,
  fileSave: Events.storeFilesystemAction,
}

export const ImportEvents = {
  normalize: Events.normalizeAction,
  dataimport: Events.importAction,
  processfile: Events.importFileAction,
  processdata: Events.importDataAction,
  inspect: Events.importInspectAction,
  dataimported: Events.stateActionImported,
}
