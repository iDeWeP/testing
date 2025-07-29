import type { ElementType } from 'react';
import type {
  ComponentRefProps,
  Effect,
  Ripple,
  MergeProps
} from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type UnstyledCardRippleProps = ComponentRefProps<'span'>;

export type UnstyledCardComponentsProps = {
  ripple?: UnstyledCardRippleProps;
};

type OptionalProps = {
  disabled?: boolean;
  clickable?: boolean;
};

type DefaultProps = {
  effect?: Effect;
  componentsProps?: UnstyledCardComponentsProps;
  ripple?: Ripple;
};

export type UnstyledCardConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  DefaultProps
>;

export type UnstyledCardProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  DefaultProps & OptionalProps
>;
