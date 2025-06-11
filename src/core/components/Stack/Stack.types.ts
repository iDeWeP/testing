import type { ElementType } from 'react';
import type {
  Wrap,
  JustifyContent,
  AlignItems,
  Gap,
  MergeProps
} from '../../types';
import type { BoxProps } from '../Box/Box.types';
import type { FlexConfigProps } from '../Flex/Flex.types';

export type StackConfigProps = {
  wrap?: Wrap;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gap;
} & FlexConfigProps;

export type StackProps<E extends ElementType> = MergeProps<
  BoxProps<E>,
  StackConfigProps
>;
