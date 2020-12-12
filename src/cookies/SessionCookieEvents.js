import * as Events from './Events.js';

export const SessionCookieEvents = {
  listAll: Events.listAllAction,
  listDomain: Events.listDomainAction,
  listUrl: Events.listUrlAction,
  delete: Events.deleteAction,
  deleteUrl: Events.deleteUrlAction,
  update: Events.updateAction,
  updateBulk: Events.updateBulkAction,
  State: {
    delete: Events.deleteState,
    update: Events.updateState,
  },
};
