export declare interface IUpdaterEvents {
  /** 
   * Checks for an application update.
   * @param target The node on which to dispatch the event.
   * @returns The update information object. This depends on the platform.
   */
  checkForUpdate(target: EventTarget): Promise<unknown>;
  /** 
   * Quits the application and installs the update.
   * @param target The node on which to dispatch the event.
   */
   installUpdate(target: EventTarget): Promise<void>;
  State: IUpdaterStateEvents;
}

export declare interface IUpdaterStateEvents {
  /**
   * 
   */
  checkingForUpdate(target: EventTarget): void;
  /**
   * @param info The update information object. This depends on the platform.
   */
  updateAvailable(target: EventTarget, info: unknown): void;
  /**
   */
  updateNotAvailable(target: EventTarget): void;
  /**
   * @param info The error information object. This depends on the platform.
   */
  autoUpdateError(target: EventTarget, info: unknown): void;
  /**
   * @param info The download information object. This depends on the platform.
   */
  downloadProgress(target: EventTarget, info: unknown): void;
  /**
   * @param info The update information object. This depends on the platform.
   */
  updateDownloaded(target: EventTarget, info: unknown): void;
}
export const UpdaterEvents: Readonly<IUpdaterEvents>;
