import type { ReactNode } from 'react';
import { Anchor } from '../../../core/components/Anchor/Anchor';
import type { AnchorProps } from '../../../core/components/Anchor/Anchor.types';

export const Example = ({
  children = 'ANCHOR',
  ...restProps
}: AnchorProps<'a'>): ReactNode => <Anchor {...restProps}>{children}</Anchor>;
