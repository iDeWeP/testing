import type { ReactNode } from 'react';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';
import type { UnstyledTypographyProps } from '../../../core/components/UnstyledTypography/UnstyledTypography.types';

type Props = {
  clear?: boolean;
} & UnstyledTypographyProps<'span'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-TYPOGRAPHY',
  ...restProps
}: Props): ReactNode => (
  <UnstyledTypography
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  >
    {children}
  </UnstyledTypography>
);
