declare interface EncryptionEvents {
  /**
   * Dispatches an event handled by the export factory to export ARC's native data.
   *
   * @param target A node on which to dispatch the event.
   * @param data The data to export
   * @param passphrase The passphrase to use in 2-way data encryption
   * @param method Encryption method to use
   * @returns Promise resolved to the encryption result
   */
  encrypt(target: EventTarget, data: any, passphrase: string, method: string): Promise<string>;
  /**
   * Dispatches an event handled by the encryption module to decrypt the data
   *
   * @param target A node on which to dispatch the event.
   * @param data The data to decrypt
   * @param passphrase The passphrase to use to decrypt the data
   * @param method Method used to encrypt the data
   * @returns Promise resolved to the decrypted result
   */
  decrypt(target: EventTarget, data: string, passphrase: string, method: string): Promise<string>;
}

export const EncryptionEvents: EncryptionEvents;
