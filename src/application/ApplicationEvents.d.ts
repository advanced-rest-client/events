import { AppVersionInfo } from './Application';
import { ARCState } from '../config/ArcState';

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

  /** 
   * Reads the application state file.
   * 
   * @param target The node on which to dispatch the event.
   */
  readState(target: EventTarget): Promise<ARCState>;

  /**
   * Updates a single state value
   * 
   * @param target The node on which to dispatch the event.
   * @param name Path to the state preference
   * @param value State value
   */
  updateStateProperty(target: EventTarget, name: string, value: any): Promise<void>;
}
export const ApplicationEvents: Readonly<IApplicationEvents>;
