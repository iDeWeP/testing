import type {
  MergeComponentProps,
  DefaultSize,
  Border,
  DefaultBorder,
  Radius,
  Shadow
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'span',
  {
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
    shadow: Shadow;
  }
>;

export const UnstyledCheckboxTrail = ({
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
  shadow,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledCheckboxTrail', className, {
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
    shadow
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
