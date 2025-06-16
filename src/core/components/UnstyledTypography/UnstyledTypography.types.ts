import type { ElementType } from 'react';
import type {
  Size,
  Weight,
  Underline,
  WordBreak,
  TextWrap,
  TextAlign,
  TextOverflow,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxDefaultProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledTypographyConfigProps = {
  size?: Size;
  weight?: Weight;
  underline?: Underline;
  wordBreak?: WordBreak;
  wrap?: TextWrap;
  align?: TextAlign;
  overflow?: TextOverflow;
};

export type UnstyledTypographyDefaultProps = UnstyledTypographyConfigProps &
  UnstyledBoxDefaultProps;

export type UnstyledTypographyProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledTypographyDefaultProps
>;
