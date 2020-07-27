import { assert } from '@open-wc/testing';
import { ArcNavigationEventTypes } from  '../../index.js';
import { ensureUnique } from '../helpers/EventHelper.js';

describe('ArcModelEventTypes', () => {
  it('is frozen', () => {
    assert.throws(() => {
      // @ts-ignore
      ArcNavigationEventTypes = { read: '' };
    });
  });

  [
    ['navigate', 'arcnavigate'],
    ['navigateRequest', 'arcnavigaterequest'],
    ['navigateRestApi', 'arcnavigaterestapi'],
    ['navigateProject', 'arcnavigateproject'],
    ['popupMenu', 'arcpopupmenu'],
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
