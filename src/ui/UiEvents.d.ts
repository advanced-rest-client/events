import { ContextMenuActionDetail } from './Events.js';

export interface IUiEvents {
  /**
   * @param target A target on which to dispatch the event
   * @param detail The context menu action init.
   */
  contextMenu(target: EventTarget, detail: ContextMenuActionDetail): void;
}
export const UiEvents: Readonly<IUiEvents>;
