import { twMerge } from 'tailwind-merge';
import type { CSSProps } from '../../types';

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
): string | undefined => {
  const className = classNames
    .map((className): string | undefined => {
      if (className && typeof className === 'object') {
        return Object.values(className).join(' ');
      }

      if (typeof className === 'string') {
        return className;
      }

      return undefined;
    })
    .join(' ')
    .trim()
    .replace(/\s{2,}/, ' ');

  if (className) {
    return twMerge(className);
  }
};
