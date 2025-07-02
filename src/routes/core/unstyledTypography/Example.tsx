import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';
import type { UnstyledTypographyProps } from '../../../core/components/UnstyledTypography/UnstyledTypography.types';

type Props = {
  clear?: boolean;
} & UnstyledTypographyProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-TYPOGRAPHY',
  ...restProps
}: Props) => (
  <UnstyledTypography
    variant={clear ? 'none' : 'light'}
    color="primary"
    {...restProps}
  >
    {children}
  </UnstyledTypography>
);
