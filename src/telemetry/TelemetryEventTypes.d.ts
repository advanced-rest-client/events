/**
 * Event types for analytics implementation.
 */
declare interface TelemetryEventTypes {
  view: string;
  event: string;
  exception: string;
  social: string;
  timing: string;
}

export declare const TelemetryEventTypes: Readonly<TelemetryEventTypes>;
