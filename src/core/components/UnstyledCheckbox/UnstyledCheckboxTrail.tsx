import { useTheme } from '../../hooks/use-theme/use-theme';
import type {
  MergeProps,
  Variant,
  DefaultSize,
  DefaultBorder,
  Radius,
  Color,
  Shadow
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledCheckboxTrailProps } from './UnstyledCheckbox.types';

type Props = MergeProps<
  UnstyledCheckboxTrailProps,
  {
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    variant: Variant;
    defaultSize: DefaultSize;
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
  }
>;

export const UnstyledCheckboxTrail = ({
  valid,
  invalid,
  disabled,
  variant,
  defaultSize,
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
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('checkboxTrail', className, {
    theme,
    valid,
    invalid,
    disabled,
    variant,
    defaultSize,
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
    shadow
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
