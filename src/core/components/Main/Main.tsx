import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/useMergeProps';
import { UnstyledFlexBox } from '../UnstyledFlexBox/UnstyledFlexBox';
import type { UnstyledFlexBoxProps } from '../UnstyledFlexBox/UnstyledFlexBox.types';
import { mainConfig } from './mainConfig';

export const Main = <E extends ElementType = 'main'>(
  props: UnstyledFlexBoxProps<E>
) => {
  const mergedProps = useMergeProps('main', mainConfig.props, props);

  return <UnstyledFlexBox {...mergedProps} />;
};
