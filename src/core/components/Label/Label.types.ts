import type { ReactNode, ElementType } from 'react';
import type {
  DefaultPlacement,
  Font,
  Color,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledLabelConfigProps,
  UnstyledLabelProps
} from '../UnstyledLabel/UnstyledLabel.types';

type OptionalProps = {
  label?: ReactNode;
};

type DefaultProps = {
  placement?: DefaultPlacement;
  font?: Font;
  color?: Color;
  gap?: Gap;
};

export type LabelConfigProps = MergeProps<
  UnstyledLabelConfigProps,
  DefaultProps
>;

export type LabelProps<E extends ElementType> = MergeProps<
  UnstyledLabelProps<E>,
  DefaultProps & OptionalProps
>;
