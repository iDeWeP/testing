import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';
import type { UnstyledTypographyProps } from '../../../core/components/UnstyledTypography/UnstyledTypography.types';

type Props = {
  light?: boolean;
} & UnstyledTypographyProps<'div'>;

export const ExampleUnstyledTypography = ({
  light,
  children = 'UNSTYLED-TYPOGRAPHY',
  ...restProps
}: Props) => (
  <UnstyledTypography
    variant={light ? 'light' : 'none'}
    color="primary"
    {...restProps}
  >
    {children}
  </UnstyledTypography>
);
