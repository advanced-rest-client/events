import { assert } from '@open-wc/testing';
import {
  ARCClientCertificateReadEvent,
  ARCClientCertificateInsertEvent,
  ARCClientCertificateUpdatedEvent,
  ARCClientCertificateDeleteEvent,
  ARCClientCertificateDeletedEvent,
  ARCClientCertificateListEvent,
} from '../../src/models/CertificatesEvents.js';
import { ArcModelEventTypes } from '../../src/models/ArcModelEventTypes.js';

/** @typedef {import('../../').ClientCertificate.ClientCertificate} ClientCertificate */

describe('CertificatesEvents', () => {
  describe('ARCClientCertificateReadEvent', () => {
    const id = 'test-cc-id';
    const rev = 'test-cc-rev-id';

    it('has readonly id property', () => {
      const e = new ARCClientCertificateReadEvent(id);
      assert.equal(e.id, id, 'has the id');
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCClientCertificateReadEvent(id, rev);
      assert.equal(e.rev, rev, 'has the rev');
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCClientCertificateReadEvent(id, rev);
      assert.equal(e.type, ArcModelEventTypes.ClientCertificate.read);
    });
  });

  describe('ARCClientCertificateInsertEvent', () => {
    it('has readonly certificate property', () => {
      const item = /** @type ClientCertificate */ ({ name: 'test' });
      const e = new ARCClientCertificateInsertEvent(item);
      assert.deepEqual(e.certificate, item);
      assert.throws(() => {
        // @ts-ignore
        e.certificate = 'test';
      });
    });

    it('has the correct type', () => {
      const item = /** @type ClientCertificate */ ({ name: 'test' });
      const e = new ARCClientCertificateInsertEvent(item);
      assert.equal(e.type, ArcModelEventTypes.ClientCertificate.insert);
    });
  });

  describe('ARCClientCertificateUpdatedEvent', () => {
    const record = {
      id: 'cc-id',
      rev: 'cc-rev',
      item: /** @type ClientCertificate */ ({ name: 'test' }),
    };

    it('has readonly changeRecord property', () => {
      const e = new ARCClientCertificateUpdatedEvent(record);
      assert.deepEqual(e.changeRecord, record);
      assert.throws(() => {
        // @ts-ignore
        e.changeRecord = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCClientCertificateUpdatedEvent(record);
      assert.equal(e.type, ArcModelEventTypes.ClientCertificate.State.update);
    });
  });

  describe('ARCClientCertificateDeleteEvent', () => {
    const id = 'test-cc-id';
    const rev = 'test-cc-rev-id';

    it('has readonly id property', () => {
      const e = new ARCClientCertificateDeleteEvent(id);
      assert.equal(e.id, id, 'has the id');
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCClientCertificateDeleteEvent(id, rev);
      assert.equal(e.rev, rev, 'has the rev');
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCClientCertificateDeleteEvent(id, rev);
      assert.equal(e.type, ArcModelEventTypes.ClientCertificate.delete);
    });
  });

  describe('ARCClientCertificateDeletedEvent', () => {
    const id = 'test-cc-id';
    const rev = 'test-cc-rev-id';

    it('has readonly id property', () => {
      const e = new ARCClientCertificateDeletedEvent(id, rev);
      assert.equal(e.id, id, 'has the id');
      assert.throws(() => {
        // @ts-ignore
        e.id = 'test';
      });
    });

    it('has readonly rev property', () => {
      const e = new ARCClientCertificateDeletedEvent(id, rev);
      assert.equal(e.rev, rev, 'has the rev');
      assert.throws(() => {
        // @ts-ignore
        e.rev = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCClientCertificateDeletedEvent(id, rev);
      assert.equal(e.type, ArcModelEventTypes.ClientCertificate.State.delete);
    });
  });

  describe('ARCClientCertificateListEvent', () => {
    const opts = { limit: 5, nextPageToken: 'test-page-token' };

    it('has readonly limit property', () => {
      const e = new ARCClientCertificateListEvent(opts);
      assert.deepEqual(e.limit, opts.limit);
      assert.throws(() => {
        // @ts-ignore
        e.limit = 'test';
      });
    });

    it('has readonly nextPageToken property', () => {
      const e = new ARCClientCertificateListEvent(opts);
      assert.deepEqual(e.nextPageToken, opts.nextPageToken);
      assert.throws(() => {
        // @ts-ignore
        e.nextPageToken = 'test';
      });
    });

    it('has the correct type', () => {
      const e = new ARCClientCertificateListEvent(opts);
      assert.equal(e.type, ArcModelEventTypes.ClientCertificate.list);
    });
  });
});
