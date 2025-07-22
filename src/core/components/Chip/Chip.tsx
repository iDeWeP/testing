import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { setInnerSize } from '../../utils/set-inner-size/set-inner-size';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import type { ChipProps } from './Chip.types';
import { chipConfig } from './chipConfig';

export const Chip = <E extends ElementType>(props: ChipProps<E>): ReactNode => {
  const { size, ...restProps } = useMergeProps('chip', chipConfig.props, props);

  return (
    <UnstyledButton
      size={setInnerSize(size)}
      {...restProps}
    />
  );
};
