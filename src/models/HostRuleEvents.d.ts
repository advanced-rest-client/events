import { HostRule, Model } from '@advanced-rest-client/arc-types';
import {
  ARCEntityDeletedEvent,
  ARCEntityListEvent,
  ARCModelDeleteEventDetail,
  ARCModelUpdateEventDetail,
  ARCModelUpdateBulkEventDetail,
} from './BaseEvents';

/**
 * An event dispatched to the store to update a host rule entity.
 */
export declare class ARCHostRuleUpdateEvent extends CustomEvent<ARCModelUpdateEventDetail<HostRule.ARCHostRule>> {
  /**
   * The rule object to save / update
   */
  readonly rule: HostRule.ARCHostRule;

  /**
   * @param rule The rule object to save / update
   */
  constructor(rule: HostRule.ARCHostRule);
}

/**
 * An event dispatched to the store to update a host rule entities in a bulk operation
 */
export declare class ARCHostRuleUpdateBulkEvent extends CustomEvent<ARCModelUpdateBulkEventDetail<HostRule.ARCHostRule>> {
  /**
   * @return The rule object to save / update
   */
  readonly rules: HostRule.ARCHostRule[];

  /**
   * @param rules The rule object to save / update
   */
  constructor(rules: HostRule.ARCHostRule[]);
}

/**
 * An event dispatched by the store after a host rule has been updated.
 */
export declare class ARCHostRuleUpdatedEvent extends Event {
  /**
   * @return Change record
   */
  readonly changeRecord: Model.ARCEntityChangeRecord<HostRule.ARCHostRule>;

  /**
   * @param record The rule change record
   */
  constructor(record: Model.ARCEntityChangeRecord<HostRule.ARCHostRule>);
}

/**
 * An event dispatched to the store to delete a host rule.
 */
export declare class ARCHostRuleDeleteEvent extends CustomEvent<ARCModelDeleteEventDetail> {
  /**
   * @return Rule id used to initialize the event
   */
  readonly id: string;

  /**
   * @return A revision ID to delete
   */
  readonly rev: string;

  /**
   * @param id Request id
   * @param rev A revision ID to delete
   */
  constructor(id: string, rev?: string);
}

/**
 * An event dispatched by the data store when a host rule entity was deleted.
 */
export declare class ARCHostRuleDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * @param id Host rule id
   * @param rev An updated revision ID of the deleted object.
   */
  constructor(id: string, rev: string);
}

/**
 * An event dispatched by the UI when requesting a list of host rules
 */
export declare class ARCHostRulesListEvent extends ARCEntityListEvent<HostRule.ARCHostRule> {
  /**
   * @param opts Query options.
   */
  constructor(opts?: Model.ARCModelListOptions);
}

/**
 * Dispatches an event handled by the data store to update a host rule entity
 *
 * @param target A node on which to dispatch the event.
 * @param rule The rule object to save / update
 * @returns Promise resolved to a the change record
 */
export declare function updateAction(target: EventTarget, rule: HostRule.ARCHostRule): Promise<Model.ARCEntityChangeRecord<HostRule.ARCHostRule>>;

/**
 * Dispatches an event handled by the data store to update host rule entities in bulk
 *
 * @param target A node on which to dispatch the event.
 * @param rules The rules to save / update
 * @returns Promise resolved to a the list of a change record
 */
export declare function updateActionBulk(target: EventTarget, rules: HostRule.ARCHostRule[]): Promise<Model.ARCEntityChangeRecord<HostRule.ARCHostRule>[]>;

/**
 * Dispatches an event informing about a change in the host rules model.
 *
 * @param target A node on which to dispatch the event.
 * @param record Host rules change record.
 */
export declare function updatedState(target: EventTarget, record: Model.ARCEntityChangeRecord<HostRule.ARCHostRule>): void;

/**
 * Dispatches an event handled by the data store to read a host rules data.
 *
 * @param target A node on which to dispatch the event.
 * @param opts List options.
 * @returns Promise resolved to list of results
 */
export declare function listAction(target: EventTarget, opts?: Model.ARCModelListOptions): Promise<Model.ARCModelListResult<HostRule.ARCHostRule>>;

/**
 * Dispatches an event handled by the data store to delete an ARC request from the store.
 *
 * @param target A node on which to dispatch the event.
 * @param id The host rule id
 * @param rev A revision ID to delete
 * @returns Delete record
 */
export declare function deleteAction(target: EventTarget, id: string, rev?: string): Promise<Model.DeletedEntity>;

/**
 * Dispatches an event after a host rule was deleted
 *
 * @param target A node on which to dispatch the event.
 * @param id Deleted host rule id.
 * @param rev Updated revision of the deleted entity.
 */
export declare function deletedState(target: EventTarget, id: string, rev: string): void;
