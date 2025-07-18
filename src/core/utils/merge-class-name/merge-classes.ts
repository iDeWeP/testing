import { twMerge } from 'tailwind-merge';
import { setProp } from '../../../utils/utils/set-prop/set-prop';
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

  return setProp(className, twMerge(className));
};
