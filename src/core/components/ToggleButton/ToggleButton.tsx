import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledToggleButton } from '../UnstyledToggleButton/UnstyledToggleButton';
import type { ToggleButtonProps } from './ToggleButton.types';
import { toggleButtonConfig } from './toggleButtonConfig';

export const ToggleButton = <E extends ElementType>(
  props: ToggleButtonProps<E>
): ReactNode => {
  const mergedProps = useMergeProps(
    'toggleButton',
    toggleButtonConfig.props,
    props
  );

  return <UnstyledToggleButton {...mergedProps} />;
};
