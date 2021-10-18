import { Entity } from './base';


export declare interface BasicAuthData {
  username?: string;
  password?: string;
  domain?: string;
}

export declare interface ARCAuthData extends BasicAuthData, Entity {

}