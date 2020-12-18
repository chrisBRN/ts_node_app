export function isString(x: unknown): x is string {
    return typeof x === 'string';
}

/**
 * returns a true if argument is a 'normal' number
 * returns false if argument, is another type or NaN
 */
export function isNumber(x: unknown): x is number {
    return typeof x === 'number' && !isNaN(x);
}

export function isBool(x: unknown): x is boolean {
    return typeof x === 'boolean';
}

export function isNumberAsString(x: unknown): x is string {
    return isString(x) && isNumber(Number(x));
}
