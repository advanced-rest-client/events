/**
 * @deprecated Use `EventTypes` instead.
 */
export const SessionCookieEventTypes = {
  listAll: 'sessioncookielistall',
  listDomain: 'sessioncookielistdomain',
  listUrl: 'sessioncookielisturl',
  delete: 'sessioncookiedelete',
  deleteUrl: 'sessioncookiedeleteurl',
  update: 'sessioncookieupdate',
  updateBulk: 'sessioncookieupdatebulk',
  /**
   * @deprecated Use `EventTypes` instead.
   */
  State: {
    delete: 'sessioncookiestatedelete',
    update: 'sessioncookiestateupdate',
  },
};
Object.freeze(SessionCookieEventTypes);
Object.freeze(SessionCookieEventTypes.State);
