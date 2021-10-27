/**
 * @deprecated Use `ArcEventDetailWithResult` instead.
 */
export declare interface ResultEventDetail<T> {
  result?: Promise<T>;
}

/**
 * @deprecated Use `ArcEventDetailVoid` instead.
 */
export declare interface VoidEventDetail {
  result?: Promise<void>;
}



/**
 * A base class to use with store events that do not expect a result.
 */
 export declare class ArcContextVoidEvent<T> extends CustomEvent<T> {
  /**
   * @param type The event type
   * @param detail The optional detail object. It adds object's properties to the `detail` with the `result` property.
   */
  constructor(type: string, detail?: any);
}

/**
 * A base class to use with store events.
 */
export declare class ArcContextEvent<T> extends CustomEvent<ArcEventDetailWithResult<T>> {
  /**
   * @param type The event type
   * @param detail The optional detail object. It adds object's properties to the `detail` with the `result` property.
   */
  constructor(type: string, detail?: any);
}

/**
 * An event to be used to read an object from the API store.
 */
export class ArcReadEvent<T> extends CustomEvent<ArcReadEventDetail<T>> {
  /**
   * @param type The type of the event
   * @param id The domain id of the object to read
   * @param parent The domain id of the parent object (like endpoint for an operation).
   */
  constructor(type: string, id: string, parent?: string);
}

/**
 * An event to be used to read a list of object from the API store.
 */
export class ArcReadBulkEvent<T> extends CustomEvent<ArcReadBulkEventDetail<T>> {
  /**
   * @param type The type of the event
   * @param ids The list of domain ids to read. These must be of the same domain type.
   */
  constructor(type: string, ids: string[]);
}

/**
 * Base event detail definition for the events that returns a `result`
 * property on the `detail` object
 */
export declare interface ArcEventDetailWithResult<T> {
  /**
   * This property is set by the store, a promise resolved when the operation finish
   * with the corresponding result.
   */
  result?: Promise<T> | null;
}

/**
 * A detail for an event that returns a void result.
 */
export declare interface ArcEventDetailVoid extends ArcEventDetailWithResult<void> {
}

export declare interface ArcReadEventDetail<T> extends ArcEventDetailWithResult<T> {
  /**
   * The domain id of the domain object to read.
   */
  id: string;
  /**
   * The domain id of the parent object (like endpoint for an operation).
   */
  parent?: string;
}

export declare interface ArcReadBulkEventDetail<T> extends ArcEventDetailWithResult<T[]> {
  /**
   * The list of domain ids to read.
   */
  ids: string;
}
