import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { DividerProps } from './Divider.types';
import { dividerConfig } from './dividerConfig';
import { DividerLine } from './DividerLine';

export const Divider = <E extends ElementType = 'span'>(
  props: DividerProps<E>
) => {
  const {
    as: Component,
    variant,
    orientation,
    placement,
    spacing,
    margin,
    color,
    gap,
    className,
    componentsProps,
    children,
    ...restProps
  } = useMergeProps('divider', dividerConfig.props, props);

  const mergedClassName = mergeClassName('divider', className, {
    variant,
    orientation,
    spacing,
    margin,
    color,
    gap,
    decorated: !!children
  });

  return (
    <Component
      className={mergedClassName}
      role="separator"
      aria-orientation={orientation}
      {...restProps}
    >
      {placement !== 'start' && (
        <DividerLine
          orientation={orientation}
          {...componentsProps.leftLine}
        />
      )}
      {children}
      {placement !== 'end' && ( // ??? children
        <DividerLine
          orientation={orientation}
          {...componentsProps.rightLine}
        />
      )}
    </Component>
  );
};
