import { Project, Model } from '../../';
import {
  ARCModelReadEventDetail,
  ARCModelUpdateEventDetail,
  ARCModelDeleteEventDetail,
  ARCEntityDeletedEvent,
  ARCModelUpdateBulkEventDetail,
  ARCEntityListEvent,
  ARCModelReadBulkEventDetail, 
  ARCModelVoidResultEventDetail,
} from './BaseEvents';

export declare const projectIdValue: unique symbol;
export declare const requestIdValue: unique symbol;
export declare const requestTypeValue: unique symbol;

/**
 * Project read event
 */
export declare class ARCProjectReadEvent extends CustomEvent<ARCModelReadEventDetail<Project.ARCProject>> {
  /**
   * Requested project ID.
   */
  get id(): string;
  /**
   * Requested project revision ID.
   */
  get rev(): string|undefined;
  /**
   * @param id Project id
   * @param rev Project revision id
   */
  constructor(id: string, rev?: string);
}

/**
 * An event to be dispatched to read in bulk ARC project entities from the data store.
 */
export declare class ARCProjectReadBulkEvent extends CustomEvent<ARCModelReadEventDetail<Project.ARCProject[]>> {
  /**
   * The list of ids used to initialize this event.
   */
  get ids(): string[];
  [projectIdValue]: string[];
  
  /**
   * @param ids List of ids to read.
   */
  constructor(ids: string[]);
}

/**
 * An event dispatched to the store to update a project.
 */
export declare class ARCProjectUpdateEvent extends CustomEvent<ARCModelUpdateEventDetail<Project.ARCProject>> {
  /**
   * A project that is being updated.
   */
  get project(): Project.ARCProject;
  constructor(project: Project.ARCProject);
}

/**
 * An event dispatched to the store to update list of projects in a single transaction.
 */
export class ARCProjectUpdateBulkEvent extends CustomEvent<ARCModelUpdateBulkEventDetail<Project.ARCProject>> {
  /**
   * A list of projects that are being updated.
   */
  get projects(): Project.ARCProject[];
  /**
   * @param projects A list of projects to update.
   */
  constructor(projects: Project.ARCProject[]);
}

/**
 * An event dispatched from the store after updating a project.
 */
export declare class ARCProjectUpdatedEvent extends CustomEvent<Model.ARCEntityChangeRecord<Project.ARCProject>> {
  get changeRecord(): Model.ARCEntityChangeRecord<Project.ARCProject>;
  constructor(record: Model.ARCEntityChangeRecord<Project.ARCProject>);
}

/**
 * An event dispatched to the store to delete a project.
 */
export declare class ARCProjectDeleteEvent extends CustomEvent<ARCModelDeleteEventDetail> {
  /**
   * Deleted project ID.
   */
  get id(): string;
  /**
   * Deleted project revision ID.
   */
  get rev(): string|undefined;
  /**
   * @param id Project id
   * @param rev Project revision id
   */
  constructor(id: string, rev?: string);
}

/**
 * An event dispatched by the store after a project was deleted.
 */
export declare class ARCProjectDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * @param id Deleted project id
   * @param rev Updated revision id
   */
  constructor(id: string, rev: string);
}

/**
 * An event to be dispatched to list for project data in the data store.
 */
export declare class ARCProjectListEvent extends ARCEntityListEvent<Project.ARCProject> {
  /**
   * @param opts Query options.
   */
  constructor(opts?: Model.ARCModelListOptions);
}

/**
 * An event to be dispatched to list all projects data. Additionally it can be limited by
 * passed keys.
 */
export declare class ARCProjectListAllEvent extends CustomEvent<ARCModelReadBulkEventDetail<Project.ARCProject>> {
  /**
   * Project keys to read used to initialize the event
   */
  get keys(): string[]|undefined;

  /**
   * @param keys Project keys to read. When not set it reads all projects
   */
  constructor(keys?: string[]);
}


/**
 * This is an event that performs request copy/move/remove operations on a project
 */
export class ARCProjectMoveEvent extends CustomEvent<ARCModelVoidResultEventDetail> {
  /**
   * The target project id
   */
  get projectId(): string;

  /**
   * The target project id
   */
  get requestId(): string;

  /**
   * The target project id
   */
  get requestType(): string;
  
  /**
   * The index at which to add the request.
   */
  get position(): number|undefined;

  /**
   * @param type The event type
   * @param projectId The target project id
   * @param requestId The request that is being moved/copied
   * @param requestType The request type
   * @param position The index at which to add the request. When not set it add the request to the end of the list.
   */
  constructor(type: string, projectId: string, requestId: string, requestType: string, position?: number);
}

/**
 * Dispatches an event handled by the data store to read the project metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param id The ID of the project
 * @param rev The revision of the project. If not set then the latest revision is used.
 * @returns Promise resolved to a Project model.
 */
export declare function readAction(target: EventTarget, id: string, rev?: string): Promise<Project.ARCProject>;

/**
 * Dispatches an event handled by the data store to read multiple projects metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param ids The ids of projects to read
 * @returns Promise resolved to the list of projects.
 */
export declare function readBulkAction(target: EventTarget, ids: string[]): Promise<Project.ARCProject[]>;

/**
 * Dispatches an event handled by the data store to update a project metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param item The project object to update.
 * @returns Promise resolved to a Project model.
 */
export declare function updateAction(target: EventTarget, item: Project.ARCProject): Promise<Model.ARCEntityChangeRecord<Project.ARCProject>>;

/**
 * Dispatches an event handled by the data store to update a list of project metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param projects The list of project objects to update.
 * @return Promise resolved to a list of change records
 */
export declare function updateBulkAction(target: EventTarget, projects: Project.ARCProject[]): Promise<Model.ARCEntityChangeRecord<Project.ARCProject>[]>;

/**
 * Dispatches an event handled by the data store to delete a project metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param id The id of the project to delete.
 * @param rev The revision of the project. If not set then the latest revision is used.
 * @returns Promise resolved to the delete record
 */
export declare function deleteAction(target: EventTarget, id: string, rev?: string): Promise<Model.DeletedEntity>;

/**
 * Dispatches an event to list the project data.
 *
 * @param target A node on which to dispatch the event.
 * @param opts Query options.
 * @returns Project list result.
 */
export declare function listAction(target: EventTarget, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<Project.ARCProject>>;

/**
 * Dispatches an event to list all project data.
 *
 * @param target A node on which to dispatch the event.
 * @param keys Project keys to read. When not set it reads all projects
 * @return List of projects.
 */
export declare function listAllAction(target: EventTarget, keys?: string[]): Promise<Project.ARCProject[]>;

/**
 * Moves a request to a project and removes the request from other projects.
 *
 * @param target A node on which to dispatch the event.
 * @param projectId The target project id
 * @param requestId The request that is being moved/copied
 * @param requestType The request type
 * @param position The index at which to add the request. When not set it add the request to the end of the list.
 * @returns Promise resolved when the operation commits.
 */
export declare function moveToAction(target: EventTarget, projectId: string, requestId: string, requestType: string, position?: number): Promise<void>;

/**
 * Adds a request to a project.
 *
 * @param target A node on which to dispatch the event.
 * @param projectId The target project id
 * @param requestId The request that is being moved/copied
 * @param requestType The request type
 * @param position The index at which to add the request. When not set it add the request to the end of the list.
 * @returns Promise resolved when the operation commits.
 */
export declare function addToAction(target: EventTarget, projectId: string, requestId: string, requestType: string, position?: number): Promise<void>;

/**
 * Removes a request from a project.
 *
 * @param target A node on which to dispatch the event.
 * @param projectId The target project id
 * @param requestId The request that is being moved/copied
 * @returns Promise resolved when the operation commits.
 */
export declare function removeFromAction(target: EventTarget, projectId: string, requestId: string): Promise<void>;

/**
 * Dispatches an event after a project was updated
 *
 * @param target A node on which to dispatch the event.
 * @param record Change record
 */
export declare function updatedState(target: EventTarget, record: Model.ARCEntityChangeRecord<Project.ARCProject>): void;

/**
 * Dispatches an event after a project was deleted
 *
 * @param target A node on which to dispatch the event.
 * @param id Deleted project ID.
 * @param rev Updated revision of the project.
 */
export function deletedState(target: EventTarget, id: string, rev: string): void;
