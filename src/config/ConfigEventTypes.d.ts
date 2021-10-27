/**
 * @deprecated Use `EventTypes` instead.
 */
declare interface ConfigStateEventTypes {
  update: string;
}
/**
 * @deprecated Use `EventTypes` instead.
 */
declare interface ConfigEventTypes {
  read: string;
  readAll: string;
  update: string;
  State: ConfigStateEventTypes;
}
/**
 * @deprecated Use `EventTypes` instead.
 */
export const ConfigEventTypes: Readonly<ConfigEventTypes>;
