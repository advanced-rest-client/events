export declare interface Entity {
  /**
   * Pouch DB datastore `_id`
   */
  _id?: string;
  /**
   * Pouch DB datastore `_rev` as a revision of the object
   */
  _rev?: string;
  /**
   * Special flag used by PouchDB to delete an object.
   */
  _deleted?: boolean;
}

export declare interface DeletedEntity {
  /**
   * Pouch DB datastore `_id`
   */
  id: string;
  /**
   * Pouch DB datastore revision of the deleted object
   */
  rev: string;
}

/**
 * An entity change record base definition
 */
export declare interface ARCEntityChangeRecord<T> {
  /**
   * The ID of the changed entity
   */
  id: string;
  /**
   * The revision of the updated entity.
   * It is not set when old revision is unavailable (new entity is created).
   */
  oldRev?: string;
  /**
   * New revision id of updated entity
   */
  rev: string;
  /**
   * The updated entity.
   */
  item?: T;
}

/**
 * Event detail object for data store query result object.
 */
export declare interface ARCModelListResultDetail<T> {
  result: Promise<ARCModelListResult<T>>;
}

/**
 * Base query options for the data store.
 */
export declare interface ARCModelListOptions {
  /**
   * The number of results per the page.
   */
  limit?: number;
  /**
   * A string that should be used with pagination.
   */
  nextPageToken?: string;
}

/**
 * Data store query result object.
 */
export declare interface ARCModelListResult<T> {
  /**
   * Next page token to be used with pagination.
   * It is not set when the query has not returned any results.
   */
  nextPageToken?: string;
  /**
   * The list of items in the response.
   * May be empty array when there was no more results.
   */
  items: T[];
}
