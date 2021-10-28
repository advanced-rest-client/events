import { IAuthorizationEvents } from './authorization/AuthorizationEvents';
import { IConfigEvents } from './config/ConfigEvents';
import { ISessionCookieEvents } from './cookies/SessionCookieEvents';
import { IExportEvents, IImportEvents } from './dataexport/ExportEvents';
import { IEncryptionEvents } from './encryption/EncryptionEvents';
import { IGoogleDriveEvents } from './googledrive/GoogleDriveEvents';
import { IArcModelEvents } from './models/ArcModelEvents';
import { IArcNavigationEvents } from './navigation/ArcNavigationEvents';
import { IProcessEvents } from './process/ProcessEvents';
import { IRestApiEvents } from './reastapi/RestApiEvents';
import { IReportingEvents } from './reporting/ReportingEvents';
import { IRequestEvents } from './request/RequestEvents';
import { ITelemetryEvents } from './telemetry/TelemetryEvents';
import { IThemeEvents } from './theme/ThemeEvents';
import { ITransportEvents } from './transport/TransportEvents';
import { IUiEvents } from './ui/UiEvents';
import { IWorkspaceEvents } from './workspace/WorkspaceEvents';

declare interface IGoogleEvents {
  Drive: IGoogleDriveEvents;
}

declare interface IEvents {
  Authorization: IAuthorizationEvents;
  Config: IConfigEvents;
  Cookie: ISessionCookieEvents;
  DataExport: IExportEvents;
  DataImport: IImportEvents;
  Encryption: IEncryptionEvents;
  Google: Readonly<IGoogleEvents>;
  Model: IArcModelEvents;
  Navigation: IArcNavigationEvents;
  Process: IProcessEvents;
  RestApiLegacy: IRestApiEvents;
  Reporting: IReportingEvents;
  Request: IRequestEvents;
  Telemetry: ITelemetryEvents;
  Theme: IThemeEvents;
  Transport: ITransportEvents;
  Ui: IUiEvents;
  Workspace: IWorkspaceEvents;
}
export const Events: Readonly<IEvents>;
