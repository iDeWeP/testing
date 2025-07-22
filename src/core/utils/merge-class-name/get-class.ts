export const getClass = <C, T extends string>(
  condition: C,
  value: T | undefined
): T | 'unset' => (!condition || !value ? 'unset' : value);
