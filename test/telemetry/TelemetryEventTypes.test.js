import { assert } from '@open-wc/testing';
import { TelemetryEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('Telemetry', () => {
  describe('TelemetryEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(TelemetryEventTypes, 'object');
    });

    [
      ['view', 'telemetryscreenview'],
      ['event', 'telemetryevent'],
      ['exception', 'telemetryexception'],
      ['social', 'telemetrysocial'],
      ['timing', 'telemetrytiming'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(TelemetryEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('RequestEventTypes', TelemetryEventTypes);
    });
  });
});
