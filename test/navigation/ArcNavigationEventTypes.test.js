import { assert } from '@open-wc/testing';
import { ArcNavigationEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('ArcNavigationEventTypes', () => {
  it('is frozen', () => {
    assert.throws(() => {
      // @ts-ignore
      ArcNavigationEventTypes = { read: '' };
    });
  });

  [
    ['navigate', 'arcnavigate'],
    ['navigateExternal', 'arcnavigateexternal'],
    ['navigateRequest', 'arcnavigaterequest'],
    ['navigateRestApi', 'arcnavigaterestapi'],
    ['navigateProject', 'arcnavigateproject'],
    ['popupMenu', 'arcpopupmenu'],
    ['helpTopic', 'arcnavigatehelptopic'],
  ].forEach(([prop, value]) => {
    it(`has ${prop} property`, () => {
      assert.equal(ArcNavigationEventTypes[prop], value);
    });
  });

  describe('unique events', () => {
    it('has unique events for root properties', () => {
      ensureUnique('ArcNavigationEventTypes', ArcNavigationEventTypes);
    });
  });
});
