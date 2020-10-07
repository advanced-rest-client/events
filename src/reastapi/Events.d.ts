import {ResultEventDetail} from '../BaseEvents';
export const fileValue: unique symbol;

/**
 * This interface is temporary until the API processing module is upgraded to support types.
 */
export declare interface RestApiFileProcessingResult {
  /**
   * The processed data model
   */
  model: any;
  /**
   * API type (RAML 1.0, OAS 3.0, etc)
   */
  type: string;
}

/**
 * An event to be dispatched to inform the requests workspace to append request data
 * from the export object.
 */
export declare class RestApiProcessFileEvent extends CustomEvent<ResultEventDetail<RestApiFileProcessingResult>> {
  [fileValue]: File;
  /**
   * The file to process
   */
  file: File;
  /**
   * @param File The file to process
   */
  constructor(file: File);
}

/**
 * An event to be dispatched to inform the requests workspace to append a request object.
 */
export declare class RestApiReadyEvent extends CustomEvent<RestApiFileProcessingResult> {
  /**
   * @param model The processed data model
   * @param model API type (RAML 1.0, OAS 3.0, etc)
   */
  constructor(model: any, type: string);
}

export declare function processFileAction(target: EventTarget, file: File): void;

export declare function stateReadyAction(target: EventTarget, model: any, type: string): void;
