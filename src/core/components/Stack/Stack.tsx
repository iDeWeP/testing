import type { ElementType, ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { StackProps } from './Stack.types';
import { stackConfig } from './stackConfig';

export const Stack = <E extends ElementType>(
  props: StackProps<E>
): ReactNode => {
  const { className, ...restProps } = useMergeProps(
    'stack',
    stackConfig.props,
    props
  );

  const mergedClassName = mergeClassName('stack', className);

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
