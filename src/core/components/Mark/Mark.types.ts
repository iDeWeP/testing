import type { ElementType } from 'react';
import type { Font, Color, MergeProps } from '../../types';
import type {
  UnstyledTypographyConfigProps,
  UnstyledTypographyProps
} from '../UnstyledTypography/UnstyledTypography.types';

type DefaultProps = {
  font?: Font;
  color?: Color;
};

export type MarkConfigProps = MergeProps<
  UnstyledTypographyConfigProps,
  DefaultProps
>;

export type MarkProps<E extends ElementType> = MergeProps<
  UnstyledTypographyProps<E>,
  DefaultProps
>;
