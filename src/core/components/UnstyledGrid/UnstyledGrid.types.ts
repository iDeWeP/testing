import type { ElementType } from 'react';
import type {
  Flow,
  JustifyContent,
  AlignContent,
  JustifyItems,
  AlignItems,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledGridDefaultProps = {
  flow?: Flow;
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
  gap?: Gap;
  colGap?: Gap;
  rowGap?: Gap;
};

export type UnstyledGridConfigProps = MergeProps<
  UnstyledBoxConfigProps,
  UnstyledGridDefaultProps
>;

export type UnstyledGridProps<E extends ElementType> = MergeProps<
  UnstyledBoxProps<E>,
  UnstyledGridDefaultProps
>;
