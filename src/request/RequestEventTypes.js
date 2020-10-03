/**
 * Event types for ARC request object.
 * These only represent the events dispatched globally (events that bubble).
 * They do not have events that are specific to any part of the request editor.
 */
export const RequestEventTypes = {
  send: 'arcrequestsend',
  State: {
    urlChange: 'arcrequeststateurlchange',
    contentTypeChange: 'arcrequeststatecontenttypechange',
  },
};
Object.freeze(RequestEventTypes);
Object.freeze(RequestEventTypes.State);
