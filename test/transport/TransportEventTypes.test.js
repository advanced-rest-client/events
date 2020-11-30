import { assert } from '@open-wc/testing';
import { TransportEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('Transport', () => {
  describe('TransportEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(TransportEventTypes, 'object');
    });

    [
      ['beforeRequest', 'apibeforerequest'],
      ['beforeRedirect', 'apibeforeredirect'],
      ['headersReceived', 'apiheadersreceived'],
      ['firstByte', 'apifirstbytereceived'],
      ['request', 'apirequest'],
      ['response', 'apiresponse'],
      ['transport', 'apitransport'],
      ['resendAuth', 'apiresendauth'],
      ['processResponse', 'apiprocessresponse'],
      ['abort', 'apiabort'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(TransportEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('TransportEventTypes', TransportEventTypes);
    });
  });
});
