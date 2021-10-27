/**
 * @deprecated Use `EventTypes` instead.
 */
export const ConfigEventTypes = {
  read: 'arcconfigread',
  readAll: 'arcconfigreadall',
  update: 'arcconfigupdate',
  /**
   * @deprecated Use `EventTypes` instead.
   */
  State: {
    update: 'arcconfigstateupdate',
  },
};
Object.freeze(ConfigEventTypes);
Object.freeze(ConfigEventTypes.State);
