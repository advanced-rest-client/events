import { DataExport } from '../../';
import {ResultEventDetail, VoidEventDetail} from '../BaseEvents';

/** @typedef {import('../../').DataExport.ArcNativeDataExport} ArcNativeDataExport */
/** @typedef {import('../../').DataExport.ExportOptions} ExportOptions */
/** @typedef {import('../../').DataExport.ProviderOptions} ProviderOptions */

export const dataValue: unique symbol;
export const exportOptionsValue: unique symbol;
export const importOptionsValue: unique symbol;
export const providerOptionsValue: unique symbol;
export const fileValue: unique symbol;
export const passphraseValue: unique symbol;
export const methodValue: unique symbol;

/**
 * An event to be dispatched when requesting ARC native data export.
 */
export class ArcDataExportEvent extends CustomEvent<ResultEventDetail<DataExport.ArcExportResult>> {
  [dataValue]: DataExport.ArcNativeDataExport;
  [exportOptionsValue]: DataExport.ExportOptions;
  [providerOptionsValue]: DataExport.ProviderOptions;
  /**
   * The data to export
   */
  readonly data: DataExport.ArcNativeDataExport;

  /**
   * Export options
   */
  readonly exportOptions: DataExport.ExportOptions;

  /**
   * Options passed to the export provider
   */
  readonly providerOptions: DataExport.ProviderOptions;

  /**
   * @param data The data to export
   * @param exportOptions Export options
   * @param providerOptions Options passed to the export provider
   */
  constructor(data: DataExport.ArcNativeDataExport, exportOptions: DataExport.ExportOptions, providerOptions: DataExport.ProviderOptions);
}

/**
 * An event to be dispatched when requesting any data export
 */
export class ArcExportEvent extends CustomEvent<ResultEventDetail<DataExport.ArcExportResult>> {
  [dataValue]: any;
  [exportOptionsValue]: DataExport.ExportOptions;
  [providerOptionsValue]: DataExport.ProviderOptions;
  /**
   * The data to export
   */
  readonly data: any;

  /**
   * Export options
   */
  readonly exportOptions: DataExport.ExportOptions;

  /**
   * Options passed to the export provider
   */
  readonly providerOptions: DataExport.ProviderOptions;

  /**
   * @param data The data to export
   * @param exportOptions Export options
   * @param providerOptions Options passed to the export provider
   */
  constructor(data: any, exportOptions: DataExport.ExportOptions, providerOptions: DataExport.ProviderOptions);
}

/**
 * A base class for all events related to data store provides.
 * This includes `filesystem` and `google drive` file providers.
 */
export class ArcExportProviderEvent extends CustomEvent<ResultEventDetail<DataExport.ArcExportResult>> {
  [dataValue]: any;
  [providerOptionsValue]: DataExport.ProviderOptions;
  /**
   * The data to export
   */
  readonly data: any;

  /**
   * Options passed to the export provider
   */
  readonly providerOptions: DataExport.ProviderOptions;

  /**
   * @param type Event type
   * @param data The data to export
   * @param providerOptions Options passed to the export provider
   */
  constructor(type: string, data: any, providerOptions: DataExport.ProviderOptions);
}

/**
 * An event to be dispatched to stored the data by the native filesystem provider.
 */
export class ArcExportFilesystemEvent extends ArcExportProviderEvent {
  /**
   * @param {ArcNativeDataExport} data The data to export
   * @param {ProviderOptions} providerOptions Options passed to the export provider
   */
  constructor(data: any, providerOptions: DataExport.ProviderOptions);
}

/**
 * Dispatches an event handled by the export factory to export ARC's native data.
 *
 * @param target A node on which to dispatch the event.
 * @param data The data to export
 * @param exportOptions Export options
 * @param providerOptions Options passed to the export provider
 * @returns Promise resolved to the export result
 */
export declare function nativeExportAction(target: EventTarget, data: DataExport.ArcNativeDataExport, exportOptions: DataExport.ExportOptions, providerOptions: DataExport.ProviderOptions): Promise<DataExport.ArcExportResult>;

/**
 * Dispatches an event handled by the export factory to export any data.
 *
 * @param target A node on which to dispatch the event.
 * @param data The data to export
 * @param exportOptions Export options
 * @param providerOptions Options passed to the export provider
 * @returns Promise resolved to the export result
 */
export declare function customDataExportAction(target: EventTarget, data: any, exportOptions: DataExport.ExportOptions, providerOptions: DataExport.ProviderOptions): Promise<DataExport.ArcExportResult>;

/**
 * Dispatches an event handled by the filesystem provider to store data on user's filesystem.
 *
 * @param target A node on which to dispatch the event.
 * @param data The data to export
 * @param options Options passed to the export provider
 * @returns Promise resolved to the export result
 */
export declare function storeFilesystemAction(target: EventTarget, data: any, options: DataExport.ProviderOptions): Promise<DataExport.ArcExportResult>;


/**
 * An event to be dispatched when requesting to normalize imported data.
 */
export declare class ArcImportNormalizeEvent extends CustomEvent<ResultEventDetail<DataExport.ArcExportObject>> {
  [dataValue]: string|object;
  /**
   * The data to normalize
   */
  readonly data: string|object;

  /**
   * @param {string|object} data The data to normalize
   */
  constructor(data: string|object);
}

/**
 * An event to be dispatched when requesting to import ARC data.
 */
export declare class ArcImportEvent extends CustomEvent<ResultEventDetail<string[]|undefined>> {
  [dataValue]: DataExport.ArcExportObject;
  /**
   * The data to import
   */
  readonly data: DataExport.ArcExportObject;

  /**
   * @param {} data The data to import
   */
  constructor(data: DataExport.ArcExportObject);
}

/**
 * Options interface for file import
 */
export declare interface FileImportOptions {
  driveId?: string;
}

/**
 * An event to be dispatched when requesting to import a file.
 */
export class ArcImportFileEvent extends CustomEvent<VoidEventDetail> {
  [fileValue]: File;
  [importOptionsValue]?: FileImportOptions;
  /**
   * The file to import
   */
  readonly file: File;

  /**
   * Optional import options.
   */
  readonly options?: FileImportOptions;

  /**
   * @param file The file to import
   * @param options Optional import options.
   */
  constructor(file: File, options?: FileImportOptions);
}

/**
 * An event to be dispatched when requesting to normalize and import data.
 */
export class ArcImportDataEvent extends CustomEvent<VoidEventDetail> {
  [dataValue]: string|object;
  /**
   * The data to normalize and import
   */
  readonly data: string|object;

  /**
   * @param data The data to normalize and import
   */
  constructor(data: string|object);
}

export interface ArcImportInspectEventDetail {
  data: DataExport.ArcExportObject;
}

/**
 * An event to be dispatched when requesting to inspect processed import data.
 */
export class ArcImportInspectEvent extends CustomEvent<ArcImportInspectEventDetail> {
  /**
   * @param data Normalized import data
   */
  constructor(data: DataExport.ArcExportObject);
}

/**
 * Dispatches an event handled by the import factory to normalize import data to ARC export object.
 *
 * @param target A node on which to dispatch the event.
 * @param data The data to normalize
 * @returns Promise resolved to the export object
 */
export declare function normalizeAction(target: EventTarget, data: string|object): Promise<DataExport.ArcExportObject>;

/**
 * Dispatches an event handled by the import factory to normalize import data to ARC export object.
 *
 * @param target A node on which to dispatch the event.
 * @param data The data to import
 * @returns Promise resolved to list of error messages, if any.
 */
export declare function importAction(target: EventTarget, data: DataExport.ArcExportObject): Promise<string[]|undefined>;

/**
 * Dispatches an event handled by the import factory to process an import file data.
 *
 * @param target A node on which to dispatch the event.
 * @param file The file to import
 * @param options Optional import options.
 * @returns Promise resolved when import data has been processed
 */
export declare function importFileAction(target: EventTarget, file: File, options?: FileImportOptions): Promise<void>;

/**
 * Dispatches an event handled by the import factory to process an import file data.
 *
 * @param target A node on which to dispatch the event.
 * @param data The data to normalize and import
 * @returns Promise resolved when a file was processed
 */
export declare function importDataAction(target: EventTarget, data: string|object): Promise<void>;

/**
 * Dispatches an event handled by the application to render import data view.
 *
 * @param target A node on which to dispatch the event.
 * @param data The data to normalize and import
 * @returns This event has no side effects.
 */
export declare function importInspectAction(target: EventTarget, data: DataExport.ArcExportObject): void;

/**
 * Dispatches an event not notify that the data has been imported.
 *
 * @param target A node on which to dispatch the event.
 */
export declare function stateActionImported(target: EventTarget): void;
