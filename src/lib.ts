import { isString } from 'lodash';

export const MY_CONST = 'const-';

export function myIsString(s: string) {
  if (isString(s)) {
    const internalVariable = '-internal';
    return MY_CONST + s + internalVariable;
  }
}