import { DataExport, GoogleDrive } from '../../';

export interface IGoogleDriveEvents {
  /**
   * Dispatches an event handled by the Google Drive provider to store data on the drive.
   *
   * @param target A node on which to dispatch the event.
   * @param data The data to export
   * @param options Options passed to the export provider
   * @returns Promise resolved to the export result
   */
  save(target: EventTarget, data: any, options: DataExport.ProviderOptions): Promise<DataExport.ArcExportResult>;
  /**
   * Dispatches an event handled by the Google Drive provider to list created by the app files.
   *
   * @param target A node on which to dispatch the event.
   * @returns Promise resolved to the list of folders
   */
  listAppFolders(target: EventTarget): Promise<GoogleDrive.AppFolder[]>;
  /**
   * Dispatches an event handled by the Google Drive provider to list created by the app files.
   *
   * @param target A node on which to dispatch the event.
   * @param id The id of the file to read.
   * @returns Promise resolved to the list of folders
   */
  read(target: EventTarget, id: string): Promise<string>;
  /** 
   * Notifies application's main process that a Google Drive file has been picked
   * by the user. The application should take action when needed.
   * 
   * @param target The node on which to dispatch the event.
   * @param id The Google Drive file id
   */
  notifyFilePicked(target: EventTarget, id: string): void;
}

export declare const GoogleDriveEvents: IGoogleDriveEvents;
