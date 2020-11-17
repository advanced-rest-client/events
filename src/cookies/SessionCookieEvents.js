import * as Events from './Events.js';

export const SessionCookieEvents = {
  listAll: Events.listAllAction,
  listDomain: Events.listDomainAction,
  delete: Events.deleteAction,
  deleteUrl: Events.deleteUrlAction,
  update: Events.updateAction,
  State: {
    delete: Events.deleteState,
    update: Events.updateState,
  },
};
