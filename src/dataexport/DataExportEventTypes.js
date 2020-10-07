/**
 * Event types for data export module.
 */
export const DataExportEventTypes = {
  customData: 'arccustomdataexport',
  nativeData: 'arcnativeexport',
  fileSave: 'filedatasave',
};
export const DataImportEventTypes = {
  normalize: 'arcdataimportnormalize',
  dataImport: 'arcdataimport',
  processFile: 'arcdataimportprocessfile',
  processData: 'arcdataimportprocessdata',
  inspect: 'arcdataimportinspect',
  dataImported: 'arcdataimported',
};
