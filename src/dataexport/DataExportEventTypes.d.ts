/**
 * @deprecated Use `EventTypes` instead.
 */
declare interface DataExportEventTypes {
  customData: string;
  nativeData: string;
  fileSave: string;
}
/**
 * @deprecated Use `EventTypes` instead.
 */
export const DataExportEventTypes: Readonly<DataExportEventTypes>;
/**
 * @deprecated Use `EventTypes` instead.
 */
declare interface DataImportEventTypes {
  normalize: string;
  dataImport: string;
  processFile: string;
  processData: string;
  inspect: string;
  dataImported: string;
}
/**
 * @deprecated Use `EventTypes` instead.
 */
export const DataImportEventTypes: Readonly<DataImportEventTypes>;
