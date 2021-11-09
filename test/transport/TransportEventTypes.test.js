import { assert } from '@open-wc/testing';
import { TransportEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('Transport', () => {
  describe('TransportEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(TransportEventTypes, 'object');
    });

    [
      ['beforeRequest', 'arcbeforerequest'],
      ['beforeRedirect', 'arcbeforeredirect'],
      ['headersReceived', 'archeadersreceived'],
      ['firstByte', 'arcfirstbytereceived'],
      ['request', 'arcrequest'],
      ['response', 'arcresponse'],
      ['transport', 'arctransport'],
      ['resendAuth', 'arcresendauth'],
      ['processResponse', 'arcprocessresponse'],
      ['abort', 'arcabort'],
      ['connect', 'transportconnect'],
      ['disconnect', 'transportdisconnect'],
      ['connectionSend', 'transportconnectionsend'],
      ['httpTransport', 'httptransport'],
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
