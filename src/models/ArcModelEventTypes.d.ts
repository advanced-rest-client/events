declare interface IProjectStateEvents {
  update: string;
  delete: string;
}

declare interface IProjectEvents {
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
  State: IProjectStateEvents;
}

declare interface IRequestStateEvents {
  update: string;
  delete: string;
}

declare interface IRequestEvents {
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
  State: IRequestStateEvents;
}

declare interface IUrlIndexerStateEvents {
  finished: string;
}

declare interface IUrlIndexerEvents {
  update: string;
  query: string;
  State: IUrlIndexerStateEvents;
}

declare interface IAuthDataStateEvents {
  update: string;
}

declare interface IAuthDataEvents {
  update: string;
  query: string;
  State: IAuthDataStateEvents;
}

declare interface IHostRulesStateEvents {
  update: string;
  delete: string;
}

declare interface IHostRulesEvents {
  update: string;
  updateBulk: string;
  delete: string;
  list: string;
  State: IHostRulesStateEvents;
}

declare interface IClientCertificateStateEvents {
  update: string;
  delete: string;
}

declare interface IClientCertificateEvents {
  read: string;
  list: string;
  delete: string;
  update: string;
  insert: string;
  State: IClientCertificateStateEvents;
}

declare interface IWSUrlHistoryStateEvents {
  update: string;
}

declare interface IWSUrlHistoryEvents {
  // read: string;
  list: string;
  insert: string;
  query: string;
  State: IWSUrlHistoryStateEvents;
}

declare interface IUrlHistoryStateEvents {
  update: string;
  delete: string;
}

declare interface IUrlHistoryEvents {
  // read: string;
  list: string;
  insert: string;
  query: string;
  delete: string;
  State: IUrlHistoryStateEvents;
}

declare interface IEnvironmentStateEvents {
  update: string;
  delete: string;
  select: string;
}

declare interface IEnvironmentEvents {
  read: string;
  update: string;
  delete: string;
  list: string;
  current: string;
  select: string;
  State: IEnvironmentStateEvents;
}

declare interface IVariableStateEvents {
  update: string;
  delete: string;
}

declare interface IVariableEvents {
  update: string;
  delete: string;
  list: string;
  set: string;
  State: IVariableStateEvents;
}

declare interface IRestApiStateEvents {
  update: string;
  dataUpdate: string;
  delete: string;
  versionDelete: string;
}

declare interface IRestApiEvents {
  list: string;
  read: string;
  dataRead: string;
  update: string;
  dataUpdate: string;
  updateBulk: string;
  delete: string;
  versionDelete: string;
  State: IRestApiStateEvents;
}

export declare interface IArcModelEventTypes {
  destroy: string;
  destroyed: string;
  Project: Readonly<IProjectEvents>;
  Request: Readonly<IRequestEvents>;
  UrlIndexer: Readonly<IUrlIndexerEvents>;
  AuthData: Readonly<IAuthDataEvents>;
  HostRules: Readonly<IHostRulesEvents>;
  ClientCertificate: Readonly<IClientCertificateEvents>;
  WSUrlHistory: Readonly<IWSUrlHistoryEvents>;
  UrlHistory: Readonly<IUrlHistoryEvents>;
  Environment: Readonly<IEnvironmentEvents>;
  Variable: Readonly<IVariableEvents>;
  RestApi: Readonly<IRestApiEvents>;
}

export const ArcModelEventTypes: Readonly<IArcModelEventTypes>;
