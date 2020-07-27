/* eslint-disable max-classes-per-file */
import { EncryptionEventTypes } from './EncryptionEventTypes.js';

export const dataValue = Symbol('dataValue');
export const passphraseValue = Symbol('passphraseValue');
export const methodValue = Symbol('methodValue');

/**
 * An event to be dispatched when request a data to be encrypted
 */
export class ArcEncryptEvent extends CustomEvent {
  /**
   * @return {any} The data to encrypt
   */
  get data() {
    return this[dataValue];
  }

  /**
   * @return {string} The passphrase to use in 2-way data encryption
   */
  get passphrase() {
    return this[passphraseValue];
  }

  /**
   * @return {string} method Encryption method to use
   */
  get method() {
    return this[methodValue];
  }

  /**
   * @param {any} data The data to export
   * @param {string} passphrase The passphrase to use in 2-way data encryption
   * @param {string} method Encryption method to use
   */
  constructor(data, passphrase, method) {
    super(EncryptionEventTypes.encrypt, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[dataValue] = data;
    this[passphraseValue] = passphrase;
    this[methodValue] = method;
  }
}

/**
 * An event to be dispatched when requesting a data to be decrypted
 */
export class ArcDecryptEvent extends CustomEvent {
  /**
   * @return {string} The data to decrypt
   */
  get data() {
    return this[dataValue];
  }

  /**
   * @return {string} The passphrase to use to decrypt the data
   */
  get passphrase() {
    return this[passphraseValue];
  }

  /**
   * @return {string} method Method used to encrypt the data
   */
  get method() {
    return this[methodValue];
  }

  /**
   * @param {string} data The data to decrypt
   * @param {string} passphrase The passphrase to use to decrypt the data
   * @param {string} method Method used to encrypt the data
   */
  constructor(data, passphrase, method) {
    super(EncryptionEventTypes.decrypt, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {},
    });
    this[dataValue] = data;
    this[passphraseValue] = passphrase;
    this[methodValue] = method;
  }
}

/**
 * Dispatches an event handled by the encryption module to encrypt the data
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {any} data The data to encrypt
 * @param {string} passphrase The passphrase to use in 2-way data encryption
 * @param {string} method Encryption method to use
 * @return {Promise<string>} Promise resolved to the encryption result
 */
export async function encryptAction(target, data, passphrase, method) {
  const e = new ArcEncryptEvent(data, passphrase, method);
  target.dispatchEvent(e);
  return e.detail.result;
}

/**
 * Dispatches an event handled by the encryption module to decrypt the data
 *
 * @param {EventTarget} target A node on which to dispatch the event.
 * @param {string} data The data to decrypt
 * @param {string} passphrase The passphrase to use to decrypt the data
 * @param {string} method Method used to encrypt the data
 * @return {Promise<string>} Promise resolved to the decrypted result
 */
export async function decryptAction(target, data, passphrase, method) {
  const e = new ArcDecryptEvent(data, passphrase, method);
  target.dispatchEvent(e);
  return e.detail.result;
}
