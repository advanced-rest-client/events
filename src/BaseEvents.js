/* eslint-disable max-classes-per-file */
/**
 * A base class to use with ARC events that do not expect a result.
 */
export class ArcContextVoidEvent extends CustomEvent {
  /**
   * @param {string} type The event type
   * @param {any=} detail The optional detail object. It adds object's properties to the `detail` with the `result` property.
   */
  constructor(type, detail={}) {
    super(type, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail,
    });
  }
}

/**
 * A base class to use with the ARC events.
 */
export class ArcContextEvent extends CustomEvent {
  /**
   * @param {string} type The event type
   * @param {any=} detail The optional detail object. It adds object's properties to the `detail` with the `result` property.
   */
  constructor(type, detail={}) {
    super(type, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
        result: undefined,
        ...detail,
      }
    });
  }
}

/**
 * An event to be used to read an object from the store.
 */
export class ArcReadEvent extends ArcContextEvent {
  /**
   * @param {string} type The type of the event
   * @param {string} id The domain id of the object to read
   * @param {string=} parent The domain id of the parent object (like endpoint for an operation).
   */
  constructor(type, id, parent) {
    super(type, { id, parent });
  }
}

/**
 * An event to be used to read a list of object from the API store.
 */
export class ArcReadBulkEvent extends ArcContextEvent {
  /**
   * @param {string} type The type of the event
   * @param {string[]} ids The list of domain ids to read. These must be of the same domain type.
   */
  constructor(type, ids) {
    super(type, { ids });
  }
}
