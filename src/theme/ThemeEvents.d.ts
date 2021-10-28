import { SystemThemeInfo, ArcThemeStore, InstalledTheme } from './Themes';

declare interface IThemeEvents {
  /** 
   * Loads application theme applying user and system configuration.
   * This function should be used on each application page to load the theme.
   * @param target The node on which to dispatch the event.
   * @returns The id of the loaded theme.
   */
  loadApplicationTheme(target: EventTarget): Promise<string>;
  /** 
   * Loads theme file and activates it.
   * 
   * @param target The node on which to dispatch the event.
   * @param themeId The id of an installed theme or location of the theme file.
   * @param noFallback By default the manager will try to revert to the default
   * theme when passed theme cannot be loaded. When this option is set then
   * it will throw error instead of loading the default theme.
   */
  loadTheme(target: EventTarget, themeId?: string, noFallback?: boolean): Promise<void>;
  /** 
   * Lists installed in the application themes.
   * @param target The node on which to dispatch the event.
   * @return A promise resolved to the theme info array
   */
  readSate(target: EventTarget): Promise<ArcThemeStore>;
  /** 
   * Reads information about the current theme.
   * @param target The node on which to dispatch the event.
   * @return A promise resolved to the theme info array
   */
  readActiveThemeInfo(target: EventTarget): Promise<InstalledTheme>;
  /** 
   * Activates the theme. It stores theme id in user preferences and loads the
   * theme.
   * @param target The node on which to dispatch the event.
   * @param name The theme name to activate
   */
  activate(target: EventTarget, name: string): Promise<void>;
  /** 
   * Installs a theme.
   * @param target The node on which to dispatch the event.
   * @param name The theme to install
   */
  install(target: EventTarget, name: string): Promise<void>;
  /** 
   * Uninstalls a theme.
   * @param target The node on which to dispatch the event.
   * @param name The theme to uninstall
   */
  uninstall(target: EventTarget, name: string): Promise<void>;
  /** 
   * @param target The node on which to dispatch the event.
   * @param status Whether to ignore the system preferences for dark / light theme.
   */
  setSystemPreferred(target: EventTarget, status: boolean): Promise<void>;
  /** 
   * @param target The node on which to dispatch the event.
   */
  readSystemThemeInfo(target: EventTarget): Promise<SystemThemeInfo>;
  /** 
   * @param target The node on which to dispatch the event.
   */
  loadSystemPreferred(target: EventTarget): Promise<string>;
  /** 
   * @param target The node on which to dispatch the event.
   */
  loadUserPreferred(target: EventTarget): Promise<string>;
  /**
   * Dispatched when a theme has been activated.
   * @param target 
   * @param id The id of the activated theme
   */
  themeActivated(target: EventTarget, id: string): void;
}

export declare const ThemeEvents: Readonly<IThemeEvents>;
