import { IArcModelEventTypes } from './models/ArcModelEventTypes';

declare interface GoogleDriveEvents {
  save: string;
  listAppFolders: string;
  read: string;
}

declare interface GoogleEvents {
  Drive: Readonly<GoogleDriveEvents>;
}

declare interface IOAuth2Events {
  /** 
   * Authorization with auth configuration on detail
   */
  authorize: string;
  /** 
   * Removes cached token for the provider
   */
  removeToken: string;
}
declare interface IOidcEvents {
  /** 
   * Authorization the user with the provided configuration.
   */
  authorize: string;
  /** 
   * Removes cached tokens for the provider
   */
  removeTokens: string;
}

declare interface IAuthorizationEvents {
  OAuth2: Readonly<IOAuth2Events>;
  Oidc: Readonly<IOidcEvents>;
}

declare interface IConfigStateEvents {
  update: string;
}

declare interface IConfigEvents {
  read: string;
  readAll: string;
  update: string;
  State: IConfigStateEvents;
}

declare interface ICookieStateEvents {
  delete: string;
  update: string;
}

/**
 * The event names in the ARC cookie module.
 */
declare interface ICookieEvents {
  listAll: string;
  listDomain: string;
  listUrl: string;
  delete: string;
  deleteUrl: string;
  update: string;
  updateBulk: string;
  State: Readonly<ICookieStateEvents>;
}

declare interface IDataExportEvents {
  customData: string;
  nativeData: string;
  fileSave: string;
}

declare interface IDataImportEvents {
  normalize: string;
  dataImport: string;
  processFile: string;
  processData: string;
  inspect: string;
  dataImported: string;
}

declare interface IEncryptionEvents {
  encrypt: string;
  decrypt: string;
}

declare interface INavigationEvents {
  navigate: string;
  navigateExternal: string;
  navigateRequest: string;
  navigateRestApi: string;
  navigateProject: string;
  popupMenu: string;
  helpTopic: string;
}

declare interface IProcessEvents {
  loadingStart: string;
  loadingStop: string;
  loadingError: string;
}

declare interface IRestApiLegacyEvents {
  processFile: string;
  dataReady: string;
}

declare interface IReportingEventTypes {
  error: string;
}

declare interface IRequestStateEvents {
  urlChange: string;
  contentTypeChange: string;
}
/**
 * The event names in the ARC cookie module.
 */
declare interface IRequestEvents {
  send: string;
  State: Readonly<IRequestStateEvents>;
}

declare interface ITelemetryEvents {
  view: string;
  event: string;
  exception: string;
  social: string;
  timing: string;
}

declare interface IThemeEvents {
  loadApplicationTheme: string;
  loadTheme: string;
  readSate: string;
  readActiveThemeInfo: string;
  activate: string;
  install: string;
  uninstall: string;
  setSystemPreferred: string;
  readSystemThemeInfo: string;
  loadSystemPreferred: string;
  loadUserPreferred: string;
}

declare interface ITransportEvents {
  beforeRequest: string;
  beforeRedirect: string;
  headersReceived: string;
  firstByte: string;
  // used by the UI to initiate the request transport
  request: string;
  // used by the UI to report a response
  response: string;
  // used by the application logic, dispatched when the request has been
  // pre-processed by any listeners (variables, actions) and can be transported.
  // The HTTP transport library is listening to this event
  transport: string;
  resentAuth: string;
  // used by the application logic, dispatched when the HTTP transport library 
  // has finished processing the request. This is handled by the logic that
  // performs operations before the request is reported back to the UI
  // like authorization and actions.
  processResponse: string;
  abort: string;
  /** 
   * Informs to make a connection. Used by web sockets.
   */
  connect: string;
  /** 
   * Informs to close the current connection. Used by web sockets.
   */
  disconnect: string;
  /** 
   * Informs to send a data on the current connection. Used by web sockets.
   */
  connectionSend: string;
  /** 
   * When a component / module requests a CORS free HTTP request
   * outside the ARC's HTTP engine.
   */
  httpTransport: string;
}

declare interface IUiEvents {
  /** 
   * Tells the application to trigger a context menu with the passed arguments.
   */
  contextMenu: string,
}

declare interface IWorkspaceEvents {
  appendExport: string;
  appendRequest: string;
  read: string;
  write: string;
}

interface IEventTypes {
  Authorization: Readonly<IAuthorizationEvents>;
  Config: Readonly<IConfigEvents>;
  Cookie: Readonly<ICookieEvents>;
  DataExport: Readonly<IDataExportEvents>;
  DataImport: Readonly<IDataImportEvents>;
  Encryption: Readonly<IEncryptionEvents>;
  Google: Readonly<GoogleEvents>;
  Model: Readonly<IArcModelEventTypes>;
  Navigation: Readonly<INavigationEvents>;
  Process: Readonly<IProcessEvents>;
  RestApiLegacy: Readonly<IRestApiLegacyEvents>;
  Reporting: Readonly<IReportingEventTypes>;
  Request: Readonly<IRequestEvents>;
  Telemetry: Readonly<ITelemetryEvents>;
  Theme: Readonly<IThemeEvents>;
  Transport: Readonly<ITransportEvents>;
  Ui: Readonly<IUiEvents>;
  Workspace: Readonly<IWorkspaceEvents>;
}

export const EventTypes: Readonly<IEventTypes>;
