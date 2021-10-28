import { ApplicationEvents } from './application/ApplicationEvents.js';
import { AuthorizationEvents } from './authorization/AuthorizationEvents.js';
import { ConfigEvents } from './config/ConfigEvents.js';
import { SessionCookieEvents } from './cookies/SessionCookieEvents.js';
import { ExportEvents, ImportEvents } from './dataexport/ExportEvents.js';
import { EncryptionEvents } from './encryption/EncryptionEvents.js';
import { GoogleDriveEvents } from './googledrive/GoogleDriveEvents.js';
import { ArcModelEvents } from './models/ArcModelEvents.js';
import { ArcNavigationEvents } from './navigation/ArcNavigationEvents.js';
import { ProcessEvents } from './process/ProcessEvents.js';
import { RestApiEvents } from './reastapi/RestApiEvents.js';
import { ReportingEvents } from './reporting/ReportingEvents.js';
import { RequestEvents } from './request/RequestEvents.js';
import { TelemetryEvents } from './telemetry/TelemetryEvents.js';
import { ThemeEvents } from './theme/ThemeEvents.js';
import { TransportEvents } from './transport/TransportEvents.js';
import { UiEvents } from './ui/UiEvents.js';
import { UpdaterEvents } from './updater/UpdaterEvents.js';
import { WorkspaceEvents } from './workspace/WorkspaceEvents.js';

export const Events = {
  App: ApplicationEvents,
  Authorization: AuthorizationEvents,
  Config: ConfigEvents,
  Cookie: SessionCookieEvents,
  DataExport: ExportEvents,
  DataImport: ImportEvents,
  Encryption: EncryptionEvents,
  Google: Object.freeze({
    Drive: GoogleDriveEvents,
  }),
  Model: ArcModelEvents,
  Navigation: ArcNavigationEvents,
  Process: ProcessEvents,
  RestApiLegacy: RestApiEvents,
  Reporting: ReportingEvents,
  Request: RequestEvents,
  Telemetry: TelemetryEvents,
  Theme: ThemeEvents,
  Transport: TransportEvents,
  Ui: UiEvents,
  Updater: UpdaterEvents,
  Workspace: WorkspaceEvents,
};
Object.freeze(Events);
