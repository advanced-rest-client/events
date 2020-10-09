import { DataGenerator } from "@advanced-rest-client/arc-data-generator";

/** @typedef {import('@advanced-rest-client/arc-types').ArcRequest.ArcEditorRequest} ArcEditorRequest */
/** @typedef {import('@advanced-rest-client/arc-types').ArcRequest.TransportRequest} TransportRequest */

const generator = new DataGenerator();

/**
 * @returns {ArcEditorRequest}
 */
export function generateEditorRequest() {
  const request = generator.generateSavedItem();
  const id = generator.chance.guid();
  return {
    id,
    request,
  };
}
/**
 * @returns {TransportRequest}
 */
export function generateTransportRequest() {
  const request = generator.generateSavedItem();
  return {
    endTime: Date.now(),
    httpMessage: generator.chance.paragraph(),
    startTime: Date.now() - 100,
    method: request.method,
    url: request.url,
    headers: request.headers,
    payload: request.payload,
  };
}