import type { ElementType } from 'react';
import type { MergeProps, OmitGaps } from '../../types';
import type { DefaultProps } from '../CircularProgress/CircularProgress.types';
import type {
  UnstyledBoxConfigProps,
  UnstyledBoxProps
} from '../UnstyledBox/UnstyledBox.types';

export type UnstyledTypographyConfigProps = MergeProps<
  OmitGaps<UnstyledBoxConfigProps>,
  DefaultProps
>;

export type UnstyledTypographyProps<E extends ElementType> = MergeProps<
  OmitGaps<UnstyledBoxProps<E>>,
  DefaultProps
>;
