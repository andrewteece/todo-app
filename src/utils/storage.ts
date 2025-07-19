export function loadFromStorage<T>(key: string): T | null {
  const raw = localStorage.getItem(key);
  try {
    return raw ? (JSON.parse(raw) as T) : null;
  } catch (e) {
    console.error(`Error parsing localStorage key "${key}":`, e);
    return null;
  }
}

export function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving localStorage key "${key}":`, e);
  }
}
