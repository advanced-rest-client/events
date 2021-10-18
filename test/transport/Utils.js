/** @typedef {import('../../').ArcRequest.ArcEditorRequest} ArcEditorRequest */
/** @typedef {import('../../').ArcRequest.TransportRequest} TransportRequest */
/** @typedef {import('../../').ArcRequest.ArcBaseRequest} ArcBaseRequest */

/**
 * @returns {ArcEditorRequest}
 */
export function generateEditorRequest() {
  const request = /** @type ArcBaseRequest */ ({ url: 'https://', method: 'GET', });
  const id = '1234568';
  return {
    id,
    request,
  };
}
/**
 * @returns {TransportRequest}
 */
export function generateTransportRequest() {
  const request = /** @type ArcBaseRequest */ ({ url: 'https://', method: 'GET', });
  return {
    endTime: Date.now(),
    httpMessage: 'GET /test HTTP 1.1\n\n',
    startTime: Date.now() - 100,
    method: request.method,
    url: request.url,
    headers: request.headers,
    payload: request.payload,
  };
}
