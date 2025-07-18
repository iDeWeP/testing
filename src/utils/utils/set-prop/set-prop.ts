export const setProp = <T>(
  condition: undefined | null | number | bigint | string | boolean | object,
  prop: T
) => (condition ? prop : undefined);
