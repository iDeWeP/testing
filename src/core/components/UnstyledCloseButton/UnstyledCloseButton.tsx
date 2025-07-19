import { type ElementType, cloneElement } from 'react';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import type { UnstyledCloseButtonProps } from './UnstyledCloseButton.types';
import { unstyledCloseButtonConfig } from './unstyledCloseButtonConfig';

export const UnstyledCloseButton = <E extends ElementType>(
  props: UnstyledCloseButtonProps<E>
) => {
  const { componentsProps, children, ...restProps } = mergeProps(
    unstyledCloseButtonConfig.props,
    props
  );

  const { icon: iconProps, ...restComponentsProps } = componentsProps;

  const node = children ? (
    cloneElement(children, {
      ...setAria('icon'),
      ...iconProps
    })
  ) : (
    <svg
      viewBox="0 0 24 24"
      {...setAria('icon')}
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
      {node}
    </UnstyledButton>
  );
};
