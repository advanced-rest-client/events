/* eslint-disable max-classes-per-file */
import { EventTypes } from '../EventTypes.js';
import { ArcContextVoidEvent, ArcContextEvent } from '../BaseEvents.js';

/** @typedef {import('./Themes').SystemThemeInfo } SystemThemeInfo */
/** @typedef {import('./Themes').ArcThemeStore } ArcThemeStore */
/** @typedef {import('./Themes').InstalledTheme } InstalledTheme */

export const ThemeEvents = {
  /** 
   * Loads application theme applying user and system configuration.
   * This function should be used on each application page to load the theme.
   * @param {EventTarget} target The node on which to dispatch the event.
   * @returns {Promise<string>} The id of the loaded theme.
   */
  loadApplicationTheme: async (target) => {
    const e = new ArcContextEvent(EventTypes.Theme.loadApplicationTheme, {});
    target.dispatchEvent(e);
    return e.detail.result;
  },
  /** 
   * Loads theme file and activates it.
   * 
   * @param {EventTarget} target The node on which to dispatch the event.
   * @param {string=} themeId The id of an installed theme or location of the theme file.
   * @param {boolean=} noFallback By default the manager will try to revert to the default
   * theme when passed theme cannot be loaded. When this option is set then
   * it will throw error instead of loading the default theme.
   * @returns {Promise<void>}
   */
  loadTheme: async (target, themeId, noFallback) => {
    const e = new ArcContextVoidEvent(EventTypes.Theme.loadTheme, { themeId, noFallback });
    target.dispatchEvent(e);
    await e.detail.result;
  },
  /** 
   * Lists installed in the application themes.
   * @param {EventTarget} target The node on which to dispatch the event.
   * @return {Promise<ArcThemeStore>} A promise resolved to the theme info array
   */
  readSate: async (target) => {
    const e = new ArcContextEvent(EventTypes.Theme.readSate, {});
    target.dispatchEvent(e);
    return e.detail.result;
  },
  /** 
   * Reads information about the current theme.
   * @param {EventTarget} target The node on which to dispatch the event.
   * @return {Promise<InstalledTheme>} A promise resolved to the theme info array
   */
  readActiveThemeInfo: async (target) => {
    const e = new ArcContextEvent(EventTypes.Theme.readActiveThemeInfo, {});
    target.dispatchEvent(e);
    return e.detail.result;
  },
  /** 
   * Activates the theme. It stores theme id in user preferences and loads the
   * theme.
   * @param {EventTarget} target The node on which to dispatch the event.
   * @param {string} name The theme name to activate
   * @returns {Promise<void>}
   */
  activate: async (target, name) => {
    const e = new ArcContextVoidEvent(EventTypes.Theme.activate, { name });
    target.dispatchEvent(e);
    await e.detail.result;
  },
  /** 
   * Installs a theme.
   * @param {EventTarget} target The node on which to dispatch the event.
   * @param {string} name The theme to install
   * @returns {Promise<void>}
   */
  install: async (target, name) => {
    const e = new ArcContextVoidEvent(EventTypes.Theme.install, { name });
    target.dispatchEvent(e);
    await e.detail.result;
  },
  /** 
   * Uninstalls a theme.
   * @param {EventTarget} target The node on which to dispatch the event.
   * @param {string} name The theme to uninstall
   * @returns {Promise<void>}
   */
  uninstall: async (target, name) => {
    const e = new ArcContextVoidEvent(EventTypes.Theme.uninstall, { name });
    target.dispatchEvent(e);
    await e.detail.result;
  },
  /** 
   * @param {EventTarget} target The node on which to dispatch the event.
   * @param {boolean} status Whether to ignore the system preferences for dark / light theme.
   * @returns {Promise<void>}
   */
  setSystemPreferred: async (target, status) => {
    const e = new ArcContextVoidEvent(EventTypes.Theme.setSystemPreferred, { status });
    target.dispatchEvent(e);
    await e.detail.result;
  },
  /** 
   * @param {EventTarget} target The node on which to dispatch the event.
   * @returns {Promise<SystemThemeInfo>}
   */
  readSystemThemeInfo: async (target) => {
    const e = new ArcContextEvent(EventTypes.Theme.readSystemThemeInfo, {});
    target.dispatchEvent(e);
    return e.detail.result;
  },
  /** 
   * @param {EventTarget} target The node on which to dispatch the event.
   * @returns {Promise<string>}
   */
  loadSystemPreferred: async (target) => {
    const e = new ArcContextEvent(EventTypes.Theme.loadSystemPreferred, {});
    target.dispatchEvent(e);
    return e.detail.result;
  },
  /** 
   * @param {EventTarget} target The node on which to dispatch the event.
   * @returns {Promise<string>}
   */
  loadUserPreferred: async (target) => {
    const e = new ArcContextEvent(EventTypes.Theme.loadUserPreferred, {});
    target.dispatchEvent(e);
    return e.detail.result;
  },

  /**
   * Dispatched when a theme has been activated.
   * @param {EventTarget} target 
   * @param {string} id The id of the activated theme
   */
  themeActivated: (target, id) => {
    const e = new CustomEvent(EventTypes.Theme.State.activated, {
      detail: { id },
      bubbles: true,
      composed: true,
    });
    target.dispatchEvent(e);
  }
};
