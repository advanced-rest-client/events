export declare interface TelemetryCustomMetric {
  index: number;
  value: number;
}
export declare interface TelemetryCustomValue {
  index: number;
  value: string;
}
export declare interface TelemetryDetail {
  customMetrics?: TelemetryCustomMetric[];
  customDimensions?: TelemetryCustomValue[];
}
export declare interface TelemetryScreenViewDetail extends TelemetryDetail {
  screenName: string;
}
export declare interface TelemetryEventDetail extends TelemetryDetail {
  category: string;
  action: string;
  label?: string;
  value?: number;
}
export declare interface TelemetryExceptionDetail extends TelemetryDetail {
  description: string;
  fatal?: boolean;
}
export declare interface TelemetrySocialDetail extends TelemetryDetail {
  network: string;
  action: string;
  target: string;
}
export declare interface TelemetryTimingDetail extends TelemetryDetail {
  category: string;
  variable: string;
  value: number;
  label?: string;
}

export class TelemetryEvent<T extends TelemetryDetail> extends CustomEvent<T> {
  /**
   * @param type The event type
   * @param detail Any telemetry configuration.
   */
  constructor(type: string, detail: TelemetryDetail);
}

/**
 * An event to track application screen view
 */
export declare class TelemetryScreenEvent extends TelemetryEvent<TelemetryScreenViewDetail> {
  /**
   * @param detail Screen view details
   */
  constructor(detail: TelemetryScreenViewDetail);
}

/**
 * An event to track application tracking events
 */
export declare class TelemetryEventEvent extends TelemetryEvent<TelemetryEventDetail> {
  /**
   * @param detail Analytics event details
   */
  constructor(detail: TelemetryEventDetail);
}

/**
 * An event to track application exceptions
 */
export declare class TelemetryExceptionEvent extends TelemetryEvent<TelemetryExceptionDetail> {
  /**
   * @param detail Exception details
   */
  constructor(detail: TelemetryExceptionDetail);
}

/**
 * An event to track application social events
 */
export declare class TelemetrySocialEvent extends TelemetryEvent<TelemetrySocialDetail> {
  /**
   * @param detail Social action details
   */
  constructor(detail: TelemetrySocialDetail);
}

/**
 * An event to track application social events
 */
export declare class TelemetryTimingEvent extends TelemetryEvent<TelemetryTimingDetail> {
  /**
   * @param detail Timing details
   */
  constructor(detail: TelemetryTimingDetail);
}

/**
 * Sends application screen view event
 * @param target A node on which to dispatch the event
 * @param screenName The screen name
 * @param detail Analytics base configuration
 */
export function screenViewAction(target: EventTarget, screenName: string, detail?: TelemetryDetail): void;

/**
 * Sends a Google Analytics event information
 * @param target A node on which to dispatch the event
 * @param detail The event configuration
 */
export declare function eventAction(target: EventTarget, detail: TelemetryEventDetail): void;

/**
 * Sends a Google Analytics exception information
 * @param target A node on which to dispatch the event
 * @param description The exception description
 * @param fatal Whether the exception was fatal to the application
 * @param detail Analytics base configuration
 */
export declare function exceptionAction(target: EventTarget, description: string, fatal?: boolean, detail?: TelemetryDetail): void;

/**
 * Sends a Google Analytics social share information
 * @param target A node on which to dispatch the event
 * @param network The network where the shared content is shared
 * @param action The share action, eg. 'Share'
 * @param url The share url
 * @param detail Analytics base configuration
 */
export declare function socialAction(target: EventTarget, network: string, action: string, url: string, detail?: TelemetryDetail): void;

/**
 * Sends a Google Analytics application timing information
 * @param target A node on which to dispatch the event
 * @param category The timing category
 * @param variable The timing variable
 * @param value The timing value
 * @param label The timing label
 * @param detail Analytics base configuration
 */
export declare function timingAction(target: EventTarget, category: string, variable: string, value: number, label?: string, detail?: TelemetryDetail): void;
