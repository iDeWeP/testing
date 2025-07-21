import { useTheme } from '../../hooks/use-theme/use-theme';
import type {
  MergeProps,
  Variant,
  DefaultSize,
  SwitchScale,
  Border,
  Radius,
  Color,
  Shadow
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledSwitchBarProps } from './UnstyledSwitch.types';

type Props = MergeProps<
  UnstyledSwitchBarProps,
  {
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    variant: Variant;
    defaultSize: DefaultSize;
    switchScale: SwitchScale;
    border: Border;
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
  }
>;

export const UnstyledSwitchBar = ({
  valid,
  invalid,
  disabled,
  variant,
  defaultSize,
  switchScale,
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
  className,
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('switchBar', className, {
    theme,
    valid,
    invalid,
    disabled,
    variant,
    defaultSize,
    switchScale,
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
    shadow
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
