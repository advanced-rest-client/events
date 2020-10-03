import { TelemetryDetail, TelemetryEventDetail } from './Events';

declare interface TelemetryEvents {
  /**
   * Sends application screen view event
   * @param target A node on which to dispatch the event
   * @param screenName The screen name
   * @param detail Analytics base configuration
   */
  view(target: EventTarget, screenName: string, detail?: TelemetryDetail): void;
  /**
   * Sends a Google Analytics event information
   * @param target A node on which to dispatch the event
   * @param detail The event configuration
   */
  event(target: EventTarget, detail: TelemetryEventDetail): void;
  /**
   * Sends a Google Analytics exception information
   * @param target A node on which to dispatch the event
   * @param description The exception description
   * @param fatal Whether the exception was fatal to the application
   * @param detail Analytics base configuration
   */
  exception(target: EventTarget, description: string, fatal?: boolean, detail?: TelemetryDetail): void;
  /**
   * Sends a Google Analytics social share information
   * @param target A node on which to dispatch the event
   * @param network The network where the shared content is shared
   * @param action The share action, eg. 'Share'
   * @param url The share url
   * @param detail Analytics base configuration
   */
  social(target: EventTarget, network: string, action: string, url: string, detail?: TelemetryDetail): void;
  /**
   * Sends a Google Analytics application timing information
   * @param target A node on which to dispatch the event
   * @param category The timing category
   * @param variable The timing variable
   * @param value The timing value
   * @param label The timing label
   * @param detail Analytics base configuration
   */
  timing(target: EventTarget, category: string, variable: string, value: number, label?: string, detail?: TelemetryDetail): void;
}

export const TelemetryEvents: TelemetryEvents;