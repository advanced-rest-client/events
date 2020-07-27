import {ResultEventDetail} from '../BaseEvents';

export const dataValue: symbol;
export const passphraseValue: symbol;
export const methodValue: symbol;


/**
 * An event to be dispatched when a data to be encrypted
 */
export class ArcEncryptEvent extends CustomEvent<ResultEventDetail<string>> {
  /**
   * The data to export
   */
  readonly data: any;
  /**
   * The passphrase to use in 2-way data encryption
   */
  readonly passphrase: string;
  /**
   * Encryption method to use
   */
  readonly method: string;

  /**
   * @param data The data to export
   * @param passphrase The passphrase to use in 2-way data encryption
   * @param method Encryption method to use
   */
  constructor(data: any, passphrase: string, method: string);
}

/**
 * An event to be dispatched when requesting a data to be decrypted
 */
export class ArcDecryptEvent extends CustomEvent<ResultEventDetail<string>> {
  /**
   * The data to decrypt
   */
  readonly data: string;
  /**
   * The passphrase to use to decrypt the data
   */
  readonly passphrase: string;
  /**
   * Method used to encrypt the data
   */
  readonly method: string;

  /**
   * @param data The data to decrypt
   * @param passphrase The passphrase to use to decrypt the data
   * @param method Method used to encrypt the data
   */
  constructor(data: string, passphrase: string, method: string);
}

/**
 * Dispatches an event handled by the export factory to export ARC's native data.
 *
 * @param target A node on which to dispatch the event.
 * @param data The data to export
 * @param passphrase The passphrase to use in 2-way data encryption
 * @param method Encryption method to use
 * @returns Promise resolved to the encryption result
 */
export declare function encryptAction(target: EventTarget, data: any, passphrase: string, method: string): Promise<string>;

/**
 * Dispatches an event handled by the encryption module to decrypt the data
 *
 * @param target A node on which to dispatch the event.
 * @param data The data to decrypt
 * @param passphrase The passphrase to use to decrypt the data
 * @param method Method used to encrypt the data
 * @returns Promise resolved to the decrypted result
 */
export declare function decryptAction(target: EventTarget, data: string, passphrase: string, method: string): Promise<string>;
