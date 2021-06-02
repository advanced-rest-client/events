declare interface ProjectStateEvents {
  update: string;
  delete: string;
}

declare interface ProjectEvents {
  read: string;
  readBulk: string;
  update: string;
  delete: string;
  list: string;
  listAll: string;
  updateBulk: string;
  moveTo: string;
  addTo: string;
  removeFrom: string;
  State: ProjectStateEvents;
}

declare interface RequestStateEvents {
  update: string;
  delete: string;
}

declare interface RequestEvents {
  read: string;
  readBulk: string;
  update: string;
  updateBulk: string;
  store: string;
  delete: string;
  deleteBulk: string;
  undeleteBulk: string;
  query: string;
  list: string;
  projectlist: string;
  State: RequestStateEvents;
}

declare interface UrlIndexerStateEvents {
  finished: string;
}

declare interface UrlIndexerEvents {
  update: string;
  query: string;
  State: UrlIndexerStateEvents;
}

declare interface AuthDataStateEvents {
  update: string;
}

declare interface AuthDataEvents {
  update: string;
  query: string;
  State: AuthDataStateEvents;
}

declare interface HostRulesStateEvents {
  update: string;
  delete: string;
}

declare interface HostRulesEvents {
  update: string;
  updateBulk: string;
  delete: string;
  list: string;
  State: HostRulesStateEvents;
}

declare interface ClientCertificateStateEvents {
  update: string;
  delete: string;
}

declare interface ClientCertificateEvents {
  read: string;
  list: string;
  delete: string;
  update: string;
  insert: string;
  State: ClientCertificateStateEvents;
}

declare interface WSUrlHistoryStateEvents {
  update: string;
}

declare interface WSUrlHistoryEvents {
  // read: string;
  list: string;
  insert: string;
  query: string;
  State: WSUrlHistoryStateEvents;
}

declare interface UrlHistoryStateEvents {
  update: string;
}

declare interface UrlHistoryEvents {
  // read: string;
  list: string;
  insert: string;
  query: string;
  State: UrlHistoryStateEvents;
}

declare interface EnvironmentStateEvents {
  update: string;
  delete: string;
  select: string;
}

declare interface EnvironmentEvents {
  read: string;
  update: string;
  delete: string;
  list: string;
  current: string;
  select: string;
  State: EnvironmentStateEvents;
}

declare interface VariableStateEvents {
  update: string;
  delete: string;
}

declare interface VariableEvents {
  update: string;
  delete: string;
  list: string;
  set: string;
  State: VariableStateEvents;
}

declare interface RestApiStateEvents {
  update: string;
  dataUpdate: string;
  delete: string;
  versionDelete: string;
}

declare interface RestApiEvents {
  list: string;
  read: string;
  dataRead: string;
  update: string;
  dataUpdate: string;
  updateBulk: string;
  delete: string;
  versionDelete: string;
  State: RestApiStateEvents;
}

declare interface ArcModelEventTypes {
  destroy: string;
  destroyed: string;
  Project: ProjectEvents;
  Request: RequestEvents;
  UrlIndexer: UrlIndexerEvents;
  AuthData: AuthDataEvents;
  HostRules: HostRulesEvents;
  ClientCertificate: ClientCertificateEvents;
  WSUrlHistory: WSUrlHistoryEvents;
  UrlHistory: UrlHistoryEvents;
  Environment: EnvironmentEvents;
  Variable: VariableEvents;
  RestApi: RestApiEvents;
}

export const ArcModelEventTypes: ArcModelEventTypes;
