declare interface ArcNavigationEvents {
  /**
   * Dispatches an event to trigger a navigation in Advanced REST Client.
   * Use other events matching the navigation type before using this event.
   * This mean to be a general purpose event to limit number of event definitionns
   * if unnescesary.
   *
   * @param target A node on which to dispatch the event.
   * @param base The base route to navigate to.
   * @param opts Additional route parameters
   */
  navigate(target: EventTarget, base: string, opts?: any): void;

  /**
   * An event to be dispatched to trigger a navigation in Advanced REST Client
   * for an ARCRequest entity (a request data stored in the data store)
   *
   * @param target A node on which to dispatch the event.
   * @param requestId The id of the ARCRequest entity
   * @param requestType The type of the request
   */
  navigateRequest(target: EventTarget, requestId: string, requestType: string): void;

  /**
   * An event to be dispatched to trigger a navigation in Advanced REST Client
   * for an ARCRestApiIndex entity (a REST API data stored in the data store)
   *
   * @param target A node on which to dispatch the event.
   * @param api The id of the ARCRestApiIndex entity
   * @param requestType The requested API version
   * @param action The action type: detail, documentation
   */
  navigateRestApi(target: EventTarget, api: string, version: string, action: string): void;

  /**
   * An event to be dispatched to trigger a navigation in Advanced REST Client
   * for an ARCRestApiIndex entity (a REST API data stored in the data store)
   *
   * @param target A node on which to dispatch the event.
   * @param api The id of the ARCRestApiIndex entity
   * @param requestType The requested API version
   * @param action The action type: list, documentation
   */
  navigateProject(target: EventTarget, id: string, action: string): void;

  /**
   * Dispatches the menu popup event.
   *
   * @param id The ID of the ARCProject entity
   * @param action The action type: `detail`, `edit`
   */
  popupMenu(target: EventTarget, menu: string): void;
}

export declare const ArcNavigationEvents: ArcNavigationEvents;