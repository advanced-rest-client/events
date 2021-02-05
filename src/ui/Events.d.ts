export declare interface ContextMenuActionDetail {
  /**
   * The property to be used to recognize which context menu action the application should render.
   */
  selector: string;
  /**
   * The original MouseEvent associated with the action.
   */
  mouseEvent: MouseEvent;
  /**
   * The element that should be considered as the target of the click.
   * Default to event target.
   */
  target?: HTMLElement|SVGElement;
  /**
   * Any argument to be passed to the context menu "execute" function.
   */
  args?: any;
}

/**
 * @param target A target on which to dispatch the event
 * @param detail The context menu action init.
 */
export function contextMenuAction(target: EventTarget, detail: ContextMenuActionDetail): void;
