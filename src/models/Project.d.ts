import { Entity } from './base';

export declare interface Project {
  /**
   * Project order
   */
  order?: number;
  /**
   * List of requests associated with the project.
   */
  requests?: string[];
  /**
   * Timestamp when the project was last updated.
   */
  updated?: number;
  /**
   * Timestamp when the project was created.
   */
  created?: number;
  /**
   * The name of the project
   */
  name: string;
  /**
   * The description of the project
   */
  description?: string;
  error?: boolean;
}

export declare interface ARCProject extends Project, Entity {
}