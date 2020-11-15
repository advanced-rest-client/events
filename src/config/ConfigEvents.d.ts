import { Config } from '@advanced-rest-client/arc-types';

declare interface ConfigStateEvents {
  /**
   * Propagates configuration change information.
   * @param target The target on which to dispatch the event
   * @param key The key path where to store the value.
   * @param value The value to store.
   * @returns This has no side effects
   */
  update(target: EventTarget, key: string, value: any): void;
}

declare interface ConfigEvents {
  /**
   * Reads a single config value.
   * @param target The target on which to dispatch the event
   * @param key The key path where the value is stored.
   * @returns Promise resolved to the configuration value
   */
  read(target: EventTarget, key: string): Promise<any>;
  /**
   * Reads the entire application configuration
   * @param target The target on which to dispatch the event
   * @returns Promise resolved to the configuration value
   */
  readAll(target: EventTarget): Promise<Config.ARCConfig>;
  /**
   * Updates a single property in the application configuration object.
   * @param target The target on which to dispatch the event
   * @param key The key path where to store the value.
   * @param value The value to store.
   * @returns Promise resolved when the transaction commits.
   */
  update(target: EventTarget, key: string, value: any): Promise<void>;

  State: ConfigStateEvents;
}

export const ConfigEvents: Readonly<ConfigEvents>;
