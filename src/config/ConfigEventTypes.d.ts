declare interface ConfigStateEventTypes {
  update: string;
}

declare interface ConfigEventTypes {
  read: string;
  readAll: string;
  update: string;
  State: ConfigStateEventTypes;
}

export const ConfigEventTypes: Readonly<ConfigEventTypes>;
