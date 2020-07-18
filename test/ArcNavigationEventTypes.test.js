import { assert } from '@open-wc/testing';
import { ArcNavigationEventTypes } from  '../index.js';

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
    const names = [];

    function ensureUnique(namespace, src) {
      for (const [key, value] of Object.entries(src)) {
        if (names.includes(value)) {
          throw new Error(`${namespace}.${key} has duplicated event name ${value}`);
        }
        names.push(value);
      }
    }

    it('has unique events for root properties', () => {
      ensureUnique('ArcNavigationEventTypes', ArcNavigationEventTypes);
    });
  });
});
