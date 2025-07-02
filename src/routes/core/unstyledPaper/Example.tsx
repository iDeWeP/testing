import { UnstyledPaper } from '../../../core/components/UnstyledPaper/UnstyledPaper';
import type { UnstyledPaperProps } from '../../../core/components/UnstyledPaper/UnstyledPaper.types';

type Props = {
  clear?: boolean;
} & UnstyledPaperProps<'div'>;

export const Example = ({
  clear,
  children = 'UNSTYLED-PAPER',
  ...restProps
}: Props) => (
  <UnstyledPaper
    variant={clear ? 'none' : 'light'}
    color="primary"
    {...restProps}
  >
    {children}
  </UnstyledPaper>
);
