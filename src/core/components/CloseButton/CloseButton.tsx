import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import type { CloseButtonProps } from './CloseButton.types';
import { closeButtonConfig } from './closeButtonConfig';

export const CloseButton = <E extends ElementType>(
  props: CloseButtonProps<E>
) => {
  const { componentsProps, children, ...restProps } = useMergeProps(
    'closeButton',
    closeButtonConfig.props,
    props
  );

  const { icon: iconProps, ...restComponentsProps } = componentsProps;

  const node = (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...iconProps}
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );

  return (
    <UnstyledButton
      scale="square"
      componentsProps={restComponentsProps}
      {...restProps}
    >
      {children || node}
    </UnstyledButton>
  );
};
