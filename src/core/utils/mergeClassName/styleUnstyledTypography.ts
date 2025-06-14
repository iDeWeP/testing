import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import mergeClasses from './mergeClasses';

export const styleUnstyledTypography = (
  className: string,
  {
    fontSize = 'md',
    weight = 'normal',
    underline = 'none',
    wordBreak = 'normal',
    textWrap = 'wrap',
    textAlign = 'left',
    textOverflow = 'clip'
  }: Classes
) =>
  mergeClasses(
    generic.styles.size.font[fontSize],
    generic.styles.weight[weight],
    generic.styles.underline[underline],
    generic.styles.wordBreak[wordBreak],
    generic.styles.textWrap[textWrap],
    generic.styles.textAlign[textAlign],
    generic.styles.textOverflow[textOverflow],
    className
  );
