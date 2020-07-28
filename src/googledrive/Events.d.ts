import { ArcExportProviderEvent } from '../dataexport/Events';
import { DataExport, GoogleDrive } from '@advanced-rest-client/arc-types';
import {ResultEventDetail} from '../BaseEvents';

export const idValue: symbol;

/**
 * An event to be dispatched when requesting to store a data on Google Drive.
 */
export class GoogleDriveSaveEvent extends ArcExportProviderEvent {
  /**
   * @param data The data to export
   * @param providerOptions Options passed to the Google Drive provider
   */
  constructor(data: any, providerOptions: DataExport.ProviderOptions);
}

/**
 * An event to be dispatched when requesting to list application folders created in Google Drive
 */
export class GoogleDriveListFolderEvent extends CustomEvent<ResultEventDetail<GoogleDrive.AppFolder[]>> {
  constructor();
}

/**
 * An event to be dispatched when requesting a file data download
 */
export class GoogleDriveReadEvent extends CustomEvent<ResultEventDetail<string>> {
  /**
   * The id of the file to read.
   */
  readonly id: string;

  /**
   * The id of the file to read.
   */
  constructor(id: string);
}

/**
 * Dispatches an event handled by the Google Drive provider to store data on the drive.
 *
 * @param target A node on which to dispatch the event.
 * @param data The data to export
 * @param options Options passed to the export provider
 * @returns Promise resolved to the export result
 */
export declare function storeAction(target: EventTarget, data: any, options: DataExport.ProviderOptions): Promise<DataExport.ArcExportResult>;

/**
 * Dispatches an event handled by the Google Drive provider to list created by the app files.
 *
 * @param target A node on which to dispatch the event.
 * @returns Promise resolved to the list of folders
 */
export declare function listAppFoldersAction(target: EventTarget): Promise<GoogleDrive.AppFolder[]>;

/**
 * Dispatches an event handled by the Google Drive provider to list created by the app files.
 *
 * @param target A node on which to dispatch the event.
 * @param id The id of the file to read.
 * @returns Promise resolved to the list of folders
 */
export declare function readAction(target: EventTarget, id: string): Promise<string>;
