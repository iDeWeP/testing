import { UnstyledCardFooter } from '../../../core/components/UnstyledCardFooter/UnstyledCardFooter';
import type { UnstyledCardFooterProps } from '../../../core/components/UnstyledCardFooter/UnstyledCardFooter.types';

type Props = {
  clear?: boolean;
} & UnstyledCardFooterProps<'div'>;

export const Example = ({
  children = 'UNSTYLED-CARD-FOOTER',
  ...restProps
}: Props) => <UnstyledCardFooter {...restProps}>{children}</UnstyledCardFooter>;
