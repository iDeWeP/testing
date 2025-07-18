import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledCloseButton } from '../UnstyledCloseButton/UnstyledCloseButton';
import type { CloseButtonProps } from './CloseButton.types';
import { closeButtonConfig } from './closeButtonConfig';

export const CloseButton = <E extends ElementType>(
  props: CloseButtonProps<E>
) => {
  const mergedProps = useMergeProps(
    'closeButton',
    closeButtonConfig.props,
    props
  );

  return <UnstyledCloseButton {...mergedProps} />;
};
