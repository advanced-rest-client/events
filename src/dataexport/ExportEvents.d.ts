import { DataExport } from '@advanced-rest-client/arc-types';
declare interface ExportEvents {
  /**
   * Dispatches an event handled by the export factory to export any data.
   *
   * @param target A node on which to dispatch the event.
   * @param data The data to export
   * @param exportOptions Export options
   * @param providerOptions Options passed to the export provider
   * @returns Promise resolved to the export result
   */
  customData(target: EventTarget, data: any, exportOptions: DataExport.ExportOptions, providerOptions: DataExport.ProviderOptions): Promise<DataExport.ArcExportResult>;
  /**
   * Dispatches an event handled by the export factory to export ARC's native data.
   *
   * @param target A node on which to dispatch the event.
   * @param data The data to export
   * @param exportOptions Export options
   * @param providerOptions Options passed to the export provider
   * @returns Promise resolved to the export result
   */
  nativeData(target: EventTarget, data: DataExport.ArcNativeDataExport, exportOptions: DataExport.ExportOptions, providerOptions: DataExport.ProviderOptions): Promise<DataExport.ArcExportResult>;
  /**
   * Dispatches an event handled by the filesystem provider to store data on user's filesystem.
   *
   * @param target A node on which to dispatch the event.
   * @param data The data to export
   * @param options Options passed to the export provider
   * @returns Promise resolved to the export result
   */
  fileSave(target: EventTarget, data: any, options: DataExport.ProviderOptions): Promise<DataExport.ArcExportResult>;
}

export const ExportEvents: ExportEvents;
