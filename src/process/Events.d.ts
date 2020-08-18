export declare interface ProcessEventDetail {
  /**
   * The process id
   */
  pid: string;
}

export declare interface ProcessStartDetail extends ProcessEventDetail {
  /**
   * Optional message to the user.
   */
  message?: string;
}

export declare interface ProcessErrorDetail extends ProcessEventDetail {
  /**
   * The error caused the process to stop
   */
  error: Error;
}

/**
 * An event to be dispatched when the application is stating a long running process
 * in the background. The side effect of the event is the UI showing a process
 * indicator.
 */
export declare class ProcessStartEvent extends CustomEvent<ProcessStartDetail> {
  /**
   * @param pid The id of the process. The same id has to be passed to the stop event.
   * @param message Optioonal message rendered in the UI.
   */
  constructor(pid: string, message?: string);
}

/**
 * An event to be dispatched when the application has finished a long running process
 * in the background.
 */
export declare class ProcessStopEvent extends CustomEvent<ProcessEventDetail> {
  /**
   * @param pid The id of the process used to start it.
   */
  constructor(pid: string);
}

/**
 * An event to be dispatched when the application has finished a long running process
 * in the background with an error.
 */
export declare class ProcessErrorEvent extends CustomEvent<ProcessErrorDetail> {
  /**
   * @param pid The id of the process used to start it.
   * @param error The error object caused the event
   */
  constructor(pid: string, error: Error);
}

export declare function startAction(target: EventTarget, pid: string, message?: string): void;

export declare function stopAction(target: EventTarget, pid: string): void;

export declare function errorAction(target: EventTarget, pid: string, error: Error): void;
