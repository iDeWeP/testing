import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { getInnerSize } from '../../utils/merge-class-name/spacing';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import type { ChipProps } from './Chip.types';
import { chipConfig } from './chipConfig';

export const Chip = <E extends ElementType>(props: ChipProps<E>) => {
  const { size, ...restProps } = useMergeProps('chip', chipConfig.props, props);

  return (
    <UnstyledButton
      size={getInnerSize(size)}
      {...restProps}
    />
  );
};
