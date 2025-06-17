import type { ReactNode, ElementType } from 'react';
import type {
  Loading,
  Size,
  ButtonScale,
  Effect,
  Ripple,
  MergeProps,
  ComponentRefProps
} from '../../types';
import type {
  UnstyledBoxDefaultProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledButtonComponentProps = {
  ripple?: ComponentRefProps<'span'>;
  spinner?: ComponentRefProps<'svg'>;
  bar?: ComponentRefProps<'circle'>;
  trail?: ComponentRefProps<'circle'>;
  innerBorder?: ComponentRefProps<'circle'>;
  outerBorder?: ComponentRefProps<'circle'>;
};

export type UnstyledButtonDefaultProps = {
  loading?: Loading;
  disabled?: boolean;
  size?: Size;
  scale?: ButtonScale;
  border?: boolean;
  effect?: Effect;
  componentsProps?: UnstyledButtonComponentProps;
  ripple: Ripple;
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
};

export type UnstyledButtonConfigProps = MergeProps<
  UnstyledBoxDefaultProps,
  UnstyledButtonDefaultProps
>;

export type UnstyledButtonProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledButtonDefaultProps
>;
