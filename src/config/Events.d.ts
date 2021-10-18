import { Config } from '../../';
import {ResultEventDetail, VoidEventDetail} from '../BaseEvents';

export declare interface ConfigKeyEventDetail {
  /**
   * The key path to the configuration value
   */
  key: string;
}

export declare interface ConfigPropertyEventDetail extends ConfigKeyEventDetail {
  /**
   * The value stored under the key.
   */
  value: any;
}

/**
 * An event dispatched to read the application config.
 */
export declare class ConfigReadEvent extends CustomEvent<ResultEventDetail<Config.ARCConfig>> {
  constructor();
}

/**
 * An event dispatched to read a single value of the configuration
 */
export declare class ConfigPropertyReadEvent extends CustomEvent<ConfigKeyEventDetail & ResultEventDetail<any>> {
  /**
   * @param key The key path where the value is stored.
   */
  constructor(key: string);
}

/**
 * An event dispatched when a configuration has been changed by the user and should be stored
 * and propagated in the application.
 */
export declare class ConfigUpdateEvent extends CustomEvent<ConfigPropertyEventDetail & VoidEventDetail> {
  /**
   * @param key The key path where to store the value.
   * @param value The value to store.
   */
  constructor(key: string, value: any);
}

/**
 * An event dispatched when a configuration property has been stored by the application.
 * Each listener should take an action on the changed configuration property.
 */
export declare class ConfigStateUpdateEvent extends CustomEvent<ConfigPropertyEventDetail> {
  /**
   * @param key The key path where to store the value.
   * @param value The value to store.
   */
  constructor(key: string, value: any);
}

/**
 * Reads a single config value.
 * @param target The target on which to dispatch the event
 * @param key The key path where the value is stored.
 * @returns Promise resolved to the configuration value
 */
export declare function readAction(target: EventTarget, key: string): Promise<any>;

/**
 * Reads the entire application configuration
 * @param target The target on which to dispatch the event
 * @returns Promise resolved to the configuration value
 */
export declare function readConfigAction(target: EventTarget): Promise<Config.ARCConfig>;

/**
 * Updates a single property in the application configuration object.
 * @param target The target on which to dispatch the event
 * @param key The key path where to store the value.
 * @param value The value to store.
 * @returns Promise resolved when the transaction commits.
 */
export declare function updateAction(target: EventTarget, key: string, value: any): Promise<void>;

/**
 * Propagates configuration change information.
 * @param target The target on which to dispatch the event
 * @param key The key path where to store the value.
 * @param value The value to store.
 * @returns This has no side effects
 */
export declare function updatedAction(target: EventTarget, key: string, value: any): void;
