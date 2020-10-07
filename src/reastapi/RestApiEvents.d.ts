import { RestApiFileProcessingResult } from './Events';

declare interface RestApiEvents {
  processFile(target: EventTarget, file: File): Promise<RestApiFileProcessingResult>;
  dataReady(target: EventTarget, model: any, type: string): void;
}

export const RestApiEvents: RestApiEvents;
