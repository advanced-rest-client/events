export interface FindInPageOptions {
  /**
   * Whether to search forward or backward, defaults to `true`.
   */
  forward?: boolean;
  /**
   * Whether to begin a new text finding session with this request. Should be `true`
   * for initial requests, and `false` for follow-up requests. Defaults to `false`.
   */
  findNext?: boolean;
  /**
   * Whether search should be case-sensitive, defaults to `false`.
   */
  matchCase?: boolean;
}
