import { AppVersionInfo } from './Application';

export interface IApplicationEvents {
  /** 
   * Reads application version information.
   * @param target The node on which to dispatch the event.
   * @returns The info about application version
   */
  versionInfo(target: EventTarget): Promise<AppVersionInfo>;
  /** 
   * Asks the application to run one of the predefined commands.
   * This is initialized in the IO thread and proxied in the renderer process.
   * 
   * @param target The node on which to dispatch the event.
   * @param action The command name to execute
   * @param args The arguments to pass to the application.
   */
  command(target: EventTarget, action: string, ...args: any): void;
  /** 
   * Asks the application to run one of the predefined request actions.
   * This is initialized in the IO thread and proxied in the renderer process.
   * 
   * @param target The node on which to dispatch the event.
   * @param action The command name to execute
   * @param args The arguments to pass to the application.
   */
  requestAction(target: EventTarget, action: string, ...args: any): void;
}
export const ApplicationEvents: Readonly<IApplicationEvents>;
