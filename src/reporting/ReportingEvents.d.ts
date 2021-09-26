export interface ApiErrorEventDetail {
  /**
   * The Error object used to initialize this event
   */
  error: Error;
  /**
   * The description used to initialize this event
   */
  description: string;
  /**
   * The component used to initialize this event
   */
  component: string | undefined;
}

/**
 * An event to be dispatched when an error occurs in any component.
 * The purpose of this event is to log application errors.
 */
export class ApiErrorEvent extends CustomEvent<ApiErrorEventDetail> {
  /**
   * @param error The error object that caused this event
   * @param description The description to be reported to the logger.
   * @param component Optional component name that triggered the exception.
   */
  constructor(error: Error, description: string, component?: string);
}

declare interface IReportingEvents {
  /**
   * Dispatches the general error event for logging purposes.
   * @param target A node on which to dispatch the event
   * @param error The error object that caused this event
   * @param description The description to be reported to the logger.
   * @param component Optional component name that triggered the exception.
   */
  error(target: EventTarget, error: Error, description: string, component?: string): void;
}

export declare const ReportingEvents: Readonly<IReportingEvents>;
