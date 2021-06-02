import { Variable, Model } from '@advanced-rest-client/arc-types';
import {
  ARCModelReadEventDetail,
  ARCModelUpdateEventDetail,
  ARCModelDeleteEventDetail,
  ARCEntityDeletedEvent,
  ARCEntityListEvent,
} from './BaseEvents';

export declare const nameValue: unique symbol;
export declare const environmentValue: unique symbol;
export declare const environmentIdValue: unique symbol;
export declare const variableValue: unique symbol;
export declare const variableIdValue: unique symbol;
export declare const changeRecordValue: unique symbol;

/**
 * A definition fo the detail object for the environment change state event.
 */
export declare interface EnvironmentStateDetail {
  /**
   * The currently (new) selected environment. The components should use this value to select
   * the environment if needed.
   * Note, when the value is not set (has the `null` value) meant that selected environment is the `default`
   * environment which has no representation in the data store.
   */
  environment: Variable.ARCEnvironment|null;
  /**
   * The list of variables associated with this environment. It my be an empty list
   * when the environment has no variables.
   */
  variables: Variable.ARCVariable[];
  /**
   * An optional and readonly map of system variables that should be applied to the variables processor.
   */
  systemVariables?: Variable.SystemVariables
}

export declare interface ARCVariablesListOptions extends Model.ARCModelListOptions {
  /**
   * When set it ignores other list parameters and returns all results in a single query.
   * This also means that the page token is never set.
   * Default to false.
   */
  readall?: boolean;
}

/**
 * An event to be dispatched to read an ARC Environment from the data store.
 */
export class ARCEnvironmentReadEvent extends CustomEvent<ARCModelReadEventDetail<Variable.ARCEnvironment>> {
  /**
   * The name of the environment used to initialize this event.
   */
  readonly name: string;

  /**
   * @param name The name of the environment
   */
  constructor(name: string);
}

/**
 * An event dispatched to the store to update an environment.
 */
export class ARCEnvironmentUpdateEvent extends CustomEvent<ARCModelUpdateEventDetail<Variable.ARCEnvironment>> {
  /**
   * An environment used to initialize this event.
   */
  readonly environment: Variable.ARCEnvironment;

  /**
   * @param environment An environment to update.
   */
  constructor(environment: Variable.ARCEnvironment);
}

/**
 * An event dispatched from the store after updating an environment
 */
export class ARCEnvironmentUpdatedEvent extends CustomEvent<Model.ARCEntityChangeRecord<Variable.ARCEnvironment>> {
  /**
   * The change record
   */
  readonly changeRecord: Model.ARCEntityChangeRecord<Variable.ARCEnvironment>;

  /**
   * @param record Entity change record.
   */
  constructor(record: Model.ARCEntityChangeRecord<Variable.ARCEnvironment>);
}

/**
 * An event dispatched to the store to delete an environment and its variables.
 */
export class ARCEnvironmentDeleteEvent extends CustomEvent<ARCModelDeleteEventDetail> {
  /**
   * The environment id used to initialize the event.
   */
  readonly id: string;

  /**
   * @param id The environment id
   */
  constructor(id: string);
}

/**
 * An event dispatched by the store after an environment was deleted.
 */
export class ARCEnvironmentDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * @param id The id of the deleted environment
   * @param rev Updated revision
   */
  constructor(id: string, rev: string);
}

/**
 * An event to be dispatched to list environments with pagination.
 */
export class ARCEnvironmentListEvent extends ARCEntityListEvent<Variable.ARCEnvironment> {
  /**
   * When set it ignores other list parameters and returns all results in a single query.
   * This also means that the page token is never set.
   */
  readonly readall?: boolean;
  /**
   * @param {ARCVariablesListOptions=} opts Query options.
   */
  constructor(opts?: ARCVariablesListOptions);
}


/**
 * An event dispatches when a component needs to read current environment details.
 */
export declare class ARCEnvironmentCurrentEvent extends CustomEvent<ARCModelReadEventDetail<EnvironmentStateDetail>> {
  constructor();
}

/**
 * An event dispatches when a user changes the environment. This event is to be dispatched
 * by components to the variables model and the model informs other components about the change
 * through the state event.
 */
export class ARCEnvironmentSelectEvent extends CustomEvent<string> {
  /**
   * @param id The ID of the environment to select. When not set it selects the default environment.
   */
  constructor(id?: string);
}

/**
 * An event dispatches when the environment changed. It contains information about the current environment,
 * and it's variables.
 */
export class ARCEnvironmentStateSelectEvent extends CustomEvent<EnvironmentStateDetail> {
  /**
   * @param detail The change record for the environment
   */
  constructor(detail: EnvironmentStateDetail);
}

/**
 * An event dispatched to the store to update a variable.
 */
export class ARCVariableUpdateEvent extends CustomEvent<ARCModelUpdateEventDetail<Variable.ARCVariable>> {
  /**
   * A variable used to initialize this event.
   */
  readonly variable: Variable.ARCVariable;

  /**
   * @param variable A variable to update.
   */
  constructor(variable: Variable.ARCVariable);
}


/**
 * An event dispatched to create / update a variable in the current environment
 */
export declare class ARCVariableSetEvent extends CustomEvent<ARCModelUpdateEventDetail<Variable.ARCVariable>> {
  /**
   * The variable name used to initialize this event
   */
  get name(): string;
  /**
   * The variable value to set
   */
  get value(): string;

   /**
   * @param name The name of the variable. Case sensitive.
   * @param value The value to set on the variable.
   */
  constructor(name: string, value: string);
}


/**
 * An event dispatched from the store after updating a variable
 */
export class ARCVariableUpdatedEvent extends CustomEvent<Model.ARCEntityChangeRecord<Variable.ARCVariable>> {
  /**
   * The change record
   */
  readonly changeRecord: Model.ARCEntityChangeRecord<Variable.ARCVariable>;

  /**
   * @param record Entity change record.
   */
  constructor(record: Model.ARCEntityChangeRecord<Variable.ARCVariable>);
}

/**
 * An event dispatched to the store to delete a variable
 */
export class ARCVariableDeleteEvent extends CustomEvent<ARCModelDeleteEventDetail> {
  /**
   * The variable id used to initialize the event.
   */
  readonly id: string;

  /**
   * @param id The variable id
   */
  constructor(id: string);
}

/**
 * An event dispatched by the store after a variable was deleted.
 */
export class ARCVariableDeletedEvent extends ARCEntityDeletedEvent {
  /**
   * @param id The id of the deleted variable
   * @param rev Updated revision
   */
  constructor(id: string, rev: string);
}

/**
 * An event to be dispatched to list variables with pagination.
 */
export class ARCVariableListEvent extends ARCEntityListEvent<Variable.ARCVariable> {
  /**
   * The name of the environment used to initialize this event.
   */
  readonly name: string;
  /**
   * When set it ignores other list parameters and returns all results in a single query.
   * This also means that the page token is never set.
   */
  readonly readall?: boolean;

  /**
   * @param  name The name of the environment
   * @param opts Query options.
   */
  constructor(name: string, opts?: ARCVariablesListOptions);
}

/**
 * Dispatches an event handled by the data store to read the environment metadata
 *
 * @param target A node on which to dispatch the event.
 * @param name The name of the environment
 * @returns Promise resolved to an environment model.
 */
export declare function readEnvironmentAction(target: EventTarget, name: string): Promise<Variable.ARCEnvironment>;

/**
 * Dispatches an event handled by the data store to update an environment metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param item The environment object to update.
 * @returns Promise resolved to the change record
 */
export declare function updateEnvironmentAction(target: EventTarget, item: Variable.ARCEnvironment): Promise<Model.ARCEntityChangeRecord<Variable.ARCEnvironment>>;

/**
 * Dispatches an event handled by the data store to delete an environment and its variables.
 *
 * @param target A node on which to dispatch the event.
 * @param id The id of the environment to delete.
 * @returns Promise resolved to the delete record
 */
export declare function deleteEnvironmentAction(target: EventTarget, id: string): Promise<Model.DeletedEntity>;

/**
 * Dispatches an event to list the environments data.
 *
 * @param target A node on which to dispatch the event.
 * @param opts Query options.
 * @returns Model query result.
 */
export declare function listEnvironmentAction(target: EventTarget, opts?: ARCVariablesListOptions): Promise<Model.ARCModelListResult<Variable.ARCEnvironment>>;

/**
 * Dispatches an event handled by the data store to update a variable metadata.
 *
 * @param target A node on which to dispatch the event.
 * @param item The variable object to update.
 * @returns Promise resolved to the change record
 */
export declare function updateVariableAction(target: EventTarget, item: Variable.ARCVariable): Promise<Model.ARCEntityChangeRecord<Variable.ARCVariable>>;


/**
 * Dispatches an event handled by the data store to set a variable for the current environment.
 *
 * @param target A node on which to dispatch the event.
 * @param name The name of the variable. Case sensitive.
 * @param value The value to set on the variable.
 * @returns Promise resolved to the change record
 */
export declare function setVariableAction(target: EventTarget, name: string, value: string): Promise<Model.ARCEntityChangeRecord<Variable.ARCVariable>>;

/**
 * Dispatches an event handled by the data store to delete a variable.
 *
 * @param target A node on which to dispatch the event.
 * @param id The id of the variable to delete.
 * @returns Promise resolved to the delete record
 */
export declare function deleteVariableAction(target: EventTarget, id: string): Promise<Model.DeletedEntity>;

/**
 * Dispatches an event to list the variables data.
 *
 * @param target A node on which to dispatch the event.
 * @param name The name of the environment
 * @param opts Query options.
 * @returns Model query result.
 */
export declare function listVariableAction(target: EventTarget, name: string, opts?: ARCVariablesListOptions): Promise<Model.ARCModelListResult<Variable.ARCVariable>>;

/**
 * Dispatches an event to read current environment information.
 *
 * @param target A node on which to dispatch the event.
 * @returns Promise resolved to the current environment definition.
 */
export declare function currentEnvironmentAction(target: EventTarget): Promise<EnvironmentStateDetail>;

/**
 * Dispatches an event to read current environment information.
 *
 * @param target A node on which to dispatch the event.
 * @param id The id of the environment to select. Falsy value if should select the default environment.
 * @returns This has no side effects.
 */
export declare function selectEnvironmentAction(target: EventTarget, id: string): void;

//
// State events
//

/**
 * Dispatches an event after an environment was updated
 *
 * @param target A node on which to dispatch the event.
 * @param record Change record
 */
export declare function updatedEnvironmentState(target: EventTarget, record: Model.ARCEntityChangeRecord<Variable.ARCEnvironment>): void;

/**
 * Dispatches an event after an environment was deleted
 *
 * @param target A node on which to dispatch the event.
 * @param id Deleted record id.
 * @param rev Updated revision.
 */
export declare function deletedEnvironmentState(target: EventTarget, id: string, rev: string): void;

/**
 * Dispatches an event after a variable was updated
 *
 * @param target A node on which to dispatch the event.
 * @param record Change record
 */
export declare function updatedVariableState(target: EventTarget, record: Model.ARCEntityChangeRecord<Variable.ARCVariable>): void;

/**
 * Dispatches an event after an variable was deleted
 *
 * @param target A node on which to dispatch the event.
 * @param id Deleted record id.
 * @param rev Updated revision.
 */
export declare function deletedVariableState(target: EventTarget, id: string, rev: string): void;

/**
 * Dispatches an event to read current environment information.
 *
 * @param target A node on which to dispatch the event.
 * @param state Current environment state definition.
 * @returns This has no side effects.
 */
export declare function environmentSelectedAction(target: EventTarget, state: EnvironmentStateDetail): void;
