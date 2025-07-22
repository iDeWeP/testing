import { twMerge } from 'tailwind-merge';
import { setValue } from '../../../utils/utils/set-value/set-value';
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
) => {
  const className = classNames
    .map((className) => {
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

  return setValue(className, twMerge(className));
};
