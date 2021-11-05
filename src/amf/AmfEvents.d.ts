import { AmfServiceProcessingOptions, ApiParseResult } from "./Amf";

/** @typedef {import('./Amf').AmfServiceProcessingOptions } AmfServiceProcessingOptions */
/** @typedef {import('./Amf').ApiParseResult } ApiParseResult */

declare interface IAmfEvents {
  /**
   * Downloads the file and processes it as a zipped API project.
   *
   * @param url API remote location.
   * @param mainFile API main file. If not set the program will try to find the best match.
   * @param md5 When set it will test data integrity with the MD5 hash
   * @param packaging Default to `zip`.
   * @returns Promise resolved to the AMF json-ld model.
   */
  processApiLink(target: EventTarget, url: string, mainFile?: string, md5?: string, packaging?: string): Promise<ApiParseResult>;
  /**
   * Parses API data to AMF model.
   *
   * @param buffer Buffer created from API file.
   * @param opts Processing options
   * @returns Promise resolved to the AMF json-ld model
   */
  processBuffer(target: EventTarget, buffer: Buffer, opts?: AmfServiceProcessingOptions): Promise<ApiParseResult>;
  /**
   * Processes file data.
   * If the blob is a type of `application/zip` it processes the file as a
   * zip file. Otherwise it processes it as a file.
   *
   * @param file File to process.
   * @returns Promise resolved to the AMF json-ld model
   */
  processApiFile(target: EventTarget, file?: File|Blob): Promise<ApiParseResult>;
  /**
   * Requests the user to ask for a main file of the API project.
   */
  selectApiMainFile(target: EventTarget, candidates?: string[]): Promise<string|undefined>;
}
export declare const AmfEvents: Readonly<IAmfEvents>;
