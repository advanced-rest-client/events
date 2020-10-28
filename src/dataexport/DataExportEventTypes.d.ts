declare interface DataExportEventTypes {
  customData: string;
  nativeData: string;
  fileSave: string;
}

export const DataExportEventTypes: Readonly<DataExportEventTypes>;

declare interface DataImportEventTypes {
  normalize: string;
  dataImport: string;
  processFile: string;
  processData: string;
  inspect: string;
  dataImported: string;
}

export const DataImportEventTypes: Readonly<DataImportEventTypes>;
