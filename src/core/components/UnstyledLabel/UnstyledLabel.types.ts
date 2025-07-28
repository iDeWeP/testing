import type { ReactNode, ElementType } from 'react';
import type { DefaultPlacement, MergeProps, OmitGaps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

type OptionalProps = {
  label?: ReactNode;
};

type DefaultProps = {
  placement?: DefaultPlacement;
};

export type UnstyledLabelConfigProps = MergeProps<
  OmitGaps<UnstyledBoxConfigProps>,
  DefaultProps
>;

export type UnstyledLabelProps<E extends ElementType> = MergeProps<
  OmitGaps<UnstyledBoxProps<E>>,
  DefaultProps & OptionalProps
>;
