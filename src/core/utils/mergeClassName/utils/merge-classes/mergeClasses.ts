import { twMerge } from 'tailwind-merge';
import type { CSSProps } from '../../../../types';

const mergeClasses = (
  ...classNames: (CSSProps | string | boolean | number | undefined)[]
) =>
  twMerge(
    classNames
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
      .replace(/\s{2,}/, ' ')
  );

export default mergeClasses;
