/**
 * Event types for session cookies store.
 */
export const SessionCookieEventTypes = {
  listAll: 'sessioncookielistall',
  listDomain: 'sessioncookielistdomain',
  listUrl: 'sessioncookielisturl',
  delete: 'sessioncookiedelete',
  deleteUrl: 'sessioncookiedeleteurl',
  update: 'sessioncookieupdate',
  updateBulk: 'sessioncookieupdatebulk',
  State: {
    delete: 'sessioncookiestatedelete',
    update: 'sessioncookiestateupdate',
  },
};
Object.freeze(SessionCookieEventTypes);
Object.freeze(SessionCookieEventTypes.State);
