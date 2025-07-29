import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledTypography } from '../UnstyledTypography/UnstyledTypography';
import type { AnchorProps } from './Anchor.types';
import { anchorConfig } from './anchorConfig';

export const Anchor = <E extends ElementType>(
  props: AnchorProps<E>
): ReactNode => {
  const mergedProps = useMergeProps('anchor', anchorConfig.props, props);

  return <UnstyledTypography {...mergedProps} />;
};
