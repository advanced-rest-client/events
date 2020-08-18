import { assert } from '@open-wc/testing';
import {
  RestApiProcessFileEvent,
  RestApiReadyEvent,
  RestApiEventTypes,
} from  '../../index.js';

describe('RestAPI', () => {
  describe('Events', () => {
    describe('RestApiProcessFileEvent', () => {
      const file = /** @type File */ (new Blob(['test'], { type: 'text/plain' }));

      it('has the correct type', () => {
        const e = new RestApiProcessFileEvent(file);
        assert.equal(e.type, RestApiEventTypes.processfile);
      });

      it('has the file property', () => {
        const e = new RestApiProcessFileEvent(file);
        assert.deepEqual(e.file, file);
      });

      it('bubbles', () => {
        const e = new RestApiProcessFileEvent(file);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new RestApiProcessFileEvent(file);
        assert.isTrue(e.composed);
      });

      it('is cancelable', () => {
        const e = new RestApiProcessFileEvent(file);
        assert.isTrue(e.cancelable);
      });
    });

    describe('RestApiReadyEvent', () => {
      const model = { '@type': ['test'] };
      const type = 'RAML 1.0';

      it('has the correct type', () => {
        const e = new RestApiReadyEvent(model, type);
        assert.equal(e.type, RestApiEventTypes.dataready);
      });

      it('has the model property on the detail', () => {
        const e = new RestApiReadyEvent(model, type);
        assert.deepEqual(e.detail.model, model);
      });

      it('has the type property on the detail', () => {
        const e = new RestApiReadyEvent(model, type);
        assert.equal(e.detail.type, type);
      });

      it('bubbles', () => {
        const e = new RestApiReadyEvent(model, type);
        assert.isTrue(e.bubbles);
      });

      it('is composed', () => {
        const e = new RestApiReadyEvent(model, type);
        assert.isTrue(e.composed);
      });

      it('is not cancelable', () => {
        const e = new RestApiReadyEvent(model, type);
        assert.isFalse(e.cancelable);
      });
    });
  });
});
