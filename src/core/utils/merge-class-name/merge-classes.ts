import { twMerge } from 'tailwind-merge';
import type { CSSProps, ClassName } from '../../types';

export const mergeClasses = (
  ...classNames: (
    | undefined
    | null
    | CSSProps
    | string
    | boolean
    | number
    | bigint
  )[]
): ClassName => {
  const className = classNames
    .map((className): ClassName => {
      if (className && typeof className === 'object') {
        return Object.values(className).join(' ');
      }

      if (typeof className === 'string') {
        return className;
      }
    })
    .join(' ')
    .trim()
    .replace(/\s{2,}/, ' ');

  if (className) {
    return twMerge(className);
  }
};
