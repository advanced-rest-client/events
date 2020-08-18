declare interface DataExportEventTypes {
  customData: string;
  nativeData: string;
  fileSave: string;
}

export const DataExportEventTypes: DataExportEventTypes;

declare interface DataImportEventTypes {
  normalize: string;
  dataimport: string;
  processfile: string;
  processdata: string;
  inspect: string;
  dataimported: string;
}

export const DataImportEventTypes: DataImportEventTypes;
