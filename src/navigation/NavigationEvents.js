/* eslint-disable max-classes-per-file */
import { ArcNavigationEventTypes } from './ArcNavigationEventTypes.js';

export const routeValue = Symbol('routeValue');
export const optsValue = Symbol('optsValue');
export const menuValue = Symbol('menuValue');
export const idValue = Symbol('idValue');
export const typeValue = Symbol('typeValue');
export const versionValue = Symbol('versionValue');
export const actionValue = Symbol('actionValue');

export const REQUESTROUTE = 'request';
export const RESTAPIROUTE = 'rest-api';
export const PROJECTROUTE = 'project';

/**
 * An event to be dispatched to trigger a navigation in Advanced REST Client
 */
export class ARCNavigationRouteEvent extends CustomEvent {
  /**
   * The base route to navigate to used to initialize this event.
   */
  get route() {
    return this[routeValue];
  }

  /**
   * @param {string} type Event type
   * @param {string} route The base route to navigate to.
   */
  constructor(type, route) {
    super(type, {
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    this[routeValue] = route;
  }
}

/**
 * A general purpose event to be dispatched to trigger the navigation.
 */
export class ARCNavigationEvent extends CustomEvent {
  /**
   * The base route to navigate to used to initialize this event.
   */
  get route() {
    return this[routeValue];
  }

  /**
   * @param {string} route The base route to navigate to.
   * @param {any=} opts Additional route parameters
   */
  constructor(route, opts) {
    super(ArcNavigationEventTypes.navigate, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: opts,
    });
    this[routeValue] = route;
  }
}

/**
 * An event to be dispatched to popup a menu to a new window
 */
export class ARCMenuPopupEvent extends CustomEvent {
  /**
   * The name of the menu used to initialize this event.
   */
  get menu() {
    return this[menuValue];
  }

  /**
   * @param {string} menu The name of the menu
   */
  constructor(menu) {
    super(ArcNavigationEventTypes.popupMenu, {
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    this[menuValue] = menu;
  }
}

export const RequestActions = {
  open: 'open',
  edit: 'edit',
};
Object.freeze(RequestActions);

/**
 * An event to be dispatched to trigger a navigation for an ARCRequest object in Advanced REST Client
 */
export class ARCRequestNavigationEvent extends ARCNavigationRouteEvent {
  /**
   * @returns {string} The id of the ARCRequest entity used to initialized this object.
   */
  get requestId() {
    return this[idValue];
  }

  /**
   * @returns {string} The type of the request used to initialize this event.
   */
  get requestType() {
    return this[typeValue];
  }

  /**
   * @returns {string} The action type used to initialize this event.
   */
  get action() {
    return this[actionValue];
  }

  /**
   * @param {string} requestId The id of the ARCRequest entity
   * @param {string} requestType The type of the request
   * @param {string=} action Optional navigation action. Default to "open" action.
   */
  constructor(requestId, requestType, action) {
    super(ArcNavigationEventTypes.navigateRequest, REQUESTROUTE);
    this[idValue] = requestId;
    this[typeValue] = requestType;
    this[actionValue] = action || RequestActions.open;
  }
}

/**
 * An event to be dispatched to trigger a navigation for a REST API in Advanced REST Client
 */
export class ARCRestApiNavigationEvent extends ARCNavigationRouteEvent {
  /**
   * @returns {string} The id of the ARCRestApiIndex entity
   */
  get api() {
    return this[idValue];
  }

  /**
   * @returns {string} The action type used to initialize this event.
   */
  get action() {
    return this[typeValue];
  }

  /**
   * @returns {string} The requested API version used to initialize this event.
   */
  get version() {
    return this[versionValue];
  }

  /**
   * @param {string} api The id of the ARCRestApiIndex entity
   * @param {string} version The requested API version
   * @param {string} action The action type: list, documentation
   */
  constructor(api, version, action) {
    super(ArcNavigationEventTypes.navigateRestApi, RESTAPIROUTE);
    this[idValue] = api;
    this[typeValue] = action;
    this[versionValue] = version;
  }
}

export const ProjectActions = {
  /** 
   * Opens project screen
   */
  open: 'open',
  /** 
   * Edits project meta
   */
  edit: 'edit',
  /** 
   * Clears the workspace and adds project requests to it
   */
  replaceWorkspace: 'replaceWorkspace',
  /** 
   * Adds project requests to the current workspace
   */
  addWorkspace: 'addWorkspace',
};
Object.freeze(ProjectActions);

/**
 * An event to be dispatched to trigger a navigation for an ARCProject in Advanced REST Client
 */
export class ARCProjectNavigationEvent extends ARCNavigationRouteEvent {
  /**
   * @returns {string} The ID of the ARCProject entity
   */
  get id() {
    return this[idValue];
  }

  /**
   * @returns {string} The action type used to initialize this event.
   */
  get action() {
    return this[actionValue];
  }

  /**
   * @param {string} id The id of the ARCProject entity
   * @param {string=} action The action type: `open`, `edit`. Default to `open`.
   */
  constructor(id, action) {
    super(ArcNavigationEventTypes.navigateProject, PROJECTROUTE);
    this[idValue] = id;
    this[actionValue] = action || ProjectActions.open;
  }
}
