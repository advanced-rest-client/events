import { WebsocketEditorRequest } from "@advanced-rest-client/arc-types/src/request/WebSocket";

declare interface RequestStateEvents {
  /**
   * Dispatches an invent to inform about request URL change
   * @param target A node on which to dispatch the event
   * @param value The new URL value
   */
  urlChange(target: EventTarget, value: string): void;
  /**
   * Dispatches an invent to inform about request URL change
   * @param target A node on which to dispatch the event
   * @param value The new content-type value
   */
  contentTypeChange(target: EventTarget, value: string): void;
}

declare interface RequestEvents {
  /**
 * Dispatches an event to inform the request logic to send current request.
 * @param {EventTarget} target A node on which to dispatch the event
 */
  send(target: EventTarget): void;
  /**
   * Dispatches an event to make a web socket connection
   * @param target A node on which to dispatch the event
   * @param editorRequest The editor web socket request associated with the event
   */
  connect(target: EventTarget, editorRequest: WebsocketEditorRequest): void;
  /**
   * Dispatches an event to close a web socket connection
   * @param target A node on which to dispatch the event
   * @param editorRequest The editor web socket request associated with the event
   */
  disconnect(target: EventTarget, editorRequest: WebsocketEditorRequest): void;
  /**
   * Dispatches an event to close a web socket connection
   * @param target A node on which to dispatch the event
   * @param editorRequest The editor web socket request associated with the event
   */
  sendWebSocket(target: EventTarget, editorRequest: WebsocketEditorRequest): void;
  State: RequestStateEvents;
}

export const RequestEvents: RequestEvents;
