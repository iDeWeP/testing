import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import type { ToggleButtonProps } from './ToggleButton.types';
import { toggleButtonConfig } from './toggleButtonConfig';

export const ToggleButton = <E extends ElementType>(
  props: ToggleButtonProps<E>
): ReactNode => {
  const { checked = false, ...restProps } = useMergeProps(
    'toggleButton',
    toggleButtonConfig.props,
    props
  );

  return (
    <UnstyledButton
      checked={checked}
      {...restProps}
    />
  );
};
