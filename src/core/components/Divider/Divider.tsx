import type { ElementType } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { useTheme } from '../../hooks/use-theme/use-theme';
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
    padding,
    font,
    color,
    ...restProps
  } = useMergeProps('divider', dividerConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('divider', className, {
    theme,
    orientation,
    padding,
    font,
    color,
    decorated: !!children
  });

  return (
    <UnstyledBox
      padding="unset"
      font="unset"
      color="unset"
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
