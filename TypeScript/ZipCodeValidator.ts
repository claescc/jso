import { StringValidator } from './Validation' //path 

export const numberRegexp = /^[0-9]{4}$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        if (numberRegexp.test(s)) {
            let tmp = parseInt(s).toString();  // remove leading zeroes 003475 - 3475
            return tmp.length == 4;
        }
        return false;
    }
}
 