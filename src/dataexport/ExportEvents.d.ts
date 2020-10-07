import { DataExport } from '@advanced-rest-client/arc-types';
import { FileImportOptions } from './Events';

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

declare interface ImportEvents {
  /**
   * Dispatches an event handled by the import factory to normalize import data to ARC export object.
   *
   * @param target A node on which to dispatch the event.
   * @param data The data to normalize
   * @returns Promise resolved to the export object
   */
  normalize(target: EventTarget, data: string|object): Promise<DataExport.ArcExportObject>;
  /**
   * Dispatches an event handled by the import factory to normalize import data to ARC export object.
   *
   * @param target A node on which to dispatch the event.
   * @param data The data to import
   * @returns Promise resolved to list of error messages, if any.
   */
  dataImport(target: EventTarget, data: DataExport.ArcExportObject): Promise<string[]|undefined>;
  /**
   * Dispatches an event handled by the import factory to process an import file data.
   *
   * @param target A node on which to dispatch the event.
   * @param file The file to import
   * @param options Optional import options.
   * @returns Promise resolved when import data has been processed
   */
  processFile(target: EventTarget, file: File, options?: FileImportOptions): Promise<void>;
  /**
   * Dispatches an event handled by the import factory to process an import file data.
   *
   * @param target A node on which to dispatch the event.
   * @param data The data to normalize and import
   * @returns Promise resolved when a file was processed
   */
  processData(target: EventTarget, data: string|object): Promise<void>;

  /**
   * Dispatches an event handled by the application to render import data view.
   *
   * @param target A node on which to dispatch the event.
   * @param data The data to normalize and import
   * @returns This event has no side effects.
   */
  inspect(target: EventTarget, data: DataExport.ArcExportObject): void;
  /**
   * Dispatches an event not notify that the data has been imported.
   *
   * @param target A node on which to dispatch the event.
   */
  dataImported(target: EventTarget): void;
}

export const ImportEvents: ImportEvents;
