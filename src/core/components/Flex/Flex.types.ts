import type { ElementType } from 'react';
import type { Gap } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type FlexDefaultProps = {
  gap?: Gap;
};

export type FlexConfigProps = UnstyledBoxConfigProps;

export type FlexProps<E extends ElementType> = UnstyledBoxProps<E> &
  FlexDefaultProps;
