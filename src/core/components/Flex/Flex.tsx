import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { FlexProps } from './Flex.types';
import { flexConfig } from './flexConfig';

export const Flex = <E extends ElementType>(props: FlexProps<E>) => {
  const { className, ...restProps } = useMergeProps(
    'flex',
    flexConfig.props,
    props
  );

  const mergedClassName = mergeClassName('flex', className);

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
