import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import type { IconButtonProps } from './IconButton.types';
import { iconButtonConfig } from './iconButtonConfig';

export const IconButton = <E extends ElementType>(
  props: IconButtonProps<E>
) => {
  const mergedProps = useMergeProps(
    'iconButton',
    iconButtonConfig.props,
    props
  );

  return (
    <UnstyledButton
      scale="square"
      {...mergedProps}
    />
  );
};
