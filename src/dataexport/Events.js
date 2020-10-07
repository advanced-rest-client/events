/* eslint-disable max-classes-per-file */
import { DataExportEventTypes, DataImportEventTypes } from './DataExportEventTypes.js';

/** @typedef {import('@advanced-rest-client/arc-types').DataExport.ArcNativeDataExport} ArcNativeDataExport */
/** @typedef {import('@advanced-rest-client/arc-types').DataExport.ArcExportObject} ArcExportObject */
/** @typedef {import('@advanced-rest-client/arc-types').DataExport.ExportOptions} ExportOptions */
/** @typedef {import('@advanced-rest-client/arc-types').DataExport.ProviderOptions} ProviderOptions */
/** @typedef {import('@advanced-rest-client/arc-types').DataExport.ArcExportResult} ArcExportResult */
/** @typedef {import('./Events').FileImportOptions} FileImportOptions */

export const dataValue = Symbol('dataValue');
export const exportOptionsValue = Symbol('exportOptionsValue');
export const importOptionsValue = Symbol('importOptionsValue');
export const providerOptionsValue = Symbol('providerOptionsValue');
export const fileValue = Symbol('fileValue');
export const passphraseValue = Symbol('passphraseValue');
export const methodValue = Symbol('methodValue');

/**
 * An event to be dispatched when requesting ARC native data export.
 */
export class ArcDataExportEvent extends CustomEvent {
  /**
   * @return {ArcNativeDataExport} The data to export
   */
  get data() {
    return this[dataValue];
  }

  /**
   * @return {ExportOptions} Export options
   */
  get exportOptions() {
    return this[exportOptionsValue];
  }

  /**
   * @return {ProviderOptions} Options passed to the export provider
   */
  get providerOptions() {
    return this[providerOptionsValue];
  }

  /**
   * @param {ArcNativeDataExport} data The data to export
   * @param {ExportOptions} exportOptions Export options
   * @param {ProviderOptions} providerOptions Options passed to the export provider
   */
  constructor(data, exportOptions, providerOptions) {
    super(DataExportEventTypes.nativeData, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[dataValue] = data;
    this[exportOptionsValue] = exportOptions;
    this[providerOptionsValue] = providerOptions;
  }
}

/**
 * An event to be dispatched when requesting any data export
 */
export class ArcExportEvent extends CustomEvent {
  /**
   * @return {any} The data to export
   */
  get data() {
    return this[dataValue];
  }

  /**
   * @return {ExportOptions} Export options
   */
  get exportOptions() {
    return this[exportOptionsValue];
  }

  /**
   * @return {ProviderOptions|any|undefined} Options passed to the export provider
   */
  get providerOptions() {
    return this[providerOptionsValue];
  }

  /**
   * @param {any} data The data to export
   * @param {ExportOptions} exportOptions Export options
   * @param {ProviderOptions} providerOptions Options passed to the export provider
   */
  constructor(data, exportOptions, providerOptions) {
    super(DataExportEventTypes.customData, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[dataValue] = data;
    this[exportOptionsValue] = exportOptions;
    this[providerOptionsValue] = providerOptions;
  }
}

/**
 * A base class for all events related to data store provides.
 * This includes `filesystem` and `google drive` file providers.
 */
export class ArcExportProviderEvent extends CustomEvent {
  /**
   * @return {any} The data to export
   */
  get data() {
    return this[dataValue];
  }

  /**
   * @return {ProviderOptions|any|undefined} Options passed to the export provider
   */
  get providerOptions() {
    return this[providerOptionsValue];
  }

  /**
   * @param {string} type Event type
   * @param {any} data The data to export
   * @param {ProviderOptions} providerOptions Options passed to the export provider
   */
  constructor(type, data, providerOptions) {
    super(type, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[dataValue] = data;
    this[providerOptionsValue] = providerOptions;
  }
}

/**
 * An event to be dispatched to stored the data by the native filesystem provider.
 */
export class ArcExportFilesystemEvent extends ArcExportProviderEvent {
  /**
   * @param {any} data The data to export
   * @param {ProviderOptions} providerOptions Options passed to the export provider
   */
  constructor(data, providerOptions) {
    super(DataExportEventTypes.fileSave, data, providerOptions);
  }
}

/**
 * Dispatches an event handled by the export factory to export ARC's native data.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ArcNativeDataExport} data The data to export
 * @param {ExportOptions} exportOptions Export options
 * @param {ProviderOptions} providerOptions Options passed to the export provider
 * @return {Promise<ArcExportResult>} Promise resolved to the export result
 */
export async function nativeExportAction(target, data, exportOptions, providerOptions) {
  const e = new ArcDataExportEvent(data, exportOptions, providerOptions);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the export factory to export any data.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {any} data The data to export
 * @param {ExportOptions} exportOptions Export options
 * @param {ProviderOptions} providerOptions Options passed to the export provider
 * @return {Promise<ArcExportResult>} Promise resolved to the export result
 */
export async function customDataExportAction(target, data, exportOptions, providerOptions) {
  const e = new ArcExportEvent(data, exportOptions, providerOptions);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the filesystem provider to store data on user's filesystem.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {any} data The data to export
 * @param {ProviderOptions} options Options passed to the export provider
 * @return {Promise<ArcExportResult>} Promise resolved to the export result
 */
export async function storeFilesystemAction(target, data, options) {
  const e = new ArcExportFilesystemEvent(data, options);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * An event to be dispatched when requesting to normalize imported data.
 */
export class ArcImportNormalizeEvent extends CustomEvent {
  /**
   * @return {string|object} The data to normalize
   */
  get data() {
    return this[dataValue];
  }

  /**
   * @param {string|object} data The data to normalize
   */
  constructor(data) {
    super(DataImportEventTypes.normalize, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[dataValue] = data;
  }
}

/**
 * An event to be dispatched when requesting to import ARC data.
 */
export class ArcImportEvent extends CustomEvent {
  /**
   * @return {ArcExportObject} The data to import
   */
  get data() {
    return this[dataValue];
  }

  /**
   * @param {ArcExportObject} data The data to import
   */
  constructor(data) {
    super(DataImportEventTypes.dataImport, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[dataValue] = data;
  }
}

/**
 * An event to be dispatched when requesting to import a file.
 */
export class ArcImportFileEvent extends CustomEvent {
  /**
   * @return {File} The file to import
   */
  get file() {
    return this[fileValue];
  }

  /**
   * @return {FileImportOptions=} Optional import options.
   */
  get options() {
    return this[importOptionsValue];
  }

  /**
   * @param {File} file The file to import
   * @param {FileImportOptions=} options Optional import options.
   */
  constructor(file, options) {
    super(DataImportEventTypes.processFile, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[fileValue] = file;
    this[importOptionsValue] = options;
  }
}

/**
 * An event to be dispatched when requesting to normalize and import data.
 */
export class ArcImportDataEvent extends CustomEvent {
  /**
   * @return {string|object} The data to normalize and import
   */
  get data() {
    return this[dataValue];
  }

  /**
   * @param {string|object} data The data to normalize and import
   */
  constructor(data) {
    super(DataImportEventTypes.processData, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[dataValue] = data;
  }
}

/**
 * An event to be dispatched when requesting to inspect processed import data.
 */
export class ArcImportInspectEvent extends CustomEvent {
  /**
   * @param {ArcExportObject} data Normalized import data
   */
  constructor(data) {
    super(DataImportEventTypes.inspect, {
      bubbles: true,
      composed: true,
      detail: {
        data,
      },
    });
  }
}

/**
 * Dispatches an event handled by the import factory to normalize import data to ARC export object.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string|object} data The data to normalize
 * @return {Promise<ArcExportObject>} Promise resolved to the export object
 */
export async function normalizeAction(target, data) {
  const e = new ArcImportNormalizeEvent(data);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the import factory to normalize import data to ARC export object.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ArcExportObject} data The data to import
 * @return {Promise<string[]|undefined>} Promise resolved to list of error messages, if any.
 */
export async function importAction(target, data) {
  const e = new ArcImportEvent(data);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the import factory to process an import file data.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {File} file The file to import
 * @param {FileImportOptions=} options Optional import options.
 * @return {Promise<void>} Promise resolved when a file was processed
 */
export async function importFileAction(target, file, options) {
  const e = new ArcImportFileEvent(file, options);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the import factory to process an import file data.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string|object} data The data to normalize and import
 * @return {Promise<void>} Promise resolved when a file was processed
 */
export async function importDataAction(target, data) {
  const e = new ArcImportDataEvent(data);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the application to render import data view.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ArcExportObject} data The data to normalize and import
 * @return {void} This event has no side effects.
 */
export function importInspectAction(target, data) {
  const e = new ArcImportInspectEvent(data);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event not notify that the data has been imported.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 */
export function stateActionImported(target) {
  const e = new Event(DataImportEventTypes.dataImported, {
    bubbles: true,
    composed: true,
  });
  target.dispatchEvent(e);
}
