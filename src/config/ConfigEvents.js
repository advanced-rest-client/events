import * as Events from './Events.js';

export const ConfigEvents = {
  read: Events.readAction,
  readAll: Events.readConfigAction,
  update: Events.updateAction,
  State: {
    update: Events.updatedAction,
  },
}
Object.freeze(ConfigEvents);
Object.freeze(ConfigEvents.State);
