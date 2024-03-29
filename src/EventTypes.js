import { ArcModelEventTypes } from './models/ArcModelEventTypes.js';
/**
 * The definition of ARC's event types.
 */
export const EventTypes = Object.freeze({
  Amf: Object.freeze({
    processApiLink: 'amfprocessapilink',
    processBuffer: 'amfprocessbuffer',
    processApiFile: 'amfprocessapifile',
    selectApiMainFile: 'amfselectapimainfile',
  }),
  App: Object.freeze({
    versionInfo: 'appversioninfo',
    command: 'appcommand',
    requestAction: 'apprequestaction',
    readState: 'appreadstate',
    updateStateProperty: 'appupdatestateproperty',
  }),
  Authorization: Object.freeze({
    OAuth2: Object.freeze({
      /** 
       * Authorization with auth configuration on detail
       */
      authorize: 'oauth2authorize',
      /** 
       * Removes cached token for the provider
       */
      removeToken: 'oauth2removetoken',
    }),
    Oidc: Object.freeze({
      /** 
       * Authorization the user with the provided configuration.
       */
      authorize: 'oidcauthorize',
      /** 
       * Removes cached tokens for the provider
       */
      removeTokens: 'oidcremovetokens',
    }),
  }),
  Config: Object.freeze({
    read: 'arcconfigread',
    readAll: 'arcconfigreadall',
    update: 'arcconfigupdate',
    State: Object.freeze({
      update: 'arcconfigstateupdate',
    }),
  }),
  /**
   * Event types for session cookies store.
   */
  Cookie: Object.freeze({
    listAll: 'sessioncookielistall',
    listDomain: 'sessioncookielistdomain',
    listUrl: 'sessioncookielisturl',
    delete: 'sessioncookiedelete',
    deleteUrl: 'sessioncookiedeleteurl',
    update: 'sessioncookieupdate',
    updateBulk: 'sessioncookieupdatebulk',
    State: Object.freeze({
      delete: 'sessioncookiestatedelete',
      update: 'sessioncookiestateupdate',
    }),
  }),
  DataExport: Object.freeze({
    customData: 'arccustomdataexport',
    nativeData: 'arcnativeexport',
    fileSave: 'filedatasave',
  }),
  DataImport: Object.freeze({
    normalize: 'arcdataimportnormalize',
    dataImport: 'arcdataimport',
    processFile: 'arcdataimportprocessfile',
    processData: 'arcdataimportprocessdata',
    inspect: 'arcdataimportinspect',
    dataImported: 'arcdataimported',
  }),
  /**
   * Event types for data encryption module
   */
  Encryption: Object.freeze({
    encrypt: 'encryptionencrypt',
    decrypt: 'encryptiondecrypt',
  }),
  Google: Object.freeze({
    Drive: Object.freeze({
      save: 'googledrivesave',
      listAppFolders: 'googledrivelistappfolders',
      read: 'googledriveread',
      notifyFilePicked: 'googledrivefilepicked',
    }),
  }),
  Menu: Object.freeze({
    popup: 'appmenupopup',
    navigate: 'appmenunavigate',
    State: Object.freeze({
      open: 'appmenustateopen',
      close: 'appmenustateclose',
    }),
  }),
  Model: ArcModelEventTypes,
  Navigation: Object.freeze({
    navigate: 'arcnavigate',
    navigateExternal: 'arcnavigateexternal',
    navigateRequest: 'arcnavigaterequest',
    navigateRestApi: 'arcnavigaterestapi',
    navigateProject: 'arcnavigateproject',
    popupMenu: 'arcpopupmenu',
    helpTopic: 'arcnavigatehelptopic',
    openWebUrl: 'arcnavigateopenweburl',
  }),
  Process: Object.freeze({
    loadingStart: 'arcprocessloadingstart',
    loadingStop: 'arcprocessloadingstop',
    loadingError: 'arcprocessloadingerror',
  }),
  RestApiLegacy: Object.freeze({
    processFile: 'restapiprocessfile',
    dataReady: 'restapidataready',
  }),
  Reporting: Object.freeze({
    error: 'reporterror',
  }),
  /**
   * Event types for ARC request object.
   * These only represent the events dispatched globally (events that bubble).
   * They do not have events that are specific to any part of the request editor.
   */
  Request: Object.freeze({
    send: 'arcrequestsend',
    State: Object.freeze({
      urlChange: 'arcrequeststateurlchange',
      contentTypeChange: 'arcrequeststatecontenttypechange',
    }),
  }),
  // ARC electron app search events.
  Search: Object.freeze({
    find: 'appsearchfind',
    clear: 'appsearchclear',
    State: Object.freeze({
      foundInPage: 'appsearchfoundinpage',
    }),
  }),
  /**
   * Event types for analytics implementation.
   */
  Telemetry: Object.freeze({
    view: 'telemetryscreenview',
    event: 'telemetryevent',
    exception: 'telemetryexception',
    social: 'telemetrysocial',
    timing: 'telemetrytiming',
    State: Object.freeze({
      set: 'telemetrystateset',
    }),
  }),
  Theme: Object.freeze({
    loadApplicationTheme: 'themeloadapplication',
    loadTheme: 'themeload',
    readSate: 'themereadsate',
    readActiveThemeInfo: 'themereadactiveinfo',
    activate: 'themeactivate',
    install: 'themeinstall',
    uninstall: 'themeuninstall',
    setSystemPreferred: 'themesetsystempreferred',
    readSystemThemeInfo: 'themereadsystemthemeinfo',
    loadSystemPreferred: 'themeloadsystempreferred',
    loadUserPreferred: 'themeloaduserpreferred',
    State: Object.freeze({
      activated: 'themestateactivated',
    }),
  }),
  /**
   * Event types for ARC transport (usually HTTP)
   */
  Transport: Object.freeze({
    beforeRequest: 'arcbeforerequest',
    beforeRedirect: 'arcbeforeredirect',
    headersReceived: 'archeadersreceived',
    firstByte: 'arcfirstbytereceived',
    // used by the UI to initiate the request transport
    request: 'arcrequest',
    // used by the UI to report a response
    response: 'arcresponse',
    // used by the application logic, dispatched when the request has been
    // pre-processed by any listeners (variables, actions) and can be transported.
    // The HTTP transport library is listening to this event
    transport: 'arctransport',
    resendAuth: 'arcresendauth',
    // used by the application logic, dispatched when the HTTP transport library 
    // has finished processing the request. This is handled by the logic that
    // performs operations before the request is reported back to the UI
    // like authorization and actions.
    processResponse: 'arcprocessresponse',
    abort: 'arcabort',

    /** 
     * Informs to make a connection. Used by web sockets.
     */
    connect: 'transportconnect',
    /** 
     * Informs to close the current connection. Used by web sockets.
     */
    disconnect: 'transportdisconnect',
    /** 
     * Informs to send a data on the current connection. Used by web sockets.
     */
    connectionSend: 'transportconnectionsend',
    /** 
     * When a component / module requests a CORS free HTTP request
     * outside the ARC's HTTP engine.
     */
    httpTransport: 'httptransport',
  }),
  Ui: Object.freeze({
    /** 
     * Tells the application to trigger a context menu with the passed arguments.
     */
    contextMenu: 'arccontextmenu',
  }),
  Updater: Object.freeze({
    checkForUpdate: 'appupdatercheckforupdate',
    installUpdate: 'appupdaterinstallupdate',
    State: {
      checkingForUpdate: 'updaterstatecheckingforupdate',
      updateAvailable: 'updaterstateupdateavailable',
      updateNotAvailable: 'updaterstateupdatenotavailable',
      autoUpdateError: 'updaterstateautoupdateerror',
      downloadProgress: 'updaterstatedownloadprogress',
      updateDownloaded: 'updaterstateupdatedownloaded',
    },
  }),
  Workspace: Object.freeze({
    appendExport: 'domainworkspaceappendexport',
    appendRequest: 'domainworkspaceappendrequest',
    read: 'domainworkspaceread',
    write: 'domainworkspacewrite',
    setId: 'domainworkspacesetid',
    triggerWrite: 'domainworkspacetriggerwrite',
    State: Object.freeze({
      idChange: 'domainworkspacestateidchange',
      write: 'domainworkspacestatewrite'
    }),
  }),
});
