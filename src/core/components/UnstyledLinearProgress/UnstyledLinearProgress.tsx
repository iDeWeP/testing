import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import type { UnstyledLinearProgressProps } from './UnstyledLinearProgress.types';
import { UnstyledLinearProgressBar } from './UnstyledLinearProgressBar';
import { unstyledLinearProgressConfig } from './unstyledLinearProgressConfig';
import { UnstyledLinearProgressLabel } from './UnstyledLinearProgressLabel';

export const UnstyledLinearProgress = (props: UnstyledLinearProgressProps) => {
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
    b,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
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
    b,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
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
    color
  });

  return (
    <div
      className={mergedClassName}
      {...setAria('linearProgress', { max: 100, min: 0, value })}
      {...restProps}
    >
      <UnstyledLinearProgressBar
        theme={theme}
        disabled={disabled}
        value={value}
        orientation={orientation}
        color={color}
      />
      {children && (
        <UnstyledLinearProgressLabel
          orientation={orientation}
          {...componentsProps.label}
        >
          {children}
        </UnstyledLinearProgressLabel>
      )}
    </div>
  );
};
