import { ApiType } from './ApiTypes';
import { Entity } from './base';

export declare interface Environment {
  name: string;
  created?: number;
}

export declare interface Variable extends ApiType {
}

export declare interface ARCEnvironment extends Environment, Entity {
  
}

export declare interface ARCVariable extends Variable, Entity {
  /**
   * The name of the environment the variable is added to.
   */
  environment: string;
  /**
   * @deprecated Use `name` instead.
   */
  variable?: string;
}

export declare type SystemVariables = Readonly<{[key: string]: string}>;
