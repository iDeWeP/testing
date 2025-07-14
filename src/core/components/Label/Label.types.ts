import type { ReactNode, ElementType } from 'react';
import type {
  DefaultPlacement,
  Font,
  Color,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type LabelOptionalProps = {
  label?: ReactNode;
};

export type LabelDefaultProps = {
  placement?: DefaultPlacement;
  font?: Font;
  color?: Color;
  gap?: Gap;
};

export type LabelConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  LabelDefaultProps
>;

export type LabelProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  LabelDefaultProps & LabelOptionalProps
>;
