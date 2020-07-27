/* eslint-disable max-classes-per-file */
import { DataExportEventTypes } from './DataExportEventTypes.js';

/** @typedef {import('@advanced-rest-client/arc-types').DataExport.ArcNativeDataExport} ArcNativeDataExport */
/** @typedef {import('@advanced-rest-client/arc-types').DataExport.ExportOptions} ExportOptions */
/** @typedef {import('@advanced-rest-client/arc-types').DataExport.ProviderOptions} ProviderOptions */
/** @typedef {import('@advanced-rest-client/arc-types').DataExport.ArcExportResult} ArcExportResult */

export const dataValue = Symbol('dataValue');
export const exportOptionsValue = Symbol('exportOptionsValue');
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
 * An event to be dispatched to stored the data by the Google Drive provider.
 */
export class ArcExportGoogleDriveEvent extends ArcExportProviderEvent {
  /**
   * @param {any} data The data to export
   * @param {ProviderOptions} providerOptions Options passed to the export provider
   */
  constructor(data, providerOptions) {
    super(DataExportEventTypes.googleDiveSave, data, providerOptions);
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
 * Dispatches an event handled by the Google Drive provider to store data on the drive.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {any} data The data to export
 * @param {ProviderOptions} options Options passed to the export provider
 * @return {Promise<ArcExportResult>} Promise resolved to the export result
 */
export async function storeGoogleDriveAction(target, data, options) {
  const e = new ArcExportGoogleDriveEvent(data, options);
  target.dispatchEvent(e);
  return e.detail.result;
}
