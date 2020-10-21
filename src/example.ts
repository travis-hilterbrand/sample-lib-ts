import { isString } from 'lodash';

import { MY_CONST } from './lib';

export class Example {
  myIsString(s: string) {
    if (isString(s)) {
      const internalVariable = '-internal';
      return MY_CONST + s + internalVariable;
    }
  }
}
