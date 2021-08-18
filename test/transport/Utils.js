import { ArcMock } from '@advanced-rest-client/arc-data-generator';

/** @typedef {import('@advanced-rest-client/arc-types').ArcRequest.ArcEditorRequest} ArcEditorRequest */
/** @typedef {import('@advanced-rest-client/arc-types').ArcRequest.TransportRequest} TransportRequest */

const generator = new ArcMock();

/**
 * @returns {ArcEditorRequest}
 */
export function generateEditorRequest() {
  const request = generator.http.saved();
  const id = generator.types.uuid();
  return {
    id,
    request,
  };
}
/**
 * @returns {TransportRequest}
 */
export function generateTransportRequest() {
  const request = generator.http.saved();
  return {
    endTime: Date.now(),
    httpMessage: generator.lorem.paragraph(),
    startTime: Date.now() - 100,
    method: request.method,
    url: request.url,
    headers: request.headers,
    payload: request.payload,
  };
}
