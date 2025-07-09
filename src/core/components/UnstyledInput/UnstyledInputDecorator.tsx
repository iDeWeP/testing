import type {
  MergeComponentProps,
  Theme,
  InputVariant,
  SidePlacement,
  Radius,
  Color
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'span',
  {
    inputType: 'input' | 'textarea';
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
    color: Color;
  }
>;

export const UnstyledInputDecorator = ({
  inputType,
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
  color,
  className,
  children,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputDecorator', className, {
    inputType,
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
    color,
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
