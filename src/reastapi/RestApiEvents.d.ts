import { RestApiFileProcessingResult } from './Events';

export interface IRestApiEvents {
  processFile(target: EventTarget, file: File): Promise<RestApiFileProcessingResult>;
  dataReady(target: EventTarget, model: any, type: string): void;
}

export const RestApiEvents: IRestApiEvents;
