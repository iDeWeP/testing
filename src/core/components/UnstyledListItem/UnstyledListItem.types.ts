import type { ElementType } from 'react';
import type {
  ComponentRefProps,
  CheckableVariant,
  Effect,
  Ripple,
  MergeProps
} from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

export type UnstyledListItemRippleProps = ComponentRefProps<'span'>;

export type UnstyledListItemComponentsProps = {
  ripple?: UnstyledListItemRippleProps;
};

type OptionalProps = {
  selected?: boolean;
  disabled?: boolean;
  clickable?: boolean;
};

type DefaultProps = {
  variant?: CheckableVariant;
  effect?: Effect;
  componentsProps?: UnstyledListItemComponentsProps;
  ripple?: Ripple;
};

export type UnstyledListItemConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  DefaultProps
>;

export type UnstyledListItemProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  DefaultProps & OptionalProps
>;
