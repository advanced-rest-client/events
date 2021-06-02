import { ClientCertificate, Model } from '@advanced-rest-client/arc-types';
import {
  ARCModelReadEventDetail,
  ARCModelUpdateEventDetail,
  ARCModelDeleteEventDetail,
  ARCEntityDeletedEvent,
  ARCEntityListEvent,
} from './BaseEvents';

export const certificateValue: symbol;
export const idValue: symbol;
export const revisionValue: symbol;
export const changeRecordValue: symbol;

/**
 * An event to be dispatched to read an client certificate from the data store.
 */
export declare class ARCClientCertificateReadEvent extends CustomEvent<ARCModelReadEventDetail<ClientCertificate.ARCClientCertificate>> {
  /**
   * Client certificate revision ID used to initialize the event.
   */
  readonly rev?: string;

  /**
   * Client certificate id used to initialize the event.
   */
  readonly id: string;

  /**
   * @param id The client certificate ID
   * @param rev The client certificate revision
   */
  constructor(id: string, rev?: string);
}

/**
 * An event dispatched to insert a new client certificate
 */
export declare class ARCClientCertificateInsertEvent extends CustomEvent<ARCModelUpdateEventDetail<ClientCertificate.ARCClientCertificate>> {
  /**
   * @return The certificate to create.
   */
  readonly certificate: ClientCertificate.ARCClientCertificate;

  /**
   * @param certificate The certificate to create.
   */
  constructor(certificate: ClientCertificate.ARCClientCertificate);
}

/**
 * An event dispatched to update a certificate metadata
 */
export declare class ARCClientCertificateUpdateEvent extends CustomEvent<ARCModelUpdateEventDetail<ClientCertificate.ARCClientCertificate>> {
  /**
   * @return The certificate to update.
   */
  readonly certificate: ClientCertificate.ARCClientCertificate;

  /**
   * @param certificate The certificate to update.
   */
  constructor(certificate: ClientCertificate.ARCClientCertificate);
}

/**
 * An event dispatched from the store after a certificate model has changed
 */
export declare class ARCClientCertificateUpdatedEvent extends Event {
  /**
   * The change record
   */
  readonly changeRecord: Model.ARCEntityChangeRecord<ClientCertificate.ARCClientCertificate>;
  /**
   * @param record The client certificate change record.
   */
  constructor(record: Model.ARCEntityChangeRecord<ClientCertificate.ARCClientCertificate>);
}

/**
 * An event dispatched to the store to delete a client certificate.
 */
export declare class ARCClientCertificateDeleteEvent extends CustomEvent<ARCModelDeleteEventDetail> {
  /**
   * The client certificate id used to initialize the event.
   */
  readonly id: string;
  /**
   * The client certificate's revision used to initialize the event.
   */
  readonly rev?: string;

  /**
   * @param id Client certificate id
   * @param rev Client certificate's revision
   */
  constructor(id: string, rev?: string);
}

/**
 * An event dispatched by the store after a client certificate was deleted.
 */
export declare class ARCClientCertificateDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * @param id Deleted client certificate id
   * @param rev Updated revision
   */
  constructor(id: string, rev: string);
}

/**
 * An event to be dispatched to list client certificate data in the data store.
 */
export declare class ARCClientCertificateListEvent extends ARCEntityListEvent<ClientCertificate.ARCClientCertificate> {
  /**
   * @param opts Query options.
   */
  constructor(opts: Model.ARCModelListOptions);
}

/**
 * Dispatches an event handled by the data store to read the client certificate.
 *
 * @param target A node on which to dispatch the event.
 * @param id The id of the client certificate
 * @param rev The revision of the client certificate. If not set then the latest revision is used.
 * @returns Promise resolved to a client certificate model.
 */
export declare function readAction(target: EventTarget, id: string, rev?: string): Promise<ClientCertificate.ARCClientCertificate>;

/**
 * Dispatches an event handled by the data store to insert a new client certificate.
 *
 * @param target A node on which to dispatch the event.
 * @param item The certificate object.
 * @returns Promise resolved to the change record
 */
export declare function insertAction(target: EventTarget, item: ClientCertificate.ARCClientCertificate): Promise<Model.ARCEntityChangeRecord<ClientCertificate.ARCClientCertificate>>;

/**
 * Dispatches an event handled by the data store to update a client certificate metadata
 *
 * @param target A node on which to dispatch the event.
 * @param item The certificate object.
 * @returns Promise resolved to the change record
 */
export declare function updateAction(target: EventTarget, item: ClientCertificate.ARCClientCertificate): Promise<Model.ARCEntityChangeRecord<ClientCertificate.ARCClientCertificate>>;

/**
 * Dispatches an event handled by the data store to delete a client certificate
 *
 * @param target A node on which to dispatch the event.
 * @param id The id of the project to delete.
 * @param rev The revision of the project. If not set then the latest revision is used.
 * @returns Promise resolved to a new revision after delete.
 */
export declare function deleteAction(target: EventTarget, id: string, rev?: string): Promise<Model.DeletedEntity>;

/**
 * Dispatches an event to list the client certificates data.
 *
 * @param target A node on which to dispatch the event.
 * @param opts Query options.
 * @returns The list result.
 */
export declare function listAction(target: EventTarget, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<ClientCertificate.ARCClientCertificate>>;

/**
 * Dispatches an event after a client certificate was updated
 *
 * @param target A node on which to dispatch the event.
 * @param record Change record
 */
export declare function updatedState(target: EventTarget, record: Model.ARCEntityChangeRecord<ClientCertificate.ARCClientCertificate>): void;

/**
 * Dispatches an event after a client certificate was deleted
 *
 * @param target A node on which to dispatch the event.
 * @param id Deleted client certificate id.
 * @param rev Updated revision of the client certificate.
 */
export declare function deletedState(target: EventTarget, id: string, rev: string): void;
