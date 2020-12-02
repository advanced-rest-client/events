import { assert } from '@open-wc/testing';
import { WorkspaceEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('Workspace', () => {
  describe('WorkspaceEventTypes', () => {
    it('has the namespace', () => {
      assert.typeOf(WorkspaceEventTypes, 'object');
    });

    [
      ['appendExport', 'domainworkspaceappendexport'],
      ['appendRequest', 'domainworkspaceappendrequest'],
      ['read', 'domainworkspaceread'],
      ['write', 'domainworkspacewrite'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(WorkspaceEventTypes[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('WorkspaceEventTypes', WorkspaceEventTypes);
    });
  });
});
