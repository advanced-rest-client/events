export interface IProcessEvents {
  /**
   * @param target
   * @param pid Process id
   * @param message Optional message to render.
   */
  loadingstart(target: EventTarget, pid: string, message?: string): void;
  loadingstop(target: EventTarget, pid: string): void;
  loadingerror(target: EventTarget, pid: string, error: Error): void;
}

export const ProcessEvents: IProcessEvents;
