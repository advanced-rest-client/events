/* eslint-disable max-classes-per-file */
import { EventTypes } from '../EventTypes.js';
import { ARCEntityDeletedEvent, ARCEntityListEvent } from './BaseEvents.js';

/** @typedef {import('../../').Project.ARCProject} ARCProject */
/** @typedef {import('../../').Model.ARCModelListResult} ARCModelListResult */
/** @typedef {import('../../').Model.ARCModelListOptions} ARCModelListOptions */
/** @typedef {import('../../').Model.ARCEntityChangeRecord} ARCEntityChangeRecord */
/** @typedef {import('../../').Model.DeletedEntity} DeletedEntity */

export const projectValue = Symbol('projectValue');
export const projectIdValue = Symbol('projectIdValue');
export const revisionValue = Symbol('revisionValue');
export const changeRecordValue = Symbol('changeRecordValue');
export const idsValue = Symbol('idsValue');
export const requestIdValue = Symbol('requestIdValue');
export const requestTypeValue = Symbol('requestTypeValue');
export const positionValue = Symbol('requestTypeValue');

/**
 * An event to be dispatched to read an ARC project from the data store.
 */
export class ARCProjectReadEvent extends CustomEvent {
  /**
   * @param {string} id Project id
   * @param {string=} rev Project revision id
   */
  constructor(id, rev) {
    if (!id) {
      throw new Error('The ID must be set on the detail object.');
    }
    super(EventTypes.Model.Project.read, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[projectIdValue] = id;
    this[revisionValue] = rev;
  }

  /**
   * Requested project ID.
   * @return {string} Project ID used to initialize the event.
   */
  get id() {
    return this[projectIdValue];
  }

  /**
   * Requested project revision ID.
   * @return {string|null} Project revision ID used to initialize the event.
   */
  get rev() {
    return this[revisionValue] || null;
  }
}

/**
 * An event to be dispatched to read in bulk ARC project entities from the data store.
 */
export class ARCProjectReadBulkEvent extends CustomEvent {
  /**
   * @return {string[]} The list of ids used to initialize this event.
   */
  get ids() {
    return this[projectIdValue];
  }

  /**
   * @param {string[]} ids List of ids to read.
   */
  constructor(ids) {
    if (!Array.isArray(ids)) {
      throw new Error('The projects lists is missing.');
    }
    super(EventTypes.Model.Project.readBulk, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[projectIdValue] = ids;
  }
}

/**
 * An event dispatched to the store to update a project.
 */
export class ARCProjectUpdateEvent extends CustomEvent {
  /**
   * @param {ARCProject} project A project to update.
   */
  constructor(project) {
    super(EventTypes.Model.Project.update, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[projectValue] = project;
  }

  /**
   * @return {ARCProject} A project that is being updated.
   */
  get project() {
    return this[projectValue];
  }
}

/**
 * An event dispatched to the store to update list of projects in a single transaction.
 */
export class ARCProjectUpdateBulkEvent extends CustomEvent {
  /**
   * @param {ARCProject[]} projects A list of projects to update.
   */
  constructor(projects) {
    super(EventTypes.Model.Project.updateBulk, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[projectValue] = projects;
  }

  /**
   * @return {ARCProject[]} A list of projects that are being updated.
   */
  get projects() {
    return this[projectValue];
  }
}

/**
 * An event dispatched from the store after updating a project
 */
export class ARCProjectUpdatedEvent extends Event {
  /**
   * @param {ARCEntityChangeRecord} record Project change record.
   */
  constructor(record) {
    super(EventTypes.Model.Project.State.update, {
      bubbles: true,
      composed: true,
    });
    this[changeRecordValue] = record;
  }

  /**
   * @return {ARCEntityChangeRecord} Change record
   */
  get changeRecord() {
    return this[changeRecordValue];
  }
}

/**
 * An event dispatched to the store to delete a project.
 */
export class ARCProjectDeleteEvent extends CustomEvent {
  /**
   * @param {string} id Project id
   * @param {string=} rev Project revision id
   */
  constructor(id, rev) {
    super(EventTypes.Model.Project.delete, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {}
    });
    this[projectIdValue] = id;
    this[revisionValue] = rev;
  }

  /**
   * Requested project ID.
   * @return {string} Project ID used to initialize the event.
   */
  get id() {
    return this[projectIdValue];
  }

  /**
   * Requested project revision ID.
   * @return {string|null} Project revision ID used to initialize the event.
   */
  get rev() {
    return this[revisionValue] || null;
  }
}

/**
 * An event dispatched by the store after a project was deleted.
 */
export class ARCProjectDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * @param {string} id Deleted project id
   * @param {string} rev Updated revision id
   */
  constructor(id, rev) {
    super(EventTypes.Model.Project.State.delete, id, rev);
  }
}

/**
 * An event to be dispatched to list for project data in the data store.
 */
export class ARCProjectListEvent extends ARCEntityListEvent {
  /**
   * @param {ARCModelListOptions=} opts Query options.
   */
  constructor(opts) {
    super(EventTypes.Model.Project.list, opts);
  }
}

/**
 * An event to be dispatched to list all projects data. Additionally it can be limited by
 * passed keys.
 */
export class ARCProjectListAllEvent extends CustomEvent {
  /**
   * @returns {string[]|undefined} Project keys to read used to initialize the event
   */
  get keys() {
    return this[idsValue];
  }

  /**
   * @param {string[]=} keys Project keys to read. When not set it reads all projects
   */
  constructor(keys) {
    super(EventTypes.Model.Project.listAll, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[idsValue] = keys;
  }
}

/**
 * Dispatches an event handled by the data store to read the project metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The ID of the project
 * @param {string=} rev The revision of the project. If not set then the latest revision is used.
 * @return {Promise<ARCProject>} Promise resolved to a Project model.
 */
export async function readAction(target, id, rev) {
  const e = new ARCProjectReadEvent(id, rev);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to read multiple projects metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string[]} ids The ids of projects to read
 * @returns {Promise<ARCProject[]>} Promise resolved to the list of projects.
 */
export async function readBulkAction(target, ids) {
  const e = new ARCProjectReadBulkEvent(ids);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to update a project metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCProject} item The project object to update.
 * @return {Promise<ARCEntityChangeRecord>} Promise resolved to a Project model.
 */
export async function updateAction(target, item) {
  const e = new ARCProjectUpdateEvent(item);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to update a list of project metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCProject[]} projects The list of project objects to update.
 * @return {Promise<ARCEntityChangeRecord[]>} Promise resolved to a list of change records
 */
export async function updateBulkAction(target, projects) {
  const e = new ARCProjectUpdateBulkEvent(projects);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the data store to delete a project metadata.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id The id of the project to delete.
 * @param {string=} rev The revision of the project. If not set then the latest revision is used.
 * @return {Promise<DeletedEntity>} Promise resolved to the delete record
 */
export async function deleteAction(target, id, rev) {
  const e = new ARCProjectDeleteEvent(id, rev);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event to list the project data.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCModelListOptions=} opts Query options.
 * @return {Promise<ARCModelListResult>} Project list result.
 */
export async function listAction(target, opts) {
  const e = new ARCProjectListEvent(opts);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event to list all project data.
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string[]=} keys Project keys to read. When not set it reads all projects
 * @return {Promise<ARCProject[]>} List of projects.
 */
export async function listAllAction(target, keys) {
  const e = new ARCProjectListAllEvent(keys);
  target.dispatchEvent(e);
  return e.detail.result;
}

//
// State events
//

/**
 * Dispatches an event after a project was updated
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {ARCEntityChangeRecord} record Change record
 */
export function updatedState(target, record) {
  const e = new ARCProjectUpdatedEvent(record);
  target.dispatchEvent(e);
}

/**
 * Dispatches an event after a project was deleted
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} id Deleted project ID.
 * @param {string} rev Updated revision of the project.
 */
export function deletedState(target, id, rev) {
  const e = new ARCProjectDeletedEvent(id, rev);
  target.dispatchEvent(e);
}
