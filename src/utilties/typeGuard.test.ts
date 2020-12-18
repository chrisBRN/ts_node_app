import {isBool, isNumber, isNumberAsString, isString} from './typeGuard';

test('isNumber', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(null)).toBe(false);
    expect(isNumber('1')).toBe(false);
    expect(isNumber(NaN)).toBe(false);
});

test('isString', () => {
    expect(isString('a string')).toBe(true);
    expect(isString(null)).toBe(false);
    expect(isString(1)).toBe(false);
});

test('isBool', () => {
    expect(isBool(true)).toBe(true);
    expect(isBool(1)).toBe(false);
    expect(isBool(0)).toBe(false);
    expect(isBool('not a bool')).toBe(false);
    expect(isBool({notABool: true})).toBe(false);
    expect(isBool(null)).toBe(false);
});

test('isNumberAsString', () => {
    expect(isNumberAsString('1')).toBe(true);
    expect(isNumberAsString('-1')).toBe(true);
    expect(isNumberAsString(1)).toBe(false);
    expect(isNumberAsString('one')).toBe(false);
});
