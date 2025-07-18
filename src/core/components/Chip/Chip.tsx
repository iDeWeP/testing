import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import type { ChipProps } from './Chip.types';
import { chipConfig } from './chipConfig';

export const Chip = <E extends ElementType>(props: ChipProps<E>) => {
  const mergedProps = useMergeProps('chip', chipConfig.props, props);

  return <UnstyledButton {...mergedProps} />;
};
