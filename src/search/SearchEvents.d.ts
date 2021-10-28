import { FindInPageOptions } from './Search';

export interface ISearchEvents {
  /** 
   * Triggers the search action.
   * @param target The node on which to dispatch the event.
   * @param query The search term
   * @param options Optional query options.
   * @returns Resolved when the search command was sent to the backend.
   */
  find(target: EventTarget, query: string, options?: FindInPageOptions): Promise<void>;
  /** 
   * Clears the search result
   * @param target The node on which to dispatch the event.
   * @returns Resolved when the clear command was sent to the backend.
   */
  clear(target: EventTarget): Promise<void>;
  State: ISearchStateEvents;
}

export interface ISearchStateEvents {
  /**
   * @param target The node on which to dispatch the event.
   * @param matches The number of matches in the search result.
   * @param activeMatchOrdinal The index of the currently highlighted matched item.
   */
  foundInPage(target: EventTarget, matches: number, activeMatchOrdinal: number): void;
}

export const SearchEvents: Readonly<ISearchEvents>;
