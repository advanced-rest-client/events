import { ArcStoredRequest } from '../request/ArcRequest.js';
import { Entity } from './base.js';

/**
 * @deprecated This is used in ARC < 18.
 */
export interface IArcLegacyProject extends Entity {
  /**
   * The list of all requests defined in the project.
   */
  requests: string[];
  /**
   * The name of the project
   */
  name: string;
  /**
   * The description of the project
   */
  description?: string;
  /**
   * Project order
   * @deprecated This was never used and there's no plan to use it.
   */
  order?: number;
  error?: boolean;
  /**
   * Timestamp when the project was last updated.
   */
  updated?: number;
  /**
   * Timestamp when the project was created.
   */
  created?: number;
}

export const ProjectKind = 'ARC#Project';
export const ProjectFolderKind = 'ARC#ProjectFolder';
export const ProjectRequestKind = 'ARC#ProjectRequest';

export interface IArcProjectRequest extends ArcStoredRequest {
  /**
   * The auto-generated key for the request object
   */
  key: string;
  /**
   * The name of the request
   */
  name: string;
  /**
   * The description of the request
   */
  description?: string;
}

export interface IArcProjectItem {
  kind: typeof ProjectFolderKind | typeof ProjectRequestKind;
  key: string;
}

export interface IProjectDefinitions {
  /**
   * The list of all folders defined in the project.
   */
  folders?: IArcProjectFolder[];
  /**
   * The list of all requests defined in the project.
   */
  requests?: IArcProjectRequest[];
}

export interface IProject extends IArcProjectFolder {
  /**
   * Project order
   * @deprecated This was never used and there's no plan to use it.
   */
  order?: number;
  error?: boolean;

  definitions: IProjectDefinitions;
}

export interface IArcProjectFolder {
  /**
   * The auto-generated key for the folder object.
   * For the project root this is the same as the `_id`.
   */
  kind: typeof ProjectKind | typeof ProjectFolderKind;
  /**
   * The name of the folder
   */
  name: string;
  /**
   * The description of the folder
   */
  description?: string;
  /**
   * The list of items in the folder.
   * It is an ordered list of requests and folders.
   * The actual definition is kept in the root's `definitions`.
   */
  items: IArcProjectItem[];
  /**
   * Timestamp when the project was last updated.
   */
  updated?: number;
  /**
   * Timestamp when the project was created.
   */
  created?: number;
}

export declare interface ARCProject extends IProject, Entity {
}
