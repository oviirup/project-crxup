/** Checks if the given value is an array */
export function isArray<T = any>(value: any): value is T[] {
  return Array.isArray(value);
}

/** Checks if the given value is an empty array */
export function isEmptyArray(value: any) {
  return isArray(value) && value.length === 0;
}

/** Checks if a value is an object (excluding arrays) */
export function isObject(value: any): value is Record<string, any> {
  return value !== null && typeof value === 'object' && !isArray(value);
}

/** Checks if a given value is an empty object */
export function isEmptyObject(value: any): boolean {
  return isObject(value) && Object.keys(value).length === 0;
}

/** The function checks if a value (object/array) is empty */
export function isEmpty(value: any): boolean {
  if (isArray(value)) return isEmptyArray(value);
  if (typeof value === 'object' && value !== null) return isEmptyObject(value);
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  return false;
}

/** Check if the given object is a function */
export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

/** Checks if current environment is running on server or client */
export function isServer() {
  return typeof window === 'undefined';
}
