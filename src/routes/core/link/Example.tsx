import type { ReactNode } from 'react';
import { Link } from 'react-router';
import type { LinkProps } from '../../../core/components/Link/Link.types';

export const Example = ({
  children = 'LINK',
  ...restProps
}: LinkProps<'a'>): ReactNode => <Link {...restProps}>{children}</Link>;
