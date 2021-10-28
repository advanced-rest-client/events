import { MenuSizing } from './Menu';

export interface IMenuStateEvents {
  /** 
   * Informs the windows a menu has been opened in a popup.
   * 
   * @param target The node on which to dispatch the event.
   * @param menu The name of the menu
   */
  open(target: EventTarget, menu: string): void;
  /** 
   * Informs the windows a menu has been closed in a popup.
   * 
   * @param target The node on which to dispatch the event.
   * @param menu The name of the menu
   */
  close(target: EventTarget, menu: string): void;
}

export interface IMenuEvents {
  /** 
   * Pops out a menu item from the application frame to a separate window.
   * Do not confuse this with the Navigation's popup event which is used by the components.
   * This is to be used with the application bindings to send the command to the backend.
   * 
   * @param target The node on which to dispatch the event.
   * @param menu The name of the menu
   * @param sizing The size of the menu to render.
   * @returns Resolved when the search command was sent to the backend.
   */
  popup(target: EventTarget, menu: string, sizing: MenuSizing): Promise<void>;
  /** 
   * Triggers the navigation from the menu popup window.
   * Do not confuse this event with the Navigation events. This is to send a command to the application
   * backend.
   * 
   * @param target The node on which to dispatch the event.
   * @param menu The name of the menu
   * @param args The route options
   * @returns Resolved when the search command was sent to the backend.
   */
  navigate(target: EventTarget, menu: string, ...args: any): Promise<void>;
  State: IMenuStateEvents;
}
export const MenuEvents: Readonly<IMenuEvents>;
