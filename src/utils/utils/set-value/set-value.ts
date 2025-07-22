export const setValue = <C, T>(condition: C, prop: T): T | undefined =>
  condition ? prop : undefined;
