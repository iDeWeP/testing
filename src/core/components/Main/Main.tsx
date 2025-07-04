import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { MainProps } from './Main.types';
import { mainConfig } from './mainConfig';

export const Main = <E extends ElementType = 'main'>(props: MainProps<E>) => {
  const { orientation, className, ...restProps } = useMergeProps(
    'main',
    mainConfig.props,
    props
  );

  const mergedClassName = mergeClassName('list', className, { orientation });

  return (
    <UnstyledBox
      className={mergedClassName}
      {...restProps}
    />
  );
};
