import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { setAria } from '../../utils/set-aria/set-aria';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { DividerProps } from './Divider.types';
import { dividerConfig } from './dividerConfig';
import { DividerLine } from './DividerLine';

export const Divider = <E extends ElementType>(props: DividerProps<E>) => {
  const {
    orientation,
    placement,
    className,
    componentsProps,
    children,
    ...restProps
  } = useMergeProps('divider', dividerConfig.props, props);

  const mergedClassName = mergeClassName('divider', className, {
    orientation,
    decorated: !!children
  });

  return (
    <UnstyledBox
      variant="text"
      className={mergedClassName}
      {...setAria('divider', { orientation })}
      {...restProps}
    >
      {(placement !== 'start' || !children) && (
        <DividerLine
          orientation={orientation}
          {...componentsProps.startLine}
        />
      )}
      {children}
      {placement !== 'end' && children && (
        <DividerLine
          orientation={orientation}
          {...componentsProps.endLine}
        />
      )}
    </UnstyledBox>
  );
};
