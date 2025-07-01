import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleUnstyledTypography = (
  className: string,
  {
    size = 'none',
    weight = 'normal',
    underline = 'normal',
    wordBreak = 'normal',
    textWrap = 'wrap',
    textAlign = 'left',
    textOverflow = 'clip'
  }: Classes
) =>
  mergeClasses(
    generic.styles.size.font[size],
    generic.styles.weight[weight],
    generic.styles.underline[underline],
    generic.styles.wordBreak[wordBreak],
    generic.styles.textWrap[textWrap],
    generic.styles.textAlign[textAlign],
    generic.styles.textOverflow[textOverflow],
    className
  );
