import { RestApiFileProcessingResult } from './Events';

declare interface RestApiEvents {
  processfile(target: EventTarget, file: File): Promise<RestApiFileProcessingResult>;
  dataready(target: EventTarget, model: any, type: string): void;
}

export const RestApiEvents: RestApiEvents;
