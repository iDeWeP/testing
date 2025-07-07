import type {
  MergeComponentProps,
  Theme,
  DefaultSize,
  Border,
  DefaultBorder,
  Radius,
  Color,
  Shadow
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'span',
  {
    theme: Theme;
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    size: DefaultSize;
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
    color: Color;
    shadow: Shadow;
  }
>;

export const UnstyledCheckboxTrail = ({
  theme,
  valid,
  invalid,
  disabled,
  size: defaultSize,
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
  color,
  shadow,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledCheckboxTrail', className, {
    theme,
    valid,
    invalid,
    disabled,
    defaultSize,
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
