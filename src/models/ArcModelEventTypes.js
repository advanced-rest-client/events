export const ArcModelEventTypes = {
  destroy: 'modeldestroy',
  destroyed: 'modeldestroyed',
  Project: {
    read: 'modelprojectread',
    readBulk: 'modelprojectreadbulk',
    update: 'modelprojectchange',
    updateBulk: 'modelprojectupdatebulk',
    delete: 'modelprojectdelete',
    list: 'modelprojectlist',
    listAll: 'modelprojectlistall',
    moveTo: 'modelprojectmoveto',
    addTo: 'modelprojectaddto',
    removeFrom: 'modelprojectremovefrom',
    State: {
      update: 'modelstateprojectchange',
      delete: 'modelstateprojectdelete',
    }
  },
  Request: {
    read: 'modelrequestread',
    readBulk: 'modelrequestreadbulk',
    // updates metadata only
    update: 'modelrequestchange',
    updateBulk: 'modelrequestupdatebulk',
    // updates metadata, transforms body, takes care of dependencies
    store: 'modelrequeststore',
    delete: 'modelrequestdelete',
    deleteBulk: 'modelrequestdeletebulk',
    undeleteBulk: 'modelrequestsundelete',
    query: 'modelrequestquery',
    list:  'modelrequestlist',
    projectlist: 'modelrequestprojectlist',
    State: {
      update: 'modelstaterequestchange',
      delete: 'modelstaterequestdelete',
    },
  },
  UrlIndexer: {
    update: 'modelurlindexerupdate',
    query: 'modelurlindexerquery',
    State: {
      finished: 'modelstateurlindexerfinished',
    }
  },
  AuthData: {
    query: 'modelauthdataquery',
    update: 'modelauthdataupdate',
    State: {
      update: 'modelstateauthdataupdate',
    },
  },
  HostRules: {
    update: 'modelhostrulesupdate',
    updateBulk: 'modelhostrulesupdatebulk',
    delete: 'modelhostrulesdelete',
    list: 'modelhostruleslist',
    State: {
      update: 'modelstatehostrulesupdate',
      delete: 'modelstatehostrulesdelete',
    },
  },
  ClientCertificate: {
    read: 'modelclientcertificateread',
    list: 'modelclientcertificatelist',
    delete: 'modelclientcertificatedelete',
    update: 'modelclientcertificateupdate',
    insert: 'modelclientcertificateinsert',
    State: {
      update: 'modelstateclientcertificateupdate',
      delete: 'modelstateclientcertificatedelete',
    },
  },
  WSUrlHistory: {
    // read: 'modelwsurlhistoryread',
    list: 'modelwsurlhistorylist',
    insert: 'modelwsurlhistoryinsert',
    query: 'modelwsurlhistoryquery',
    State: {
      update: 'modelstatewsurlhistoryupdate',
    },
  },
  UrlHistory: {
    // read: 'modelwsurlhistoryread',
    list: 'modelurlhistorylist',
    insert: 'modelurlhistoryinsert',
    query: 'modelurlhistoryquery',
    State: {
      update: 'modelstateurlhistoryupdate',
    },
  },
  Environment: {
    read: 'modelenvironmentread',
    update: 'modelenvironmentupdate',
    delete: 'modelenvironmentdelete',
    list: 'modelenvironmentlist',
    current: 'modelenvironmentcurrent',
    select: 'modelenvironmentselect',
    State: {
      update: 'modelstateenvironmentupdate',
      delete: 'modelstateenvironmentdelete',
      select: 'modelstateenvironmentselect'
    },
  },
  Variable: {
    update: 'modelvariableupdate',
    delete: 'modelvariabledelete',
    list: 'modelvariablelist',
    set: 'modelvariableset',
    State: {
      update: 'modelstatevariableupdate',
      delete: 'modelstatevariabledelete',
    },
  },
  RestApi: {
    list: 'modelrestapilist',
    read: 'modelrestapiread',
    dataRead: 'modelrestapidataread',
    update: 'modelrestapiupdate',
    dataUpdate: 'modelrestapidataupdate',
    updateBulk: 'modelrestapiupdatebulk',
    delete: 'modelrestapidelete',
    versionDelete: 'modelrestapiversiondelete',
    State: {
      update: 'modelstaterestapiupdate',
      dataUpdate: 'modelstaterestapidataupdate',
      delete: 'modelstaterestapidelete',
      versionDelete: 'modelstaterestapiversiondelete',
    },
  },
};
Object.freeze(ArcModelEventTypes);
Object.freeze(ArcModelEventTypes.Project);
Object.freeze(ArcModelEventTypes.Project.State);
Object.freeze(ArcModelEventTypes.Request);
Object.freeze(ArcModelEventTypes.Request.State);
Object.freeze(ArcModelEventTypes.UrlIndexer);
Object.freeze(ArcModelEventTypes.UrlIndexer.State);
Object.freeze(ArcModelEventTypes.AuthData);
Object.freeze(ArcModelEventTypes.AuthData.State);
Object.freeze(ArcModelEventTypes.HostRules);
Object.freeze(ArcModelEventTypes.HostRules.State);
Object.freeze(ArcModelEventTypes.ClientCertificate);
Object.freeze(ArcModelEventTypes.ClientCertificate.State);
Object.freeze(ArcModelEventTypes.WSUrlHistory);
Object.freeze(ArcModelEventTypes.WSUrlHistory.State);
Object.freeze(ArcModelEventTypes.UrlHistory);
Object.freeze(ArcModelEventTypes.UrlHistory.State);
Object.freeze(ArcModelEventTypes.Environment);
Object.freeze(ArcModelEventTypes.Environment.State);
Object.freeze(ArcModelEventTypes.Variable);
Object.freeze(ArcModelEventTypes.Variable.State);
Object.freeze(ArcModelEventTypes.RestApi);
Object.freeze(ArcModelEventTypes.RestApi.State);
