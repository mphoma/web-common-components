export class Validation {
    static isValidResult(res:any) {
      return !!(res && res.ok && res.result);
    }
}