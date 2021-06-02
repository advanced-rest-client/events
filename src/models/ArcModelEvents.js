import * as ProjectEvents from './ProjectEvents.js';
import * as RequestEvents from './RequestEvents.js';
import * as BaseEvents from './BaseEvents.js';
import * as UrlIndexerEvents from './UrlIndexerEvents.js';
import * as AuthDataEvents from './AuthDataEvents.js';
import * as HostRuleEvents from './HostRuleEvents.js';
import * as CertificatesEvents from './CertificatesEvents.js';
import * as WSUrlHistoryEvents from './WSUrlHistoryEvents.js';
import * as UrlHistoryEvents from './UrlHistoryEvents.js';
import * as VariableEvents from './VariableEvents.js';
import * as RestApiEvents from './RestApiEvents.js';

export const ArcModelEvents = {
  /**
   * Dispatches an event handled by the data store to destroy a data store.
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string[]} stores A list of store names to affect
   * @return {Promise<void>} A promise resolved when all requested stores are deleted
   */
  destroy: async (target, stores) => {
    const e = new BaseEvents.ARCModelDeleteEvent(stores);
    target.dispatchEvent(e);
    if (Array.isArray(e.detail.result)) {
      await Promise.all(e.detail.result);
    }
  },
  /**
   * Dispatches an event information the app that a store has been destroyed.
   *
   * @param {EventTarget} target A node on which to dispatch the event.
   * @param {string} store The name of the deleted store
   */
  destroyed: (target, store) => {
    const e = new BaseEvents.ARCModelStateDeleteEvent(store);
    target.dispatchEvent(e);
  },
  Project: {
    read: ProjectEvents.readAction,
    readBulk: ProjectEvents.readBulkAction,
    update: ProjectEvents.updateAction,
    updateBulk: ProjectEvents.updateBulkAction,
    delete: ProjectEvents.deleteAction,
    list: ProjectEvents.listAction,
    listAll: ProjectEvents.listAllAction,
    moveTo: ProjectEvents.moveToAction,
    addTo: ProjectEvents.addToAction,
    removeFrom: ProjectEvents.removeFromAction,
    State: {
      update: ProjectEvents.updatedState,
      delete: ProjectEvents.deletedState,
    },
  },
  Request: {
    read: RequestEvents.readAction,
    readBulk: RequestEvents.readBulkAction,
    list: RequestEvents.listAction,
    update: RequestEvents.updateAction,
    updateBulk: RequestEvents.updateBulkAction,
    store: RequestEvents.storeAction,
    delete: RequestEvents.deleteAction,
    deleteBulk: RequestEvents.deleteBulkAction,
    undeleteBulk: RequestEvents.undeleteBulkAction,
    query: RequestEvents.queryAction,
    projectlist: RequestEvents.listProjectAction,
    State: {
      update: RequestEvents.updatedState,
      delete: RequestEvents.deletedState,
    },
  },
  UrlIndexer: {
    update: UrlIndexerEvents.updateAction,
    query: UrlIndexerEvents.queryAction,
    State: {
      finished: UrlIndexerEvents.finishedState,
    },
  },
  AuthData: {
    query: AuthDataEvents.queryAction,
    update: AuthDataEvents.updateAction,
    State: {
      update: AuthDataEvents.updatedState,
    },
  },
  HostRules: {
    update: HostRuleEvents.updateAction,
    updateBulk: HostRuleEvents.updateActionBulk,
    delete: HostRuleEvents.deleteAction,
    list: HostRuleEvents.listAction,
    State: {
      update: HostRuleEvents.updatedState,
      delete: HostRuleEvents.deletedState,
    },
  },
  ClientCertificate: {
    read: CertificatesEvents.readAction,
    list: CertificatesEvents.listAction,
    delete: CertificatesEvents.deleteAction,
    insert: CertificatesEvents.insertAction,
    State: {
      update: CertificatesEvents.updatedState,
      delete: CertificatesEvents.deletedState,
    },
  },
  WSUrlHistory: {
    list: WSUrlHistoryEvents.listAction,
    insert: WSUrlHistoryEvents.insertAction,
    query: WSUrlHistoryEvents.queryAction,
    State: {
      update: WSUrlHistoryEvents.updatedState,
    },
  },
  UrlHistory: {
    list: UrlHistoryEvents.listAction,
    insert: UrlHistoryEvents.insertAction,
    query: UrlHistoryEvents.queryAction,
    State: {
      update: UrlHistoryEvents.updatedState,
    },
  },
  Environment: {
    read: VariableEvents.readEnvironmentAction,
    update: VariableEvents.updateEnvironmentAction,
    delete: VariableEvents.deleteEnvironmentAction,
    list: VariableEvents.listEnvironmentAction,
    current: VariableEvents.currentEnvironmentAction,
    select: VariableEvents.selectEnvironmentAction,
    State: {
      update: VariableEvents.updatedEnvironmentState,
      delete: VariableEvents.deletedEnvironmentState,
      select: VariableEvents.environmentSelectedAction,
    },
  },
  Variable: {
    update: VariableEvents.updateVariableAction,
    delete: VariableEvents.deleteVariableAction,
    list: VariableEvents.listVariableAction,
    set: VariableEvents.setVariableAction,
    State: {
      update: VariableEvents.updatedVariableState,
      delete: VariableEvents.deletedVariableState,
    },
  },
  RestApi: {
    list: RestApiEvents.listAction,
    read: RestApiEvents.readAction,
    dataRead: RestApiEvents.dataReadAction,
    update: RestApiEvents.updateAction,
    dataUpdate: RestApiEvents.dataUpdateAction,
    updateBulk: RestApiEvents.updateBulkAction,
    delete: RestApiEvents.deleteAction,
    versionDelete: RestApiEvents.versionDeleteAction,
    State: {
      update: RestApiEvents.updatedState,
      dataUpdate: RestApiEvents.dataUpdatedState,
      delete: RestApiEvents.deletedState,
      versionDelete: RestApiEvents.versionDeletedState,
    },
  },
};
Object.freeze(ArcModelEvents);
Object.freeze(ArcModelEvents.Project);
Object.freeze(ArcModelEvents.Project.State);
Object.freeze(ArcModelEvents.Request);
Object.freeze(ArcModelEvents.Request.State);
Object.freeze(ArcModelEvents.UrlIndexer);
Object.freeze(ArcModelEvents.UrlIndexer.State);
Object.freeze(ArcModelEvents.AuthData);
Object.freeze(ArcModelEvents.AuthData.State);
Object.freeze(ArcModelEvents.HostRules);
Object.freeze(ArcModelEvents.HostRules.State);
Object.freeze(ArcModelEvents.ClientCertificate);
Object.freeze(ArcModelEvents.ClientCertificate.State);
Object.freeze(ArcModelEvents.WSUrlHistory);
Object.freeze(ArcModelEvents.WSUrlHistory.State);
Object.freeze(ArcModelEvents.UrlHistory);
Object.freeze(ArcModelEvents.UrlHistory.State);
Object.freeze(ArcModelEvents.Environment);
Object.freeze(ArcModelEvents.Environment.State);
Object.freeze(ArcModelEvents.Variable);
Object.freeze(ArcModelEvents.Variable.State);
