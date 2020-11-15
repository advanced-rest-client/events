// The event names should be unique across all events in all modules.
const names = [];

export function ensureUnique(namespace, src) {
  for (const [key, value] of Object.entries(src)) {
    if (names.includes(value)) {
      throw new Error(`${namespace}.${key} has duplicated event name ${value}`);
    }
    names.push(value);
  }
}
