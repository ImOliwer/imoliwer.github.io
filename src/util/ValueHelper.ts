export interface Returnable<Type> {
  (value: Type): any;
}

export function returnWith<Type>(value: Type, it: Returnable<Type>): any {
  return it(value);
}