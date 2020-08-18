import * as Events from './Events.js';

export const ProcessEvents = {
  loadingstart: Events.startAction,
  loadingstop: Events.stopAction,
  loadingerror: Events.errorAction,
}
