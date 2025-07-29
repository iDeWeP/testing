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

export type TitleConfigProps = MergeProps<
  UnstyledTypographyConfigProps,
  DefaultProps
>;

export type TitleProps<E extends ElementType> = MergeProps<
  UnstyledTypographyProps<E>,
  DefaultProps
>;
