import * as Events from './Events.js';

export const GoogleDriveEvents = {
  save: Events.storeAction,
  listAppFolders: Events.listAppFoldersAction,
  read: Events.readAction,
};
