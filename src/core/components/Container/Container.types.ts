import type { ElementType } from 'react';
import type {
  UnstyledContainerConfigProps,
  UnstyledContainerProps
} from '../UnstyledContainer/UnstyledContainer.types';

export type ContainerConfigProps = UnstyledContainerConfigProps;

export type ContainerProps<E extends ElementType> = UnstyledContainerProps<E>;
