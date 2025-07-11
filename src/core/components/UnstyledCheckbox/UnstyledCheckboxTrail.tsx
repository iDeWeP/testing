import { useTheme } from '../../hooks/use-theme/use-theme';
import type {
  MergeComponentProps,
  Size,
  Border,
  DefaultBorder,
  Radius,
  TrailColor,
  Shadow
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'span',
  {
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    size: Size;
    border?: Border;
    bx?: DefaultBorder;
    by?: DefaultBorder;
    bt?: DefaultBorder;
    bb?: DefaultBorder;
    bl?: DefaultBorder;
    br?: DefaultBorder;
    radius: Radius;
    rt: Radius;
    rb: Radius;
    rl: Radius;
    rr: Radius;
    rtl: Radius;
    rtr: Radius;
    rbl: Radius;
    rbr: Radius;
    color: TrailColor;
    shadow: Shadow;
  }
>;

export const UnstyledCheckboxTrail = ({
  valid,
  invalid,
  disabled,
  size,
  border = 'set',
  bx,
  by,
  bt,
  bb,
  bl,
  br,
  radius,
  rt,
  rb,
  rl,
  rr,
  rtl,
  rtr,
  rbl,
  rbr,
  color: trailColor,
  shadow,
  className,
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('unstyledCheckboxTrail', className, {
    theme,
    valid,
    invalid,
    disabled,
    size,
    border,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
    radius,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    trailColor,
    shadow
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
