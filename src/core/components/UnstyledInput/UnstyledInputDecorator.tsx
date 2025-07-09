import type {
  MergeComponentProps,
  InputVariant,
  SidePlacement,
  Radius,
  Theme
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'span',
  {
    theme: Theme;
    disabled: boolean;
    variant: InputVariant;
    placement: SidePlacement;
    radius: Radius;
    rt: Radius;
    rb: Radius;
    rl: Radius;
    rr: Radius;
    rtl: Radius;
    rtr: Radius;
    rbl: Radius;
    rbr: Radius;
  }
>;

export const UnstyledInputDecorator = ({
  theme,
  disabled,
  variant: inputVariant,
  placement: sidePlacement,
  radius,
  rt,
  rb,
  rl,
  rr,
  rtl,
  rtr,
  rbl,
  rbr,
  className,
  children,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputDecorator', className, {
    theme,
    disabled,
    inputVariant,
    sidePlacement,
    radius,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    decorated: !!children
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    >
      {children}
    </span>
  );
};
