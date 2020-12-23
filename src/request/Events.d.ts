export const propertyValue: unique symbol;
export const valueValue: unique symbol;

/**
 * Dispatches when a request property changed.
 * Note, this is only for select number of properties that are globally interesting
 * (like URL or content type header). 
 * 
 * Use `changedProperty` and `changedValue` to read the values.
 */
export declare class RequestChangeEvent extends Event {
  /**
   * The name of the property that changed used to initialize this event
   */
  readonly changedProperty: string;

  /**
   * The value of the property that changed used to initialize this event
   */
  readonly changedValue: string;

  /**
   * @param type The type of the event
   * @param property The name of the property that changed
   * @param value The value of the property that changed
   */
  constructor(type: string, property: string, value: any);
}

/**
 * Dispatches an event to inform the request logic to send current request.
 * @param target A node on which to dispatch the event
 */
export declare function informSendAction(target: EventTarget): void;

/**
 * Dispatches an invent to inform about request URL change
 * @param target A node on which to dispatch the event
 * @param value The new URL value
 */
export declare function stateUrlChangeAction(target: EventTarget, value: string): void;

/**
 * Dispatches an invent to inform about request URL change
 * @param target A node on which to dispatch the event
 * @param value The new content-type value
 */
export function stateContentTypeAction(target: EventTarget, value: string): void;
