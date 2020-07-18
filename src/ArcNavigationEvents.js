import * as NavigationEvents from './NavigationEvents.js';

export const ArcNavigationEvents = {
  /**
   * Dispatches an event to trigger a navigation in Advanced REST Client.
   * Use other events matching the navigation type before using this event.
   * This mean to be a general purpose event to limit number of event definitionns
   * if unnescesary.
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} route The base route to navigate to.
   * @param {any=} opts Additional route parameters
   */
  navigate: (target, route, opts) => {
    const e = new NavigationEvents.ARCNavigationEvent(route, opts);
    // if (!e.route) {
    //   // @ts-ignore
    //   e.route = route;
    // }
    target.dispatchEvent(e);
  },
  /**
   * An event to be dispatched to trigger a navigation in Advanced REST Client
   * for an ARCRequest entity (a request data stored in the data store)
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} requestId The id of the ARCRequest entity
   * @param {string} requestType The type of the request
   */
  navigateRequest: (target, requestId, requestType) => {
    const e = new NavigationEvents.ARCRequestNavigationEvent(requestId, requestType);
    target.dispatchEvent(e);
  },
  /**
   * An event to be dispatched to trigger a navigation in Advanced REST Client
   * for an ARCRestApiIndex entity (a REST API data stored in the data store)
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} api The id of the ARCRestApiIndex entity
   * @param {string} version The requested API version
   * @param {string} action The action type: detail, documentation
   */
  navigateRestApi: (target, api, version, action) => {
    const e = new NavigationEvents.ARCRestApiNavigationEvent(api, version, action);
    target.dispatchEvent(e);
  },

  /**
   * An event to be dispatched to trigger a navigation in Advanced REST Client
   * for an ARCRestApiIndex entity (a REST API data stored in the data store)
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} id The id of the ARCProject entity
   * @param {string} action The action type: `detail`, `edit`
   */
  navigateProject: (target, id, action) => {
    const e = new NavigationEvents.ARCProjectNavigationEvent(id, action);
    target.dispatchEvent(e);
  },

  /**
   * Dispatches the menu popup event.
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} menu The name of the menu
   */
  popupMenu: (target, menu) => {
    const e = new NavigationEvents.ARCMenuPopupEvent(menu);
    target.dispatchEvent(e);
  },
};

Object.freeze(ArcNavigationEvents);
