import type { ElementType } from 'react';
import type { Gap, MergeProps, OmitGaps } from '../../types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

type DefaultProps = {
  gap?: Gap;
};

export type FlexConfigProps = MergeProps<
  OmitGaps<UnstyledBoxConfigProps>,
  DefaultProps
>;

export type FlexProps<E extends ElementType> = MergeProps<
  OmitGaps<UnstyledBoxProps<E>>,
  DefaultProps
>;
