import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { AnchorProps } from './Anchor.types';
import { anchorConfig } from './anchorConfig';

export const Anchor = <E extends ElementType>(props: AnchorProps<E>) => {
  const mergedProps = useMergeProps('anchor', anchorConfig.props, props);

  return <UnstyledBox {...mergedProps} />;
};
