import { EventTypes } from "../EventTypes.js";
import { ArcContextEvent } from "../BaseEvents.js";

/** @typedef {import('./Amf').AmfServiceProcessingOptions } AmfServiceProcessingOptions */
/** @typedef {import('./Amf').ApiParseResult } ApiParseResult */

export const AmfEvents = {
  /**
   * Downloads the file and processes it as a zipped API project.
   *
   * @param {EventTarget} target
   * @param {string} url API remote location.
   * @param {string=} mainFile API main file. If not set the program will try to find the best match.
   * @param {string=} md5 When set it will test data integrity with the MD5 hash
   * @param {string=} packaging Default to `zip`.
   * @return {Promise<ApiParseResult>} Promise resolved to the AMF json-ld model.
   */
  processApiLink: async (target, url, mainFile, md5, packaging) => {
    const e = new ArcContextEvent(EventTypes.Amf.processApiLink, {
      url, mainFile, md5, packaging,
    });
    target.dispatchEvent(e);
    return e.detail.result;
  },
  /**
   * Parses API data to AMF model.
   * @param {EventTarget} target
   * @param {Buffer} buffer Buffer created from API file.
   * @param {AmfServiceProcessingOptions=} opts Processing options
   * @return {Promise<ApiParseResult>} Promise resolved to the AMF json-ld model
   */
  processBuffer: async (target, buffer, opts) => {
    const e = new ArcContextEvent(EventTypes.Amf.processBuffer, {
      buffer, opts,
    });
    target.dispatchEvent(e);
    return e.detail.result;
  },

  /**
   * Processes file data.
   * If the blob is a type of `application/zip` it processes the file as a
   * zip file. Otherwise it processes it as a file.
   *
   * @param {EventTarget} target
   * @param {File|Blob} file File to process.
   * @return {Promise<ApiParseResult>} Promise resolved to the AMF json-ld model
   */
  processApiFile: async (target, file) => {
    const e = new ArcContextEvent(EventTypes.Amf.processApiFile, {
      file,
    });
    target.dispatchEvent(e);
    return e.detail.result;
  },
  /**
   * @param {EventTarget} target
   * @param {string[]} candidates
   * @return {Promise<string|undefined>}
   */
  selectApiMainFile: async (target, candidates) => {
    const e = new ArcContextEvent(EventTypes.Amf.selectApiMainFile, {
      candidates,
    });
    target.dispatchEvent(e);
    return e.detail.result;
  },
};
