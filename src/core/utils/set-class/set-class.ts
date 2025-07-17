export const setClass = <T extends string>(condition: boolean, value: T) =>
  condition ? value : 'unset';
