/**
 * Event types for session cookies store.
 * The actual event definitions that uses this dictionary are in `@advanced-rest-client/arc-cookies`
 */
export const SessionCookieEventTypes = {
  listAll: 'sessioncookielistall',
  listDomain: 'sessioncookielistdomain',
  listUrl: 'sessioncookielisturl',
  delete: 'sessioncookiedelete',
  deleteUrl: 'sessioncookiedeleteurl',
  update: 'sessioncookieupdate',
  State: {
    delete: 'sessioncookiestatedelete',
    update: 'sessioncookiestateupdate',
  },
};
Object.freeze(SessionCookieEventTypes);
Object.freeze(SessionCookieEventTypes.State);
