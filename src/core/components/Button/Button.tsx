import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import type { ButtonProps } from './Button.types';
import { buttonConfig } from './buttonConfig';

export const Button = <E extends ElementType>(
  props: ButtonProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('button', buttonConfig.props, props);

  return <UnstyledButton {...mergedProps} />;
};
