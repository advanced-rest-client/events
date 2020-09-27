export const baseValue: symbol;
export const optsValue: symbol;
export const menuValue: symbol;
export const idValue: symbol;
export const typeValue: symbol;
export const versionValue: symbol;

export declare const REQUESTROUTE: string;
export declare const RESTAPIROUTE: string;
export declare const PROJECTROUTE: string;

/**
 * An event to be dispatched to trigger a navigation in Advanced REST Client.
 * It is the base for other events
 */
export declare class ARCNavigationRouteEvent extends CustomEvent<void> {
  /**
   * The base route to navigate to used to initialize this event.
   */
  readonly route: string;

  /**
   * @param type Event type
   * @param route The base route to navigate to.
   */
  constructor(type: string, route: string);
}

/**
 * An event to be dispatched to trigger a navigation in Advanced REST Client.
 * Use other events matching the navigation type before using this event.
 * This mean to be a general purpose event to limit number of event definitions
 * if unnecessary.
 */
export declare class ARCNavigationEvent extends CustomEvent<any> {
  /**
   * The base route to navigate to used to initialize this event.
   */
  readonly route: string;

  /**
   * @param route The base route to navigate to.
   * @param opts Additional route parameters
   */
  constructor(route: string, opts?: any);
}

/**
 * An event to be dispatched to popup a menu to a new window
 */
export declare class ARCMenuPopupEvent extends CustomEvent<void> {
  /**
   * The name of the menu used to initialize this event.
   */
  readonly menu: string;

  /**
   * @param menu The name of the menu
   */
  constructor(menu: string);
}

/**
 * - open: open request in the current workspace
 * - edit: edit request meta data
 */
export declare interface RequestActions {
  open: string;
  edit: string;
}

/**
 * An event to be dispatched to trigger a navigation for an ARCRequest object in Advanced REST Client
 */
export declare class ARCRequestNavigationEvent extends ARCNavigationRouteEvent {
  /**
   * The id of the ARCRequest entity used to initialized this object.
   */
  readonly requestId: string;
  /**
   * The type of the request used to initialize this event.
   */
  readonly requestType: string;

  /**
   * The action to perform when navigation is being handled.
   */
  readonly action: string;

  /**
   * @param requestId The id of the ARCRequest entity
   * @param requestType The type of the request
   * @param action Optional navigation action. Default to "open" action.
   */
  constructor(requestId: string, requestType: string, action?: string);
}

/**
 * An event to be dispatched to trigger a navigation for a REST API in Advanced REST Client
 */
export declare class ARCRestApiNavigationEvent extends ARCNavigationRouteEvent {
  /**
   * The id of the ARCRestApiIndex entity used to initialized this object.
   */
  readonly api: string;
  /**
   * The requested API version used to initialize this event.
   */
  readonly version: string;
  /**
   * The action type used to initialize this event.
   */
  readonly action: string;

  /**
   * @param api The id of the ARCRestApiIndex entity
   * @param requestType The requested API version
   * @param action The action type: list, documentation
   */
  constructor(api: string, version: string, action: string);
}

export declare interface ProjectActions {
  open: string; 
  edit: string;
}

/**
 * An event to be dispatched to trigger a navigation for an ARCProject in Advanced REST Client
 */
export declare class ARCProjectNavigationEvent extends ARCNavigationRouteEvent {
  /**
   * The ID of the ARCProject entity used to initialized this object.
   */
  readonly id: string;
  /**
   * The action type used to initialize this event.
   */
  readonly action: string;

  /**
   * @param id The ID of the ARCProject entity
   * @param action The action type: `open`, `edit`. Default to `open`.
   */
  constructor(id: string, action?: string);
}
