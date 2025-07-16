import type { ElementType } from 'react';
import type {
  Variant,
  Orientation,
  Padding,
  Radius,
  Color,
  Shadow,
  Gap,
  MergeProps
} from '../../types';
import type {
  UnstyledDropdownConfigProps,
  UnstyledDropdownProps
} from '../UnstyledDropdown/UnstyledDropdown.types';

export type DropdownDefaultProps = {
  variant?: Variant;
  orientation?: Orientation;
  padding?: Padding;
  radius?: Radius;
  color?: Color;
  shadow?: Shadow;
  gap?: Gap;
};

export type DropdownConfigProps = MergeProps<
  UnstyledDropdownConfigProps,
  DropdownDefaultProps
>;

export type DropdownProps<E extends ElementType> = MergeProps<
  UnstyledDropdownProps<E>,
  DropdownDefaultProps
>;
