import * as NavigationEvents from './NavigationEvents.js';
import { ArcContextVoidEvent } from '../BaseEvents.js';
import { EventTypes } from '../EventTypes.js';

/** @typedef {import('./NavigationEvents').ExternalNavigationOptions} ExternalNavigationOptions */
/** @typedef {import('./NavigationEvents').RequestActionType} RequestActionType */
/** @typedef {import('./NavigationEvents').ProjectActionType} ProjectActionType */

export const ArcNavigationEvents = {
  /**
   * Dispatches an event to trigger a navigation in Advanced REST Client.
   * Use other events matching the navigation type before using this event.
   * This mean to be a general purpose event to limit number of event definitions
   * if unnecessary.
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} route The base route to navigate to.
   * @param {any=} opts Additional route parameters
   */
  navigate: (target, route, opts) => {
    const e = new NavigationEvents.ARCNavigationEvent(route, opts);
    target.dispatchEvent(e);
  },
  /**
   * Dispatches an event to inform the application to open a browser window.
   * This is a general purpose action. It has the `detail` object with optional
   * `purpose` property which can be used to support different kind of external navigation.
   * 
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} url The URL to open
   * @param {ExternalNavigationOptions=} opts  Additional request parameters
   */
  navigateExternal: (target, url, opts) => {
    const e = new NavigationEvents.ARCExternalNavigationEvent(url, opts);
    target.dispatchEvent(e);
  },
  /**
   * An event to be dispatched to trigger a navigation in Advanced REST Client
   * for an ARCRequest entity (a request data stored in the data store)
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} requestId The id of the ARCRequest entity
   * @param {string} requestType The type of the request
   * @param {RequestActionType=} action Optional navigation action. Default to "open" action.
   */
  navigateRequest: (target, requestId, requestType, action) => {
    const e = new NavigationEvents.ARCRequestNavigationEvent(requestId, requestType, action);
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
   * @param {ProjectActionType=} action The action type: `open`, `edit`. Default to `open`.
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

  /**
   * Dispatches the navigate help event
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} topic The help topic name
   */
  helpTopic: (target, topic) => {
    const e = new NavigationEvents.ARCHelpTopicEvent(topic);
    target.dispatchEvent(e);
  },

  /**
   * Opens an URL withing ARC's session management area.
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} url The URL to open
   * @param {string} purpose The purpose of the URL.
   */
  openWebUrl: (target, url, purpose) => {
    const e = new ArcContextVoidEvent(EventTypes.Navigation.openWebUrl, {
      url, purpose,
    });
    target.dispatchEvent(e);
  },
};

Object.freeze(ArcNavigationEvents);
