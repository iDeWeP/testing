import type { ElementType } from 'react';
import type { CardPlacement, MergeProps } from '../../types';
import type {
  UnstyledPaperConfigProps,
  UnstyledPaperProps
} from '../UnstyledPaper/UnstyledPaper.types';

type DefaultProps = {
  placement?: CardPlacement;
};

export type UnstyledCardBodyConfigProps = MergeProps<
  UnstyledPaperConfigProps,
  DefaultProps
>;

export type UnstyledCardBodyProps<E extends ElementType> = MergeProps<
  UnstyledPaperProps<E>,
  DefaultProps
>;
