import { Box } from '../../../core/components/Box/Box';
import type { BoxProps } from '../../../core/components/Box/Box.types';

export const Example = ({
  children = 'UNSTYLED-BOX',
  ...restProps
}: BoxProps<'div'>) => <Box {...restProps}>{children}</Box>;
