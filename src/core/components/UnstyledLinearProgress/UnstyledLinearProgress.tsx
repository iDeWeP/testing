import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import type { UnstyledLinearProgressProps } from './UnstyledLinearProgress.types';
import { UnstyledLinearProgressBar } from './UnstyledLinearProgressBar';
import { unstyledLinearProgressConfig } from './unstyledLinearProgressConfig';
import { UnstyledLinearProgressLabel } from './UnstyledLinearProgressLabel';

export const UnstyledLinearProgress = (
  props: UnstyledLinearProgressProps
): ReactNode => {
  const {
    disabled = false,
    value,
    variant,
    orientation,
    size,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    border,
    radius,
    r,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    color,
    shadow,
    ring,
    gap,
    className,
    componentsProps,
    children,
    ...restProps
  } = mergeProps(unstyledLinearProgressConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('linearProgress', className, {
    theme,
    disabled,
    variant,
    orientation,
    size,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    border,
    radius,
    r,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    color,
    shadow,
    ring,
    decorated: children
  });

  return (
    <div
      className={mergedClassName}
      {...setAria('progress', { disabled, min: 0, max: 100, value })}
      {...restProps}
    >
      <UnstyledLinearProgressBar
        theme={theme}
        disabled={disabled}
        value={value}
        variant={variant}
        orientation={orientation}
        color={color}
        {...componentsProps.bar}
      >
        {children && (
          <UnstyledLinearProgressLabel
            orientation={orientation}
            gap={gap}
            {...componentsProps.label}
          >
            {children}
          </UnstyledLinearProgressLabel>
        )}
      </UnstyledLinearProgressBar>
    </div>
  );
};
