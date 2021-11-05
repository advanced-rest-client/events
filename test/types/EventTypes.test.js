import { assert } from '@open-wc/testing';
import { EventTypes } from  '../../index.js';
import { ensureUnique } from './UniqueEvents.js';

describe('EventTypes', () => {
  describe('Amf', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Amf, 'object');
    });

    [
      ['processApiLink', 'amfprocessapilink'],
      ['processBuffer', 'amfprocessbuffer'],
      ['processApiFile', 'amfprocessapifile'],
      ['selectApiMainFile', 'amfselectapimainfile'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Amf[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Amf', EventTypes.Amf);
    });
  });

  describe('App', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.App, 'object');
    });

    [
      ['versionInfo', 'appversioninfo'],
      ['command', 'appcommand'],
      ['requestAction', 'apprequestaction'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.App[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.App', EventTypes.App);
    });
  });

  describe('Authorization', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Authorization, 'object');
    });

    it('has OAuth2 namespace', () => {
      assert.typeOf(EventTypes.Authorization.OAuth2, 'object');
    });

    it('has frozen OAuth2 namespace', () => {
      assert.throws(() => {
        // @ts-ignore
        EventTypes.Authorization.OAuth2 = { read: '' };
      });
    });

    [
      ['authorize', 'oauth2authorize'],
      ['removeToken', 'oauth2removetoken'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Authorization.OAuth2[prop], value);
      });
    });

    it('has unique events for OAuth2 namespace', () => {
      ensureUnique('EventTypes.Authorization.OAuth2', EventTypes.Authorization.OAuth2);
    });

    it('has frozen Oidc namespace', () => {
      assert.throws(() => {
        // @ts-ignore
        EventTypes.Authorization.Oidc = { read: '' };
      });
    });

    [
      ['authorize', 'oidcauthorize'],
      ['removeTokens', 'oidcremovetokens'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Authorization.Oidc[prop], value);
      });
    });

    it('has unique events for Oidc namespace', () => {
      ensureUnique('EventTypes.Authorization.Oidc', EventTypes.Authorization.Oidc);
    });
  });

  describe('Config', () => {
    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        EventTypes.Config = { read: '' };
      });
    });
  
    [
      ['read', 'arcconfigread'],
      ['readAll', 'arcconfigreadall'],
      ['update', 'arcconfigupdate'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Config[prop], value);
      });
    });
  
    it('has the readonly State namespace', () => {
      assert.throws(() => {
        // @ts-ignore
        EventTypes.Config.State = { read: '' };
      });
    });
  
    [
      ['update', 'arcconfigstateupdate'],
    ].forEach(([prop, value]) => {
      it(`has State.${prop} property`, () => {
        assert.equal(EventTypes.Config.State[prop], value);
      });
    });
  
    describe('unique events', () => {
      it('has unique events for the root properties', () => {
        ensureUnique('EventTypes.Config', EventTypes.Config);
      });
  
      it('has unique events for the state properties', () => {
        ensureUnique('EventTypes.Config.State', EventTypes.Config.State);
      });
    });
  });

  describe('Cookie', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Cookie, 'object');
    });

    [
      ['listAll', 'sessioncookielistall'],
      ['listDomain', 'sessioncookielistdomain'],
      ['listUrl', 'sessioncookielisturl'],
      ['delete', 'sessioncookiedelete'],
      ['deleteUrl', 'sessioncookiedeleteurl'],
      ['update', 'sessioncookieupdate'],
      ['updateBulk', 'sessioncookieupdatebulk'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Cookie[prop], value);
      });
    });

    it('has State namespace', () => {
      assert.typeOf(EventTypes.Cookie.State, 'object');
    });

    it('has frozen State namespace', () => {
      assert.throws(() => {
        // @ts-ignore
        EventTypes.Cookie.State = { read: '' };
      });
    });

    [
      ['update', 'sessioncookiestateupdate'],
      ['delete', 'sessioncookiestatedelete'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Cookie.State[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Cookie', EventTypes.Cookie);
    });

    it('has unique events for State namespace', () => {
      ensureUnique('EventTypes.Cookie.State', EventTypes.Cookie.State);
    });
  });

  describe('DataExport', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.DataExport, 'object');
    });

    [
      ['customData', 'arccustomdataexport'],
      ['nativeData', 'arcnativeexport'],
      ['fileSave', 'filedatasave'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.DataExport[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.DataExport', EventTypes.DataExport);
    });
  });

  describe('DataImport', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.DataImport, 'object');
    });

    [
      ['normalize', 'arcdataimportnormalize'],
      ['dataImport', 'arcdataimport'],
      ['processFile', 'arcdataimportprocessfile'],
      ['processData', 'arcdataimportprocessdata'],
      ['inspect', 'arcdataimportinspect'],
      ['dataImported', 'arcdataimported'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.DataImport[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.DataImport', EventTypes.DataImport);
    });
  });

  describe('Encryption', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Encryption, 'object');
    });

    [
      ['encrypt', 'encryptionencrypt'],
      ['decrypt', 'encryptiondecrypt'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Encryption[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Encryption', EventTypes.Encryption);
    });
  });

  describe('Google', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Google, 'object');
    });

    describe('Google.Drive', () => {
      it('has the namespace', () => {
        assert.typeOf(EventTypes.Google.Drive, 'object');
      });
  
      [
        ['save', 'googledrivesave'],
        ['listAppFolders', 'googledrivelistappfolders'],
        ['read', 'googledriveread'],
        ['notifyFilePicked', 'googledrivefilepicked'],
      ].forEach(([prop, value]) => {
        it(`has ${prop} property`, () => {
          assert.equal(EventTypes.Google.Drive[prop], value);
        });
      });
  
      it('has unique events for the namespace', () => {
        ensureUnique('EventTypes.Google.Drive', EventTypes.Google.Drive);
      });
    });
  });

  describe('Menu', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Menu, 'object');
    });

    [
      ['popup', 'appmenupopup'],
      ['navigate', 'appmenunavigate'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Menu[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Menu', EventTypes.Menu);
    });
  });

  describe('Menu.State', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Menu.State, 'object');
    });

    [
      ['open', 'appmenustateopen'],
      ['close', 'appmenustateclose'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Menu.State[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Menu.State', EventTypes.Menu.State);
    });
  });

  describe('Navigation', () => {
    it('is frozen', () => {
      assert.throws(() => {
        // @ts-ignore
        EventTypes.Navigation = { read: '' };
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
      ['openWebUrl', 'arcnavigateopenweburl'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Navigation[prop], value);
      });
    });
  
    describe('unique events', () => {
      it('has unique events for root properties', () => {
        ensureUnique('EventTypes.Navigation', EventTypes.Navigation);
      });
    });
  });

  describe('Reporting', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Reporting, 'object');
    });

    [
      ['error', 'reporterror'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Reporting[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Reporting', EventTypes.Reporting);
    });
  });

  describe('Request', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Request, 'object');
    });

    [
      ['send', 'arcrequestsend'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {``
        assert.equal(EventTypes.Request[prop], value);
      });
    });

    [
      ['urlChange', 'arcrequeststateurlchange'],
      ['contentTypeChange', 'arcrequeststatecontenttypechange'],
    ].forEach(([prop, value]) => {
      it(`has State.${prop} property`, () => {
        assert.equal(EventTypes.Request.State[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Request', EventTypes.Request);
      ensureUnique('EventTypes.Request.State', EventTypes.Request.State);
    });
  });

  describe('RestApiLegacy', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.RestApiLegacy, 'object');
    });

    [
      ['processFile', 'restapiprocessfile'],
      ['dataReady', 'restapidataready'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.RestApiLegacy[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.RestApiLegacy', EventTypes.RestApiLegacy);
    });
  });

  describe('Search', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Search, 'object');
    });

    [
      ['find', 'appsearchfind'],
      ['clear', 'appsearchclear'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Search[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Search', EventTypes.Search);
    });
  });

  describe('Search.State', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Search.State, 'object');
    });

    [
      ['foundInPage', 'appsearchfoundinpage'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Search.State[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Search.State', EventTypes.Search.State);
    });
  });

  describe('Telemetry', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Telemetry, 'object');
    });

    [
      ['view', 'telemetryscreenview'],
      ['event', 'telemetryevent'],
      ['exception', 'telemetryexception'],
      ['social', 'telemetrysocial'],
      ['timing', 'telemetrytiming'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Telemetry[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Request', EventTypes.Telemetry);
    });
  });

  describe('Telemetry.State', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Telemetry.State, 'object');
    });

    [
      ['set', 'telemetrystateset'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Telemetry.State[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Request', EventTypes.Telemetry.State);
    });
  });

  describe('Theme', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Theme, 'object');
    });

    [
      ['loadApplicationTheme', 'themeloadapplication'],
      ['loadTheme', 'themeload'],
      ['readSate', 'themereadsate'],
      ['readActiveThemeInfo', 'themereadactiveinfo'],
      ['activate', 'themeactivate'],
      ['install', 'themeinstall'],
      ['uninstall', 'themeuninstall'],
      ['setSystemPreferred', 'themesetsystempreferred'],
      ['readSystemThemeInfo', 'themereadsystemthemeinfo'],
      ['loadSystemPreferred', 'themeloadsystempreferred'],
      ['loadUserPreferred', 'themeloaduserpreferred'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Theme[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Theme', EventTypes.Theme);
    });
  });

  describe('Theme.State', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Theme.State, 'object');
    });

    [
      ['activated', 'themestateactivated'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Theme.State[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Theme.State', EventTypes.Theme.State);
    });
  });

  describe('Transport', () => {
    it('has the namespace', () => {
      assert.typeOf(EventTypes.Transport, 'object');
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
      ['connect', 'transportconnect'],
      ['disconnect', 'transportdisconnect'],
      ['connectionSend', 'transportconnectionsend'],
      ['httpTransport', 'httptransport'],
    ].forEach(([prop, value]) => {
      it(`has ${prop} property`, () => {
        assert.equal(EventTypes.Transport[prop], value);
      });
    });

    it('has unique events for the namespace', () => {
      ensureUnique('EventTypes.Transport', EventTypes.Transport);
    });
  });
});
