export const setProp = <T>(condition: boolean, prop: T) =>
  condition ? prop : undefined;
