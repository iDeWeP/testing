import type { ElementType } from 'react';
import type {
  ComponentRefProps,
  CheckableVariant,
  DefaultScale,
  Effect,
  Ripple,
  MergeProps,
  OmitRing
} from '../../types';
import type {
  UnstyledContainerConfigProps,
  UnstyledContainerProps
} from '../UnstyledContainer/UnstyledContainer.types';

export type UnstyledToggleButtonRippleProps = ComponentRefProps<'span'>;

export type UnstyledToggleButtonComponentsProps = {
  ripple?: UnstyledToggleButtonRippleProps;
};

type OptionalProps = {
  checked?: boolean;
  disabled?: boolean;
};

type DefaultProps = {
  variant?: CheckableVariant;
  scale?: DefaultScale;
  effect?: Effect;
  componentsProps?: UnstyledToggleButtonComponentsProps;
  ripple?: Ripple;
};

export type UnstyledToggleButtonConfigProps = MergeProps<
  OmitRing<UnstyledContainerConfigProps>,
  DefaultProps
>;

export type UnstyledToggleButtonProps<E extends ElementType> = MergeProps<
  OmitRing<UnstyledContainerProps<E>>,
  DefaultProps & OptionalProps
>;
