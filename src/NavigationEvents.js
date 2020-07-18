/* eslint-disable max-classes-per-file */
import { ArcNavigationEventTypes } from './ArcNavigationEventTypes.js';

export const baseValue = Symbol('baseValue');
export const optsValue = Symbol('optsValue');
export const menuValue = Symbol('menuValue');
export const idValue = Symbol('idValue');
export const typeValue = Symbol('typeValue');
export const versionValue = Symbol('versionValue');

export const REQUESTROUTE = 'request';
export const RESTAPIROUTE = 'rest-api';
export const PROJECTROUTE = 'project';

/**
 * An event to be dispatched to trigger a navigation in Advanced REST Client
 */
export class ARCNavigationBaseEvent extends CustomEvent {
  /**
   * The base route to navigate to used to initialize this event.
   */
  get base() {
    return this[baseValue];
  }

  /**
   * @param {string} type Event type
   * @param {string} base The base route to navigate to.
   */
  constructor(type, base) {
    super(type, {
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    this[baseValue] = base;
  }
}

/**
 * A general purpose event to be dispatched to trigger the navigation.
 */
export class ARCNavigationEvent extends CustomEvent {
  /**
   * The base route to navigate to used to initialize this event.
   */
  get base() {
    return this[baseValue];
  }

  /**
   * @param {string} base The base route to navigate to.
   * @param {any=} opts Additional route parameters
   */
  constructor(base, opts) {
    super(ArcNavigationEventTypes.navigate, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: opts,
    });
    this[baseValue] = base;
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

/**
 * An event to be dispatched to trigger a navigation for an ARCRequest object in Advanced REST Client
 */
export class ARCRequestNavigationEvent extends ARCNavigationBaseEvent {
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
   * @param {string} requestId The id of the ARCRequest entity
   * @param {string} requestType The type of the request
   */
  constructor(requestId, requestType) {
    super(ArcNavigationEventTypes.navigateRequest, REQUESTROUTE);
    this[idValue] = requestId;
    this[typeValue] = requestType;
  }
}

/**
 * An event to be dispatched to trigger a navigation for a REST API in Advanced REST Client
 */
export class ARCRestApiNavigationEvent extends ARCNavigationBaseEvent {
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

/**
 * An event to be dispatched to trigger a navigation for an ARCProject in Advanced REST Client
 */
export class ARCProjectNavigationEvent extends ARCNavigationBaseEvent {
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
    return this[typeValue];
  }

  /**
   * @param {string} id The id of the ARCProject entity
   * @param {string} action The action type: `detail`, `edit`
   */
  constructor(id, action) {
    super(ArcNavigationEventTypes.navigateProject, PROJECTROUTE);
    this[idValue] = id;
    this[typeValue] = action;
  }
}
