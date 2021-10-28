import { AppVersionInfo } from './Application';

export interface IApplicationEvents {
  /** 
   * Reads application version information.
   * @param target The node on which to dispatch the event.
   * @returns The info about application version
   */
  versionInfo(target: EventTarget): Promise<AppVersionInfo>;
}
export const ApplicationEvents: Readonly<IApplicationEvents>;
