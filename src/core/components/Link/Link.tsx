import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import type { LinkProps } from './Link.types';
import { linkConfig } from './linkConfig';

export const Link = <E extends ElementType>(props: LinkProps<E>): ReactNode => {
  const mergedProps = useMergeProps('link', linkConfig.props, props);

  return <UnstyledButton {...mergedProps} />;
};
