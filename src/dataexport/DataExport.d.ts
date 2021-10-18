import { ARCSavedRequest, ARCHistoryRequest, ArcBaseRequest } from '../request/ArcRequest';
import { ARCAuthData } from '../models/AuthData';
import { ARCWebsocketUrlHistory, ARCUrlHistory } from '../models/UrlHistory';
import { ARCHostRule } from '../models/HostRule';
import { ARCVariable } from '../models/Variable';
import { ARCProject } from '../models/Project';
import { ARCCertificateIndex, ARCRequestCertificate, Certificate } from '../models/ClientCertificate';
import { ARCCookie } from '../cookies/Cookies';

export declare interface EncryptionOptions {
  /**
   * When set it encrypts the data before export.
   * This library does not support any particular encryption. It dispatches
   * `encryptionencode` to request for data encryption.
   */
  encrypt?: boolean;
  /**
   * Passphrase to use to encode the data.
   */
  passphrase?: string;
}

export declare interface ProviderOptions {
  /**
   * Export file name or path to render in the save dialog or file name
   * in the cloud provider.
   */
  file: string;

  /**
   * The folder where to put the file.
   */
  parent?: string;

  /**
   * Content's mime type
   */
  contentType?: string;
}

export declare interface ExportOptions extends EncryptionOptions {
  /**
   * Name of the export provider.
   * ARC supports Google Drive (`drive`) and `file` providers at the moment.
   */
  provider: string;

  /**
   * Adds flag to the export file to skip import table and storing the data
   * to the data store when opening the file.
   */
  skipImport?: boolean;

  /**
   * Sets the `kind` property of export object.
   */
  kind?: string;
}

declare interface ExportOptionsInternal extends ExportOptions {
  /**
   * The application version used to generate the export
   */
  appVersion: string;
}

export declare interface ArcNativeDataExport {
  authdata?: boolean | ARCAuthData[];
  clientcertificates?: boolean;
  cookies?: boolean | ARCCookie[];
  history?: boolean | ARCHistoryRequest[];
  hostrules?: boolean | ARCHostRule[];
  projects?: boolean | ARCProject[];
  requests?: boolean | (ARCSavedRequest | ArcBaseRequest | ARCHistoryRequest)[];
  variables?: boolean | ARCVariable[];
  websocketurlhistory?: boolean | ARCWebsocketUrlHistory[];
  urlhistory?: boolean | ARCUrlHistory[];
}

export declare const ExportKey: keyof ArcNativeDataExport;

export declare interface ArcLegacyNativeDataExport extends ArcNativeDataExport {
  'websocket-url-history': boolean | ARCWebsocketUrlHistory[];
  'auth-data': boolean | ARCAuthData[];
  'url-history': boolean | ARCUrlHistory[];
  'host-rules': boolean | ARCHostRule[];
  'client-certificates': boolean | ARCVariable[];
}

export declare interface ArcExportResult {
  /**
   * Whether an export operation was a success
   */
  success: boolean;
  /**
   * Whether the operation was interrupted by the user.
   */
  interrupted: boolean;
  /**
   * With the cloud based export this is the ID of parent folder.
   * For file export it is the path of the file.
   */
  parentId: string;
  /**
   * The generated file id.
   * With the cloud based export this is the ID of created file entry.
   * For file export it is the file name that the user provided in the save dialog.
   */
  fileId: string;
}

export declare interface ExportEntity {
  /**
   * The object kind
   */
  kind?: string;
  /**
   * The original datastore key.
   * Note that the `_id` and `_rev` are deleted.
   */
  key: string;
}

export declare interface ExportArcSavedRequest extends ARCSavedRequest, ExportEntity {}
export declare interface ExportArcHistoryRequest extends ARCHistoryRequest, ExportEntity {}
export declare interface ExportArcProjects extends ARCProject, ExportEntity {}
export declare interface ExportArcWebsocketUrl extends ARCWebsocketUrlHistory, ExportEntity {}
export declare interface ExportArcUrlHistory extends ARCUrlHistory, ExportEntity {}
export declare interface ExportArcHostRule extends ARCHostRule, ExportEntity {}
export declare interface ExportArcVariable extends ARCVariable, ExportEntity {}
export declare interface ExportArcAuthData extends ARCAuthData, ExportEntity {}
export declare interface ExportArcClientCertificateData extends ExportEntity, ARCCertificateIndex {
  cert?: Certificate | Certificate[];
  pKey?: Certificate | Certificate[];
}
export declare interface ExportArcCookie extends ARCCookie {
  /**
   * The object kind
   */
  kind: string;
  /**
   * Datastore ID if a data store other than Electron was used.
   */
  key?: string;
}

export declare interface ArcExportObject {
  createdAt: string;
  version: string;
  kind: string;
  loadToWorkspace?: boolean;
  /**
   * When true the export object was created with a Electron based cookie storage.
   */
  electronCookies?: boolean;
  requests?: ExportArcSavedRequest[];
  history?: ExportArcHistoryRequest[];
  projects?: ExportArcProjects[];
  websocketurlhistory?: ExportArcWebsocketUrl[];
  urlhistory?: ExportArcUrlHistory[];
  clientcertificates?: ExportArcClientCertificateData[];
  cookies?: ExportArcCookie[];
  hostrules?: ExportArcHostRule[];
  variables?: ExportArcVariable[];
  authdata?: ExportArcAuthData[];
}

export declare interface ArcExportProcessedData {
  key: keyof ArcNativeDataExport;
  data: any[];
}
export declare interface ArcExportClientCertificateData {
  item: ARCCertificateIndex;
  data: ARCRequestCertificate;
}
