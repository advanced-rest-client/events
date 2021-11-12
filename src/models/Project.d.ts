import { Entity } from './base';

export declare interface Project extends ProjectFolder {
  /**
   * Project order
   */
  order?: number;
  error?: boolean;
}

export declare interface ARCProject extends Project, Entity {
}

export interface ProjectFolder {
  kind: 'ARC#Project' | 'ARC#ProjectFolder';
  /**
   * The name of the folder
   */
  name: string;
  /**
   * The description of the folder
   */
  description?: string;
  /**
   * List of requests associated with the project.
   */
  requests?: string[];
  /**
   * The list of sub-folders relative to this folder.
   */
  folders: ProjectFolder[];
  /**
   * Timestamp when the project was last updated.
   */
  updated?: number;
  /**
   * Timestamp when the project was created.
   */
  created?: number;
}
