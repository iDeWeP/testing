import { twMerge } from 'tailwind-merge';
import type { CSSProps } from '../../types';

export const mergeClasses = (
  ...classNames: (CSSProps | string | boolean | number | undefined)[]
) => {
  const className = classNames
    .map((className) => {
      if (typeof className === 'object') {
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

  return className ? twMerge(className) : undefined;
};
