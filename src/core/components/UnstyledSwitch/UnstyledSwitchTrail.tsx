import type { ReactNode } from 'react';
import { useTheme } from '../../hooks/use-theme/use-theme';
import type {
  MergeProps,
  Variant,
  DefaultSize,
  SwitchScale,
  DefaultBorder,
  Radius,
  Color,
  Shadow
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledSwitchTrailProps } from './UnstyledSwitch.types';

type Props = MergeProps<
  UnstyledSwitchTrailProps,
  {
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    variant: Variant;
    defaultSize: DefaultSize;
    switchScale: SwitchScale;
    border?: DefaultBorder;
    radius: Radius;
    r: Radius;
    rt: Radius;
    rb: Radius;
    rl: Radius;
    rr: Radius;
    rtl: Radius;
    rtr: Radius;
    rbl: Radius;
    rbr: Radius;
    color: Color;
    shadow: Shadow;
    decorated: boolean;
  }
>;

export const UnstyledSwitchTrail = ({
  valid,
  invalid,
  disabled,
  variant,
  defaultSize,
  switchScale,
  border: defaultBorder = 'set',
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
  className,
  decorated,
  ...restProps
}: Props): ReactNode => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('switchTrail', className, {
    theme,
    valid,
    invalid,
    disabled,
    variant,
    defaultSize,
    switchScale,
    defaultBorder,
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
    decorated
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
