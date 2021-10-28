/* eslint-disable max-classes-per-file */
import { ArcExportProviderEvent } from '../dataexport/Events.js';
import { EventTypes } from '../EventTypes.js';

/** @typedef {import('../../').DataExport.ProviderOptions} ProviderOptions */
/** @typedef {import('../../').DataExport.ArcExportResult} ArcExportResult */
/** @typedef {import('../../').GoogleDrive.AppFolder} AppFolder */

export const idValue = Symbol('idValue');

/**
 * An event to be dispatched when requesting to store a data on Google Drive.
 */
export class GoogleDriveSaveEvent extends ArcExportProviderEvent {
  /**
   * @param {any} data The data to export
   * @param {ProviderOptions} providerOptions Options passed to the Google Drive provider
   */
  constructor(data, providerOptions) {
    super(EventTypes.Google.Drive.save, data, providerOptions);
  }
}

/**
 * An event to be dispatched when requesting to list application folders created in Google Drive
 */
export class GoogleDriveListFolderEvent extends CustomEvent {
  constructor() {
    super(EventTypes.Google.Drive.listAppFolders, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {},
    });
  };
}

/**
 * An event to be dispatched when requesting a file data download
 */
export class GoogleDriveReadEvent extends CustomEvent {
  /**
   * @return {string} The id of the file to read.
   */
  get id() {
    return this[idValue];
  }

  /**
   * @param {string} id The id of the file to read.
   */
  constructor(id) {
    super(EventTypes.Google.Drive.read, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: {},
    });
    this[idValue] = id;
  };
}

/**
 * Dispatches an event handled by the Google Drive provider to store data on the drive.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {any} data The data to export
 * @param {ProviderOptions} options Options passed to the export provider
 * @return {Promise<ArcExportResult>} Promise resolved to the export result
 */
export async function storeAction(target, data, options) {
  const e = new GoogleDriveSaveEvent(data, options);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the Google Drive provider to list created by the app files.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @return {Promise<AppFolder[]>} Promise resolved to the list of folders
 */
export async function listAppFoldersAction(target) {
  const e = new GoogleDriveListFolderEvent();
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the Google Drive provider to list created by the app files.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The id of the file to read.
 * @return {Promise<string>} Promise resolved to the list of folders
 */
export async function readAction(target, id) {
  const e = new GoogleDriveReadEvent(id);
  target.dispatchEvent(e);
  return e.detail.result;
}
