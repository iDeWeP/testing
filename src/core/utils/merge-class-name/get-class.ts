export const getClass = <T extends string>(condition: boolean, value: T) =>
  condition ? value : 'unset';
